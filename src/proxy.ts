import { createServerClient } from '@supabase/ssr';
import { NextResponse, type NextRequest } from 'next/server';

// Public routes that don't require authentication
const PUBLIC_ROUTES = [
  '/',
  '/proizvod',
  '/proizvodi',
  '/proizvodi-proizvodjac-kategorija',
  '/autentifikacija',
  '/greska',
  '/registracija',
  '/placanje',
  '/kontakt',
  '/informacije',
  '/email',
  '/404',
];

// Routes that require authentication
const PROTECTED_PREFIXES = ['/nalog'];

// Login routes — redirect away if already authenticated
const LOGIN_ROUTES = ['/autentifikacija/prijava'];

const MANUFACTURER_PREFIX = '/proizvodi-proizvodjac-kategorija';

/**
 * Mirrors how `manufacturers.value` slugs are derived from `name`
 * ("Laboratorie ACM, France" -> "laboratorie-acm-france", "Health & more" -> "health-and-more").
 */
function toSlug(text: string): string {
  return text
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .replace(/đ/gi, 'dj')
    .toLowerCase()
    .replace(/&/g, ' and ')
    .replace(/\./g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

function safeDecode(segment: string): string {
  try {
    return decodeURIComponent(segment);
  } catch {
    return segment;
  }
}

/**
 * Legacy manufacturer URLs used the display name ("/Now Foods/ruska-apoteka") and the old
 * sitemap listed every manufacturer × category combination. Those pages end up calling
 * notFound() after streaming has started, which Google sees as 200 + noindex.
 * Permanently redirect them instead:
 *  - name-based segments -> slug
 *  - manufacturer + category with no active products -> manufacturer page
 */
async function getManufacturerRedirect(request: NextRequest): Promise<NextResponse | null> {
  const { pathname } = request.nextUrl;
  if (!pathname.startsWith(`${MANUFACTURER_PREFIX}/`)) return null;

  const segments = pathname.slice(MANUFACTURER_PREFIX.length + 1).split('/').filter(Boolean);
  if (segments.length === 0 || segments.length > 2) return null;

  const [rawManufacturer, rawCategory] = segments;
  const manufacturer = toSlug(safeDecode(rawManufacturer));
  const category = rawCategory ? toSlug(safeDecode(rawCategory)) : undefined;
  if (!manufacturer) return null;

  let target = category
    ? `${MANUFACTURER_PREFIX}/${manufacturer}/${category}`
    : `${MANUFACTURER_PREFIX}/${manufacturer}`;

  if (category) {
    const supabase = createServerClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY!,
      { cookies: { getAll: () => [], setAll: () => { } } }
    );

    const { data: mfr } = await supabase
      .from('manufacturers')
      .select('id')
      .eq('value', manufacturer)
      .maybeSingle();

    if (mfr) {
      const { count, error } = await supabase
        .from('products')
        .select('id', { count: 'exact', head: true })
        .eq('is_active', true)
        .eq('manufacturer_id', mfr.id)
        .eq('main_category', category);

      if (!error && !count) target = `${MANUFACTURER_PREFIX}/${manufacturer}`;
    }
  }

  if (target === pathname) return null;

  const url = request.nextUrl.clone();
  url.pathname = target;
  return NextResponse.redirect(url, 308);
}

export async function proxy(request: NextRequest) {
  const manufacturerRedirect = await getManufacturerRedirect(request);
  if (manufacturerRedirect) return manufacturerRedirect;

  let supabaseResponse = NextResponse.next({ request });

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY!,
    {
      cookies: {
        getAll() {
          return request.cookies.getAll();
        },
        setAll(cookiesToSet, headers) {
          cookiesToSet.forEach(({ name, value }) =>
            request.cookies.set(name, value)
          );
          supabaseResponse = NextResponse.next({ request });
          cookiesToSet.forEach(({ name, value, options }) =>
            supabaseResponse.cookies.set(name, value, options)
          );
          Object.entries(headers).forEach(([key, value]) =>
            supabaseResponse.headers.set(key, value)
          );
        },
      },
    }
  );

  // IMPORTANT: Do not run code between createServerClient and supabase.auth.getUser().
  const {
    data: { user },
  } = await supabase.auth.getUser();

  const { pathname, search } = request.nextUrl;

  // If route is protected and user is not authenticated, redirect to login
  const isProtected = PROTECTED_PREFIXES.some((p) => pathname.startsWith(p));
  if (isProtected && !user) {
    const url = request.nextUrl.clone();
    url.pathname = '/autentifikacija/prijava';
    url.searchParams.set('callbackUrl', `${pathname}${search ?? ''}`);
    const redirectResponse = NextResponse.redirect(url);
    // Preserve refreshed cookies on redirect
    supabaseResponse.cookies.getAll().forEach(({ name, value }) => {
      redirectResponse.cookies.set(name, value);
    });
    return redirectResponse;
  }

  // If user is authenticated and tries to visit login, send to account page
  const isLoginRoute = LOGIN_ROUTES.some((p) => pathname === p);
  if (user && isLoginRoute) {
    const redirectResponse = NextResponse.redirect(new URL('/nalog', request.url));
    supabaseResponse.cookies.getAll().forEach(({ name, value }) => {
      redirectResponse.cookies.set(name, value);
    });
    return redirectResponse;
  }

  // Protected API routes return 401 JSON instead of redirect
  if (pathname.startsWith('/api/') && isProtected && !user) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  return supabaseResponse;
}

export const config = {
  matcher: [
    /*
     * Match all request paths except:
     * - _next/static (static files)
     * - _next/image (image optimization)
     * - favicon.ico
     * - Static assets (svg, png, jpg, etc.)
     */
    '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico)$).*)',
  ],
};

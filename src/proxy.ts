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

export async function proxy(request: NextRequest) {
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

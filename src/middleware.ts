import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { getToken } from 'next-auth/jwt';

// Define which paths require authentication
const PROTECTED_PREFIXES = ['/nalog'];
// Define login routes that should redirect away when already authenticated
const LOGIN_ROUTES = ['/autentifikacija/prijava', '/prijava'];

export async function middleware(req: NextRequest) {
  const { pathname, search } = req.nextUrl;

  // Read next-auth JWT token (user session) from cookies
  const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });

  const isAuthenticated = !!token;

  // If route is protected and user is not authenticated, redirect to login
  const isProtected = PROTECTED_PREFIXES.some((p) => pathname.startsWith(p));
  if (isProtected && !isAuthenticated) {
    const url = req.nextUrl.clone();
    url.pathname = '/autentifikacija/prijava';
    // Preserve original destination as callback
    url.searchParams.set('callbackUrl', `${pathname}${search ?? ''}`);
    return NextResponse.redirect(url);
  }

  // If user is authenticated and tries to visit a login route, send to home
  const isLoginRoute = LOGIN_ROUTES.some((p) => pathname === p);
  if (isAuthenticated && isLoginRoute) {
    return NextResponse.redirect(new URL('/', req.url));
  }

  return NextResponse.next();
}

// Only run on the routes we care about
export const config = {
  matcher: [
    '/nalog/:path*',
    '/autentifikacija/prijava',
    '/prijava',
  ],
};


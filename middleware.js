import { NextResponse } from 'next/server';
import { jwtVerify } from 'jose';

// Reusing the same secret from login route
// In a real app, this should be in a shared config, but keep it simple for now.
const JWT_SECRET = process.env.JWT_SECRET || 'default_secret_at_least_32_characters_long';

export async function middleware(request) {
  const { pathname } = request.nextUrl;

  // Only protect /admin routes, but EXCLUDE the login page itself
  if (pathname.startsWith('/admin') && !pathname.includes('/login')) {
    
    // 1. Check for cookie
    const token = request.cookies.get('admin_token')?.value;

    if (!token) {
      // No token -> Redirect to login
      return NextResponse.redirect(new URL('/admin/login', request.url));
    }

    try {
      // 2. Verify Token
      const secret = new TextEncoder().encode(JWT_SECRET);
      await jwtVerify(token, secret);
      
      // Token is valid -> Allow access
      return NextResponse.next();

    } catch (err) {
      // Invalid token -> Redirect to login
      console.error("Middleware Auth Error:", err);
      return NextResponse.redirect(new URL('/admin/login', request.url));
    }
  }

  // Allow all other routes
  return NextResponse.next();
}

export const config = {
  matcher: '/admin/:path*',
}

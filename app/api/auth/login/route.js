import { NextResponse } from 'next/server';
import { SignJWT } from 'jose';

// Secret for signing the token (must be at least 32 chars)
const JWT_SECRET = process.env.JWT_SECRET || 'default_secret_at_least_32_characters_long';

export async function POST(request) {
  try {
    const body = await request.json();
    const { email, password } = body;

    // 1. Verify Credentials against .env
    const adminEmail = process.env.ADMIN_EMAIL;
    const adminPassword = process.env.ADMIN_PASSWORD;

    if (!adminEmail || !adminPassword) {
      console.error("Missing ADMIN_EMAIL or ADMIN_PASSWORD in environment variables");
      return NextResponse.json({ error: 'Server misconfiguration' }, { status: 500 });
    }

    // Simple comparison (for MVP)
    // In production, we would query the 'admins' table and compare hashes.
    // But for this single-user system, env vars are sufficient and secure.
    if (email !== adminEmail || password !== adminPassword) {
      return NextResponse.json(
        { error: 'Invalid email or password' },
        { status: 401 }
      );
    }

    // 2. Generate JWT
    const secret = new TextEncoder().encode(JWT_SECRET);
    const token = await new SignJWT({ role: 'admin', email })
      .setProtectedHeader({ alg: 'HS256' })
      .setIssuedAt()
      .setExpirationTime('24h') // 24 hour session
      .sign(secret);

    // 3. Set HTTP-Only Cookie
    const response = NextResponse.json({ success: true, message: 'Welcome back, Admin' });
    
    response.cookies.set({
      name: 'admin_token',
      value: token,
      httpOnly: true, // JavaScript cannot read this (XSS protection)
      secure: process.env.NODE_ENV === 'production', // SSL only in production
      sameSite: 'strict',
      maxAge: 60 * 60 * 24, // 24 hours
      path: '/',
    });

    return response;

  } catch (error) {
    console.error('Login Error:', error);
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    );
  }
}

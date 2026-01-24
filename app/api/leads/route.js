import { NextResponse } from 'next/server';
import { supabase, supabaseAdmin } from '@/lib/supabase';
import { sendEmail } from '@/lib/email';
import { cookies } from 'next/headers';
import { jwtVerify } from 'jose';

const JWT_SECRET = process.env.JWT_SECRET || 'default_secret_at_least_32_characters_long';

// GET: Admin only - Fetch all leads
export async function GET(request) {
  try {
    // 1. Verify Auth
    const cookieStore = await cookies();
    const token = cookieStore.get('admin_token')?.value;
    if (!token) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }
    
    // Verify JWT
    const secret = new TextEncoder().encode(JWT_SECRET);
    await jwtVerify(token, secret);

    // 2. Fetch Data
    const { data: leads, error } = await supabaseAdmin
      .from('leads')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) throw error;

    return NextResponse.json({ leads });

  } catch (error) {
    console.error('Fetch Leads Error:', error);
    return NextResponse.json({ error: 'Failed to fetch leads' }, { status: 500 });
  }
}

// POST: Public - Submit new lead (Contact Form)
export async function POST(request) {
  try {
    const body = await request.json();
    const { name, email, category, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    // Insert into Supabase (Public client is fine if RLS allows public insert)
    // Or use Admin client to be safe since we haven't strictly tested RLS from client yet.
    // Using Admin client for backend API is safer/easier for now.
    const { data, error } = await supabaseAdmin
      .from('leads')
      .insert([
        {
          name,
          email,
          category: category || 'other',
          message,
          status: 'new'
        }
      ])
      .select();

    if (error) {
      console.error('Insert Lead Error:', error);
      return NextResponse.json({ error: 'Failed to save lead' }, { status: 500 });
    }

    // Send Email Notification to Admin
    await sendEmail({
        to: process.env.EMAIL_USER,
        subject: `New Lead: ${name} (${category})`,
        html: `
            <h2>New Contact Form Submission</h2>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Category:</strong> ${category}</p>
            <p><strong>Message:</strong></p>
            <blockquote style="background: #f9f9f9; padding: 10px; border-left: 3px solid #ccc;">${message}</blockquote>
        `
    });

    return NextResponse.json({ success: true, message: 'Message sent successfully' });

  } catch (error) {
    console.error('Contact API Error:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}

import { NextResponse } from 'next/server';
import { supabaseAdmin } from '@/lib/supabase';
import { sendEmail } from '@/lib/email';
import { cookies } from 'next/headers';

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, email, service, date, time, note } = body;

    // Basic server-side validation
    if (!name || !email || !service || !date || !time) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // 1. Save to Supabase
    const { data, error } = await supabaseAdmin
      .from('bookings')
      .insert([
        {
          client_name: name,
          client_email: email,
          service_type: service,
          booking_date: new Date(date), // Ensure Date format
          booking_time: time,
          notes: note,
          status: 'pending'
        }
      ])
      .select();

    if (error) {
      console.error('Supabase Error:', error);
      return NextResponse.json({ error: 'Failed to save booking' }, { status: 500 });
    }

        // 2. Send Email Notification (Admin + Client)
        const booking = data[0];
        
        // Admin Notification
        await sendEmail({
            to: process.env.EMAIL_USER, 
            subject: `New Booking: ${name}`,
            html: `
                <h2>New Booking Received</h2>
                <p><strong>Client:</strong> ${name} (${email})</p>
                <p><strong>Service:</strong> ${service}</p>
                <p><strong>Date/Time:</strong> ${new Date(date).toDateString()} @ ${time}</p>
                <p><strong>Notes:</strong> ${note}</p>
            `
        });

        // Client Pending Notification
        await sendEmail({
            to: email,
            subject: `Booking Requested: ${service}`,
            html: `
                <h2>Hi ${name},</h2>
                <p>Your booking request for <strong>${service}</strong> has been received.</p>
                <p><strong>Proposed Time:</strong> ${new Date(date).toDateString()} @ ${time}</p>
                <p><strong>Status:</strong> <span style="color: orange;">Pending Approval</span></p>
                <p>I will review your request and send a confirmation email with the meeting link shortly.</p>
                <br/>
                <p>Best,<br/>Talha Ghauri</p>
            `
        });

    return NextResponse.json({ 
      success: true, 
      message: 'Booking confirmed successfully',
      bookingId: data[0]?.id
    });

  } catch (error) {
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    );
  }
}

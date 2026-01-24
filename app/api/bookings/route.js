import { NextResponse } from 'next/server';
import { supabaseAdmin } from '@/lib/supabase';
import { sendEmail } from '@/lib/email';
import { cookies } from 'next/headers';
import { jwtVerify } from 'jose';

const JWT_SECRET = process.env.JWT_SECRET || 'default_secret_at_least_32_characters_long';

async function verifyAdmin() {
    const cookieStore = await cookies();
    const token = cookieStore.get('admin_token')?.value;
    if (!token) return false;
    
    try {
        const secret = new TextEncoder().encode(JWT_SECRET);
        await jwtVerify(token, secret);
        return true;
    } catch {
        return false;
    }
}

// GET: Fetch all bookings (Admin only)
export async function GET(request) {
  if (!(await verifyAdmin())) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const { data: bookings, error } = await supabaseAdmin
    .from('bookings')
    .select('*')
    .order('created_at', { ascending: false });

  if (error) {
       console.error('Fetch Bookings Error:', error);
       return NextResponse.json({ error: 'Failed to fetch bookings' }, { status: 500 });
  }

  return NextResponse.json({ bookings });
}

// PATCH: Update booking status (Admin only)
export async function PATCH(request) {
    if (!(await verifyAdmin())) {
        return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    try {
        const body = await request.json();
        const { id, status, notes } = body;

        if (!id || !status) {
            return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
        }

        const updateData = { status };
        if (notes !== undefined) updateData.notes = notes;

        const { data, error } = await supabaseAdmin
            .from('bookings')
            .update(updateData)
            .eq('id', id)
            .select()
            .single(); // Get single object

        if (error) throw error;

        // NEW: Send Confirmation Email if approved
        if (status === 'confirmed' && data) {
             const meetingMsg = body.message || "I've accepted your booking.";
             await sendEmail({
                to: data.client_email,
                subject: `Booking Confirmed! - ${data.service_type}`,
                html: `
                    <h2>Good News, ${data.client_name}!</h2>
                    <p>Your booking for <strong>${data.service_type}</strong> has been <strong>confirmed</strong>.</p>
                    <p><strong>Date:</strong> ${new Date(data.booking_date).toDateString()} @ ${data.booking_time}</p>
                    <hr/>
                    <h3>Message from Talha:</h3>
                    <blockquote style="background: #f0fdf4; padding: 15px; border-left: 4px solid #22c55e;">
                        ${meetingMsg.replace(/\n/g, '<br/>')}
                    </blockquote>
                    <hr/>
                    <p>See you there!</p>
                `
            });
        }

        return NextResponse.json({ success: true, booking: data });

    } catch (error) {
        console.error('Update Booking Error:', error);
        return NextResponse.json({ error: 'Failed to update booking' }, { status: 500 });
    }
}

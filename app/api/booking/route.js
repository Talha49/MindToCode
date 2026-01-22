import { NextResponse } from 'next/server';

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

    // SIMULATION: In a real app, this would save to Supabase and send an email via Resend.
    // console.log("Booking Received:", body);

    // TODO: Phase 7 - Integrate Supabase
    // await supabase.from('bookings').insert({...})

    // TODO: Phase 7 - Integrate Resend
    // await resend.emails.send({
    //   from: 'MindToCode <onboarding@resend.dev>',
    //   to: [email],
    //   subject: 'Booking Confirmation',
    //   html: `<p>Hi ${name}, your booking for ${service} on ${date} at ${time} is confirmed!</p>`
    // });

    return NextResponse.json({ 
      success: true, 
      message: 'Booking confirmed successfully' 
    });

  } catch (error) {
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    );
  }
}

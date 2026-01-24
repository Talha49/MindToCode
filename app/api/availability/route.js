import { NextResponse } from 'next/server';
import { supabaseAdmin } from '@/lib/supabase';

export async function GET(request) {
    const { searchParams } = new URL(request.url);
    const date = searchParams.get('date');

    if (!date) {
        return NextResponse.json({ error: 'Date is required' }, { status: 400 });
    }

    try {
        // Fetch all bookings for this date that are NOT cancelled
        const startOfDay = new Date(date);
        startOfDay.setHours(0, 0, 0, 0);
        
        const endOfDay = new Date(date);
        endOfDay.setHours(23, 59, 59, 999);

        const { data, error } = await supabaseAdmin
            .from('bookings')
            .select('booking_time')
            .gte('booking_date', startOfDay.toISOString())
            .lte('booking_date', endOfDay.toISOString())
            .neq('status', 'cancelled'); // Cancelled slots should be free

        if (error) {
            console.error('Availability Error:', error);
            return NextResponse.json({ error: 'Failed to fetch availability' }, { status: 500 });
        }

        // Return array of booked times strings
        const bookedTimes = data.map(b => b.booking_time);
        
        return NextResponse.json({ bookedTimes });

    } catch (error) {
        console.error('Availability API Error:', error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}

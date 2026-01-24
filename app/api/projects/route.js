import { NextResponse } from 'next/server';
import { supabaseAdmin } from '@/lib/supabase';
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

// GET: Fetch all projects
export async function GET(request) {
  if (!(await verifyAdmin())) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const { data: projects, error } = await supabaseAdmin
    .from('projects')
    .select('*')
    .order('created_at', { ascending: false });

  if (error) {
       console.error('Fetch Projects Error:', error);
       return NextResponse.json({ error: 'Failed to fetch projects' }, { status: 500 });
  }

  return NextResponse.json({ projects });
}

// POST: Create new project
export async function POST(request) {
    if (!(await verifyAdmin())) {
        return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    try {
        const body = await request.json();
        const { title, client_email, price, deadline } = body;

        if (!title) {
            return NextResponse.json({ error: 'Title is required' }, { status: 400 });
        }

        const { data, error } = await supabaseAdmin
            .from('projects')
            .insert([{
                title,
                client_email,
                price: price || 0,
                deadline: deadline || null,
                status: 'active',
                payment_status: 'unpaid'
            }])
            .select();

        if (error) throw error;

        return NextResponse.json({ success: true, project: data[0] });

    } catch (error) {
        console.error('Create Project Error:', error);
        return NextResponse.json({ error: 'Failed to create project' }, { status: 500 });
    }
}

// PATCH: Update project status
export async function PATCH(request) {
    if (!(await verifyAdmin())) {
        return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    try {
        const body = await request.json();
        const { id, status, payment_status } = body;

        if (!id) {
            return NextResponse.json({ error: 'Missing ID' }, { status: 400 });
        }

        const updateData = {};
        if (status) updateData.status = status;
        if (payment_status) updateData.payment_status = payment_status;

        const { data, error } = await supabaseAdmin
            .from('projects')
            .update(updateData)
            .eq('id', id)
            .select();

        if (error) throw error;

        return NextResponse.json({ success: true, project: data[0] });

    } catch (error) {
        console.error('Update Project Error:', error);
        return NextResponse.json({ error: 'Failed to update project' }, { status: 500 });
    }
}

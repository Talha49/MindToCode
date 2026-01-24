
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY // Only used on server

if (!supabaseUrl || !supabaseAnonKey) {
  console.warn('Missing Supabase Environment Variables')
}

// 1. Client-side Safe Client (Row Level Security applies)
export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// 2. Server-side Admin Client (Bypasses RLS) - Use with caution!
export const supabaseAdmin = createClient(supabaseUrl, supabaseServiceKey || supabaseAnonKey)

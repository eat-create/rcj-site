import { createClient } from '@supabase/supabase-js';

export function adminClient() {
  const url = process.env.SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!url || !key) throw new Error('Missing SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY');
  return createClient(url, key, { auth: { persistSession: false } });
}

export function checkAdmin(req) {
  const key = req.headers.get?.('x-admin-key') || req.headers['x-admin-key'];
  if (!key || key !== process.env.ADMIN_API_KEY) return false;
  return true;
}

// /api/products/list.js
import { adminClient } from '../_db.js';

export default async function handler(req, res) {
  try {
    // Sanity check env at runtime
    if (!process.env.SUPABASE_URL || !process.env.SUPABASE_SERVICE_ROLE_KEY) {
      console.error('Missing env', {
        hasUrl: !!process.env.SUPABASE_URL,
        hasKey: !!process.env.SUPABASE_SERVICE_ROLE_KEY
      });
      return res.status(500).json({ error: 'Server misconfigured: missing env' });
    }

    const supa = adminClient();
    const { data, error } = await supa
      .from('products')
      .select('*')
      .eq('active', true)
      .order('popular', { ascending: false });

    if (error) {
      console.error('Supabase error:', error);
      return res.status(500).json({ error: error.message });
    }

    res.setHeader('cache-control', 'no-store');
    return res.status(200).json({ products: data || [] });
  } catch (e) {
    console.error('Unhandled error:', e);
    return res.status(500).json({ error: String(e) });
  }
}

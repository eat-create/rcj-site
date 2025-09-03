// /api/products/list.js
import { adminClient } from '../_db.js';

export default async function handler(req, res) {
  try {
    const supa = adminClient();
    const { data, error } = await supa
      .from('products')
      .select('*')
      .eq('active', true)
      .order('popular', { ascending: false });
    if (error) return res.status(500).json({ error: error.message });
    res.setHeader('cache-control', 'no-store');
    return res.status(200).json({ products: data || [] });
  } catch (e) {
    return res.status(500).json({ error: String(e) });
  }
}

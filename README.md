# SpaceFlix Single-File Demo (Static)

This is a **single HTML page** that simulates the SpaceFlix landing with:
- Animated starfield background (Canvas, reduced-motion aware)
- Hero carousel (autoplay, silent)
- 4 content rails (cards open a "player" modal)
- Product grid (Rocket City Jerky), add-to-cart (localStorage), mini-cart drawer
- Rocket liftoff transition overlay on nav/adding to cart

## Run (Node 18+)

```bash
node server.mjs
# -> http://localhost:5000
```

Alternatively (Python 3):

```bash
python3 -m http.server 5000
# open http://localhost:5000/public/index.html
```

For **full checkout, profiles, real player, admin CMS**, use the full Next.js repo I provided earlier.
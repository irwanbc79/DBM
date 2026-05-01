# Google AdSense Setup — PT. Dira Baraka Mulia

This site is **AdSense-ready**. Real ads are not yet enabled — but every strategic placement is wired up. Follow the 4 steps below to go live.

---

## Step 1 — Get your Publisher ID

1. Go to https://www.google.com/adsense
2. Sign up / sign in. Add `dira-baraka-mulia` (or your final domain) as a site.
3. Wait for AdSense approval (typically 1–7 days).
4. Once approved, copy your Publisher ID (looks like `ca-pub-1234567890123456`).

## Step 2 — Add it to environment variables

Edit `/app/frontend/.env`:

```
REACT_APP_ADSENSE_CLIENT=ca-pub-1234567890123456
```

## Step 3 — Uncomment the AdSense script

Edit `/app/frontend/public/index.html`. Find the commented `<script>` block and:
1. Replace `ca-pub-XXXXXXXXXXXXXXXX` with your Publisher ID.
2. Remove the `<!--` and `-->` around the `<script>` tag.

## Step 4 — Replace slot IDs

In your AdSense dashboard, create **5 ad units** and copy their slot IDs. Then replace each `slot="..."` value:

| Location | File | Default `slot` value | Format |
|----------|------|----------------------|--------|
| Blog index — top banner | `src/pages/Blog.jsx` | `blog-top-leaderboard` | Leaderboard 728×90 / responsive |
| Blog index — between posts | `src/pages/Blog.jsx` | `blog-in-feed` | In-feed native |
| Blog index — sidebar | `src/components/blog/Sidebar.jsx` | `blog-sidebar-mpu` | MPU 300×250 |
| Blog post — mid-article | `src/pages/BlogPost.jsx` | `post-in-article` | In-article (responsive) |
| Blog post — below article | `src/pages/BlogPost.jsx` | `post-below-article` | Display 250×auto |

Replace each value with your real AdSense slot ID (a 10-digit number).

## Step 5 — Rebuild & deploy

```bash
cd frontend
yarn build
# Deploy /build folder
```

Once `REACT_APP_ADSENSE_CLIENT` is set + the script is uncommented, all the dev-mode placeholders disappear and real `<ins class="adsbygoogle">` tags render with `(adsbygoogle = window.adsbygoogle || []).push({})` triggered automatically on mount.

---

## Why these placements?

| Placement | Reason |
|-----------|--------|
| **Top leaderboard** (blog index) | Highest CTR — captures returning readers immediately |
| **In-feed native** (between cards) | Blends with content, low intrusion, very strong eCPM |
| **Sidebar MPU** (300×250) | Most-purchased size on AdSense; viewable on every blog page scroll |
| **Mid-article** (post detail) | Best conversion — readers are engaged, naturally pause |
| **Below article** (before related posts) | High RPM — ready-to-leave intent |

## Testing locally

In dev (without `REACT_APP_ADSENSE_CLIENT` set), each ad slot shows a styled placeholder with the slot name, dimensions, and a hint banner. This makes layout/spacing easy to design without seeing real ads.

## Auto Ads (optional)

If you prefer Google's automatic placement instead of fixed slots, simply enable Auto Ads in the AdSense dashboard and **delete** all `<AdSlot />` calls. The AdSense script alone will then inject ads contextually.

---

Built for PT. Dira Baraka Mulia · December 2025

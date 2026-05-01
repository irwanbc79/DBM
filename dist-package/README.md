# PT. Dira Baraka Mulia — Landing Page

A modern, dynamic, **bilingual (English / Bahasa Indonesia)** landing page for **PT. Dira Baraka Mulia** — a trusted trading company specializing in export, import, general trading, and undername services in Medan, North Sumatra, Indonesia.

Built with **React 19 + Tailwind CSS 3** and a thoughtfully crafted teal & gold luxury aesthetic.

---

## ✨ Features

- 🌐 **Full bilingual support** — instant ID/EN switcher (English default), persisted in `localStorage`
- 📰 **Blog system** with 6 ready-to-publish bilingual articles (Undername, Coffee Export, PIB Customs, Belawan Port, EUDR, Trading Partner)
- 🗺️ **Interactive Indonesia coverage map** (pure SVG, no API key)
- 📍 **Google Maps embed** of the Grand Jati Junction office (Medan)
- 🖼️ **Unsplash imagery** (no broken `blob:` URLs)
- 📱 Fully **responsive**, mobile-first
- ⚡ Smooth **scroll reveals** and animated stats counters
- 💬 WhatsApp-integrated contact form (no backend required)
- 🎨 Brand fonts: **Playfair Display** (serif) + **Plus Jakarta Sans** (sans)
- 🧭 React Router routes: `/`, `/blog`, `/blog/:slug`

---

## 🚀 Quick Start (in VS Code)

```bash
# 1. Extract the zip and open the folder
unzip dira-baraka-mulia-landing.zip
cd frontend

# 2. Install dependencies (uses yarn)
yarn install

# 3. Start dev server
yarn start

# Open http://localhost:3000
```

If you don't have yarn:
```bash
npm install -g yarn
```

### Build for production
```bash
yarn build
# Output: ./build  (drop on Vercel / Netlify / Cloudflare Pages / Nginx)
```

---

## 📂 Project Structure

```
frontend/
├── public/
│   └── index.html               # Page shell, fonts, meta
├── src/
│   ├── App.js                   # Router + layout
│   ├── index.js                 # Entry
│   ├── index.css                # Tailwind base + custom CSS
│   ├── i18n/
│   │   └── translations.js      # ALL bilingual strings live here
│   ├── contexts/
│   │   └── LanguageContext.jsx  # useLang() hook
│   ├── data/
│   │   └── blogPosts.js         # Bilingual blog content
│   ├── hooks/
│   │   ├── use-reveal.js        # Scroll reveal + count-up
│   │   └── use-toast.js
│   ├── lib/
│   │   └── utils.js
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   ├── FloatingWA.jsx
│   │   ├── IndonesiaMap.jsx
│   │   ├── ui/                  # shadcn/ui primitives
│   │   └── sections/
│   │       ├── Hero.jsx
│   │       ├── Stats.jsx
│   │       ├── Reach.jsx
│   │       ├── Services.jsx
│   │       ├── Advantages.jsx
│   │       ├── Commodities.jsx
│   │       ├── Portfolio.jsx
│   │       ├── Process.jsx
│   │       ├── Legality.jsx
│   │       ├── CTA.jsx
│   │       └── Contact.jsx
│   └── pages/
│       ├── Home.jsx
│       ├── Blog.jsx
│       └── BlogPost.jsx
├── tailwind.config.js
├── package.json
└── craco.config.js
```

---

## 🛠️ Common Edits

### Change WhatsApp number
Search/replace `6281264882678` across the codebase.

### Add or edit blog posts
Edit `src/data/blogPosts.js` — each post has bilingual `title`, `excerpt`, and `body`.

### Tweak brand colors
Edit `tailwind.config.js` → `theme.extend.colors.teal` / `colors.gold`.

### Update copy
All strings live in `src/i18n/translations.js` (en + id keys side by side).

### Replace office map location
In `src/components/sections/Contact.jsx`, change the `iframe src` query.

---

## 📦 Tech Stack

- React 19, React Router 7
- Tailwind CSS 3.4, tailwindcss-animate
- lucide-react (icons)
- shadcn/ui primitives (already in `src/components/ui/`)
- CRACO (no eject)

---

## 📝 License

Custom work for PT. Dira Baraka Mulia. All rights reserved.

— Built with care in Medan.

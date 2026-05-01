# PT. Dira Baraka Mulia — Landing Page PRD

## Original Problem Statement
Optimize a static HTML and turn it into a dynamic React landing page for PT. Dira Baraka Mulia (Indonesian export-import / trading company). Add a blog menu, contextual images, an office map, bilingual ID/EN switcher (default EN), and produce a copy-able file package for VS Code.

## User Personas
- **Indonesian SME owners** exploring export/import (need clarity, trust, low-friction WhatsApp contact)
- **International buyers** scanning the company in English (need legitimacy + commodities)
- **Government / regulatory readers** verifying NIB / API-U credentials

## Architecture
- Frontend-only React 19 + Tailwind 3 (no backend; contact form deep-links to WhatsApp)
- React Router for /, /blog, /blog/:slug
- Bilingual via React Context + localStorage persistence
- Static blog content in `src/data/blogPosts.js`
- Stylized SVG Indonesia map + Google Maps iframe (no API key)
- Unsplash imagery in production

## Implemented (May 2026)
- Bilingual EN/ID with switcher in navbar (EN default)
- Hero, Stats (count-up), National Reach (SVG map), Services (6), Advantages, Commodities (10), Portfolio (9 Unsplash), Process (5 steps), Legality (4 cards), CTA, Contact (form → WhatsApp + Google Maps embed of Grand Jati Junction)
- Floating WhatsApp button
- Blog index + dedicated post page with 6 bilingual articles
- Brand fonts (Playfair Display + Plus Jakarta Sans)
- Smooth scroll reveals, gold-teal luxury palette
- Distributable zip at `/app/dist-package/dira-baraka-mulia-landing.zip`

## Backlog (P0 → P2)
- P1: SEO meta per blog post + sitemap.xml
- P1: Blog category filter / search bar
- P2: Real CMS for blog (Sanity / Strapi) instead of static array
- P2: Google Analytics / Tag Manager wiring
- P2: Newsletter capture (Mailchimp / Resend)
- P2: Server-side contact form fallback (Resend) for users who don't use WhatsApp


# ⚡ CodeRush 1.0 — Official Website

> **Where Code RUSHES. Impact explodes.**  
> Organized by **CSI TCET** (Computer Society of India — Department of Computer Engineering, Thakur College of Engineering & Technology).

---

## 📅 Event Overview

| Detail | Info |
|--------|------|
| **Event Name** | CodeRush 1.0 |
| **Organizer** | CSI TCET — Dept. of Computer Engineering, TCET |
| **Date** | 22 August 2026 |
| **Timings** | 10:00 AM – 10:00 PM IST (12 Hours Non-Stop) |
| **Tracks** | Webathon, UI/UX Designathon, Ideathon Pitch, Open Innovation |
| **Eligibility** | All college students (Solo & Teams up to 4 members) |
| **Prize Pool** | ₹50,000+ in Cash Prizes, Trophies, Certificates & Swag |
| **Registration** | [Unstop](https://unstop.com) |

---

## 🛠️ Tech Stack & Architecture

| Layer | Technology |
|-------|-----------|
| **Framework** | React 18 + Vite 6 |
| **Styling** | Tailwind CSS v3 + Vanilla CSS custom design system |
| **Animations** | Framer Motion + Canvas Confetti |
| **Icons** | Lucide React |
| **Typography** | **Syne** (headings/display), **Plus Jakarta Sans** (body), **Space Mono** (code/mono), **Caveat** (handwriting accent), **Permanent Marker** (expressive marker style) |
| **Utilities** | clsx, tailwind-merge |

---

## 📁 Repository Structure

```
HackNext/
├── docs/
│   ├── THEME_COLORS.md           # Full design token reference & color palette docs
│   ├── coderush_content.md       # Complete 19-section event documentation
│   └── design_inspiration/       # Curated design reference assets & mockups
├── public/
│   └── images/
│       ├── cute_tech_react.png   # Animated cute React character (hero floating asset)
│       ├── cute_tech_js.png      # Animated cute JS character (hero floating asset)
│       ├── cute_tech_python.png  # Animated cute Python character (hero floating asset)
│       └── cute_tech_node.png    # Animated cute Node.js character (hero floating asset)
├── src/
│   ├── components/
│   │   ├── Hero.jsx              # Framed poster hero: holographic gradients, countdown, floating 3D tech mascots
│   │   ├── Marquee.jsx           # Dual-angled scrolling ticker + extended purple frame + organic SVG torn edge
│   │   ├── Navbar.jsx            # Glassmorphic sticky navigation with CTA
│   │   ├── About.jsx             # "More Than Just Code." bento-grid with core stats
│   │   ├── ProcessCards.jsx      # "THE SEQUENCE" – 4 angled dark deck cards with neon ribbons
│   │   ├── Tracks.jsx            # "Choose Your Battlefield" – 4 challenge track cards
│   │   ├── Timeline.jsx          # Tabbed event schedule & submission protocol
│   │   ├── Prizes.jsx            # Reward matrix, digital admit pass & scratch reward card
│   │   ├── Rules.jsx             # Event guidelines, eligibility & fair play policy
│   │   ├── FAQ.jsx               # Interactive accordion FAQ with smooth animations
│   │   ├── Contact.jsx           # Contact & social links section
│   │   └── Footer.jsx            # Dark purple credits, navigation & socials footer
│   ├── App.jsx                   # Main application assembler & route layout
│   ├── index.css                 # Design tokens, holographic gradients, marquee animations & utilities
│   └── main.jsx                  # React DOM root entrypoint
├── index.html                    # HTML5 entrypoint with Google Fonts & SEO meta
├── tailwind.config.js            # Tailwind theme extensions & custom color palette
├── postcss.config.js             # PostCSS configuration
├── package.json                  # Dependencies & npm scripts
└── vite.config.js                # Vite build configuration
```

---

## ✨ Key Design Features

- **Hero Frame** — Dark deep-purple outer border frame (`#140e28`) with a light holographic inner canvas, iridescent gradient overlays, and a perspective grid background.
- **Floating Tech Mascots** — 8 animated 3D claymation-style tech character images (React, JS, Python, Node.js) floating around the hero using Framer Motion — some mirrored left-facing.
- **Live Countdown Timer** — Targets 22 August 2026, 10:00 AM IST with real-time days/hours/minutes/seconds.
- **Extended Purple Frame** — The Hero's dark purple frame extends seamlessly below into the Marquee section with a matte dot-grid pattern background.
- **Organic Torn Paper Edge** — An SVG with an irregular jagged path creates a natural torn-paper transition at the bottom of the Marquee section, bordered by the frame's purple stroke.
- **Dual Marquee Tapes** — Two angled scrolling ticker banners (lime & dark) running in opposite directions.
- **Confetti Registration CTA** — Clicking "Join CodeRush Now" triggers a branded confetti burst.
- **Premium Typography** — All headings use Syne; body uses Plus Jakarta Sans; code/monospace uses Space Mono.

---

## 🚀 Local Development Setup

1. **Clone the Repository:**
   ```bash
   git clone <YOUR_REPOSITORY_URL>
   cd HackNext
   ```

2. **Install Dependencies:**
   ```bash
   npm install
   ```

3. **Start Development Server:**
   ```bash
   npm run dev
   ```
   Open `http://localhost:3000/` in your browser.

4. **Build for Production:**
   ```bash
   npm run build
   npm run preview
   ```

---

## 🌿 Branch Strategy

| Branch | Purpose |
|--------|---------|
| `main` | Production-ready, merged & reviewed code |
| `feature/*` | Individual feature branches per contributor |

All features are submitted via **Pull Requests** and merged into `main` after review.

---

## 📜 License & Credits

Designed & Developed for **CSI TCET** (Computer Society of India — Department of Computer Engineering, Thakur College of Engineering & Technology). All Rights Reserved © 2026.

# 🎨 CodeRush 1.0 — Team Color Palette & Theme Guide

> **Quick Cheat-Sheet for Team Members (8 Developers & Designers)**  
> Use these 6 exact color groups when building your individual sections and UI components (Shadcn, Magic UI, Aceternity UI, Tailwind UI, etc.) so that everything matches our website theme seamlessly!

---

## 🚀 The 6 Main Theme Colors

```
[ 1. DARK PURPLISH ] ──── #140e28 (Frames, Dark Cards & Footers)
[ 2. VIBRANT PURPLE ] ─── #8b5cf6 (Main Brand Buttons, Badges & Titles)
[ 3. NEON GREENISH ] ──── #ccff00 (High-Energy Glows, Tags & Countdowns)
[ 4. CLEAN YELLOWISH ] ── #f7f7f2 (Warm Cream Editorial Card Canvas)
[ 5. CLEAN WHITE ] ────── #f8f8fc (Main Page Canvas & Glass Bento Cards)
[ 6. ELECTRIC CYAN ] ──── #06b6d4 (Secondary Track Highlights & Tech Icons)
```

---

### 1. 🔮 Dark Purplish (`#140e28` / `#120d24`)
* **What it is:** The signature dark cyberpunk background color.
* **Where to use:** Section backgrounds, outer frames, dark cards, footer, and popup modals.
* **Tailwind & Hex:**
  * Hex: `#140e28` (Main Frame), `#120d24` (Doodle Background)
  * Tailwind Class: `bg-[#140e28]`, `bg-[#120d24]`, `border-[#2d1b54]`

---

### 2. 💜 Vibrant Purple (`#8b5cf6` / `#7c3aed`)
* **What it is:** The main CodeRush brand color.
* **Where to use:** Primary CTAs ("JOIN NOW" buttons), gradient text titles, active tabs, and main highlight badges.
* **Tailwind & Hex:**
  * Hex: `#8b5cf6` (Standard), `#7c3aed` (Gradient Dark)
  * CSS Class: `.purple-highlight`
  * Tailwind Class: `bg-[#8b5cf6]`, `text-[#8b5cf6]`, `border-[#8b5cf6]`, `bg-purple-gradient`

---

### 3. ⚡ Neon / Electric Greenish (`#ccff00`)
* **What it is:** The high-visibility neon accent color.
* **Where to use:** Handwritten card titles (`REGISTER`, `BUILD`, `CONNECT`, `GROW`), countdown timer numbers, glowing orbit ribbon rings, and victory tags.
* **Tailwind & Hex:**
  * Hex: `#ccff00`
  * CSS Class: `.lime-highlight`
  * Tailwind Class: `bg-[#ccff00]`, `text-[#ccff00]`, `border-[#ccff00]`, `shadow-[0_0_20px_#ccff00]`

---

### 4. 🍦 Clean Yellowish / Warm Cream (`#f7f7f2` / `#fffbeb`)
* **What it is:** Soft editorial cream tone that prevents cold visual starkness.
* **Where to use:** Secondary cards, runner-up prize podium cards, and soft background panels.
* **Tailwind & Hex:**
  * Hex: `#f7f7f2` (Cream Page Base), `#fffbeb` (Warm Tint)
  * Tailwind Class: `bg-[#f7f7f2]`, `bg-amber-50/60`, `border-amber-200`

---

### 5. ⚪ Clean Off-White Canvas (`#f8f8fc`)
* **What it is:** Crisp, modern studio white background.
* **Where to use:** Primary page content area, bento grid background, and glassmorphic card backdrops.
* **Tailwind & Hex:**
  * Hex: `#f8f8fc`
  * Tailwind Class: `bg-[#f8f8fc]`, `bg-white/90`, `backdrop-blur-md`

---

### 6. 🌐 Electric Cyan Accent (`#06b6d4` / `#7dd3fc`)
* **What it is:** High-tech secondary color for balance.
* **Where to use:** Tech stack tags, secondary track badges (UI/UX track), icon outlines, and subtle glow borders.
* **Tailwind & Hex:**
  * Hex: `#06b6d4`
  * CSS Class: `.cyan-highlight`
  * Tailwind Class: `text-[#06b6d4]`, `bg-[#06b6d4]/10`, `border-[#06b6d4]`

---

## 🛠️ Tailwind Config Reference (For Copy-Pasting)

If team members want to use standard Tailwind utility names, they can import these custom colors:

```javascript
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        purple: {
          DEFAULT: '#8b5cf6',
          dark: '#140e28',
          light: '#c4b5fd',
        },
        lime: {
          DEFAULT: '#ccff00',
        },
        cyanAccent: '#06b6d4',
        cream: {
          DEFAULT: '#f7f7f2',
        },
        graphite: '#0f0f15',
      }
    }
  }
}
```

---

## 🎨 Recommended Color Combos

1. **Primary Hero Button:** `bg-purple-gradient` (Purple) + `text-white` + `bg-lime` (Neon Green Arrow Badge)
2. **Dark Mission Card:** `bg-[#140e28]` (Dark Purple) + `text-[#ccff00]` (Neon Green Header) + `border-purple`
3. **Light Bento Card:** `bg-white/90` + `border-[#e2e2f0]` + `text-[#0f0f15]` (Graphite Text) + `.purple-highlight` Pill

---

*CodeRush 1.0 — Team Color Palette Reference Guide*

# GlobalStock — Project Report
**Date:** 2026-04-17  
**Status:** In Development  
**Stack:** Next.js 16 · React 19 · TypeScript · Tailwind CSS v4 · Bun

---

## Git History — What Was Built

### `91d1d95` — Initial commit
Project scaffolded with Next.js App Router, TypeScript, Tailwind CSS v4, ESLint, Prettier, Husky git hooks, and lint-staged.

---

### `6bfe163` — Add logo and favicon
- Added `Logo.png` and `favicon.png` to `/public`

---

### `232f1df` — Layout + Header
- Root layout (`src/app/layout.tsx`) set up with Geist font
- **Header component** built:
  - Sticky top navigation with backdrop blur
  - Logo linked to home
  - Main nav: Accueil, Groupes Électrogènes, Solaire, Machines & Outillage Pro, Achat en Gros, Contact
  - Dropdown submenus on hover for each product category
  - Expandable search bar (closes on Escape key)
  - Right icons: Search, Wishlist, Cart (with badge), Account
  - Responsive: full nav on desktop, icon-only on mobile

---

### `c0813ee` — HeroSection
- Full-viewport hero banner (`100vh - header`)
- SVG clip-path with custom irregular polygon shape
- Background image: `/public/HeroSection.png`
- White centered title: *"L'Énergie à Votre Service"* with drop shadow
- Next.js Image with `priority` for above-fold loading

---

### `2e85301` — CategoriesSection + FeaturesSection

**FeaturesSection:**
- 4 feature cards with Phosphor icons (Globe, Truck, Headset, ShieldCheck)
- Value props: Livraison France & Europe, Expédition 5j, Support 6j/7, Garantie 2ans
- Abstract SVG blob backgrounds on each card
- Bottom split: product image left + text card right with two CTA buttons

**CategoriesSection:**
- Asymmetric 12-column desktop grid:
  - Groupes Électrogènes — large card with product image
  - Machines & Outillage Pro — tall double-row card
  - Solutions Solaires — standard card
  - Achat en Gros (Tarifs Pro) — primary gradient background card
- Each card: badge with product count, title, sub-category list, "Voir tout" arrow link

---

### `8859c38` — ProductsSection
- Category filter tabs: Tous, Groupes Électrogènes, Outillage Pro, Solutions Solaires, Équipements
- 3-column product grid (adaptive: 2-col tablet, 1-col mobile)
- Product cards with:
  - Image area with discount badge and heart button
  - Primary-colored info footer with title, price, cart button
- 6 products: generators and inverters with real product images

---

### `dcea0e7` — SuperSaleSection
- Flash sale promotion section
- Left: large card with product title, "FIN DANS" badge, countdown timer (Days:Hours:Mins:Secs), original price struck through, sale price, "Acheter" CTA, product image layered in background
- Right: 2 stacked image cards
- Product featured: Tronçonneuse Daewoo DCS6524 (Lame 60 cm)

---

### `8859c38` — ProductsSection
Already covered above.

---

### `b3a89ab` — BestSellingSection
- 4-column product grid of best-sellers
- Each card:
  - Product image on light gray background
  - Discount badge (top-left), Heart + Cart icons (top-right)
  - Star rating (gold #f2a74c), title, current price, old price (strikethrough), delivery info
  - Hover scale effect (1.02×)
- Bottom pagination: dots + left/right navigation arrows
- Products: GE Diesel generators, HP pressure washers

---

### `9a323bb` — TestimonialsSection + InspirationsSection

**TestimonialsSection:**
- Horizontal scrollable carousel with auto-centering active card
- Each testimonial card:
  - Protruding customer photo (absolutely positioned, border)
  - 5-star rating
  - Quote text with decorative Quotes watermark
  - Customer name + role
- Active card: primary navy background, white text, full opacity image
- Inactive cards: white background, scaled to 0.95×, 60% opacity, grayscale-50
- Pagination dots + prev/next arrows in header

---

### `abd9e0b` — Footer + Layout Reorganization

**Footer component:**
- Dark navy background (primary color)
- 12-column responsive grid
- LogoWhite + company description + social icons (Facebook, Instagram, Twitter, LinkedIn)
- Links columns: Quick Links, Categories, Contact Info
- Contact: phone, WhatsApp, email, hours (6j/7 — 9h à 20h)
- Bottom bar: copyright + legal links (Privacy, CGV, CGU)

---

### `38565ba` — Color scheme refactor
- Replaced hardcoded color values across all components with the `primary` CSS variable
- Ensured visual consistency across Header, Footer, all section components

---

### `0d18654` — LogoWhite + content updates
- Added `LogoWhite.png` for the Footer
- Updated Header and Footer with real navigation links and content
- Populated real text content across multiple sections

---

### `970ce1f` — max-width consistency refactor
- Standardized `max-w-300` (1200px) container across all section components for consistent page width

---

### `d610118` — Real images integrated
- Added product images to `/public`:
  - `BestSellingSection/` — 4 product photos
  - `CategoriesSection/` — 3 category images
  - `ProductsSection/` — 6 product photos
  - `TestimonialsSection/` — 3 customer portrait photos
- Wired all images into their respective components replacing placeholders

---

### `5f5516a` — AchatEnGrosSection built + layout polish

**AchatEnGrosSection (new component):**
- Left: text content — heading "Achat en Gros & Tarifs Pro", description, "Demander un devis" CTA button
- Right: interactive product carousel:
  - Big main card (primary gradient, tall) showing the active product
  - Smaller secondary cards (scrollable) for the other products
  - Clicking a secondary card makes it the active main
  - Pagination dots + prev/next arrows
- 3 wholesale products with images added to `AchatEnGrosSection/`

Additional layout polish across BestSelling, Features, SuperSale, and Testimonials sections.

---


## End-of-Day Status

| Component | Status |
|---|---|
| Project setup & config | ✅ Done |
| Header (nav, search, icons) | ✅ Done |
| HeroSection | ✅ Done |
| FeaturesSection | ✅ Done |
| CategoriesSection | ✅ Done |
| ProductsSection (with tabs) | ✅ Done |
| BestSellingSection | ✅ Done |
| SuperSaleSection | ✅ Done |
| TestimonialsSection (carousel) | ✅ Done |
| AchatEnGrosSection (carousel) | ✅ Done |
| Footer | ✅ Done |
| Real images integrated | ✅ Done |
| Color system unified | ✅ Done |
| max-width consistency | ✅ Done |

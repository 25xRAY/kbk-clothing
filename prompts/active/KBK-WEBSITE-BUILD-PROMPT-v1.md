# KBK CLOTHING — WEBSITE BUILD PROMPT
**Version:** 1.0  
**Date:** May 28, 2026  
**Template:** ST-APP-002 Streetwear Command  
**Brand:** KBK Clothing  
**Tagline:** Wear the Crown.™  

---

## BRAND IDENTITY

| Field | Value |
|---|---|
| Brand Name | KBK |
| Tagline | **Wear the Crown.™** |
| Logo | Confirmed KBK graffiti logo — gold B `#FFCC00`, gold crown `#FFCC00`, multicolor K letters, white/gray background |
| Primary Color | `#FFCC00` — Electric Gold (B + Crown) |
| Secondary Color | `#0A0A14` — Prime Black (dark mode base) |
| Accent Left | Blue-green — pulled from left K |
| Accent Right | Red-purple — pulled from right K |
| Font Style | Bold, urban, graffiti-inspired |
| Brand Voice | Premium streetwear meets handcrafted wearable art — one-of-a-kind pieces with street credibility |

---

## TEMPLATE SETTINGS — ST-APP-002 STREETWEAR COMMAND

| Setting | Value |
|---|---|
| Background | Dark mode `#0A0A14` |
| Primary Accent | `#FFCC00` |
| Tagline Placement | Hero section — directly below logo — color `#FFCC00` |
| Tagline Text | **Wear the Crown.™** |
| Letter Drip Detail | Use as decorative divider element throughout site |
| Countdown Timer | Active on all collection drop pages |
| Limited Edition Badge | Enabled on all one-of-a-kind pieces |
| Sold-Out Gate | Enabled — archive immediately on inventory zero |
| One-of-a-Kind Mode | ON — each hand-painted or custom piece listed as unique SKU |

---

## PAGES TO BUILD

### 1. Homepage
- Full-bleed hero with KBK logo centered
- Tagline **"Wear the Crown.™"** directly below logo in `#FFCC00`
- Active collection drop countdown if drop is scheduled
- Featured pieces grid — 3 columns
- "One of a Kind" section callout
- Newsletter signup — gold `#FFCC00` CTA button

### 2. Shop / Collection Page
- Masonry grid layout
- Filter by: technique, size, collection
- Limited edition badge on applicable pieces
- Sold-out overlay fires automatically at inventory zero
- Hover reveals second product image

### 3. Product Detail Page
- Full-bleed product image left
- Product info right: name, technique used, materials, size, price
- Size selector with live inventory count
- Add to cart drawer — not cart page
- Care instructions accordion
- "You may also like" — 3 related pieces
- Scarcity count: "Only 1 left" fires at inventory count = 1

### 4. Custom Order Page
- Custom order intake form
- Fields: name, email, size, technique preference, color preference, reference image upload, budget range, timeline needed
- 50% deposit noted clearly
- Estimated turnaround time displayed
- CTA: **"Request Your Piece"** — gold `#FFCC00` button

### 5. About Page
- Brand story — handmade origin
- Artist/founder section
- Process — how each piece is made
- KBK logo large centered at top
- Tagline **"Wear the Crown.™"** beneath logo

### 6. Contact Page
- Simple contact form
- Social links
- Response time expectation stated clearly

---

## NAVIGATION

| Element | Spec |
|---|---|
| Logo | Left-aligned |
| Links | Right-aligned — Shop / Custom Order / About / Contact |
| Cart Icon | Top right — shows live item count |
| Active Link | Gold `#FFCC00` underline |
| Mobile | Hamburger menu — full screen dark overlay |

---

## COMMERCE CONFIGURATION

| Setting | Value |
|---|---|
| Payment Primary | Paddle — xih-paddle |
| Payment Fallback | Stripe — xih-stripe |
| Shipping | Real-time rates — xih-shipstation |
| Abandoned Cart | 72-hour persistence |
| Custom Order Deposit | 50% on intake via FIN-CHECKOUT |
| Inventory Sync | Real-time via LOG-STOREFRONT |
| AI Photography | MKT-VISUALIZER apparel mode enabled for new product listings |

---

## FOOTER

| Element | Spec |
|---|---|
| Logo | KBK logo small — centered |
| Tagline | "Wear the Crown.™" — `#FFCC00` — small beneath logo |
| Social Icons | Instagram, TikTok, Pinterest |
| Newsletter | Single-line signup |
| Copyright | © KBK Clothing. All Rights Reserved. |
| Background | `#0A0A14` dark |
| Text Color | Dark gray — `#888888` |

---

## SEO DEFAULTS

| Element | Spec |
|---|---|
| Schema — Product Pages | JSON-LD Product schema on all product pages |
| Schema — Homepage | JSON-LD Organization schema |
| Meta Title Format | `[Product Name] — KBK Clothing \| Wear the Crown.™` |
| Meta Description | Handmade, one-of-a-kind — technique callout per product |
| Brand Entity | KBK Clothing — graffiti streetwear — wearable art — handmade |

---

## MOBILE STANDARDS

| Requirement | Spec |
|---|---|
| Minimum Viewport | 375px |
| Cart Drawer | Accessible on mobile |
| Product Grid | 2 columns on mobile |
| Hero Logo | Scales to 80% on mobile |
| Touch Targets | Minimum 44px on all interactive elements |
| Tagline | Scales proportionally — never truncated |

---

## WCAG 2.2 AA COMPLIANCE

| Requirement | Spec |
|---|---|
| Contrast | Minimum 8.5:1 on all text |
| Keyboard Navigation | All interactive elements |
| Alt Text | All product images |
| Focus States | Visible on all buttons and links |
| Screen Reader | Cart drawer and product detail fully accessible |

---

## AGENT FLEET ACTIVATION

| Agent | Role |
|---|---|
| ITS-COMMERCE | Storefront generation — ST-APP-002 template |
| LOG-STOREFRONT | Real-time inventory sync — per size/color variant |
| FIN-CHECKOUT | Paddle primary payment processing |
| MKT-VISUALIZER | AI product photography — apparel mode |
| MKT-PUBLISHER | Collection drop announcements — email + social |
| MKT-SOCIALCOMMAND | Autonomous social content calendar |
| CRM-PIPELINE | Custom order tracking |
| SCI-INVENTORY | Materials and supply monitoring |

---

## FEATURE FLAGS — ALL OFF AT DEPLOYMENT
### Carlton activates each flag after acceptance criteria pass

```
commerce.enabled
commerce.apparel_templates
commerce.paddle_checkout
commerce.shipping_rates
commerce.abandoned_cart
mkt.visualizer.apparel_mode
mkt.visualizer.enabled
mkt.socialcommand.enabled
mkt.publisher.enabled
```

---

## ACCEPTANCE CRITERIA — MUST ALL PASS BEFORE LAUNCH

- [ ] Homepage hero renders with KBK logo and tagline "Wear the Crown.™" in `#FFCC00`
- [ ] Dark mode background `#0A0A14` applied site-wide — no white flash on load
- [ ] Collection drop countdown timer functional on shop page
- [ ] Limited edition badge renders on one-of-a-kind products
- [ ] Sold-out gate fires automatically at inventory zero
- [ ] Cart drawer opens without page navigation — closes on outside click
- [ ] Custom order intake form submits — record created — SIGNAL notification fires
- [ ] 50% deposit invoice generated via Paddle on custom order acceptance
- [ ] Mobile render at 375px — no broken layout — no horizontal scroll
- [ ] Tagline "Wear the Crown.™" present in footer — `#FFCC00` — not truncated
- [ ] JSON-LD Product schema present on all product detail pages
- [ ] WCAG 2.2 AA — zero critical violations on axe DevTools audit
- [ ] All navigation links route correctly — no 404s
- [ ] pnpm tsc --noEmit exits with code 0
- [ ] pnpm build exits with code 0

---

## TRADEMARK NOTE — LEGAL ACTION REQUIRED BEFORE LAUNCH

> **"Wear the Crown.™"** has not yet been searched in the USPTO TESS database.  
> Before this tagline appears on any public-facing page, marketing asset, or product:  
>
> 1. Run USPTO TESS search for "Wear the Crown" in International Class 025  
> 2. Run USPTO TESS search for "KBK" in International Class 025  
> 3. File trademark application for KBK logo mark (design + word) — Class 025  
> 4. File trademark application for tagline "Wear the Crown." — Class 025  
>
> LEG-IP agent inside X.R.A.Y. supports this process after onboarding.  
> Do not launch with the tagline until TESS search confirms no conflicts.

---

## CODEBASE DECLARATION

```
# CODEBASE: New KBK client project — fresh Next.js scaffold
# DIRECTORY: ~/Desktop/webproject/kbk-clothing
# NEVER RUN IN: xray_platform, pryze-website, 25bravo, or any other directory
```

---

*KBK Clothing Website Build Prompt v1.0 — May 28, 2026*  
*Prepared by 25 Alpha LLC — info@25xray.ai — 25xray.ai*  
*See Through Everything.™*

# Design Philosophy: Monday Coffee Shop

## Chosen Design Approach: Warm Minimalism with Artisanal Craft

### Design Movement
**Scandinavian Minimalism meets Artisanal Craft** — A contemporary aesthetic that balances clean, purposeful design with warmth, natural materials, and human-centered details. This approach celebrates the ritual of coffee culture while maintaining sophisticated simplicity.

### Core Principles

1. **Warmth Through Restraint** — Use negative space generously, but infuse it with warm color tones and natural textures. Avoid cold minimalism; instead, create an inviting atmosphere through carefully chosen details.

2. **Material Authenticity** — Celebrate natural materials (wood, stone, linen) through imagery and typography. The visual language reflects the tangible, craft-oriented nature of specialty coffee.

3. **Functional Hierarchy** — Every element serves a purpose. Information architecture prioritizes user intent: discover → understand → decide → act (book/order/visit).

4. **Micro-Interactions with Purpose** — Subtle animations and hover states that feel organic, not flashy. They guide attention and reward interaction without distraction.

### Color Philosophy

**Primary Palette:**
- **Background:** Off-white / Cream (`#FAF8F3`) — warm, inviting, like a linen napkin
- **Text:** Deep Charcoal (`#2C2C2C`) — readable, sophisticated, not pure black
- **Accent:** Warm Terracotta / Burnt Sienna (`#C85A3A`) — evokes coffee, warmth, and energy
- **Secondary Accent:** Sage Green (`#7A9B7F`) — natural, calming, reflects plant life in cafes
- **Borders & Dividers:** Soft Taupe (`#D4C5B9`) — subtle, warm, not harsh gray

**Emotional Intent:** The palette evokes morning light, freshly roasted coffee, and the comfort of a familiar cafe. It's sophisticated yet approachable, premium yet unpretentious.

### Layout Paradigm

**Asymmetric, Content-Driven Structure:**
- Hero section: Full-width immersive image with overlay text (left-aligned for visual weight)
- About section: Alternating text-image blocks (text left, then right) to create visual rhythm
- Menu: Card-based grid with intentional whitespace; 3 columns on desktop, 1-2 on mobile
- Gallery: Masonry-style layout with varying aspect ratios (creates organic, curated feel)
- Testimonials: Horizontal scroll on mobile, 3-column grid on desktop
- CTA sections: Centered, bold, with breathing room around them

**Avoid:** Centered, symmetrical layouts; excessive grid uniformity; predictable patterns.

### Signature Elements

1. **Warm Dividers** — Subtle SVG dividers or gradient lines in terracotta/sage tones between sections (not harsh borders)
2. **Coffee-Inspired Accents** — Small circular badges, coffee bean icons, or latte art patterns as visual punctuation
3. **Typography Contrast** — Serif display font (e.g., Playfair Display) for headings; clean sans-serif (e.g., Inter or Outfit) for body text. Creates visual hierarchy and craft aesthetic.

### Interaction Philosophy

- **Hover States:** Subtle color shift (text darkens, background warms) or gentle scale (1.02x) — never jarring
- **Buttons:** Filled primary CTA buttons with smooth transitions; ghost buttons for secondary actions
- **Scroll Behavior:** Smooth scroll with parallax on hero image (subtle, not distracting)
- **Form Interactions:** Floating labels, clear focus states, inline validation feedback

### Animation Guidelines

- **Entrance Animations:** Fade-in + subtle slide-up on scroll (200-300ms, ease-out)
- **Hover Animations:** 150ms color transitions, 200ms scale transforms
- **Loading States:** Gentle pulse or skeleton screens (avoid spinners)
- **Transitions Between Sections:** Smooth fade or slide transitions (no bounces or excessive motion)

**Principle:** Animation should feel natural, like the movement of steam from a cup of coffee — organic, not mechanical.

### Typography System

**Display Font:** Playfair Display (serif, 600-700 weight)
- Used for: H1 (page titles), H2 (section headers)
- Size: 48px (desktop), 32px (mobile) for H1; 36px / 24px for H2
- Line-height: 1.2 (tight, elegant)

**Heading Font:** Outfit (sans-serif, 600 weight)
- Used for: H3, H4, button labels, small headings
- Size: 24px (desktop), 18px (mobile) for H3

**Body Font:** Inter (sans-serif, 400-500 weight)
- Used for: Paragraphs, descriptions, menu item names
- Size: 16px (desktop), 14px (mobile)
- Line-height: 1.6 (readable, generous)

**Accent Font:** Playfair Display (serif, 400 weight, italic)
- Used for: Taglines, quotes, testimonials
- Size: 18px (desktop), 16px (mobile)

---

## Implementation Notes

- **Color Variables:** Define all colors in CSS custom properties (--color-primary, --color-accent, etc.)
- **Spacing Scale:** Use 8px base unit (8, 16, 24, 32, 48, 64, 80px)
- **Border Radius:** Minimal (4-8px) to maintain sophistication; no excessive rounding
- **Shadows:** Soft, warm shadows (use rgba of accent color, not pure black)
- **Images:** All hero and gallery images use warm, natural lighting; avoid cold, harsh tones

---

## Design Checklist

- [ ] Color palette applied consistently across all sections
- [ ] Typography hierarchy clear and readable on all screen sizes
- [ ] Asymmetric layouts create visual interest without chaos
- [ ] Animations are subtle and purposeful
- [ ] Micro-interactions reward user engagement
- [ ] Responsive design tested on mobile, tablet, desktop
- [ ] Accessibility: WCAG AA contrast ratios, keyboard navigation, focus states

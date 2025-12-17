# DEOD AI Platform - Design Guidelines

## Design Approach
**System Selected:** Custom futuristic AI platform with Material Design principles
**Rationale:** Premium AI ecosystem requiring cutting-edge visual identity that balances Web3 aesthetics with professional trust and creator-first positioning.

## Core Design Principles
1. **Future-Forward Premium**: High-tech sophistication meets accessibility
2. **Creator-Centric**: Highlight 90% revenue share prominently across all creator touchpoints
3. **Trust & Transparency**: Professional, credible, and welcoming to all skill levels

## Typography System

**Font Families:**
- Primary: Inter (headings, UI) - via Google Fonts
- Secondary: Space Grotesk (accent headings, technical elements) - via Google Fonts
- Monospace: JetBrains Mono (code snippets, technical data)

**Hierarchy:**
- H1: text-5xl md:text-6xl lg:text-7xl, font-bold, tracking-tight
- H2: text-3xl md:text-4xl lg:text-5xl, font-bold
- H3: text-2xl md:text-3xl, font-semibold
- H4: text-xl md:text-2xl, font-semibold
- Body: text-base md:text-lg
- Small: text-sm

## Layout System

**Spacing Primitives:** Tailwind units of 4, 6, 8, 12, 16, 20, 24 (e.g., p-4, mt-8, gap-6)

**Container Widths:**
- Max content: max-w-7xl mx-auto px-4 md:px-6 lg:px-8
- Narrow content: max-w-4xl mx-auto
- Full bleed sections: w-full

**Section Padding:**
- Desktop: py-20 md:py-24 lg:py-32
- Mobile: py-12 md:py-16

## Component Library

### Navigation
- **Sticky Header**: Glassmorphism effect (backdrop-blur-lg bg-white/80 dark:bg-gray-900/80)
- **Mobile Menu**: Slide-in drawer with smooth transitions
- **CTA in Header**: Primary button always visible (desktop) or in mobile menu

### Hero Section (Homepage)
- **Layout**: Asymmetric split - 60% content, 40% visual
- **Height**: min-h-[600px] md:min-h-[700px] lg:min-h-[800px] (not forced 100vh)
- **Image**: Abstract AI/neural network visualization, futuristic gradient mesh
- **Elements**: H1 + H2 + 3 CTA buttons + trust indicator ("Join 10,000+ AI creators")
- **Background**: Subtle animated gradient overlay

### Cards & Components
- **Tool Cards**: Glassmorphism with hover lift effect (shadow-lg hover:shadow-2xl transition-all)
- **Feature Cards**: Grid layout (grid-cols-1 md:grid-cols-2 lg:grid-cols-3)
- **Course Cards**: Progress bars, difficulty badges, thumbnail images
- **Creator Cards**: Avatar + name + earnings indicator + verification badge

### Forms
- **Input Fields**: Rounded borders (rounded-lg), focus ring with brand accent
- **Submit Buttons**: Primary gradient with subtle glow effect
- **Validation**: Inline error messages with icons (Heroicons)

### Revenue Highlight Section (Submit Tools Page)
- **Callout Box**: Large gradient background, centered
- **Typography**: "90%" in display text (text-8xl font-bold), "You keep" subtext
- **Visual**: Pie chart or comparison graphic showing 90/10 split

## Page-Specific Layouts

### Homepage
1. Hero (asymmetric with image)
2. Feature Grid (3 columns desktop)
3. Revenue Callout (full-width gradient section)
4. Tool Showcase (carousel of featured tools)
5. Learning Path Preview (visual timeline)
6. Newsletter CTA (centered with gradient background)
7. Footer (multi-column: links, newsletter, social)

### Explore AI Tools
- **Header**: Search bar + category filters (horizontal scroll on mobile)
- **Grid**: 3-column card layout
- **Filters**: Sticky sidebar (desktop) or collapsible drawer (mobile)

### Marketplace
- **Layout**: 4-column grid for products
- **Filters**: Price range, category, ratings
- **Product Cards**: Image + title + price + creator + rating stars

## Visual Effects

**Glassmorphism:**
- Cards: `backdrop-blur-md bg-white/10 dark:bg-white/5 border border-white/20`
- Navigation: `backdrop-blur-lg bg-white/80 dark:bg-gray-900/80`

**Gradients:**
- Primary: from-purple-600 via-blue-600 to-cyan-500
- Accent: from-pink-500 to-violet-600
- Background: from-gray-50 to-white dark:from-gray-900 dark:to-black

**Shadows:**
- Elevated cards: shadow-xl shadow-purple-500/10
- Hover states: shadow-2xl shadow-blue-500/20

## Dark/Light Mode
- Toggle button in header (sun/moon icons from Heroicons)
- Use Tailwind dark: variant throughout
- Light mode: Soft whites, light grays
- Dark mode: Deep blacks, charcoal grays with colored accents

## Icons
**Library:** Heroicons (via CDN)
**Usage:**
- Navigation items
- Feature highlights
- Form inputs
- Category indicators
- Social links

## Images

**Required Images:**
1. **Hero Image** (Homepage): Futuristic AI visualization - abstract neural network, gradient mesh, or 3D geometric AI elements (1200x800px)
2. **Tool Thumbnails**: Placeholder for each tool category (400x300px)
3. **Creator Avatars**: Circular profile images throughout
4. **News Article**: Featured images for blog posts (800x450px)
5. **About Page**: Team/mission image - collaborative workspace or abstract tech imagery

**Image Treatment:** Subtle gradients overlay, rounded corners (rounded-xl), shadow effects

## Responsive Breakpoints
- Mobile: base (< 768px) - single column, stacked navigation
- Tablet: md (768px+) - 2 columns, condensed spacing
- Desktop: lg (1024px+) - full multi-column, expanded spacing

## Accessibility
- ARIA labels on all interactive elements
- Focus indicators with high contrast
- Semantic HTML structure
- Keyboard navigation support
- Color contrast ratios meet WCAG AA standards

## Key Differentiators
- Prominent "90% revenue share" messaging on every creator page
- Verification badges for quality tools
- Real-time progress tracking in learning paths
- Creator earnings dashboard preview (even before auth)
- Future-ready: Design accommodates Web3 wallet connect, token displays, and blockchain elements
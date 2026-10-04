# Design System — Neeraj Portfolio

## Visual Identity
- **Style**: Glassmorphism / Soft Modern
- **Mood**: Clean, professional, approachable, modern
- **Primary Mode**: Light (with dark mode support)
- **Accent Color**: Blue/Indigo family

---

## Color Palette

### Accent (Primary Brand)
- **Primary**: Indigo-500 (`oklch(0.51 0.23 277)`)
- **Primary Hover**: Indigo-600
- **Primary Foreground**: White
- **Accent Light**: Indigo-50 (light mode backgrounds)
- **Accent Muted**: Indigo-100 (subtle highlights)

### Backgrounds (Light Mode)
- **Background**: White / Soft warm white (`oklch(0.99 0.005 90)`)
- **Card**: White with subtle transparency for glass effect
- **Muted**: Soft gray (`oklch(0.97 0.01 90)`)
- **Glass Surface**: `bg-white/70 backdrop-blur-xl`

### Backgrounds (Dark Mode)
- **Background**: Deep navy (`oklch(0.15 0.02 270)`)
- **Card**: Dark surface with glass effect
- **Muted**: Dark gray
- **Glass Surface**: `bg-white/5 backdrop-blur-xl`

### Text
- **Foreground**: Near black (light mode), Near white (dark mode)
- **Muted Foreground**: Medium gray
- **Always use semantic tokens**: `text-foreground`, `text-muted-foreground`

### Borders
- **Light mode**: `border-black/5` — subtle, barely visible
- **Dark mode**: `border-white/10` — subtle, barely visible

---

## Typography
- **Heading Font**: Clean, modern sans-serif (AI-selected pairing)
- **Body Font**: Highly readable sans-serif matching heading
- **Scale**: Follow Tailwind's type scale
- **Headings**: `font-semibold` or `font-bold` — never `font-black`
- **Body**: `font-normal` or `font-medium`
- **Line Height**: Relaxed for readability (`leading-relaxed`)

### Type Scale
- **Hero Heading**: `text-4xl md:text-5xl lg:text-6xl`
- **Section Heading**: `text-2xl md:text-3xl`
- **Subsection**: `text-lg md:text-xl`
- **Body**: `text-base`
- **Small/Caption**: `text-sm text-muted-foreground`

---

## Spacing
- **Base Unit**: 4px (Tailwind default)
- **Section Padding**: `py-16 md:py-24 lg:py-32`
- **Container Max Width**: `max-w-6xl mx-auto px-4 md:px-6`
- **Component Gap**: `gap-4 md:gap-6`
- **Card Padding**: `p-6 md:p-8`
- **Element Spacing**: `space-y-4 md:space-y-6`

---

## Glassmorphism Patterns

### Glass Card
```css
/* Light mode */
bg-white/70 backdrop-blur-xl border border-white/20 shadow-lg

/* Dark mode */
bg-white/5 backdrop-blur-xl border border-white/10 shadow-lg
```

### Glass Navigation
```css
/* Sticky header with glass effect */
bg-white/80 backdrop-blur-md border-b border-black/5
```

### Glass Overlay
```css
/* Modal/Dialog overlay */
bg-black/20 backdrop-blur-sm
```

---

## Component Design Rules

### Cards
- Rounded: `rounded-xl` or `rounded-2xl`
- Shadow: `shadow-lg` (soft, not harsh)
- Padding: `p-6 md:p-8`
- Glass effect when overlapping content
- Only use for meaningful grouped content

### Buttons
- Primary: Indigo accent, `rounded-lg`
- Secondary: Muted/outline variant
- Ghost: Transparent with hover state
- Always use shadcn Button component

### Forms
- Use `FieldGroup` composition from shadcn
- Input: `rounded-lg` with subtle border
- Focus: Ring with accent color
- Labels: `text-sm font-medium`

### Navigation
- Sticky header with glass effect
- Logo/Name on left
- Links on right (desktop) or hamburger (mobile)
- Smooth scroll to sections

### Skills Section
- Categorized cards: Frontend, Backend, Tools, etc.
- Each category is a glass card
- Skill items as badges or small cards inside
- Group related skills together

### Projects Section
- Interactive accordion layout
- Each project expands to show details
- Include: title, description, tech stack tags, live link, GitHub link
- Thumbnail or screenshot on expand

### Hero Section
- Full viewport height
- Magic UI animated component as background or accent
- Glass card or glass text container
- Name, title, brief tagline
- CTA button (View Projects / Contact)

---

## Responsive Breakpoints
- **Mobile**: 375px (default styles)
- **Tablet**: 768px (`md:` prefix)
- **Desktop**: 1024px (`lg:` prefix)
- **Wide**: 1440px (`xl:` prefix)

---

## Animation Guidelines

### Hero Section (Animated)
- Use Magic UI components: marquee, blur-fade, text-animate, particles
- Animated background or text effects
- Eye-catching but not overwhelming

### Content Sections (Clean)
- Smooth scroll behavior
- Subtle fade-in on scroll (optional)
- Hover transitions: `transition-all duration-300`
- No parallax or heavy scroll animations

### Interaction Feedback
- Hover: Subtle scale or color change
- Click: Brief scale-down effect
- Focus: Visible ring for accessibility
- Transitions: `duration-200` or `duration-300`

---

## Dark Mode
- Toggle in navigation or footer
- Smooth transition between modes
- All components must work in both modes
- Use CSS variables for all color values
- Glass effects adapt: `bg-white/70` (light) → `bg-white/5` (dark)

---

## Accessibility
- Semantic HTML: `<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`
- Alt text on all images
- Focus visible states on all interactive elements
- Color contrast ratio ≥ 4.5:1 for text
- Keyboard navigation support
- `aria-label` on icon-only buttons

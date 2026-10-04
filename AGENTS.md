# Neeraj Portfolio

## Project Overview
- Personal portfolio website for a student developer
- Built with Next.js 15, React 19, TypeScript, Tailwind CSS v4
- Component libraries: shadcn/ui (base) + Magic UI (animated) + 21st (community)
- Visual style: Glassmorphism/Soft — soft gradients, glass effects, modern SaaS look
- Light mode primary with dark mode support
- Deployment target: Vercel

## Tech Stack
- Framework: Next.js 15 (App Router)
- Language: TypeScript (strict mode)
- Styling: Tailwind CSS v4 with OKLCH color system
- Components: shadcn/ui (base), Magic UI (animated), 21st (community)
- Fonts: AI-selected pairing (modern, readable)
- Accent Color: Blue/Indigo family

## MCP Servers (Connected)
- **Context7**: Up-to-date library documentation
- **shadcn**: Component registry & installation
- **Playwright**: Browser automation & screenshots
- **Magic UI**: Animated component catalog
- **21st**: 12K+ community component catalog

## Skills (Installed)
- **shadcn**: Component patterns, composition rules, theming, CLI commands
- **21st** (7 skills): Search, build, explore, review, publish UI components
- **magic-ui**: Animated component selection & integration
- **context7** (3 skills): Documentation fetching, CLI management, MCP setup
- **migrate-radix-to-base**: Radix UI to Base UI migration

## Code Conventions
- Use semantic color tokens (`bg-background`, `text-muted-foreground`, `bg-card`)
- Never use raw Tailwind color values (e.g., `bg-blue-500`)
- Use `cn()` utility for conditional classes — never manual template literals
- Functional components only — no class components
- All components must be responsive (mobile-first approach)
- Use TypeScript strict mode — no `any` types
- No `useMemo`/`useCallback` by default — trust the React Compiler
- All custom components MUST include `data-slot` attributes for styling hooks

## Glassmorphism Design Patterns
- Use `backdrop-blur` with semi-transparent backgrounds for glass effects
- Soft shadows: `shadow-lg`, `shadow-xl` — avoid harsh shadows
- Rounded corners: `rounded-xl`, `rounded-2xl` — no sharp edges
- Subtle borders: `border border-white/10` or `border border-black/5`
- Background gradients: subtle, soft transitions — no harsh color stops

## Portfolio Sections (in order)
1. **Hero** — Animated with Magic UI, glassmorphism card or background
2. **About** — Clean layout, brief bio, photo/avatar
3. **Skills** — Categorized cards (Frontend, Backend, Tools, etc.)
4. **Projects** — Interactive accordion with project details
5. **Contact** — Simple contact form or social links

## Component Usage Rules
- Use shadcn/ui components when they add real structure or accessible behavior
- Do NOT wrap every section in Card — use Card only for meaningful grouped objects
- Use `FieldGroup` for forms, `ToggleGroup` for option sets
- Items always inside their Group: SelectItem → SelectGroup, DropdownMenuItem → DropdownMenuGroup
- Dialog, Sheet, and Drawer always need a Title
- Use `asChild` (radix) or `render` (base) for custom triggers

## Animation Rules
- Hero section: Use Magic UI animated components (marquee, blur-fade, text effects)
- Content sections: Clean, minimal — no heavy animations
- Max 2 animated elements per viewport
- Keep motion intentional — avoid stacking high-motion effects
- Smooth transitions on hover: `transition-all duration-300`

## Build & Verify
- Run `npx tsc --noEmit` after TypeScript changes
- Run `npx next build` to verify production build
- Test responsive design at 375px, 768px, 1024px, 1440px
- Check accessibility with semantic HTML
- Verify both light and dark modes

## Do NOT
- Do not add `useMemo`/`useCallback` by default
- Do not wrap every section in Card component
- Do not use raw hex colors or raw Tailwind color values
- Do not create custom components when shadcn/21st/Magic UI has one
- Do not use class components
- Do not skip responsive testing
- Do not use `any` type in TypeScript
- Do not add manual `z-index` on overlay components (Dialog, Sheet, Popover handle their own stacking)

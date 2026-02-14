# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

BabyPillars is a marketing/product website for a child development program (0-24 months). It's built for founder Anat Furstenberg's "Environment-First" developmental approach.

## Commands

- `npm run dev` — Start dev server (localhost:3000)
- `npm run build` — Production build
- `npm run lint` — ESLint (flat config with Next.js core-web-vitals + TypeScript rules)
- No testing framework is currently configured

## Tech Stack

- **Next.js 16** with App Router, React 19, TypeScript
- **Tailwind CSS v4** (uses `@theme` block in `globals.css`, not tailwind.config)
- **Path alias**: `@/*` maps to `./src/*`

## Architecture

All source code lives under `src/app/` using the Next.js App Router convention:

- **Pages**: `page.tsx` in route directories (`/`, `/about`, `/pricing`, `/how-it-works`, `/milestone-tracker`, `/contact`, `/blog`)
- **Shared components**: `src/app/components/` — Navbar, Footer, CTASection, PricingCard, SectionBadge, TestimonialCard, MaterialIcon
- **Layout**: `src/app/layout.tsx` wraps all pages with Navbar + Footer
- **Fonts**: `src/fonts/` — Instrument Serif (display/headings), Inter (body), Material Symbols Outlined (icons)
- Pages are server components by default; only interactive components (Navbar, forms, blog article content) use `"use client"`

## Blog System (Hybrid Content Architecture)

The blog uses a two-source content system that merges at the display layer:

### Data Sources
- **Original posts** (6 posts): Hardcoded in `[slug]/page.tsx` as `originalPosts` with `content: string[]` — simple paragraph arrays, manually authored
- **WordPress-migrated posts** (66 posts): Stored in `src/app/blog/wpBlogData.ts` as `wpBlogPosts` with `htmlContent: string` — rich HTML from babypillars.com, auto-generated

### File Structure
```
src/app/blog/
├── page.tsx                       # Listing page — merges originalPosts + wpBlogPosts
├── wpBlogData.ts                  # 722KB auto-generated data file (66 posts with HTML)
├── [slug]/page.tsx                # Post detail — uses getPost() for unified lookup
└── components/
    └── BlogArticleContent.tsx     # Client component — parses HTML into structured UI
```

### Post Lookup
`getPost(slug)` checks `originalPosts` first, then `wpBlogPostsBySlug`. Original posts render as plain `<p>` tags; WP posts render via `<BlogArticleContent>` which parses HTML into sections, key takeaways, quick links, and FAQ accordions.

### Blog Images
All blog images (108 files) live in `public/blog/`. Featured images use the naming pattern `featured-{slug}-{filename}`. Inline images use `{slug}-{filename}`.

### BlogArticleContent Parser
The client component (`BlogArticleContent.tsx`) does regex-based parsing of WordPress HTML to extract:
- **Quick Links**: Detected via `<strong>Quick links:</strong>` pattern → renders as 2-column Roman numeral grid card
- **Key Takeaways**: Detected via H2 containing "Key Takeaway" → renders as green highlight card with checkmarks
- **FAQ sections**: Detected via H2 containing "Frequently Asked" → renders as expandable accordion
- **Sections**: Split by H2 tags, each gets an anchor ID for jump-to navigation
- Falls back to raw HTML rendering with Tailwind arbitrary selectors if parsing finds no structure

### Related Posts
`getRelatedPosts()` prioritizes same-category posts, then fills with others, capped at 3.

## Design System

- **Primary color**: `#54A388` (sage green) — `text-primary`, `bg-primary`, `bg-primary/5`, `bg-primary/10`
- **Backgrounds**: `background-light: #FDFCF9` (warm off-white), `background-dark: #121412`
- **Typography**: `font-display` for headings (Instrument Serif), `font-sans` for body (Inter)
- **Icons**: Material Symbols Outlined loaded as a local woff2 font — use `<span className="material-symbols-outlined">icon_name</span>`
- **Corners**: Large radii throughout (rounded-2xl/3xl) for a soft, friendly aesthetic
- **Hero pattern**: `hero-pattern` CSS class provides dotted background on certain page headers
- Tailwind utility classes used directly — no component library

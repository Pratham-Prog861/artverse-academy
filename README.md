# ArtVerse Academy

Premium, motion-rich creative academy website built with **Next.js 16**, **React 19**, **Tailwind CSS v4**, and **Aceternity-style UI components**.

## Overview

This project is a multi-page marketing website for ArtVerse Academy with three main routes:

- `/` - Home (hero, featured courses, sticky reveal, testimonials, webinars, instructors)
- `/courses` - Full course catalog with interactive 3D cards
- `/contact` - Contact form with animated background beams

The design system is powered by reusable components in `src/components/ui` (Aceternity-inspired patterns), and page sections are composed from `src/components`.

## Tech Stack

- Next.js `16.1.6` (App Router)
- React `19.2.3`
- TypeScript
- Tailwind CSS v4
- Motion (`motion` package)
- Biome (lint + format)
- simplex-noise (wavy canvas effects)

## Project Structure

```bash
src/
  app/
    layout.tsx
    page.tsx
    courses/page.tsx
    contact/page.tsx
    globals.css
  components/
    Hero.tsx
    FeaturedCourses.tsx
    WhyChooseUs.tsx
    Testimonials.tsx
    UpcomingWebinars.tsx
    Instructors.tsx
    Navbar.tsx
    Footer.tsx
    ui/
      3d-card.tsx
      animated-tooltip.tsx
      background-beams.tsx
      background-gradient.tsx
      card-hover-effect.tsx
      infinite-moving-cards.tsx
      moving-border.tsx
      navbar-menu.tsx
      spotlight.tsx
      sticky-scroll-reveal.tsx
      wavy-background.tsx
  data/
    art_courses.json
    testimonials.ts
    webinars.ts
    instructors.ts
    artVerseContent.ts
```

## Getting Started

### 1. Install dependencies

```bash
pnpm install
```

If you use npm:

```bash
npm install
```

### 2. Run development server

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000).

## Available Scripts

```bash
pnpm dev      # start dev server
pnpm build    # production build
pnpm start    # start production server
pnpm lint     # biome check
pnpm format   # biome format --write
```

## Design Notes

- Global dark theme is enabled in `src/app/layout.tsx`.
- Color variables are defined in `src/app/globals.css` and mapped via Tailwind theme tokens.
- Aceternity-style UI primitives live in `src/components/ui` and are reused across all pages.
- Motion effects are intentionally concentrated in key sections (hero, sticky reveal, testimonial marquee, card interactions).

## Data-Driven Content

Main content is loaded from files in `src/data`:

- Courses: `art_courses.json`
- Testimonials: `testimonials.ts`
- Webinars: `webinars.ts`
- Instructors: `instructors.ts`
- Sticky reveal content: `artVerseContent.ts`

Update these files to change page content without rewriting UI.

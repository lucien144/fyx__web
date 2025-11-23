# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Marketing/landing page for Fyx, an unofficial client for Nyx.cz (Czech discussion forum). This is a static promotional website, not a full application.

## Commands

```bash
pnpm install          # Install dependencies
pnpm dev              # Start dev server
pnpm build            # Type-check and build for production
pnpm type-check       # Run TypeScript validation only
pnpm lint             # Lint and auto-fix with ESLint
pnpm preview          # Preview production build
```

## Architecture

**Stack**: Vue 3 + Vite 7 + TypeScript + Tailwind CSS v4

**Structure**:
- Single-component architecture - entire landing page in `src/App.vue`
- No routing (Vue Router not used) - hash-based anchor navigation
- No state management - static content only
- No API layer - external links to App Store, Google Play, Patreon, GitHub

**Key files**:
- `src/main.ts` - Vue app entry point
- `src/App.vue` - All UI content (hero, features, pricing table, footer)
- `src/main.css` - Global styles with Tailwind imports
- `vite.config.ts` - Vite config with Vue plugin, DevTools, Tailwind, and `@` path alias

**Build pipeline**: Type-checking via `vue-tsc` runs in parallel with Vite build

**Node requirement**: ^20.19.0 || >=22.12.0
# Mustafa Arch — Portfolio & Visualization Services

A multi-language (EN / FR / AR) portfolio website for architectural visualization services, built with [Astro](https://astro.build) and converted from the Minifolio HTML template.

## Features

- **9 pages**: Home, About, Services, Portfolio, FAQ, Contact, plus Service Details, Portfolio Details, and a custom 404 page
- **3 languages** with URL-prefixed routing: `/en/`, `/fr/`, `/ar/`
- **Full Arabic RTL support** — the layout automatically switches to right-to-left direction when Arabic is active
- **Language switcher** in the header that redirects to the matching localized URL while preserving the current page
- Template assets (CSS, JS, fonts, images) preserved as-is from the original Minifolio theme

## Project Structure

```
src/
├── i18n/
│   ├── dictionary.ts   # EN/FR/AR translations (~250 keys)
│   └── ui.ts           # Translation helper (setLocale / t)
├── layouts/Base.astro  # Shared layout with RTL + meta setup
├── components/         # Header, Footer, Breadcrumb, Marquee
└── pages/[locale]/     # One page per route, rendered for each locale
public/assets/          # Original template CSS, JS, fonts and images
```

## Development

```bash
pnpm install
pnpm dev        # start dev server
pnpm build      # production build (27 static pages: 9 × 3 languages)
pnpm preview    # preview the production build
```

## Translation

All user-facing strings live in `src/i18n/dictionary.ts` as key/value objects with `en`, `fr`, and `ar` entries. To add or edit text, update the dictionary and call `t("key")` in any component. The active locale is set per-page via `setLocale()` and components read it automatically.

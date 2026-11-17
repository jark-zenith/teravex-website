# TERAVEX Website

The website is built as a Vite static site. Existing editorial sections and vanilla navigation remain intact; React enhances only the hero visual.

## Stack
- React + TypeScript
- Vite
- Tailwind CSS v4 utilities
- shadcn-compatible component structure in `src/components/ui`
- Framer Motion for the animated hero

## Local development
```bash
npm install
npm run dev
```

## Production
```bash
npm run build
npm run preview
```
Build output: `dist/`. Render runs `npm install && npm run build` and publishes `dist`.

## Component conventions
- UI components: `src/components/ui`
- Shared utilities: `src/lib`
- Global styles: `src/index.css`
- `@/` alias resolves to `src/`
- `components.json` defines shadcn CLI aliases and stylesheet location.

Hero images are sourced from the TERAVEX Drive folder and optimized as WebP in `public/assets`.

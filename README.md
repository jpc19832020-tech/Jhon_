# jhonp

## Virtual Business Card FOTON

Single Page Application built with Vite + React + TypeScript for the digital card of Jhon Carlos Perez Cubas. HashRouter keeps navigation working on GitHub Pages and the UI uses Tailwind CSS with shadcn-style components.

### Key Features
- Responsive layout with photographic background, translucent cards, and smooth transitions.
- Smart actions: WhatsApp with preset message, Gmail compose, website link, vCard download, and share fallback.
- Gallery with autoplay controls, indicators, and an overlay intro.
- GitHub Pages ready: base path `/Jhon_/`, deployed via GitHub Actions.

### Install
```
npm install
```

### Scripts
- `npm run dev` - development server
- `npm run lint` - run ESLint
- `npm run build` - generate static output in `dist/`
- `npm run preview` - serve `dist/` (after build)

Deployment is handled by GitHub Actions (no `gh-pages` branch or `npm run deploy`).

### Deploy to GitHub Pages (GitHub Actions)
This repo uses the Pages workflow in `.github/workflows/pages.yml`.

1. Create/point the remote to `https://github.com/jpc19832020-tech/Jhon_.git` and push `main`.
2. In GitHub: Settings → Pages → Build and deployment = GitHub Actions.
3. On each push to `main`, Actions will install deps, build, and deploy `dist/` to Pages.
4. Base path is set to `/Jhon_/` in `vite.config.ts`. If the repo name changes, update `base` or set `VITE_BASE_PATH`.
5. Update `index.html` metadata (`og:url`) to the final Pages URL.

### Relevant Structure
```
public/
  imagenes/
    09.jpeg                # Background
    Foton-logo-01.png      # Favicon and OpenGraph asset
    otras fotos/
      F1.jpeg
      F2.jpg
      F3.jpg
      GF1.jpeg
src/
  components/
    VirtualBusinessCard.tsx
    ui/ (Button, Badge, Card)
  lib/utils.ts
  index.css
  main.tsx
  App.tsx
```

### Notes
- 100% static stack (Vite + Tailwind + shadcn) so it runs fine on GitHub Pages.
- For best Lighthouse scores convert the gallery images to WebP/AVIF when you have the source files.
- Add a PWA manifest and service worker later if you want offline support (e.g. via `vite-plugin-pwa`).

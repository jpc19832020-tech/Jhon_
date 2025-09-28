# Repository Guidelines

## Project Structure & Module Organization
The SPA lives in `src/`, with entry points `main.tsx` and `App.tsx`. Reusable primitives stay in `src/components/ui`, feature-level views under `src/components/virtual-card`, and data fixtures in `src/data` (e.g. `businessCard.ts`). Shared helpers belong in `src/lib`. Static assets reside in `public/imagenes` and ship as-is; keep generated output confined to `dist/`. When adding a new section, prefer creating a dedicated folder under `src/components` with its own index file and co-located styles.

## Build, Test, and Development Commands
Run `npm install` once to sync dependencies. `npm run dev` launches Vite with hot reload. `npm run build` performs the TypeScript project build and generates static artifacts in `dist/`. `npm run preview` serves that build for smoke-testing. `npm run lint` executes ESLint over the entire tree. Use `npm run deploy` to build and publish to the `gh-pages` branch; it automatically invokes the build step.

## Coding Style & Naming Conventions
We use React + TypeScript with functional components. Follow the Prettier profile (`singleQuote`, `semi`, `trailingComma: all`, `printWidth: 100`) and keep two-space indentation. Component files and exported React components should be PascalCase (`GalleryModal.tsx`), hooks camelCase, and shared utilities in `src/lib` snake-free descriptive names. Tailwind classes are sorted by `prettier-plugin-tailwindcss`; avoid manual reordering. Run `npm run lint` and fix any ESLint warnings before opening a PR.

## Testing Guidelines
There is no automated test runner yet, so rely on linting, TypeScript, and manual QA in `npm run preview`. When adding tests, favor Vitest colocated in `src/__tests__` or alongside the component using `.test.tsx`. Document any new testing commands in this guide and ensure coverage of interactive flows like the gallery modal, share sheet, and vCard downloads.

## Commit & Pull Request Guidelines
Adopt Conventional Commits (`feat:`, `fix:`, `chore:`) as seen in the history. Write imperative, 72-character subject lines and include context in the body when needed. Each PR should describe the user-facing outcome, list verification (screenshots or recordings for UI tweaks), and link the relevant issue. Keep PRs focused; when touching assets, note any compression or format changes.

## Deployment & Configuration Tips
`vite.config.ts` sets the `base` path for GitHub Pages; update it if the repository name changes. Use the optional `VITE_BASE_PATH` environment variable locally to mirror production. Ensure `index.html` Open Graph URLs and `public/imagenes` assets match the deployed domain before running `npm run deploy`.

# Repository Guidelines

## Project Structure & Module Organization
`src/` contains the application code for the YAML resume editor and PDF preview. The main areas are `src/editing/` for the editor UI, `src/rendering/` for PDF rendering, `src/documents/` for resume document components, `src/parsing/` for YAML/JSON conversion and validation, `src/persistence/` for file handling, and `src/controls/` for toolbar actions. Shared utilities live in `src/utils/` and `src/types.ts`. Static assets and fonts are under `public/`. End-to-end tests live in `playwright/`, with image snapshots in `playwright/*-snapshots/`.

## Build, Test, and Development Commands
Use npm in this repo:

- `npm run dev` starts the Vite dev server on `http://127.0.0.1:5173/`.
- `npm run build` runs TypeScript compilation and creates a production build in `dist/`.
- `npm run lint` checks `ts` and `tsx` files with ESLint and fails on warnings.
- `npm run test` runs Vitest unit and hook tests.
- `npm run test:e2e` runs Playwright tests across Chromium, Firefox, and WebKit.
- `make run` is a small shortcut for `npm run dev`.

## Coding Style & Naming Conventions
This is a TypeScript + React codebase with ESLint, but no repo formatter is configured. Follow the surrounding file style instead of reformatting unrelated code. Use PascalCase for React components (`TitleControls.tsx`), camelCase for hooks and helpers (`useYAMLParsing`, `formatDate`), and keep feature code grouped by domain directory. Prefer small focused modules and re-export through local `index.ts` files when a folder already does so.

## Testing Guidelines
Keep unit tests close to the code as `*.test.ts` or `*.test.tsx`. Use Playwright for user flows and visual regressions in `playwright/*.spec.ts`. When UI output changes intentionally, review and update the matching snapshot files. There is no stated coverage threshold, so add or update tests for parsing, rendering, and control behavior whenever those areas change.

## Commit & Pull Request Guidelines
Recent history favors short, imperative commit subjects, sometimes with prefixes like `docs:` or `refactor:`. Keep messages concise and scoped, for example `refactor: simplify PDF scaling`. Pull requests should explain the user-visible change, list the commands you ran (`npm run lint`, `npm run test`, `npm run test:e2e` as applicable), and include screenshots for UI or snapshot-affecting changes.

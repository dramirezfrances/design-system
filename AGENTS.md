# Agent Rules — Design System Project

## File placement
- New DS components  →  src/components/ds/[atoms|molecules|organisms|charts]/
- New pages          →  src/app/[route]/page.tsx
- Shared utilities   →  src/lib/utils.ts
- Mock data          →  src/lib/mock-data/
- Stories            →  src/stories/[ComponentName].stories.tsx

## Code generation rules
- Never create .css files — use Tailwind utilities only
- Never use `any` as a TypeScript type — always type explicitly
- Never use // @ts-ignore — fix the type error instead
- Always add a default value for every optional prop
- Always extend the native HTML element props interface

## Import rules
- DS components: always from '@/components/ds' — never from individual file paths
- Utilities: always from '@/lib/utils'
- Never use relative imports (../../../) — always use the @ alias
- When adding a new DS component, always add its export to src/components/ds/index.ts

## Styling rules
- Never hardcode hex color values anywhere in component files
- Never hardcode pixel values outside of Tailwind's scale
- All color references must map to a token name in tailwind.config.ts
- If a required token doesn't exist, add it to tailwind.config.ts first

## Before marking any task complete
- Run `npm run build` — fix all TypeScript errors before finishing
- Run `npm run lint` — fix all lint violations before finishing
- If you added a new component, verify it is exported from src/components/ds/index.ts
- If you added a new token, verify it exists in tailwind.config.ts

## What never to touch without explicit instruction
- tailwind.config.ts — token changes affect the entire system
- src/components/ds/index.ts — barrel export is the DS contract
- tsconfig.json — path aliases are load-bearing

## Common mistakes never to make
1. Inventing import paths — check ds/index.ts first. Never guess a file path.
2. Hardcoding values — add missing tokens to tailwind.config.ts, never inline hex.
3. Modifying DS components for a single page — use components/features/ instead.
4. Skipping the barrel export — every new DS component must be in ds/index.ts.
5. Wrong component for the job — always re-read the inventory in CLAUDE.md first.
6. Creating CSS files — all styling is Tailwind utilities inside clsx().
7. Skipping TypeScript types — fix type errors, never suppress them.
8. Using placeholder content — use realistic domain data from @/lib/mock-data/.

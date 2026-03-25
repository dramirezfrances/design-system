# AI Context — Design System

## The one rule
Always import from `@/components/ds` — never from individual file paths.

---

## Stack
Next.js 14 · TypeScript · Tailwind CSS · React

---

## Component inventory
(To be filled in as components are built in Phase 3)

---

## Token rules
Never hardcode hex values. Use token names from `tailwind.config.ts`.

| Intent | Token |
|---|---|
| Primary action bg | `bg-brand` |
| Primary action hover | `hover:bg-brand-hover` |
| Primary action active | `active:bg-brand-active` |
| Subtle surface | `bg-neutral-50` |
| Body text | `text-neutral-900` |
| Muted text | `text-neutral-500` |
| Border default | `border-neutral-200` |
| Error text | `text-error-text` |
| Error background | `bg-error-bg` |
| Success text | `text-success-text` |
| Success background | `bg-success-bg` |
| Warning text | `text-warning-text` |
| Info text | `text-info-text` |

---

## Page patterns
(To be filled in as pages are built in Phase 6)

---

## Anti-patterns — never do these

### Imports
- WRONG: import { Button } from '@/components/ds/atoms/Button'
- RIGHT: import { Button } from '@/components/ds'
- Never use relative paths (../../../) — always use the @ alias

### Styling
- Never use inline styles: style={{ color: '#0b49ea' }}
- Never hardcode hex in className: className="text-[#0b49ea]"
- Never hardcode spacing: className="mt-[23px]"
- Always use token names: className="text-brand", className="mt-6"

### HTML elements
- Never use a raw <button> — always use <Button> from the DS
- Never use a raw <input> — always use <Input> from the DS

### Component misuse
(To be filled in as components are built in Phase 3)

### Layout
- Never create a CSS file for a component — Tailwind utilities only
- Never use inline styles

### Data
- Never use placeholder text like 'Lorem ipsum' in prototypes
- Never hardcode data inside page components — import from @/lib/mock-data/

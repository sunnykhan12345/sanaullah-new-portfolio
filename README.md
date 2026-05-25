# Premium Frontend Developer Portfolio

A premium, Gulf-market-ready frontend developer portfolio built with Next.js App Router, JavaScript, Tailwind CSS, Framer Motion, and Shadcn-style UI components.

## Tech Stack

- Next.js App Router
- JavaScript only
- Tailwind CSS
- Framer Motion
- Shadcn UI style components
- SVG assets only for icons and project previews

## Folder Structure

```txt
app/
components/
  common/
  layout/
  ui/
sections/
data/
assets/
public/assets/
```

## Setup

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Customize

Edit portfolio content from:

```txt
data/portfolio.js
```

Replace the placeholder CV at:

```txt
public/assets/pakdev-cv.pdf
```

Replace project preview SVGs from:

```txt
public/assets/projects/
```

## Notes

- All components use `.js` files only.
- No TypeScript is used.
- The UI is responsive, accessible, and optimized for a premium dark SaaS aesthetic.
- Navigation active states are handled with `IntersectionObserver`.
- Project filtering is client-side and reusable.

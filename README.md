# Global Language Institute — Next.js Site

## Setup

```bash
npm install
npm run dev
```

Then open http://localhost:3000

## Structure

```
app/
  layout.tsx         Root layout, Poppins font, metadata
  page.tsx           Assembles all sections
  globals.css        Tailwind + postcard/postmark utility styles
  components/
    Navbar.tsx
    Hero.tsx
    WhyChooseUs.tsx
    Destinations.tsx
    Services.tsx
    Courses.tsx
    Testimonials.tsx
    Footer.tsx
public/
  favicon.svg
  site.webmanifest
  robots.txt
package.json
tsconfig.json
next.config.mjs
tailwind.config.ts
postcss.config.js
next-env.d.ts
.eslintrc.json
.gitignore
```

Typography uses a single family, **Poppins**, loaded via `next/font/google`
for both headings and body text (see `app/layout.tsx`).

Images are pulled live from Unsplash via `next/image` — swap the URLs in
`Hero.tsx`, `WhyChooseUs.tsx`, and `Destinations.tsx` for your own photos
whenever you're ready.

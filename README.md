# Navneet Kumar — Portfolio

Personal portfolio site built with Angular 22 (standalone components, signals, zoneless) and plain CSS.
The single page is prerendered to static HTML at build time, so it can be hosted on any static host.

## Commands

```bash
npm start          # dev server at http://localhost:4200
npm run build      # production build → dist/portfolio/browser
npm test           # unit tests (Vitest)
```

## Updating content

All copy lives in `src/app/data/` — components only render it:

| File            | Contents                                                  |
| --------------- | --------------------------------------------------------- |
| `profile.ts`    | Name, hero text, about, contact links, highlights, education, nav |
| `experience.ts` | Experience timeline and Selected Work cards               |
| `skills.ts`     | Skill groups                                              |

- Photo: the hero currently shows an "NK" placeholder. Add your headshot to `public/images/`
  (portrait 4:5, at least 640×800, JPG or WebP under ~150 kB), then set `photo` in `profile.ts`:
  `photo: { src: 'images/navneet-kumar.webp', alt: 'Navneet Kumar, Senior Software Engineer' }`.
- Resume: replace `public/resume/Navneet_Kumar_Senior_Software_Engineer.pdf` (keep the file name, or update `resumeUrl` in `profile.ts`).
- SEO / Open Graph tags: `src/index.html`. Social preview image: `public/og-image.png` (1200×630).
- If you deploy somewhere other than `https://twinvitals.github.io/portfolio/`, update the absolute URLs in
  `src/index.html`, `public/robots.txt` and `public/sitemap.xml`.

## Structure

```
src/app/
  data/         content + types
  layout/       header (sticky nav, mobile menu), footer
  features/     one component per section; home/ composes them
  shared/       icon, section heading, scroll-reveal directive
src/styles.css  design tokens, buttons, chips, base styles
```

## Deploying to GitHub Pages

For a user site (`nitume00.github.io` repository), publish the contents of `dist/portfolio/browser`
to the repository root (or a `gh-pages` branch). For a project site, build with
`ng build --base-href /<repo-name>/` and update the URLs mentioned above.

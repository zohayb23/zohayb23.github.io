# Zohayb Bhatti — Personal Website

Live at **https://zohayb23.github.io**

Built with Next.js (static export), Tailwind CSS, and Motion. Every push to `main` is built and deployed to GitHub Pages by `.github/workflows/deploy.yml`.

## Editing content

All copy (experience, projects, skills, stats, links) lives in `src/data/profile.ts`. To swap the portrait, remove the photo's background on macOS with `scripts/cutout.swift`, then replace both `public/headshot.png` and `public/headshot.webp` (the page uses the WebP; the PNG is for search engines). If the new cutout has different dimensions, update the `width`/`height` props in `Hero.tsx` and `About.tsx`, and regenerate `src/app/opengraph-image.png` (1200×630).

```bash
swift scripts/cutout.swift path/to/photo.jpg public/headshot.png
```

## Local development

```bash
npm install
npm run dev
```

# Zohayb Bhatti — Personal Website

Live at **https://zohayb23.github.io**

Built with Next.js (static export), Tailwind CSS, and Motion. Every push to `main` is built and deployed to GitHub Pages by `.github/workflows/deploy.yml`.

## Editing content

All copy (experience, projects, skills, stats, links) lives in `src/data/profile.ts`. To swap the portrait, replace `public/headshot.png`; `scripts/cutout.swift` removes a photo's background on macOS:

```bash
swift scripts/cutout.swift path/to/photo.jpg public/headshot.png
```

## Local development

```bash
npm install
npm run dev
```

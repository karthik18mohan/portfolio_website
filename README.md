# Karthik Mohan - Portfolio Website

A professional portfolio website built with Next.js 14, TailwindCSS, and Framer Motion.

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## How to Customize

### Replace Images

All images are located in `/public/assets/`:

- **Profile photo:** `/public/assets/profile/profile.jpg` (recommended: 400x400px)
- **Hero background:** `/public/assets/backgrounds/hero.jpg` (recommended: 1920x1080px)
- **Project thumbnails:** `/public/assets/projects/<slug>/thumbnail.jpg` (recommended: 600x400px)
- **Project screenshots:** `/public/assets/projects/<slug>/screen1.jpg`, `screen2.jpg` (recommended: 1200x800px)
- **Resume:** `/public/resume.pdf`

### Update Content

All content is stored as JSON in the `/content/` folder:

- `profile.json` - Name, title, tagline, location, email, social links, about text
- `experience.json` - Work experience entries
- `projects.json` - Project listings with slugs, descriptions, tools, and image paths
- `certifications.json` - Certification list
- `achievements.json` - Achievement highlights
- `education.json` - Education entries

### Add a New Project

1. Add an entry to `/content/projects.json` with a unique `slug`
2. Create a folder `/public/assets/projects/<your-slug>/`
3. Add `thumbnail.jpg`, `screen1.jpg`, `screen2.jpg` to that folder
4. The project will automatically appear in the Projects section and get its own detail page

### Deploy to Vercel

1. Push your code to a GitHub repository
2. Go to [vercel.com](https://vercel.com) and import your repository
3. Vercel will auto-detect Next.js and deploy with zero configuration

# Quick Start Guide

Get your portfolio running in 3 steps:

## 1. Install and Run

```bash
cd portfolio
npm install
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000)

## 2. Replace Placeholder Images

### Your headshot:
- Replace: `public/images/placeholders/headshot.jpg`
- With: Your professional headshot (800x800px recommended)

### Project images:
- Add to: `public/images/projects/[project-slug]/hero.jpg`
- For example: `public/images/projects/arthritis-ai-platform/hero.jpg`

## 3. Update Contact Info

Edit `lib/config.ts`:

```typescript
contact: {
  email: 'your-email@example.com',  // ← Change this
  linkedin: 'https://linkedin.com/in/yourprofile',  // ← And this
  medium: 'https://medium.com/@yourprofile',  // ← And this
}
```

## What's Next?

### Edit Content
- Edit case studies in `content/case-studies/`
- Edit page content in `content/pages/`
- See README.md for detailed instructions

### Customize Design
- Colors: `tailwind.config.ts`
- Fonts: `app/layout.tsx`

### Deploy
```bash
npm run build  # Build for production
```

Then deploy to Vercel, Netlify, or any static host.

---

**Need help?** See README.md for complete documentation.

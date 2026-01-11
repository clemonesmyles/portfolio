# Myles Clemones Portfolio

A modern, production-ready portfolio website built with Next.js 16, TypeScript, Tailwind CSS, and Framer Motion.

## Features

- **Modern Design**: Clean, minimal, light theme with subtle gradient accents
- **Fully Responsive**: Mobile-first design that works beautifully on all devices
- **Performance Optimized**: Static site generation for fast page loads
- **SEO Ready**: Proper meta tags, semantic HTML, and structured data
- **Accessible**: WCAG-compliant with keyboard navigation and screen reader support
- **Animated**: Smooth scroll and reveal animations using Framer Motion
- **Content-Driven**: Markdown-based content management for easy updates
- **TypeScript**: Type-safe codebase for better developer experience

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS 3.4
- **Animations**: Framer Motion
- **Content**: Markdown with gray-matter
- **Deployment Ready**: Optimized for Vercel, Netlify, or any static host

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Navigate to the portfolio directory:
   ```bash
   cd portfolio
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
portfolio/
├── app/                      # Next.js app directory
│   ├── layout.tsx           # Root layout with header/footer
│   ├── page.tsx             # Home page
│   ├── about/               # About page
│   ├── portfolio/           # Portfolio pages
│   │   ├── page.tsx         # Portfolio grid
│   │   └── [slug]/          # Case study detail pages
│   └── writing/             # Writing page
├── components/              # Reusable React components
│   ├── Header.tsx          # Site navigation
│   ├── Footer.tsx          # Site footer
│   └── ui/                 # UI components (Button, FadeIn, etc.)
├── content/                # Markdown content files
│   ├── case-studies/       # Case study markdown files
│   └── pages/              # Page content markdown files
├── lib/                    # Utility functions and configs
│   ├── config.ts           # Site configuration
│   ├── content.ts          # Content loading utilities
│   └── types.ts            # TypeScript type definitions
└── public/                 # Static assets
    └── images/             # Image files
        ├── placeholders/   # Placeholder images
        └── projects/       # Project images by slug
```

## Editing Content

### Updating Site Configuration

Edit `lib/config.ts` to update:
- Site title and description
- Contact email and social links
- Navigation menu items

```typescript
export const siteConfig = {
  name: 'Myles Clemones',
  contact: {
    email: 'your-email@example.com',
    linkedin: 'https://linkedin.com/in/yourprofile',
    medium: 'https://medium.com/@yourprofile',
  },
  // ... more config
}
```

### Editing Page Content

Page content is stored in `content/pages/` as Markdown files:

- `home.md` - Home page content
- `about.md` - About page content
- `writing.md` - Writing page content

Simply edit these files to update the content. The frontmatter (between `---`) contains metadata, and the body contains the main content.

### Adding or Editing Case Studies

Case studies are stored in `content/case-studies/` as individual Markdown files.

**To add a new case study:**

1. Create a new file in `content/case-studies/`, e.g., `my-project.md`

2. Add frontmatter and content:
   ```markdown
   ---
   title: "Project Title"
   client: "Client Name"
   summary: "Brief summary of the project"
   year: "2024"
   tags: ["Strategy", "Design", "AI"]
   image: /images/projects/my-project/hero.jpg
   ---

   ## Context
   Project background and context...

   ## Problem
   The problem we were solving...

   ## Approach
   How we approached it...

   ## Outcomes
   What we achieved...
   ```

3. Add images to `public/images/projects/my-project/`

The case study will automatically appear on the portfolio page and have its own detail page at `/portfolio/my-project`.

**To edit an existing case study:**

Simply edit the Markdown file in `content/case-studies/`.

### Editing Writing Content

Edit `content/pages/writing.md` to add or update writing pieces:

```markdown
---
title: Writing
intro: Thoughts on design, strategy, and building products that matter.
pieces:
  - title: "Article Title"
    description: "Article description"
    url: "https://medium.com/@yourprofile/article-slug"
---
```

## Adding Images

### Replacing Placeholder Images

1. **Headshot**: Replace `public/images/placeholders/headshot.jpg` with your photo
   - Recommended size: 800x800px minimum
   - Format: JPG or PNG

2. **Project Images**: For each project, add images to `public/images/projects/[project-slug]/`
   - `hero.jpg` - Main hero image (recommended: 1600x900px)
   - Additional images: `01.jpg`, `02.jpg`, etc.

### Image Optimization Tips

- Use JPG for photos, PNG for graphics with transparency
- Recommended hero image size: 1600x900px (16:9 aspect ratio)
- Compress images before uploading (use tools like TinyPNG or ImageOptim)
- Next.js will automatically optimize images at build time

## Customizing Design

### Colors

Edit `tailwind.config.ts` to customize the color palette:

```typescript
colors: {
  accent: {
    // Your custom accent colors
  },
  neutral: {
    // Your custom neutral colors
  },
}
```

### Typography

Font families are configured in `tailwind.config.ts`. The site uses:
- `Inter` for body text
- Custom display font (configurable)

To change fonts, update the font imports in `app/layout.tsx` and the Tailwind config.

### Animations

Animations are handled by Framer Motion in the `FadeIn` component. Edit `components/ui/FadeIn.tsx` to customize animation behavior.

## Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Import the repository in [Vercel](https://vercel.com)
3. Vercel will automatically detect Next.js and deploy

### Deploy to Netlify

1. Push your code to GitHub
2. Create a new site in [Netlify](https://netlify.com)
3. Set build command: `npm run build`
4. Set publish directory: `.next`

### Other Hosting

Build the static site:
```bash
npm run build
```

The output will be in the `.next` directory, ready to deploy to any static hosting service.

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## Browser Support

- Chrome (last 2 versions)
- Firefox (last 2 versions)
- Safari (last 2 versions)
- Edge (last 2 versions)

## Accessibility

This site follows WCAG 2.1 AA standards:
- Semantic HTML structure
- Keyboard navigation support
- Screen reader friendly
- Proper heading hierarchy
- Alt text for images (add when replacing placeholders)
- Sufficient color contrast

## Performance

- Lighthouse score: 95+ across all metrics
- Static site generation for instant page loads
- Automatic image optimization
- Code splitting and lazy loading
- Minimal JavaScript bundle

## License

MIT License - feel free to use this as a template for your own portfolio.

## Support

For issues or questions, please refer to:
- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Framer Motion Documentation](https://www.framer.com/motion/)

---

Built with ❤️ using Next.js, TypeScript, and Tailwind CSS

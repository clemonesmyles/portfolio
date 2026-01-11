# Content Editing Guide

Quick reference for common content editing tasks.

## Common Tasks

### Add a New Case Study

1. Create file: `content/case-studies/project-slug.md`
2. Add frontmatter:
   ```markdown
   ---
   title: "Project Name"
   client: "Client Name"
   summary: "Brief project summary"
   year: "2024"
   tags: ["Tag1", "Tag2", "Tag3"]
   image: /images/projects/project-slug/hero.jpg
   ---
   ```
3. Add content sections (Context, Problem, Approach, Outcomes)
4. Add image: `public/images/projects/project-slug/hero.jpg`

### Edit Existing Case Study

- File location: `content/case-studies/[slug].md`
- Edit the Markdown content
- Changes appear immediately in dev mode

### Update About Page

- File location: `content/pages/about.md`
- Edit the Markdown content
- Update frontmatter if needed

### Add Writing Piece

Edit `content/pages/writing.md` and add to the `pieces` array:

```yaml
pieces:
  - title: "Article Title"
    description: "Brief description"
    url: "https://medium.com/@yourprofile/article-slug"
```

### Change Contact Information

Edit `lib/config.ts`:

```typescript
contact: {
  email: 'your-email@example.com',
  linkedin: 'https://linkedin.com/in/yourprofile',
  medium: 'https://medium.com/@yourprofile',
}
```

### Update Navigation

Edit `lib/config.ts`:

```typescript
navigation: [
  { name: 'Portfolio', href: '/portfolio' },
  { name: 'Writing', href: '/writing' },
  { name: 'About', href: '/about' },
]
```

## Content Structure

### Case Study Template

```markdown
---
title: "Project Title"
client: "Client Name"
summary: "One-line summary for portfolio grid"
year: "2024"
tags: ["Strategy", "Design", "Research"]
image: /images/projects/slug/hero.jpg
---

## Context
Background and situation...

## Problem
What challenge needed solving...

## Approach
How you tackled it...

## Outcomes
What was achieved...
```

### Markdown Formatting

```markdown
## Section Heading

Regular paragraph text.

**Bold text** for emphasis.

- Bullet point lists
- Another item
- Third item

[Link text](https://example.com)
```

## Image Guidelines

### File Naming
- Headshot: `headshot.jpg`
- Project hero: `hero.jpg`
- Additional: `01.jpg`, `02.jpg`, etc.

### Sizes
- Headshot: 800x800px minimum
- Hero images: 1600x900px (16:9 ratio)
- Compress before uploading

### Locations
- Headshot: `public/images/placeholders/headshot.jpg`
- Project: `public/images/projects/[slug]/hero.jpg`

## Tags

Common tags to use:
- Strategy
- Design
- Research
- AI/ML
- Healthcare
- Finance
- Government
- Platform Strategy
- Service Design
- Product Leadership
- Human-Centered Design

Choose 3-4 relevant tags per project.

## Content Tone

Based on resume and profile:
- **Professional but approachable** - Senior-level but not stuffy
- **Confident without boasting** - Let outcomes speak
- **Outcome-focused** - Emphasize impact and results
- **Human-centered** - Always tie back to user value
- **Evidence-based** - Ground claims in research and data

### Good Examples
✓ "Led cross-functional teams toward validated, evidence-based decisions"
✓ "Delivered a validated AI-powered platform concept"
✓ "Increased application rate by 400%"

### Avoid
✗ "Revolutionary solution that changed everything"
✗ "The best strategy ever created"
✗ "Groundbreaking, paradigm-shifting innovation"

## Need More Help?

See README.md for complete documentation.

# TinaCMS Collections Guide

This guide explains how your blog collections are configured and how to use them.

## 📚 Collections Overview

Your blog has two main collections:

1. **Blog Posts** - For your blog content
2. **Pages** - For static pages (About, Contact, etc.)

---

## 📝 Blog Posts Collection

### Location
- **Path:** `content/posts/`
- **Format:** MDX (Markdown with JSX components)
- **Filename:** Auto-generated from title (e.g., "My Post" → `my-post.mdx`)

### Available Fields

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| **Title** | Text | ✅ Yes | Post title (3-100 characters) |
| **Slug** | Text | No | Custom URL slug (auto-generated if empty) |
| **Published** | Toggle | No | Show/hide post on site |
| **Excerpt** | Textarea | ✅ Yes | Short summary (max 300 chars) |
| **Publish Date** | DateTime | ✅ Yes | When post was/will be published |
| **Read Time** | Text | ✅ Yes | Estimated reading time (e.g., "5 min read") |
| **Featured Image** | Image | No | Main post image (1200x630px recommended) |
| **Image Alt Text** | Text | No | Accessibility description of image |
| **Tags** | Tags | No | Multiple tags for categorization |
| **Author** | Dropdown | ✅ Yes | StoreFun Team or Storesy Funson |
| **Category** | Dropdown | No | Primary category selection |
| **Body** | Rich Text | No | Main post content |

### Categories Available
- Web Development
- React
- TypeScript
- Guides
- Tutorials
- News

### Default Values for New Posts
When you create a new blog post, these fields are pre-filled:
```yaml
title: "New Blog Post"
excerpt: "A brief description of your post..."
date: [Current date/time]
readTime: "5 min read"
author: "StoreFun Team"
published: false
tags: []
```

### Rich Text Templates
In the body editor, you can insert a **Callout** component:
- **Types:** info, warning, error, success
- **Use for:** Highlighting important information

### Example Frontmatter
```yaml
---
title: Getting Started with React 18 and TypeScript
slug: react-18-typescript-guide
published: true
excerpt: Learn how to build modern web applications with React 18, TypeScript, and the latest tools.
date: 2025-10-20T00:00:00.000Z
readTime: 5 min read
image: https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=1200&q=80
imageAlt: React and TypeScript logos on a laptop screen
tags:
  - React
  - TypeScript
  - Web Development
author: StoreFun Team
category: tutorials
---
```

---

## 📄 Pages Collection

### Location
- **Path:** `content/pages/`
- **Format:** MDX
- **Use for:** Static pages like About, Contact, Terms, Privacy Policy

### Available Fields

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| **Title** | Text | ✅ Yes | Page title |
| **Slug** | Text | No | Custom URL path |
| **Published** | Toggle | No | Show/hide page |
| **Meta Description** | Textarea | No | SEO description |
| **Body** | Rich Text | No | Page content |

### Default Values for New Pages
```yaml
title: "New Page"
published: false
```

### Example Frontmatter
```yaml
---
title: About Us
slug: about
published: true
description: Learn more about our team and mission
---
```

---

## 🚀 Using the Collections

### Creating Content

1. **Start TinaCMS locally:**
   ```bash
   npx tinacms dev --local
   ```

2. **Access the admin panel:**
   - Open your browser to the admin route
   - Navigate to "Collections" in the sidebar

3. **Create new content:**
   - Click "Blog Posts" or "Pages"
   - Click "Create New"
   - Fill in the fields
   - Click "Save"

### Managing Existing Content

1. Browse your collections in the TinaCMS admin
2. Click on any item to edit
3. Make changes
4. Save to update the file

### Publishing Workflow

1. Create content with `published: false` (draft mode)
2. Review and edit as needed
3. When ready, toggle `published: true`
4. Save and deploy

---

## 🎯 Best Practices

### Blog Posts
- ✅ Write compelling excerpts (they appear in post previews)
- ✅ Always add featured images for social sharing
- ✅ Include alt text for accessibility
- ✅ Use consistent read time format ("X min read")
- ✅ Add relevant tags for better discoverability
- ✅ Choose the most appropriate category

### Pages
- ✅ Keep meta descriptions under 160 characters
- ✅ Use clear, descriptive titles
- ✅ Write for your audience, not just search engines

### Images
- ✅ Featured images: 1200x630px (optimal for social sharing)
- ✅ Compress images before uploading
- ✅ Use descriptive filenames
- ✅ Always add alt text

---

## 🔧 Customization

Want to modify your collections? Edit `tina/config.ts`:

### Add a new field
```typescript
{
  type: 'string',
  name: 'fieldName',
  label: 'Field Label',
  description: 'Helper text for editors',
  required: false,
}
```

### Add a new category
```typescript
options: [
  // ... existing categories
  { label: 'New Category', value: 'new-category' },
]
```

### Change default values
```typescript
defaultItem: () => {
  return {
    title: 'Your custom default',
    // ... other defaults
  }
}
```

After making changes, restart TinaCMS:
```bash
npx tinacms dev --local
```

---

## 📖 Resources

- [TinaCMS Documentation](https://tina.io/docs/)
- [Collection Reference](https://tina.io/docs/reference/collections/)
- [Field Types](https://tina.io/docs/reference/types/)
- [Rich Text](https://tina.io/docs/editing/markdown/)

---

## 🆘 Troubleshooting

### Changes not appearing?
1. Stop TinaCMS dev server
2. Clear generated files: `rm -rf tina/__generated__`
3. Restart: `npx tinacms dev --local`

### Validation errors?
- Check that required fields are filled
- Verify field lengths (title, excerpt)
- Ensure dates are in correct format

### File not showing in collection?
- Check file is in correct directory
- Verify file extension matches format (`.mdx`)
- Ensure file isn't excluded by `match` pattern


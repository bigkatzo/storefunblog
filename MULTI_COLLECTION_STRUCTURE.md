# Multi-Collection Structure Guide

## 🎯 Your New Collection Structure

Your blog now has **5 separate collections**, each with its own folder and URL pattern!

---

## 📂 Folder Structure

```
content/
├── tutorials/          → /tutorials/{post-slug}
│   └── (your tutorial posts)
│
├── guides/             → /guides/{post-slug}
│   └── (your guide posts)
│
├── news/               → /news/{post-slug}
│   └── (your news articles)
│
├── reviews/            → /reviews/{post-slug}
│   └── (your product reviews)
│
├── posts/              → /blog/{post-slug}  (Legacy)
│   ├── getting-started-react-typescript.mdx
│   ├── framer-motion-animations.mdx
│   ├── mastering-tailwind-css.mdx
│   └── merchant-guide.mdx
│
└── pages/              → /{page-slug}
    └── (your static pages like About, Contact)
```

---

## 🔗 URL Structure

Each collection generates URLs in this format: `/{collection}/{post-slug}`

### Examples

| Collection | File Path | Generated URL |
|------------|-----------|---------------|
| **Tutorials** | `content/tutorials/react-basics.mdx` | `/tutorials/react-basics` |
| **Guides** | `content/guides/setup-guide.mdx` | `/guides/setup-guide` |
| **News** | `content/news/product-launch.mdx` | `/news/product-launch` |
| **Reviews** | `content/reviews/best-tools-2025.mdx` | `/reviews/best-tools-2025` |
| **Legacy Posts** | `content/posts/old-post.mdx` | `/blog/old-post` |
| **Pages** | `content/pages/about.mdx` | `/about` |

---

## 📝 Collection Details

### 1️⃣ Tutorials Collection

**Path:** `content/tutorials/`  
**URL Pattern:** `/tutorials/{slug}`  
**Purpose:** Step-by-step learning content

**Unique Field:**
- `difficulty` - Beginner, Intermediate, or Advanced

**Default Values:**
- Read Time: "10 min read"
- Status: Unpublished (draft)

**Example:**
```mdx
---
title: Getting Started with React Hooks
slug: react-hooks-guide
published: true
excerpt: Learn how to use React Hooks effectively
date: 2025-10-24T00:00:00.000Z
readTime: 10 min read
difficulty: Beginner
author: StoreFun Team
tags:
  - React
  - JavaScript
  - Hooks
---

Your tutorial content here...
```

**Will generate URL:** `/tutorials/react-hooks-guide`

---

### 2️⃣ Guides Collection

**Path:** `content/guides/`  
**URL Pattern:** `/guides/{slug}`  
**Purpose:** How-to articles and reference guides

**Default Values:**
- Read Time: "7 min read"
- Status: Unpublished (draft)

**Example:**
```mdx
---
title: How to Deploy Your React App
slug: deploy-react-app
published: true
excerpt: Complete guide to deploying your React application
date: 2025-10-24T00:00:00.000Z
readTime: 7 min read
author: StoreFun Team
tags:
  - Deployment
  - React
---

Your guide content here...
```

**Will generate URL:** `/guides/deploy-react-app`

---

### 3️⃣ News Collection

**Path:** `content/news/`  
**URL Pattern:** `/news/{slug}`  
**Purpose:** Updates, announcements, and news articles

**Default Values:**
- Read Time: "3 min read"
- Status: Unpublished (draft)

**Example:**
```mdx
---
title: React 19 Released
slug: react-19-released
published: true
excerpt: The latest version of React is here with amazing features
date: 2025-10-24T00:00:00.000Z
readTime: 3 min read
author: StoreFun Team
tags:
  - React
  - News
---

Your news content here...
```

**Will generate URL:** `/news/react-19-released`

---

### 4️⃣ Reviews Collection

**Path:** `content/reviews/`  
**URL Pattern:** `/reviews/{slug}`  
**Purpose:** Product reviews, tool comparisons, evaluations

**Unique Field:**
- `rating` - Number from 1 to 5 (required)

**Default Values:**
- Read Time: "8 min read"
- Rating: 4
- Status: Unpublished (draft)

**Example:**
```mdx
---
title: VS Code vs WebStorm - Which is Better?
slug: vscode-vs-webstorm
published: true
excerpt: A comprehensive comparison of two popular code editors
date: 2025-10-24T00:00:00.000Z
readTime: 8 min read
rating: 4.5
author: StoreFun Team
tags:
  - Tools
  - Editors
---

Your review content here...
```

**Will generate URL:** `/reviews/vscode-vs-webstorm`

---

### 5️⃣ Blog Posts (Legacy) Collection

**Path:** `content/posts/`  
**URL Pattern:** `/blog/{slug}`  
**Purpose:** Existing blog posts (kept for backward compatibility)

**Note:** This collection maintains your existing posts. You can keep using it or migrate content to the new collections.

---

### 6️⃣ Pages Collection

**Path:** `content/pages/`  
**URL Pattern:** `/{slug}`  
**Purpose:** Static pages (About, Contact, Terms, Privacy, etc.)

---

## 🚀 How to Use

### Creating Content in TinaCMS

1. **Start TinaCMS:**
   ```bash
   npx tinacms dev --local
   ```

2. **Access the admin panel** (usually at `/admin`)

3. **Choose a collection:**
   - Click "Tutorials" for tutorial content
   - Click "Guides" for how-to guides
   - Click "News" for news articles
   - Click "Reviews" for product reviews
   - Click "Pages" for static pages

4. **Create new content:**
   - Click "Create New"
   - Fill in the fields
   - Click "Save"

5. **File is auto-created** in the correct folder with a slug-based filename

---

## 📋 Quick Reference

### URL Patterns Cheat Sheet

```
Tutorials:  /tutorials/post-name
Guides:     /guides/post-name
News:       /news/post-name
Reviews:    /reviews/post-name
Legacy:     /blog/post-name
Pages:      /page-name
```

### Folder Mapping

```
content/tutorials/  → Tutorials Collection
content/guides/     → Guides Collection
content/news/       → News Collection
content/reviews/    → Reviews Collection
content/posts/      → Blog Posts (Legacy)
content/pages/      → Pages Collection
```

---

## 🔄 Migrating Existing Posts

Want to move posts from `content/posts/` to the new collections?

### Option 1: Move Manually

```bash
# Move a tutorial from posts to tutorials
mv content/posts/react-tutorial.mdx content/tutorials/react-tutorial.mdx

# Update frontmatter if needed (remove category field, add difficulty for tutorials)
```

### Option 2: Copy and Update

1. Open post in TinaCMS from "Blog Posts (Legacy)"
2. Copy the content
3. Create new post in appropriate collection (Tutorials, Guides, etc.)
4. Paste and update content
5. Delete old post

---

## ⚙️ Customizing Collections

### Add a New Collection

Edit `tina/config.ts` and add a new collection:

```typescript
{
  name: 'podcast',           // Internal name
  label: 'Podcasts',         // Display name
  path: 'content/podcasts',  // Folder path
  format: 'mdx',             // File format
  ui: {
    router: ({ document }) => {
      return `/podcasts/${document._sys.filename}`  // URL pattern
    },
  },
  fields: [
    // Your fields here
  ],
}
```

Then create the folder:
```bash
mkdir -p content/podcasts
```

### Modify URL Patterns

Change the `router` function in any collection:

```typescript
ui: {
  router: ({ document }) => {
    // Custom URL pattern
    return `/custom-path/${document._sys.filename}`
  },
}
```

### Change Folder Paths

Update the `path` property:

```typescript
{
  name: 'tutorial',
  path: 'content/learning/tutorials',  // Nested path
  // ...
}
```

---

## 🎨 Adding Custom Fields

### Example: Add "Series" field to Tutorials

```typescript
// In the tutorial collection fields array:
{
  type: 'string',
  name: 'series',
  label: 'Series Name',
  description: 'If part of a series, enter the series name',
}
```

### Example: Add "Product Link" to Reviews

```typescript
// In the review collection fields array:
{
  type: 'string',
  name: 'productUrl',
  label: 'Product URL',
  description: 'Link to the product being reviewed',
}
```

---

## 📊 Collections Comparison

| Collection | Read Time Default | Unique Field | Best For |
|------------|-------------------|--------------|----------|
| **Tutorials** | 10 min | `difficulty` | Step-by-step learning |
| **Guides** | 7 min | - | How-to articles |
| **News** | 3 min | - | Quick updates |
| **Reviews** | 8 min | `rating` | Product evaluations |
| **Legacy Posts** | 5 min | - | Existing content |
| **Pages** | - | `description` | Static pages |

---

## 🔍 Finding Content

### By Collection in TinaCMS
- Click collection name in sidebar
- Browse or search within that collection

### By Folder
- Navigate to `content/{collection-name}/`
- All files for that collection are there

### By URL Pattern
- Tutorials: Visit `/tutorials` on your site
- Guides: Visit `/guides`
- News: Visit `/news`
- Reviews: Visit `/reviews`

---

## 💡 Best Practices

### 1. Choose the Right Collection

✅ **Tutorial:** "Building a Todo App with React"  
✅ **Guide:** "How to Set Up ESLint"  
✅ **News:** "New TypeScript 5.0 Features"  
✅ **Review:** "Comparing Top React Frameworks"

### 2. Use Consistent Slugs

- Lowercase letters
- Hyphens for spaces
- No special characters
- Descriptive but concise

**Good:**
- `getting-started-with-react`
- `ultimate-guide-to-hooks`
- `react-18-released`

**Bad:**
- `Getting_Started_React!!!`
- `post123`
- `asdf`

### 3. Keep Related Content Together

If you have a series of tutorials, put them all in the tutorials collection and use tags or a custom "series" field to link them.

### 4. Use Tags Effectively

Add relevant tags to make content discoverable:
- Technology tags: `React`, `TypeScript`, `Node.js`
- Topic tags: `Beginner`, `Performance`, `Testing`
- Format tags: `Video Tutorial`, `Quick Tip`

---

## 🆘 Troubleshooting

### Collection not showing up?

1. Check folder exists: `ls content/`
2. Restart TinaCMS: `npx tinacms dev --local`
3. Clear cache and regenerate

### Wrong URL pattern?

Check the `router` function in your collection config:
```typescript
ui: {
  router: ({ document }) => {
    return `/collection-name/${document._sys.filename}`
  },
}
```

### File in wrong folder?

Move it manually:
```bash
mv content/wrong-folder/file.mdx content/correct-folder/file.mdx
```

Then refresh TinaCMS admin.

---

## 📚 Next Steps

1. ✅ **Test each collection** - Create a test post in each
2. ✅ **Migrate existing content** - Move posts to appropriate collections
3. ✅ **Update your frontend** - Add routes for new collections
4. ✅ **Customize as needed** - Add fields, change URLs, etc.

---

## 🎉 You're All Set!

Your blog now has a professional multi-collection structure:

```
✨ 4 New Content Collections (Tutorials, Guides, News, Reviews)
📁 Organized Folder Structure
🔗 Clean URL Patterns (/collection/post-slug)
🎯 Collection-Specific Fields
⚡ Auto-Generated Slugs
📝 Smart Defaults
```

Start creating content and enjoy your organized blog! 🚀


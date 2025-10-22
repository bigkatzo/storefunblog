# TinaCMS Setup Guide

TinaCMS is now installed! Follow these steps to get visual content editing working.

## 🎯 Quick Start Options

### Option 1: Use Without TinaCMS Cloud (Local Only)
Your blog already works perfectly with the MDX files in `content/posts/`. You can:
- Edit `.mdx` files directly in your code editor
- No signup required
- Full control over content

**You're done!** Your blog is fully functional.

---

### Option 2: Enable Visual Editing with TinaCMS Cloud

To get the visual editor working on your live site:

#### Step 1: Create a TinaCMS Account

1. Visit https://tina.io
2. Click "Get Started" or "Sign Up"
3. Sign up with GitHub (recommended) or email
4. Create a new project

#### Step 2: Get Your Credentials

After creating a project, you'll receive:
- **Client ID** (looks like: `<random-string>`)
- **Token** (a long string)

#### Step 3: Initialize TinaCMS

Run this command to set up TinaCMS:

```bash
npm run tina:init
```

This will:
- Generate the TinaCMS configuration
- Create the `.tina` folder
- Set up the schema for your content

#### Step 4: Add Your Credentials

Update `tina/config.ts` with your credentials:

```typescript
export default defineConfig({
  branch: 'master',
  clientId: 'YOUR_CLIENT_ID_HERE',  // Add your client ID
  token: 'YOUR_TOKEN_HERE',         // Add your token
  // ... rest of config
})
```

#### Step 5: Run TinaCMS Dev Mode

```bash
npm run tina:dev
```

This will:
- Start your Vite dev server
- Start the TinaCMS admin interface
- Open the visual editor

#### Step 6: Access the CMS

Visit: http://localhost:3000/admin

You'll be able to:
- ✏️ Edit blog posts visually
- 📝 Create new posts
- 🖼️ Upload images
- 👀 Preview changes in real-time

---

## 📁 Current File Structure

```
storefunblog/
├── content/
│   └── posts/          # Your blog posts (MDX format)
│       ├── getting-started-react-typescript.mdx
│       ├── mastering-tailwind-css.mdx
│       └── framer-motion-animations.mdx
├── tina/
│   └── config.ts       # TinaCMS configuration
└── src/
    ├── lib/
    │   └── posts.ts    # Blog post data loader
    └── types/
        └── blog.ts     # TypeScript types
```

## 📝 Content Management

### Without TinaCMS Cloud (Current Setup)

Edit files in `content/posts/`:

```mdx
---
title: Your Post Title
excerpt: Short description
date: 2025-10-22T00:00:00.000Z
readTime: 5 min read
image: https://example.com/image.jpg
tags:
  - React
  - TypeScript
author: Your Name
---

# Your Content Here

Write your blog post in Markdown...
```

### With TinaCMS Cloud

Use the visual editor at `/admin` to:
- Create/edit posts with a rich text editor
- Upload and manage images
- Preview changes live
- Publish directly to Git

## 🚀 Deployment

### Deploy Without TinaCMS
Your blog works out of the box on:
- **Vercel**: `vercel --prod`
- **Netlify**: `netlify deploy --prod`
- **GitHub Pages**: Build and deploy `dist/`

### Deploy With TinaCMS
Additional steps:
1. Add environment variables (clientId, token) to your hosting platform
2. Run `npm run tina:build` before deploying
3. Configure webhooks in TinaCMS for auto-deploys

## 🔧 Commands Reference

```bash
# Development
npm run dev              # Run blog without TinaCMS
npm run tina:dev         # Run blog WITH TinaCMS visual editor

# TinaCMS
npm run tina:init        # Initialize TinaCMS (one-time)
npm run tina:build       # Build TinaCMS for production

# Build & Deploy
npm run build            # Build for production
npm run preview          # Preview production build
```

## 📚 Adding New Blog Posts

### Method 1: Add MDX File (No TinaCMS needed)

Create a new file in `content/posts/my-new-post.mdx`:

```mdx
---
title: My New Post
excerpt: This is my new post
date: 2025-10-22T00:00:00.000Z
readTime: 5 min read
tags:
  - Tag1
author: Your Name
---

# Content goes here
```

Then add it to `src/lib/posts.ts`:

```typescript
export const blogPosts: BlogPost[] = [
  {
    title: 'My New Post',
    excerpt: 'This is my new post',
    date: 'Oct 22, 2025',
    readTime: '5 min read',
    slug: 'my-new-post',
    tags: ['Tag1'],
    author: 'Your Name',
  },
  // ... other posts
]
```

### Method 2: Use TinaCMS (After setup)

1. Go to `/admin`
2. Click "Create New Post"
3. Fill in the fields
4. Click "Save"

## 🆘 Troubleshooting

### "TinaCMS is not configured"
- You need to add clientId and token to `tina/config.ts`
- Or continue using MDX files without TinaCMS

### "Can't access /admin"
- Make sure you're running `npm run tina:dev` (not just `npm run dev`)
- TinaCMS admin runs on a separate port

### "Images not loading"
- For local development, use external image URLs
- Or set up TinaCMS media to handle uploads

## 🎓 Next Steps

**Current Status:** ✅ Blog is fully functional with MDX files

**Optional:** Set up TinaCMS Cloud for visual editing

**Recommended:** Start by editing MDX files, add TinaCMS later if needed

## 📖 Resources

- [TinaCMS Docs](https://tina.io/docs)
- [Markdown Guide](https://www.markdownguide.org)
- [MDX Documentation](https://mdxjs.com)

---

**Need help?** Check the main README.md or open an issue on GitHub!


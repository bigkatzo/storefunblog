# TinaCMS Collections & Path Setup Guide

## 📍 Understanding Collection Paths

The `path` property tells TinaCMS where to find and store your content files. Here's how it works:

---

## 🏗️ Basic Collection Structure

```typescript
{
  name: 'post',           // Internal name (used in GraphQL)
  label: 'Blog Posts',    // Display name in the editor
  path: 'content/posts',  // Where files are stored
  format: 'mdx',          // File extension (.mdx, .md, .json, etc.)
  fields: [...]           // Your fields
}
```

### How Path Works
- **Relative to project root** (where you run `tinacms dev`)
- **No leading slash** - use `content/posts` not `/content/posts`
- **No trailing slash** - use `content/posts` not `content/posts/`
- Files will be at: `<project-root>/<path>/<filename>.<format>`

---

## 📂 Your Current Setup

### Blog Posts Collection
```typescript
{
  name: 'post',
  path: 'content/posts',    // Files at: content/posts/*.mdx
  format: 'mdx',
}
```

**Result:** Files stored at `content/posts/my-post.mdx`

### Pages Collection
```typescript
{
  name: 'page',
  path: 'content/pages',    // Files at: content/pages/*.mdx
  format: 'mdx',
}
```

**Result:** Files stored at `content/pages/about.mdx`

---

## 🎯 Path Configuration Examples

### Example 1: Simple Path
```typescript
{
  name: 'post',
  path: 'content/blog',
  format: 'md',
}
```
✅ Files: `content/blog/my-post.md`

### Example 2: Nested Path
```typescript
{
  name: 'tutorial',
  path: 'content/learning/tutorials',
  format: 'mdx',
}
```
✅ Files: `content/learning/tutorials/react-basics.mdx`

### Example 3: Root Level
```typescript
{
  name: 'config',
  path: 'data',
  format: 'json',
}
```
✅ Files: `data/site-config.json`

### Example 4: Co-located Collections
You can have multiple collections in the same directory!

```typescript
{
  name: 'draft',
  path: 'content/posts',
  format: 'mdx',
  match: {
    include: 'draft-*',  // Only files starting with "draft-"
  },
}
```
✅ Files: `content/posts/draft-my-post.mdx`

---

## 🔍 Using Match Patterns

The `match` property lets you filter which files belong to a collection.

### Include Pattern
Only include files matching a pattern:

```typescript
{
  path: 'content/posts',
  match: {
    include: '*',  // All files directly in posts/ (not subdirectories)
  },
}
```

**Patterns:**
- `*` - All files in the directory (not subdirectories)
- `2024-*` - Files starting with "2024-"
- `{post,article}` - Files named "post" or "article"
- `tutorial-*` - Files starting with "tutorial-"

### Exclude Pattern
Exclude specific files or subdirectories:

```typescript
{
  path: 'content/posts',
  match: {
    exclude: '**/drafts/**',  // Exclude drafts subdirectory
  },
}
```

**Common exclusions:**
- `**/drafts/**` - Exclude drafts folder
- `**/archive/**` - Exclude archive folder
- `**/index` - Exclude index files
- `temp-*` - Exclude temp files

### Combined Patterns
```typescript
{
  path: 'content/posts',
  match: {
    include: '2024-*',        // Only 2024 posts
    exclude: '2024-draft-*',  // But not drafts
  },
}
```

---

## 🛠️ Common Setup Scenarios

### Scenario 1: Blog with Categories in Folders

**Structure:**
```
content/posts/
  ├── tutorials/
  │   ├── react-basics.mdx
  │   └── vue-intro.mdx
  ├── news/
  │   └── product-launch.mdx
  └── guides/
      └── setup-guide.mdx
```

**Collection Setup:**
```typescript
collections: [
  {
    name: 'tutorial',
    label: 'Tutorials',
    path: 'content/posts/tutorials',
    format: 'mdx',
  },
  {
    name: 'news',
    label: 'News',
    path: 'content/posts/news',
    format: 'mdx',
  },
  {
    name: 'guide',
    label: 'Guides',
    path: 'content/posts/guides',
    format: 'mdx',
  },
]
```

### Scenario 2: Flat Structure with All Posts Together

**Structure:**
```
content/posts/
  ├── react-basics.mdx
  ├── vue-intro.mdx
  ├── product-launch.mdx
  └── setup-guide.mdx
```

**Collection Setup:**
```typescript
collections: [
  {
    name: 'post',
    label: 'All Posts',
    path: 'content/posts',
    format: 'mdx',
    match: {
      include: '*',  // Only root level files
    },
  },
]
```

### Scenario 3: Separate Published and Draft Posts

**Structure:**
```
content/
  ├── published/
  │   └── my-post.mdx
  └── drafts/
      └── draft-post.mdx
```

**Collection Setup:**
```typescript
collections: [
  {
    name: 'published_post',
    label: 'Published Posts',
    path: 'content/published',
    format: 'mdx',
  },
  {
    name: 'draft_post',
    label: 'Draft Posts',
    path: 'content/drafts',
    format: 'mdx',
  },
]
```

### Scenario 4: Year-Based Organization

**Structure:**
```
content/posts/
  ├── 2024/
  │   └── my-post.mdx
  └── 2025/
      └── new-post.mdx
```

**Collection Setup:**
```typescript
collections: [
  {
    name: 'post_2024',
    label: '2024 Posts',
    path: 'content/posts/2024',
    format: 'mdx',
  },
  {
    name: 'post_2025',
    label: '2025 Posts',
    path: 'content/posts/2025',
    format: 'mdx',
  },
]
```

### Scenario 5: Multiple Content Types

**Structure:**
```
content/
  ├── posts/
  ├── pages/
  ├── authors/
  └── settings/
```

**Collection Setup:**
```typescript
collections: [
  {
    name: 'post',
    path: 'content/posts',
    format: 'mdx',
  },
  {
    name: 'page',
    path: 'content/pages',
    format: 'mdx',
  },
  {
    name: 'author',
    path: 'content/authors',
    format: 'json',
  },
  {
    name: 'settings',
    path: 'content/settings',
    format: 'json',
    ui: {
      allowedActions: {
        create: false,    // Can't create new settings
        delete: false,    // Can't delete settings
      },
    },
  },
]
```

---

## 🔄 Changing Paths

### Step 1: Update Config
Edit `tina/config.ts`:

```typescript
{
  name: 'post',
  path: 'content/blog',  // Changed from 'content/posts'
  format: 'mdx',
}
```

### Step 2: Move Your Files
```bash
# Move your existing files
mv content/posts content/blog
```

### Step 3: Regenerate Schema
```bash
# Stop TinaCMS if running, then:
npx tinacms dev --local
```

---

## ⚙️ Advanced Path Features

### Custom Filename Generation

Control how filenames are created:

```typescript
{
  path: 'content/posts',
  ui: {
    filename: {
      // Generate filename from title
      slugify: (values) => {
        const date = new Date().toISOString().split('T')[0]
        const slug = values?.title
          ?.toLowerCase()
          .replace(/[^a-z0-9]+/g, '-')
          .replace(/(^-|-$)/g, '')
        return `${date}-${slug}`
      },
    },
  },
}
```

**Result:** Creates files like `2025-10-24-my-post-title.mdx`

### Router Configuration

Define URL structure for preview/navigation:

```typescript
{
  path: 'content/posts',
  ui: {
    router: ({ document }) => {
      // URL: /blog/{filename}
      return `/blog/${document._sys.filename}`
    },
  },
}
```

---

## 🚨 Common Mistakes

### ❌ Wrong: Absolute Path
```typescript
path: '/content/posts'  // Don't use leading slash
```

### ✅ Correct: Relative Path
```typescript
path: 'content/posts'
```

---

### ❌ Wrong: Trailing Slash
```typescript
path: 'content/posts/'  // Don't use trailing slash
```

### ✅ Correct: No Trailing Slash
```typescript
path: 'content/posts'
```

---

### ❌ Wrong: Path Doesn't Match Format
```typescript
{
  path: 'content/posts',
  format: 'json',  // But files are .mdx!
}
```

### ✅ Correct: Match Your Files
```typescript
{
  path: 'content/posts',
  format: 'mdx',  // Matches your .mdx files
}
```

---

### ❌ Wrong: Multiple Target Directories
```typescript
path: ['content/posts', 'content/blog']  // Not supported!
```

### ✅ Correct: Separate Collections
```typescript
collections: [
  { path: 'content/posts', ... },
  { path: 'content/blog', ... },
]
```

---

## 🔧 Quick Reference

| Property | Description | Example |
|----------|-------------|---------|
| `path` | Directory where files live | `'content/posts'` |
| `format` | File extension | `'mdx'`, `'md'`, `'json'` |
| `match.include` | Files to include | `'*'`, `'2024-*'` |
| `match.exclude` | Files to exclude | `'**/drafts/**'` |
| `ui.filename.slugify` | Custom filename generation | Function returning string |
| `ui.router` | URL pattern for previews | Function returning URL |

---

## 📝 Your Current Configuration

**Location:** `tina/config.ts`

```typescript
collections: [
  {
    name: 'post',
    label: 'Blog Posts',
    path: 'content/posts',         // ← Your posts directory
    format: 'mdx',                 // ← .mdx files
    match: {
      exclude: '**/Sup?/**',       // ← Excludes Sup? subfolder
    },
  },
  {
    name: 'page',
    label: 'Pages',
    path: 'content/pages',         // ← Your pages directory
    format: 'mdx',                 // ← .mdx files
  },
]
```

---

## 🎯 Testing Your Setup

### 1. Check File Discovery
Start TinaCMS and check the admin:
```bash
npx tinacms dev --local
```

Visit admin panel and verify:
- ✅ Existing files appear in collections
- ✅ File counts match expectations
- ✅ No unexpected files appear

### 2. Test Create
- Create a new post/page
- Check it appears in the correct directory
- Verify the filename format

### 3. Test Edit
- Edit an existing file
- Save changes
- Verify the file updated correctly

---

## 📚 Next Steps

1. **Plan your content structure** - Decide on folder organization
2. **Update paths in config** - Set correct paths in `tina/config.ts`
3. **Organize existing files** - Move files to match new structure
4. **Test in TinaCMS** - Verify everything works
5. **Document your structure** - Keep this guide updated!

---

## 🆘 Troubleshooting

**Files not showing up?**
- Check path matches your directory structure
- Verify format matches file extensions
- Check for typos in path
- Look for `match` patterns that might exclude files

**Can't create new files?**
- Ensure directory exists
- Check folder permissions
- Verify path in config

**Files in wrong place?**
- Check `ui.filename.slugify` function
- Verify path property
- Look for typos

**Collection overlap warnings?**
- Use `match.include` or `match.exclude` to separate collections
- Or use different paths for each collection


# Managing TinaCMS Collections

## 📍 Where Collections Are Managed

All collections are defined in **ONE FILE ONLY**:

```
tina/config.ts
```

**Important:** You **cannot** create or delete collections from the TinaCMS admin UI. You must edit the config file directly.

---

## 📂 Current Location

Your collections are at **line 26** in `tina/config.ts`:

```typescript
schema: {
  collections: [
    // Your collections are defined here
  ],
}
```

---

## ➕ How to CREATE a New Collection

### Step 1: Open the Config File

```bash
# Open in your editor
code tina/config.ts

# Or from terminal
nano tina/config.ts
```

### Step 2: Add Collection to Array

Find the `collections: [` array around line 26 and add a new collection object:

```typescript
schema: {
  collections: [
    // ... existing collections ...
    
    // Add your new collection here:
    {
      name: 'podcast',              // Internal name (GraphQL)
      label: 'Podcasts',            // Display name in admin UI
      path: 'content/podcasts',     // Folder where files are stored
      format: 'mdx',                // File format (.mdx, .md, .json)
      ui: {
        router: ({ document }) => {
          return `/podcasts/${document._sys.filename}`  // URL pattern
        },
        filename: {
          slugify: (values) => {
            return `${values?.title?.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')}`
          },
        },
      },
      defaultItem: () => {
        return {
          title: 'New Podcast Episode',
          date: new Date().toISOString(),
          published: false,
        }
      },
      fields: [
        {
          type: 'string',
          name: 'title',
          label: 'Episode Title',
          isTitle: true,
          required: true,
        },
        {
          type: 'string',
          name: 'excerpt',
          label: 'Episode Description',
          ui: {
            component: 'textarea',
          },
        },
        {
          type: 'datetime',
          name: 'date',
          label: 'Publish Date',
          required: true,
        },
        {
          type: 'string',
          name: 'audioUrl',
          label: 'Audio File URL',
          required: true,
        },
        {
          type: 'rich-text',
          name: 'body',
          label: 'Show Notes',
          isBody: true,
        },
      ],
    },
  ],
}
```

### Step 3: Create the Folder

```bash
mkdir -p content/podcasts
```

### Step 4: Restart TinaCMS

```bash
# Stop current server (Ctrl+C)
# Then restart:
npx tinacms dev --local
```

### Step 5: Verify

- Open TinaCMS admin
- You should see "Podcasts" in the sidebar
- Click it to create your first podcast episode

---

## ❌ How to DELETE a Collection

### Step 1: Open the Config File

```bash
code tina/config.ts
```

### Step 2: Remove Collection Object

Find the collection you want to delete in the `collections` array and delete the entire object (including all its fields).

**Example - Deleting the Reviews collection:**

```typescript
// BEFORE:
schema: {
  collections: [
    { name: 'tutorial', ... },
    { name: 'guide', ... },
    { name: 'review', ... },    // ← DELETE THIS ENTIRE OBJECT
    { name: 'post', ... },
  ],
}

// AFTER:
schema: {
  collections: [
    { name: 'tutorial', ... },
    { name: 'guide', ... },
    // Reviews collection removed
    { name: 'post', ... },
  ],
}
```

### Step 3: Restart TinaCMS

```bash
npx tinacms dev --local
```

### Step 4: (Optional) Remove Folder

If you want to delete the content files too:

```bash
# Be careful! This permanently deletes files
rm -rf content/reviews
```

**Note:** The collection will disappear from the TinaCMS admin UI, but existing files remain unless you delete them manually.

---

## ✏️ How to MODIFY a Collection

### Change Collection Name in Admin UI

Edit the `label` property:

```typescript
{
  name: 'tutorial',           // Internal name (don't change)
  label: 'Learning Paths',    // ← Change this (shows in UI)
  // ...
}
```

### Change URL Pattern

Edit the `router` function:

```typescript
{
  ui: {
    router: ({ document }) => {
      return `/learn/${document._sys.filename}`  // ← Changed from /tutorials/
    },
  },
}
```

### Change Folder Location

Edit the `path` property:

```typescript
{
  path: 'content/learning/tutorials',  // ← Changed folder
}
```

**Then move your files:**
```bash
mv content/tutorials content/learning/tutorials
```

### Add a New Field

Add to the `fields` array:

```typescript
{
  fields: [
    // ... existing fields ...
    {
      type: 'number',
      name: 'duration',
      label: 'Duration (minutes)',
      description: 'How long does this take?',
    },
  ],
}
```

### Remove a Field

Delete the field object from the `fields` array:

```typescript
{
  fields: [
    { type: 'string', name: 'title', ... },
    // { type: 'string', name: 'difficulty', ... },  ← Delete this
    { type: 'string', name: 'excerpt', ... },
  ],
}
```

---

## 🗂️ Your Current Collections

Here's what you have now in `tina/config.ts`:

```typescript
schema: {
  collections: [
    1. tutorial     → content/tutorials/     → /tutorials/{slug}
    2. guide        → content/guides/        → /guides/{slug}
    3. news         → content/news/          → /news/{slug}
    4. review       → content/reviews/       → /reviews/{slug}
    5. post         → content/posts/         → /blog/{slug}
    6. page         → content/pages/         → /{slug}
  ],
}
```

---

## 📝 Collection Template

Copy this template when creating a new collection:

```typescript
{
  name: 'collection_name',        // Required: internal name (lowercase, no spaces)
  label: 'Display Name',          // Required: shows in admin UI
  path: 'content/folder',         // Required: where files are stored
  format: 'mdx',                  // Required: md, mdx, json, yaml, toml
  
  // URL routing (optional but recommended)
  ui: {
    router: ({ document }) => {
      return `/collection/${document._sys.filename}`
    },
    filename: {
      slugify: (values) => {
        return `${values?.title?.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')}`
      },
    },
  },
  
  // Default values for new items (optional)
  defaultItem: () => {
    return {
      title: 'New Item',
      date: new Date().toISOString(),
      published: false,
    }
  },
  
  // Fields definition (required)
  fields: [
    {
      type: 'string',
      name: 'title',
      label: 'Title',
      isTitle: true,
      required: true,
    },
    {
      type: 'rich-text',
      name: 'body',
      label: 'Content',
      isBody: true,
    },
  ],
}
```

---

## 🔄 Workflow for Managing Collections

### Adding a Collection
1. ✅ Edit `tina/config.ts`
2. ✅ Add collection object to array
3. ✅ Create folder: `mkdir -p content/your-folder`
4. ✅ Restart TinaCMS
5. ✅ Test in admin UI

### Deleting a Collection
1. ✅ Edit `tina/config.ts`
2. ✅ Remove collection object from array
3. ✅ Restart TinaCMS
4. ✅ (Optional) Delete folder and files

### Modifying a Collection
1. ✅ Edit `tina/config.ts`
2. ✅ Change properties (label, fields, path, etc.)
3. ✅ Restart TinaCMS
4. ✅ Test changes in admin UI

---

## 🎯 Quick Commands

### Edit Collections

```bash
# Open config file
code tina/config.ts
```

### Create Collection Folder

```bash
# Create new collection folder
mkdir -p content/your-collection-name
```

### Restart TinaCMS

```bash
# Always restart after config changes
npx tinacms dev --local
```

### Check Current Collections

```bash
# List all collection folders
ls -la content/
```

---

## ⚙️ Common Collection Configurations

### Simple Blog Collection

```typescript
{
  name: 'blog',
  label: 'Blog Posts',
  path: 'content/blog',
  format: 'mdx',
  fields: [
    { type: 'string', name: 'title', label: 'Title', isTitle: true, required: true },
    { type: 'datetime', name: 'date', label: 'Date', required: true },
    { type: 'rich-text', name: 'body', label: 'Content', isBody: true },
  ],
}
```

### Settings Collection (JSON)

```typescript
{
  name: 'settings',
  label: 'Site Settings',
  path: 'content/settings',
  format: 'json',
  ui: {
    allowedActions: {
      create: false,    // Can't create new settings
      delete: false,    // Can't delete settings
    },
  },
  fields: [
    { type: 'string', name: 'siteName', label: 'Site Name' },
    { type: 'string', name: 'siteUrl', label: 'Site URL' },
    { type: 'image', name: 'logo', label: 'Logo' },
  ],
}
```

### Authors Collection (JSON)

```typescript
{
  name: 'author',
  label: 'Authors',
  path: 'content/authors',
  format: 'json',
  fields: [
    { type: 'string', name: 'name', label: 'Name', isTitle: true, required: true },
    { type: 'string', name: 'bio', label: 'Bio', ui: { component: 'textarea' } },
    { type: 'image', name: 'avatar', label: 'Avatar' },
    { type: 'string', name: 'twitter', label: 'Twitter Handle' },
  ],
}
```

---

## 🚨 Important Notes

### ⚠️ Things to Remember

1. **Always restart TinaCMS** after editing `tina/config.ts`
2. **Collection names must be unique** (no duplicates)
3. **Collection names** should be lowercase, no spaces (use underscores)
4. **Create folders** before adding files
5. **Back up your config** before major changes

### ❌ Common Mistakes

**Don't do this:**
```typescript
name: 'Blog Posts'  // ❌ Has spaces
name: 'blog-posts'  // ❌ Has dashes
```

**Do this:**
```typescript
name: 'blog_post'   // ✅ Correct
name: 'blogpost'    // ✅ Also correct
```

### 🔍 Finding Collection Code

All your collections are between these lines in `tina/config.ts`:

```typescript
schema: {
  collections: [
    // Line ~26: Collections start here
    
    
    
    // Line ~700+: Collections end here
  ],
}
```

---

## 📚 Additional Resources

- **Field Types:** See TinaCMS docs for all available field types
- **Validation:** Add `ui.validate` to any field
- **Conditional Fields:** Use `ui.visible` for conditional rendering
- **Custom Components:** Create custom field UI components

---

## 🆘 Troubleshooting

### Collection not showing in admin UI?
1. Check syntax in `tina/config.ts` (missing commas, brackets)
2. Restart TinaCMS
3. Check browser console for errors

### Changes not applying?
1. Make sure you saved `tina/config.ts`
2. Restart TinaCMS (Ctrl+C and restart)
3. Clear browser cache and refresh

### Can't find the collection code?
- Open `tina/config.ts`
- Search for `collections: [`
- Your collections start around line 26

---

## 📖 Summary

| Action | Location | Command |
|--------|----------|---------|
| **Create** | Edit `tina/config.ts` → Add to collections array | `mkdir -p content/folder` |
| **Delete** | Edit `tina/config.ts` → Remove from collections array | `rm -rf content/folder` |
| **Modify** | Edit `tina/config.ts` → Change properties | - |
| **Restart** | Terminal | `npx tinacms dev --local` |

**Remember:** All collection management happens in `tina/config.ts` - there's no UI for this!

---

**Questions?** Check the existing collections in your config file for examples! 🚀


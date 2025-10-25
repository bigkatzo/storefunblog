# OG Images Needed

The blog now uses custom Open Graph (OG) images for social media sharing. These images should follow the pattern: **black background + white Store.fun icon + white text**.

## Required Images

All images should be **1200x630px** (optimal for Open Graph) and uploaded to your Supabase storage at:
`https://sakysysfksculqobozxi.supabase.co/storage/v1/object/public/site-assets/content/`

### 1. Home Page
- **File name:** `og-home.png`
- **Text:** "Onchain Commerce is Here" or "Store.fun Blog"
- **Current URL:** `https://sakysysfksculqobozxi.supabase.co/storage/v1/object/public/site-assets/content/og-home.png`

### 2. About Page
- **File name:** `og-about.png`
- **Text:** "About Store.fun"
- **Current URL:** `https://sakysysfksculqobozxi.supabase.co/storage/v1/object/public/site-assets/content/og-about.png`

### 3. Collection Pages
Each collection needs its own OG image:

#### Guides
- **File name:** `og-guides.png`
- **Text:** "Guides"
- **Current URL:** `https://sakysysfksculqobozxi.supabase.co/storage/v1/object/public/site-assets/content/og-guides.png`

#### Features
- **File name:** `og-features.png`
- **Text:** "Features"
- **Current URL:** `https://sakysysfksculqobozxi.supabase.co/storage/v1/object/public/site-assets/content/og-features.png`

#### Case Studies
- **File name:** `og-case-studies.png`
- **Text:** "Case Studies"
- **Current URL:** `https://sakysysfksculqobozxi.supabase.co/storage/v1/object/public/site-assets/content/og-case-studies.png`

#### Compare
- **File name:** `og-compare.png`
- **Text:** "Compare"
- **Current URL:** `https://sakysysfksculqobozxi.supabase.co/storage/v1/object/public/site-assets/content/og-compare.png`

#### News
- **File name:** `og-news.png`
- **Text:** "News"
- **Current URL:** `https://sakysysfksculqobozxi.supabase.co/storage/v1/object/public/site-assets/content/og-news.png`

#### Blog
- **File name:** `og-blog.png`
- **Text:** "Blog"
- **Current URL:** `https://sakysysfksculqobozxi.supabase.co/storage/v1/object/public/site-assets/content/og-blog.png`

## Design Specifications

### Layout
```
┌─────────────────────────────────────────────┐
│                                             │
│           [Black Background]                │
│                                             │
│              [White Icon]                   │
│         https://sakysysfksculqobozxi.       │
│         supabase.co/storage/v1/object/      │
│         public/site-assets/content/         │
│         storefunicon.svg                    │
│                                             │
│            [White Text]                     │
│         Page Name (e.g., "Guides")          │
│                                             │
│                                             │
└─────────────────────────────────────────────┘
```

### Style Guide
- **Dimensions:** 1200x630px
- **Background:** Black (#000000)
- **Icon:** Store.fun white icon (centered, ~150-200px height)
- **Text:** White (#FFFFFF), bold, centered
- **Font:** System UI / San Francisco / Helvetica Neue
- **Font Size:** ~80-100px for main text
- **Spacing:** Icon and text should have ~40px spacing between them

## How to Create

### Option 1: Using Figma/Design Tools
1. Create a 1200x630px canvas with black background
2. Import the Store.fun icon SVG
3. Convert icon to white color
4. Center the icon
5. Add white text below the icon
6. Export as PNG

### Option 2: Using Canva
1. Create custom size: 1200x630px
2. Set background to black
3. Upload Store.fun icon and change to white
4. Add text in white
5. Download as PNG

### Option 3: Quick HTML/CSS Template
You can use this HTML template and screenshot it at 1200x630:

```html
<!DOCTYPE html>
<html>
<head>
  <style>
    body {
      margin: 0;
      width: 1200px;
      height: 630px;
      background: #000;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 40px;
      font-family: system-ui, -apple-system, sans-serif;
    }
    img {
      width: 180px;
      height: auto;
      filter: brightness(0) invert(1);
    }
    h1 {
      color: #fff;
      font-size: 90px;
      font-weight: 700;
      margin: 0;
      text-align: center;
    }
  </style>
</head>
<body>
  <img src="https://sakysysfksculqobozxi.supabase.co/storage/v1/object/public/site-assets/content/storefunicon.svg" alt="Store.fun">
  <h1>Guides</h1>
</body>
</html>
```

## Upload Instructions

1. Create all 8 images following the specifications above
2. Log in to your Supabase dashboard
3. Navigate to Storage > `site-assets` > `content` folder
4. Upload each PNG file with the exact names listed above
5. Verify the URLs are publicly accessible

## Testing

After uploading, test your OG images using:
- [Open Graph Debugger](https://www.opengraph.xyz/)
- [Facebook Sharing Debugger](https://developers.facebook.com/tools/debug/)
- [Twitter Card Validator](https://cards-dev.twitter.com/validator)
- [LinkedIn Post Inspector](https://www.linkedin.com/post-inspector/)

## Notes

- Individual blog post articles will use their own featured images (set per article)
- These OG images are only for the main pages (Home, About, Collections)
- Make sure all images are optimized (use tools like TinyPNG to reduce file size)
- Keep file sizes under 1MB for faster loading


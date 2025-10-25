# Store.fun Branding Setup

## ✅ Completed Configuration

All Store.fun branding assets have been integrated into the blog.

---

## 🖼️ Icons & Favicons

### Favicon (All Sizes)
```html
https://sakysysfksculqobozxi.supabase.co/storage/v1/render/image/public/site-assets/favicon-1744848001132.png
```

**Used for:**
- Standard favicon
- 16x16, 32x32, 96x96 sizes
- Shortcut icon

### Apple Touch Icons
```html
https://sakysysfksculqobozxi.supabase.co/storage/v1/render/image/public/site-assets/apple_touch_icon-1744830035487.png
```

**Used for:**
- iOS home screen icons
- 120x120, 152x152, 180x180 sizes
- Apple touch icon (precomposed)
- Microsoft tile image

---

## 🌐 Social Media Images

### Open Graph (Facebook, LinkedIn)
```html
https://sakysysfksculqobozxi.supabase.co/storage/v1/render/image/public/site-assets/og_image-1744669770840.png
```

**When shared on:**
- Facebook
- LinkedIn
- Slack
- Discord
- Any platform using Open Graph

### Twitter Card
```html
https://sakysysfksculqobozxi.supabase.co/storage/v1/render/image/public/site-assets/twitter_image-1744669780524.png
```

**When shared on:**
- Twitter/X
- Summary large image card

---

## 📱 PWA Configuration

### Web App Manifest
**File:** `/public/manifest.json`

**Settings:**
- **Name:** "Store.fun: Commerce App for Creators on Solana"
- **Short Name:** "store.fun"
- **Theme Color:** #000000 (Black)
- **Background Color:** #000000 (Black)
- **Display:** Standalone (full-screen app mode)

### Mobile Web App
**iOS:**
- App title: "store.fun"
- Status bar: Black translucent
- Capable: Yes (can be added to home screen)

**Android:**
- App name: "store.fun"
- Theme color: Black
- Installable as PWA

---

## 🏷️ Meta Tags

### Primary Meta Tags
```html
<title>Store.fun: Commerce App for Creators on Solana</title>
<meta name="title" content="Store.fun: Commerce App for Creators on Solana" />
<meta name="description" content="Discover guides, case studies, and insights about building commerce on Solana. Learn from real-world examples and expert knowledge." />
```

### Open Graph Tags
```html
<meta property="og:type" content="website" />
<meta property="og:url" content="https://blog.store.fun/" />
<meta property="og:title" content="Store.fun: Commerce App for Creators on Solana" />
<meta property="og:description" content="..." />
<meta property="og:image" content="[OG Image URL]" />
```

### Twitter Tags
```html
<meta property="twitter:card" content="summary_large_image" />
<meta property="twitter:url" content="https://blog.store.fun/" />
<meta property="twitter:title" content="Store.fun: Commerce App for Creators on Solana" />
<meta property="twitter:description" content="..." />
<meta property="twitter:image" content="[Twitter Image URL]" />
```

---

## 📍 File Locations

### Updated Files:
1. **`/index.html`** - Main HTML with all meta tags and icons
2. **`/public/manifest.json`** - Web app manifest (NEW)
3. **`/package.json`** - Updated name and description
4. **`/README.md`** - Updated branding and documentation

---

## 🎨 Branding Elements

### App Names
- **Full Name:** Store.fun: Commerce App for Creators on Solana
- **Short Name:** store.fun
- **Application Name:** store.fun
- **Apple App Title:** store.fun

### Colors
- **Theme Color:** #000000 (Black)
- **Background Color:** #000000 (Black)
- **Status Bar:** Black translucent

### Description
```
Discover guides, case studies, and insights about building commerce on Solana. 
Learn from real-world examples and expert knowledge.
```

---

## ✅ What This Enables

### SEO & Discoverability
- ✅ Google search result appearance
- ✅ Browser tab title and favicon
- ✅ Bookmark appearance
- ✅ Search engine indexing

### Social Media Sharing
- ✅ Beautiful cards when shared on social media
- ✅ Custom images for Facebook, LinkedIn, Slack
- ✅ Optimized Twitter cards
- ✅ Proper titles and descriptions

### Mobile Experience
- ✅ Custom icon when added to home screen (iOS)
- ✅ Custom icon when installed as app (Android)
- ✅ Branded splash screen
- ✅ Full-screen app mode
- ✅ Native app feel

### Progressive Web App
- ✅ Installable as standalone app
- ✅ Works offline (if configured)
- ✅ App-like experience
- ✅ Push notifications ready (if configured)

---

## 🧪 Testing Your Setup

### Test Favicons
1. Visit your site in a browser
2. Check the browser tab - should show Store.fun favicon
3. Bookmark the page - should show the icon

### Test Social Media Cards

#### Facebook/LinkedIn
1. Go to [Facebook Debugger](https://developers.facebook.com/tools/debug/)
2. Enter your blog URL
3. Click "Debug" - should show OG image and title

#### Twitter
1. Go to [Twitter Card Validator](https://cards-dev.twitter.com/validator)
2. Enter your blog URL
3. Should show Twitter image and summary

### Test Mobile
1. Open on iPhone/iPad
2. Tap Share → Add to Home Screen
3. Should show "store.fun" with apple-touch-icon

### Test PWA
1. Open in Chrome (mobile or desktop)
2. Look for "Install" prompt in address bar
3. Install as app
4. Should use manifest.json settings

---

## 🔧 Customization

### Change Icon URLs
Edit `index.html` and update the URLs:
```html
<link rel="icon" href="YOUR_NEW_FAVICON_URL" />
<link rel="apple-touch-icon" href="YOUR_NEW_APPLE_ICON_URL" />
<meta property="og:image" content="YOUR_NEW_OG_IMAGE_URL" />
```

### Change Theme Color
Edit `index.html`:
```html
<meta name="theme-color" content="#YOUR_COLOR" />
```

Also update `public/manifest.json`:
```json
{
  "theme_color": "#YOUR_COLOR",
  "background_color": "#YOUR_COLOR"
}
```

### Change Site Title/Description
Edit `index.html`:
```html
<title>Your New Title</title>
<meta name="description" content="Your new description" />
```

Also update all og: and twitter: tags accordingly.

---

## 📚 Resources

- [Open Graph Protocol](https://ogp.me/)
- [Twitter Cards Documentation](https://developer.twitter.com/en/docs/twitter-for-websites/cards/overview/abouts-cards)
- [Web App Manifest Spec](https://www.w3.org/TR/appmanifest/)
- [Apple iOS Web App Meta Tags](https://developer.apple.com/library/archive/documentation/AppleApplications/Reference/SafariWebContent/ConfiguringWebApplications/ConfiguringWebApplications.html)

---

## ✨ Summary

All Store.fun branding is now integrated:

- ✅ Favicons (all sizes)
- ✅ Apple touch icons
- ✅ Open Graph images
- ✅ Twitter cards
- ✅ Web app manifest
- ✅ Meta tags
- ✅ SEO optimization
- ✅ PWA configuration

Your blog is now fully branded and ready for production! 🚀


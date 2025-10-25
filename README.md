# Store.fun Blog

The official blog for **Store.fun** - Commerce App for Creators on Solana.

A modern, performant content platform built with React 18, TypeScript, and TinaCMS, featuring guides, case studies, comparisons, and insights about building commerce on Solana.

## 🚀 Tech Stack

- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite (fast development and optimized builds)
- **Styling**: Tailwind CSS for utility-first styling
- **Animations**: Framer Motion for smooth transitions and effects
- **Icons**: Lucide React for consistent iconography
- **State Management**: React hooks (useState, useEffect, custom hooks)
- **CMS**: TinaCMS for content management
- **Routing**: React Router v6

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/bigkatzo/storefunblog.git
cd storefunblog
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit `http://localhost:5173`

## 🛠️ Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

### TinaCMS Scripts (Optional)

- `npm run tina:init` - Initialize TinaCMS (one-time setup)
- `npm run tina:dev` - Start dev server with TinaCMS visual editor
- `npm run tina:build` - Build TinaCMS for production

See [TINACMS_SETUP.md](./TINACMS_SETUP.md) for complete TinaCMS setup instructions.

### Project Structure

```
storefun-blog/
├── src/
│   ├── components/     # Reusable components
│   ├── pages/          # Page components
│   ├── App.tsx         # Main app component
│   ├── main.tsx        # Entry point
│   └── index.css       # Global styles
├── content/            # TinaCMS content
│   ├── guides/         # How-to guides and tutorials
│   ├── case-studies/   # Customer success stories
│   ├── blog/           # General blog articles
│   ├── features/       # Product features
│   ├── compare/        # Product comparisons
│   ├── news/           # News and announcements
│   └── pages/          # Static pages
├── tina/               # TinaCMS configuration
├── public/             # Static assets
└── index.html          # HTML template
```

## 🎨 Features

- ✨ Modern, responsive design with Store.fun branding
- 🚀 Lightning-fast performance with Vite
- 📝 Multi-collection content management with TinaCMS
- 🎭 Smooth animations with Framer Motion
- 🎯 Type-safe development with TypeScript
- 📱 Mobile-first responsive design
- 🌈 Utility-first styling with Tailwind CSS
- 🔗 Clean URL structure: `/guides/`, `/case-studies/`, `/blog/`, etc.
- 🎨 SEO-optimized with Open Graph and Twitter Cards
- 🖼️ Custom favicons and app icons from Supabase CDN

## 🔧 Configuration

### Content Collections

The blog has 6 specialized collections:

1. **Guides** (`/guides/`) - How-to articles and tutorials
2. **Case Studies** (`/case-studies/`) - Customer success stories with metrics
3. **Blog** (`/blog/`) - General articles and insights
4. **Features** (`/features/`) - Product features and capabilities
5. **Comparisons** (`/compare/`) - Product comparison articles
6. **News** (`/news/`) - Announcements and updates

See [YOUR_COLLECTIONS.md](./YOUR_COLLECTIONS.md) for detailed collection documentation.

### TinaCMS Setup

1. Start TinaCMS:
```bash
npx tinacms dev --local
```

2. Access the admin panel at `/admin`
3. Create and manage content through the visual editor

**Or edit MDX files directly:**
- Edit `.mdx` files in `content/` folders directly
- No signup required, works out of the box

See [MANAGING_COLLECTIONS.md](./MANAGING_COLLECTIONS.md) for collection management details.

### Customization

- **Collections**: Edit `tina/config.ts` to add/modify collections
- **Colors**: Edit `tailwind.config.js` to customize the color palette
- **Fonts**: Update the Google Fonts import in `index.html`
- **Components**: Modify components in `src/components/`
- **Content**: Edit MDX files in `content/` or use TinaCMS admin
- **Branding**: Update icons and meta tags in `index.html`

## 📄 License

MIT

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## ⭐ Show your support

Give a ⭐️ if you like this project!


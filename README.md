# StoreFun Blog

A modern, performant blog application built with React 18, TypeScript, and TinaCMS.

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
storefunblog/
├── src/
│   ├── components/     # Reusable components
│   ├── pages/          # Page components
│   ├── App.tsx         # Main app component
│   ├── main.tsx        # Entry point
│   └── index.css       # Global styles
├── content/            # TinaCMS content
│   └── posts/          # Blog posts
├── tina/               # TinaCMS configuration
├── public/             # Static assets
└── index.html          # HTML template
```

## 🎨 Features

- ✨ Modern, responsive design
- 🚀 Lightning-fast performance with Vite
- 📝 Content management with TinaCMS
- 🎭 Smooth animations with Framer Motion
- 🎯 Type-safe development with TypeScript
- 📱 Mobile-first responsive design
- 🌈 Utility-first styling with Tailwind CSS

## 🔧 Configuration

### TinaCMS Setup (Optional)

TinaCMS is installed but **not required**. Your blog works perfectly with MDX files!

**Option 1: Use Without TinaCMS (Recommended to start)**
- Edit `.mdx` files in `content/posts/` directly
- No signup required, works out of the box

**Option 2: Enable Visual Editing**
1. Sign up at [tina.io](https://tina.io)
2. Get your credentials
3. Follow the [complete setup guide](./TINACMS_SETUP.md)
4. Run `npm run tina:dev` to access visual editor

### Customization

- **Colors**: Edit `tailwind.config.js` to customize the color palette
- **Fonts**: Update the Google Fonts import in `index.html`
- **Components**: Modify components in `src/components/`
- **Content**: Edit blog posts in `content/posts/`

## 📄 License

MIT

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## ⭐ Show your support

Give a ⭐️ if you like this project!


# Blog Formatting Guide - Advanced Typography Edition

Your blog is now equipped with **professional-grade typography** and **comprehensive advanced formatting support**! 🎉

## ✨ What's New

### 🎨 Advanced Features
- ✅ **Syntax Highlighting** - Beautiful code blocks with copy buttons
- ✅ **Callout Boxes** - Note, Warning, Tip, and Info admonitions
- ✅ **Task Lists** - Interactive checkboxes for to-do lists
- ✅ **Keyboard Shortcuts** - Beautiful `<kbd>` styling
- ✅ **Reading Progress Bar** - Smooth progress indicator at top of page
- ✅ **Smooth Scrolling** - Anchor links with smooth transitions
- ✅ **Lazy Loading Images** - Performance optimized
- ✅ **Responsive Typography** - Adapts to all screen sizes

### 📦 Enhanced Packages
- `react-syntax-highlighter` - Professional syntax highlighting
- `rehype-slug` - Automatic heading IDs for anchor links
- `rehype-autolink-headings` - Clickable heading anchors
- `remark-breaks` - Better line break handling
- `rehype-raw` - HTML support in markdown

---

## 📝 Complete Formatting Reference

### 1. Headings

```markdown
# Heading 1 - Main title
## Heading 2 - Major sections (with bottom border)
### Heading 3 - Subsections
#### Heading 4 - Detailed breakdowns
##### Heading 5 - Smaller headings
###### Heading 6 - Smallest (uppercase styled)
```

All headings now support **anchor links** and **smooth scrolling**!

---

### 2. Text Formatting

```markdown
**Bold text** - for strong emphasis
*Italic text* - for subtle emphasis
***Bold and italic*** - combined
~~Strikethrough~~ - for corrections
`inline code` - for technical terms with beautiful styling
```

---

### 3. Code Blocks with Syntax Highlighting

#### Inline Code
```markdown
Use `const variable = value` for inline code snippets.
```

#### Code Blocks with Language Support

````markdown
```javascript
function calculateTotal(items) {
  return items.reduce((sum, item) => sum + item.price, 0);
}
```
````

**Supported Languages:**
- JavaScript/TypeScript (`javascript`, `typescript`, `jsx`, `tsx`)
- Python (`python`)
- CSS/SCSS (`css`, `scss`)
- HTML (`html`)
- JSON (`json`)
- SQL (`sql`)
- Bash/Shell (`bash`, `shell`)
- And many more!

**Features:**
- ✨ Automatic syntax highlighting
- 📋 Copy button (appears on hover)
- 🔢 Line numbers for blocks > 3 lines
- 🎨 VS Code Dark+ theme

---

### 4. Callout Boxes / Admonitions

Create beautiful callout boxes to highlight important information:

```markdown
<callout type="note" title="Note Title">
Your note content goes here
</callout>

<callout type="info" title="Information">
Info content here
</callout>

<callout type="tip" title="Pro Tip">
Helpful tip content
</callout>

<callout type="warning" title="Warning">
Important warning content
</callout>
```

**Types:**
- `note` - Blue - For general notes
- `info` - Purple - For informational content
- `tip` - Green - For helpful tips and best practices
- `warning` - Red - For important warnings

---

### 5. Task Lists

Create interactive checkbox lists:

```markdown
- [x] Completed task
- [x] Another completed task
- [ ] Pending task
- [ ] Another pending task
```

Perfect for:
- Setup guides
- Checklists
- Step-by-step tutorials
- Progress tracking

---

### 6. Keyboard Shortcuts

Display keyboard shortcuts with beautiful styling:

```markdown
Press <kbd>Cmd</kbd> + <kbd>S</kbd> to save.

Use <kbd>Ctrl</kbd> + <kbd>C</kbd> to copy.

Navigate with <kbd>←</kbd> <kbd>→</kbd> <kbd>↑</kbd> <kbd>↓</kbd>
```

---

### 7. Lists

**Bullet Lists:**
```markdown
- First item
- Second item
  - Nested item
  - Another nested item
- Back to top level
```

**Numbered Lists:**
```markdown
1. First step
2. Second step
   1. Sub-step A
   2. Sub-step B
3. Third step
```

**Mixed Lists:**
```markdown
1. Numbered item
   - Bullet under number
   - Another bullet
2. Another numbered item
```

---

### 8. Quotes

```markdown
> This is a blockquote with beautiful left border styling.
> Perfect for testimonials or important callouts.
>
> You can have multiple paragraphs too.
```

---

### 9. Links

```markdown
[Link text](https://store.fun)
```

Features:
- Bold, underlined styling
- Smooth hover transitions
- Accessible focus states

---

### 10. Tables

```markdown
| Header 1 | Header 2 | Header 3 |
|----------|----------|----------|
| Cell 1   | Cell 2   | Cell 3   |
| Cell 4   | Cell 5   | Cell 6   |
```

Features:
- Hover effects on rows
- Responsive with horizontal scroll
- Clean border styling

---

### 11. Horizontal Rules

```markdown
---
```

Creates a subtle divider line between sections.

---

### 12. Images

```markdown
![Alt text](https://example.com/image.jpg)
```

Features:
- Lazy loading for performance
- Rounded corners
- Shadow effects
- Responsive sizing
- Always include descriptive alt text!

---

## 🚀 Usage Examples

### Creating a Technical Tutorial

```markdown
# How to Set Up Your Store

<callout type="info" title="Prerequisites">
Before starting, make sure you have Node.js installed.
</callout>

## Installation Steps

- [x] Install dependencies
- [x] Configure environment
- [ ] Deploy to production

### Install the package

```bash
npm install @store-fun/sdk
```

Press <kbd>Enter</kbd> to continue.

<callout type="tip" title="Pro Tip">
Use environment variables for sensitive data!
</callout>
```

---

### Creating a Feature Comparison

```markdown
## Payment Options Comparison

| Feature | Basic | Pro | Enterprise |
|---------|-------|-----|------------|
| Transactions | 100/mo | Unlimited | Unlimited |
| Support | Email | Priority | 24/7 Phone |

<callout type="note" title="Note">
All plans include SSL encryption and PCI compliance.
</callout>
```

---

## 🎯 Best Practices

### Typography
- Use **H1** only for the main title (once per page)
- Use **H2** for major sections
- Use **H3-H4** for subsections
- Maintain logical heading hierarchy

### Code Blocks
- Always specify the language for syntax highlighting
- Use inline code for single terms: `variable`
- Use code blocks for multi-line examples
- Add comments to explain complex code

### Callouts
- Use **note** for general information
- Use **tip** for helpful advice
- Use **warning** for critical information
- Use **info** for additional context
- Keep callout content concise

### Images
- Always include descriptive alt text
- Use high-quality images
- Optimize image size before uploading
- Consider using Unsplash for stock photos

### Accessibility
- Use semantic headings in order
- Provide alt text for images
- Write descriptive link text
- Test with keyboard navigation

---

## 🎨 Design Features

### Reading Experience
- **Progress Indicator**: Shows reading progress at top
- **Smooth Scrolling**: Anchor links scroll smoothly
- **Responsive Typography**: Adjusts for all screen sizes
- **Beautiful Spacing**: Optimal line height and margins

### Interactive Elements
- **Copy Buttons**: On all code blocks (hover to see)
- **Hover Effects**: Smooth transitions on links and buttons
- **Task Lists**: Visual checkboxes for lists
- **Keyboard Shortcuts**: Beautiful `<kbd>` styling

### Performance
- **Lazy Loading**: Images load as needed
- **Optimized Rendering**: Fast markdown parsing
- **Smooth Animations**: Hardware-accelerated transitions
- **Responsive**: Mobile-first design

---

## 📱 Responsive Design

All formatting is fully responsive:

- **Mobile (< 640px)**
  - Base font size
  - Adjusted heading sizes
  - Touch-friendly buttons
  - Optimized code blocks

- **Tablet (640px - 1024px)**
  - Medium font size
  - Balanced layout
  - Easy navigation

- **Desktop (> 1024px)**
  - Large font size
  - Full feature set
  - Sidebar navigation
  - Maximum readability

---

## 🧰 Technical Stack

```typescript
// Core markdown rendering
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import remarkBreaks from 'remark-breaks'
import rehypeSlug from 'rehype-slug'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import rehypeRaw from 'rehype-raw'

// Syntax highlighting
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism'

// Custom components
import { Callout } from './components/Callout'
import { CodeBlock } from './components/CodeBlock'
import { Kbd } from './components/Kbd'
import { ReadingProgress } from './components/ReadingProgress'
```

---

## 🎓 Quick Reference

| Element | Syntax | Use Case |
|---------|--------|----------|
| Bold | `**text**` | Strong emphasis |
| Italic | `*text*` | Subtle emphasis |
| Code | `` `code` `` | Inline code |
| Code Block | ` ```lang` | Multi-line code |
| Note | `<callout type="note">` | General info |
| Tip | `<callout type="tip">` | Helpful advice |
| Warning | `<callout type="warning">` | Important info |
| Task | `- [ ] task` | Checklist item |
| Kbd | `<kbd>Key</kbd>` | Keyboard shortcut |
| Link | `[text](url)` | Hyperlink |
| Image | `![alt](url)` | Image |
| Quote | `> text` | Blockquote |
| Table | `\| col \|` | Tabular data |
| Divider | `---` | Section break |

---

## 🎉 You're All Set!

Your blog now has **professional-grade typography** with advanced features:

✅ Syntax highlighting with copy buttons
✅ Beautiful callout boxes for emphasis
✅ Task lists for checklists
✅ Keyboard shortcut styling
✅ Reading progress indicator
✅ Smooth scrolling anchor links
✅ Lazy-loaded images
✅ Fully responsive design
✅ Accessible and semantic HTML

**Start creating amazing content!** Visit `/blog/formatting-showcase` to see all features in action.

---

## 📚 Resources

- [Markdown Guide](https://www.markdownguide.org/)
- [GitHub Flavored Markdown](https://github.github.com/gfm/)
- [React Markdown Documentation](https://github.com/remarkjs/react-markdown)
- [Prism Supported Languages](https://prismjs.com/#supported-languages)

**Questions?** Check out the `/blog/formatting-showcase` post for live examples!

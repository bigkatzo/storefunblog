import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Calendar, Clock, ArrowLeft, Share2 } from 'lucide-react'
import { getPostBySlug } from '../lib/posts'

// Extended blog post content
const blogPostsContent: Record<string, string> = {
  'merchant-guide': `
# How to Become a Merchant in 3 Simple Steps

Starting your journey as a merchant has never been easier! Whether you're looking to sell products online or establish a physical storefront, these three simple steps will guide you through the process.

## Step 1: Choose Your Product or Service

The first step in becoming a successful merchant is deciding what you want to sell. Consider your passions, expertise, and market demand.

- Research your target market
- Identify gaps in the market
- Consider your unique value proposition
- Start with products you're passionate about

## Step 2: Set Up Your Business Infrastructure

Once you've decided what to sell, it's time to establish the foundation of your business.

- Register your business legally
- Set up a merchant account for payments
- Choose your sales channels (online, retail, or both)
- Establish your brand identity

## Step 3: Launch and Market Your Products

With everything in place, it's time to go live and start attracting customers.

- Create compelling product descriptions
- Take high-quality product photos
- Develop a marketing strategy
- Engage with your customers and build relationships

## Conclusion

Becoming a merchant is an exciting journey that requires planning, dedication, and continuous learning. Start with these three steps and you'll be well on your way to building a successful business!
  `,
  'getting-started-react-typescript': `
# Introduction

React 18 brings powerful new features that make building modern web applications easier and more efficient than ever before. Combined with TypeScript's type safety, you have a robust foundation for creating scalable applications.

## Why React 18?

React 18 introduces several groundbreaking features:

- **Automatic Batching**: Better performance by default
- **Transitions**: Smoother user experiences
- **Suspense**: Better loading states
- **Concurrent Rendering**: More responsive apps

## Setting Up Your Project

Getting started is easier than you think. With modern tools like Vite, you can have a React + TypeScript project up and running in seconds.

\`\`\`bash
npm create vite@latest my-app -- --template react-ts
cd my-app
npm install
npm run dev
\`\`\`

## TypeScript Benefits

TypeScript adds incredible value to React development:

1. **Type Safety**: Catch errors at compile time
2. **Better IDE Support**: Autocomplete and IntelliSense
3. **Improved Refactoring**: Rename with confidence
4. **Self-Documenting Code**: Types serve as documentation

## Best Practices

Here are some tips for working with React 18 and TypeScript:

- Always define prop types using interfaces
- Use React.FC sparingly, prefer explicit typing
- Leverage TypeScript's utility types
- Keep your components small and focused

## Conclusion

React 18 with TypeScript provides an excellent developer experience and helps you build better applications. Start your journey today and see the difference it makes!
  `,
  'mastering-tailwind-css': `
# Mastering Tailwind CSS

Tailwind CSS has revolutionized how we approach styling in modern web development. This utility-first framework enables rapid UI development without sacrificing customization.

## Why Tailwind?

Traditional CSS can become unwieldy as projects grow. Tailwind solves this by providing low-level utility classes that make it easy to build custom designs without writing custom CSS.

## Key Concepts

Learn the fundamentals of Tailwind's approach to styling and how it can speed up your development workflow significantly.
  `,
  'framer-motion-animations': `
# Framer Motion: Creating Smooth Animations

Framer Motion is a production-ready motion library for React that makes creating fluid animations incredibly simple and powerful.

## Getting Started

Install Framer Motion and start animating your React components with ease.
  `,
  'building-modern-cms-tinacms': `
# Building a Modern CMS with TinaCMS

TinaCMS provides an excellent developer experience for managing content in Git-based workflows.

## Why TinaCMS?

Learn how to integrate visual editing into your React application.
  `,
}

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>()
  const post = slug ? getPostBySlug(slug) : null
  const content = slug ? blogPostsContent[slug] : ''

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Post Not Found</h1>
          <Link to="/" className="text-primary-600 hover:underline">
            Return to Home
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen">
      {/* Back Button */}
      <div className="max-w-4xl mx-auto px-4 pt-8">
        <Link to="/" className="inline-flex items-center gap-2 text-gray-600 hover:text-primary-600 transition-colors">
          <ArrowLeft className="h-4 w-4" />
          Back to Home
        </Link>
      </div>

      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="relative h-96 mb-12"
      >
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
      </motion.div>

      {/* Content */}
      <article className="max-w-4xl mx-auto px-4 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          {/* Tags */}
          {post.tags && post.tags.length > 0 && (
            <div className="flex gap-2 mb-6">
              {post.tags.map((tag: string, index: number) => (
                <span
                  key={index}
                  className="text-sm font-medium px-4 py-1 bg-primary-100 text-primary-700 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}

          {/* Title */}
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            {post.title}
          </h1>

          {/* Meta Info */}
          <div className="flex flex-wrap items-center gap-6 text-gray-600 mb-8 pb-8 border-b">
            <span className="flex items-center gap-2">
              <Calendar className="h-5 w-5" />
              {post.date}
            </span>
            <span className="flex items-center gap-2">
              <Clock className="h-5 w-5" />
              {post.readTime}
            </span>
            <span>By {post.author}</span>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="ml-auto flex items-center gap-2 text-primary-600 hover:text-primary-700"
            >
              <Share2 className="h-5 w-5" />
              Share
            </motion.button>
          </div>

          {/* Article Content */}
          <div className="prose-custom">
            {content.split('\n\n').map((paragraph: string, index: number) => {
              // Simple markdown parsing
              if (paragraph.startsWith('# ')) {
                return (
                  <h1 key={index} className="text-3xl font-bold mt-8 mb-4">
                    {paragraph.replace('# ', '')}
                  </h1>
                )
              }
              if (paragraph.startsWith('## ')) {
                return (
                  <h2 key={index} className="text-2xl font-bold mt-6 mb-3">
                    {paragraph.replace('## ', '')}
                  </h2>
                )
              }
              if (paragraph.startsWith('```')) {
                return (
                  <pre key={index} className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto my-4">
                    <code>{paragraph.replace(/```\w*\n?|\n?```/g, '')}</code>
                  </pre>
                )
              }
              if (paragraph.match(/^\d+\./)) {
                return (
                  <li key={index} className="ml-6 mb-2">
                    {paragraph.replace(/^\d+\.\s*/, '')}
                  </li>
                )
              }
              if (paragraph.startsWith('- ')) {
                return (
                  <li key={index} className="ml-6 mb-2">
                    {paragraph.replace('- ', '')}
                  </li>
                )
              }
              return (
                <p key={index} className="text-gray-700 leading-relaxed mb-4">
                  {paragraph}
                </p>
              )
            })}
          </div>
        </motion.div>

        {/* Author Box */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-12 bg-gradient-to-r from-primary-50 to-blue-50 rounded-2xl p-8"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-2">About the Author</h3>
          <p className="text-gray-700 mb-4">
            The StoreFun team is passionate about sharing knowledge and helping developers
            build amazing applications. Follow us for more insights and tutorials.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-primary-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-primary-700 transition-colors"
          >
            Follow Us
          </motion.button>
        </motion.div>
      </article>
    </div>
  )
}

export default BlogPost


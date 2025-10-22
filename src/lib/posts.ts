import { BlogPost } from '../types/blog'

// This is a placeholder for TinaCMS integration
// In a real setup, TinaCMS would generate a client that fetches this data
// For now, we'll use static data that matches our MDX files

export const blogPosts: BlogPost[] = [
  {
    title: 'How to Become a Merchant in 3 Simple Steps',
    excerpt: 'How to Become a Merchant in 3 Simple Steps',
    date: 'Oct 22, 2025',
    readTime: '3 min',
    slug: 'merchant-guide',
    image: '/uploads/2025-02-25 23.42.40.jpg',
    tags: ['Guide', 'Business'],
    author: 'Storesy Funson',
  },
  {
    title: 'Getting Started with React 18 and TypeScript',
    excerpt: 'Learn how to build modern web applications with React 18, TypeScript, and the latest tools in the ecosystem. Explore new features and best practices.',
    date: 'Oct 20, 2025',
    readTime: '5 min read',
    slug: 'getting-started-react-typescript',
    image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&q=80',
    tags: ['React', 'TypeScript'],
    author: 'StoreFun Team',
  },
  {
    title: 'Mastering Tailwind CSS for Rapid Development',
    excerpt: 'Discover how utility-first CSS can transform your development workflow and help you build beautiful interfaces faster than ever before.',
    date: 'Oct 18, 2025',
    readTime: '8 min read',
    slug: 'mastering-tailwind-css',
    image: 'https://images.unsplash.com/photo-1507721999472-8ed4421c4af2?w=800&q=80',
    tags: ['CSS', 'Tailwind'],
    author: 'StoreFun Team',
  },
  {
    title: 'Framer Motion: Creating Smooth Animations',
    excerpt: 'Take your React applications to the next level with stunning animations and transitions using Framer Motion.',
    date: 'Oct 15, 2025',
    readTime: '6 min read',
    slug: 'framer-motion-animations',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80',
    tags: ['Animation', 'React'],
    author: 'StoreFun Team',
  },
  {
    title: 'Building a Modern CMS with TinaCMS',
    excerpt: 'Learn how to integrate a powerful content management system into your React application for easy content editing.',
    date: 'Oct 12, 2025',
    readTime: '10 min read',
    slug: 'building-modern-cms-tinacms',
    image: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800&q=80',
    tags: ['CMS', 'React'],
    author: 'StoreFun Team',
  },
]

export const getPostBySlug = (slug: string): BlogPost | undefined => {
  return blogPosts.find(post => post.slug === slug)
}

export const getAllPosts = (): BlogPost[] => {
  return blogPosts
}


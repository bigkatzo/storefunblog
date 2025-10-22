import { BlogPost } from '../types/blog'
import { loadPosts } from './mdx-loader'

// Load posts dynamically from MDX files
export const blogPosts: BlogPost[] = loadPosts()

export const getPostBySlug = (slug: string): BlogPost | undefined => {
  return blogPosts.find(post => post.slug === slug)
}

export const getAllPosts = (): BlogPost[] => {
  return blogPosts
}

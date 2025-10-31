import { BlogPost } from '../types/blog'

export interface PostSEOData {
  title: string
  description: string
  image: string
  url?: string
  type: 'article'
  author?: string
  publishedTime?: string
  tags?: string[]
}

/**
 * Generates consistent SEO metadata for blog posts
 * @param post - The blog post object
 * @param baseUrl - Optional base URL for canonical URLs and images
 * @returns SEO metadata object
 */
export function generatePostSEO(post: BlogPost, baseUrl?: string): PostSEOData {
  // Ensure we have a base URL
  const base = baseUrl || (typeof window !== 'undefined' ? window.location.origin : '')

  // Generate canonical URL if base URL is available
  const url = base && post.slug ? `${base}/${post.slug}` : undefined

  // Convert relative image paths to absolute URLs for social media
  const image = post.image
    ? (post.image.startsWith('http') ? post.image : `${base}${post.image}`)
    : undefined

  return {
    title: post.title,
    description: post.excerpt,
    image: image || '',
    url,
    type: 'article' as const,
    author: post.author,
    publishedTime: post.date,
    tags: post.tags,
  }
}

/**
 * Generates the page title with consistent branding
 * @param baseTitle - The base title (e.g., post title)
 * @returns Formatted title with store.fun branding
 */
export function generatePageTitle(baseTitle: string): string {
  return `${baseTitle} - store.fun`
}

/**
 * Gets the featured image for a post
 * @param post - The blog post object
 * @returns The post's image URL or undefined
 */
export function getPostFeaturedImage(post: BlogPost): string | undefined {
  return post.image || undefined
}

import { useEffect } from 'react'

interface SEOProps {
  title: string
  description: string
  image?: string
  url?: string
  type?: 'website' | 'article'
  author?: string
  publishedTime?: string
  modifiedTime?: string
  tags?: string[]
}

export function SEO({
  title,
  description,
  image,
  url,
  type = 'article',
  author,
  publishedTime,
  modifiedTime,
  tags = [],
}: SEOProps) {
  useEffect(() => {
    // Set document title
    document.title = `${title} - store.fun`

    // Get or create meta tags
    const setMetaTag = (name: string, content: string, isProperty = false) => {
      const attribute = isProperty ? 'property' : 'name'
      let element = document.querySelector(`meta[${attribute}="${name}"]`)
      
      if (!element) {
        element = document.createElement('meta')
        element.setAttribute(attribute, name)
        document.head.appendChild(element)
      }
      
      element.setAttribute('content', content)
    }

    // Basic meta tags
    setMetaTag('description', description)

    // Open Graph tags
    setMetaTag('og:title', title, true)
    setMetaTag('og:description', description, true)
    setMetaTag('og:type', type, true)
    
    if (url) {
      setMetaTag('og:url', url, true)
    }
    
    if (image) {
      setMetaTag('og:image', image, true)
      setMetaTag('og:image:width', '1200', true)
      setMetaTag('og:image:height', '630', true)
      setMetaTag('og:image:alt', title, true)
    }

    // Twitter Card tags
    setMetaTag('twitter:card', 'summary_large_image')
    setMetaTag('twitter:title', title)
    setMetaTag('twitter:description', description)
    
    if (image) {
      setMetaTag('twitter:image', image)
      setMetaTag('twitter:image:alt', title)
    }

    // Article-specific tags
    if (type === 'article') {
      if (author) {
        setMetaTag('article:author', author, true)
      }
      
      if (publishedTime) {
        setMetaTag('article:published_time', publishedTime, true)
      }
      
      if (modifiedTime) {
        setMetaTag('article:modified_time', modifiedTime, true)
      }

      // Article tags
      tags.forEach((tag) => {
        setMetaTag(`article:tag`, tag, true)
      })
    }

    // Canonical URL
    if (url) {
      let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement
      
      if (!canonical) {
        canonical = document.createElement('link')
        canonical.setAttribute('rel', 'canonical')
        document.head.appendChild(canonical)
      }
      
      canonical.setAttribute('href', url)
    }

    // Cleanup function to reset title on unmount
    return () => {
      document.title = 'store.fun'
    }
  }, [title, description, image, url, type, author, publishedTime, modifiedTime, tags])

  // This component doesn't render anything
  return null
}


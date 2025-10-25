import { BlogPost } from '../types/blog'

// Dynamically import all MDX files from ALL content collections
const postFiles = import.meta.glob('../../content/**/*.mdx', { 
  eager: true,
  query: '?raw',
  import: 'default'
})

// Parse frontmatter manually (simple parser)
function parseFrontmatter(content: string) {
  const frontmatterRegex = /^---\s*\n([\s\S]*?)\n---\s*\n([\s\S]*)$/
  const match = content.match(frontmatterRegex)
  
  if (!match) {
    return { data: {}, content: content }
  }

  const frontmatterText = match[1]
  const bodyContent = match[2]
  
  const data: Record<string, any> = {}
  
  // Parse YAML-like frontmatter
  const lines = frontmatterText.split('\n')
  let currentKey = ''
  let inArray = false
  
  for (const line of lines) {
    const trimmedLine = line.trim()
    
    if (!trimmedLine) continue
    
    // Check for array items
    if (trimmedLine.startsWith('-')) {
      if (inArray && currentKey) {
        const value = trimmedLine.substring(1).trim()
        data[currentKey].push(value)
      }
      continue
    }
    
    // Check for key-value pairs
    const colonIndex = trimmedLine.indexOf(':')
    if (colonIndex > 0) {
      const key = trimmedLine.substring(0, colonIndex).trim()
      const value = trimmedLine.substring(colonIndex + 1).trim()
      
      currentKey = key
      
      if (!value) {
        // Empty value, might be start of array
        data[key] = []
        inArray = true
      } else {
        data[key] = value
        inArray = false
      }
    }
  }
  
  return { data, content: bodyContent }
}

// Format date helper
function formatDate(dateString: string): string {
  const date = new Date(dateString)
  return date.toLocaleDateString('en-US', { 
    month: 'short', 
    day: 'numeric', 
    year: 'numeric' 
  })
}

// Load and parse all posts
export function loadPosts(): BlogPost[] {
  const posts: BlogPost[] = []

  for (const [path, content] of Object.entries(postFiles)) {
    const { data, content: bodyContent } = parseFrontmatter(content as string)
    
    // Extract collection and filename from path
    // Path format: ../../content/collection/filename.mdx
    const pathParts = path.split('/')
    const filename = pathParts.pop()?.replace('.mdx', '') || ''
    const collection = pathParts[pathParts.length - 1] // e.g., "guides", "blog", "compare"
    
    // Create slug with collection path (e.g., "guides/my-post", "compare/product-comparison")
    const slug = `${collection}/${filename}`
    
    posts.push({
      title: data.title || 'Untitled',
      excerpt: data.excerpt || '',
      date: data.date ? formatDate(data.date) : '',
      readTime: data.readTime || '5 min read',
      slug: slug,
      image: data.image || '',
      tags: data.tags || [],
      author: data.author || 'Anonymous',
      content: bodyContent.trim()
    })
  }

  // Sort by date (newest first)
  posts.sort((a, b) => {
    const dateA = new Date(a.date)
    const dateB = new Date(b.date)
    return dateB.getTime() - dateA.getTime()
  })

  return posts
}

export function getPostContent(slug: string): string {
  const posts = loadPosts()
  const post = posts.find(p => p.slug === slug)
  return post?.content || ''
}


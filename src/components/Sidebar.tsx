import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { ChevronDown, ChevronRight } from 'lucide-react'
import { getAllPosts, getPostsByCollection } from '../lib/posts'

const collectionLabels: Record<string, string> = {
  'guides': 'Guides',
  'case-studies': 'Case Studies',
  'blog': 'Blog',
  'features': 'Features',
  'compare': 'Compare',
  'news': 'News',
}

const collectionOrder = ['guides', 'features', 'case-studies', 'compare', 'news', 'blog']

export function Sidebar() {
  const location = useLocation()
  const currentPath = location.pathname
  
  // Extract current collection from path
  const pathParts = currentPath.split('/').filter(Boolean)
  const currentCollection = pathParts[0] || ''
  
  const [expandedCollection, setExpandedCollection] = useState<string>(currentCollection)

  const toggleCollection = (collection: string) => {
    setExpandedCollection(expandedCollection === collection ? '' : collection)
  }

  return (
    <aside className="hidden lg:block fixed left-0 top-16 h-[calc(100vh-4rem)] w-64 bg-gray-900 text-white overflow-y-auto border-r border-gray-800">
      <div className="p-4">
        <h2 className="text-lg font-bold mb-4 text-gray-300 uppercase tracking-wide">Categories</h2>
        
        <nav className="space-y-1">
          {collectionOrder.map((collectionKey) => {
            const posts = getPostsByCollection(collectionKey)
            if (posts.length === 0) return null
            
            const isExpanded = expandedCollection === collectionKey
            const isCurrentCollection = currentCollection === collectionKey

            return (
              <div key={collectionKey} className="mb-2">
                <button
                  onClick={() => toggleCollection(collectionKey)}
                  className={`w-full flex items-center justify-between px-3 py-2 rounded-lg transition-colors ${
                    isCurrentCollection 
                      ? 'bg-gray-800 text-white' 
                      : 'text-gray-400 hover:bg-gray-800 hover:text-white'
                  }`}
                >
                  <span className="font-medium text-sm">{collectionLabels[collectionKey]}</span>
                  {isExpanded ? (
                    <ChevronDown className="h-4 w-4" />
                  ) : (
                    <ChevronRight className="h-4 w-4" />
                  )}
                </button>
                
                {isExpanded && (
                  <div className="mt-1 space-y-1 pl-2">
                    {posts.map((post) => {
                      const isCurrentPost = currentPath === `/${post.slug}`
                      
                      return (
                        <Link
                          key={post.slug}
                          to={`/${post.slug}`}
                          className={`block px-3 py-2 rounded-lg text-sm transition-colors ${
                            isCurrentPost
                              ? 'bg-gray-700 text-white font-medium'
                              : 'text-gray-400 hover:bg-gray-800 hover:text-white'
                          }`}
                        >
                          <span className="line-clamp-2">{post.title}</span>
                        </Link>
                      )
                    })}
                  </div>
                )}
              </div>
            )
          })}
        </nav>
      </div>
    </aside>
  )
}


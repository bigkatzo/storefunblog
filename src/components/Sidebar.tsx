import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { ChevronDown, ChevronRight, X } from 'lucide-react'
import { getPostsByCollection } from '../lib/posts'

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
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const toggleCollection = (collection: string) => {
    setExpandedCollection(expandedCollection === collection ? '' : collection)
  }

  const closeMobileMenu = () => {
    setMobileMenuOpen(false)
  }

  const SidebarContent = () => (
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
                        onClick={closeMobileMenu}
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
  )

  return (
    <>
      {/* Desktop Sidebar - Sticky positioned, starts at content */}
      <aside className="hidden lg:block sticky top-16 left-0 w-64 h-[calc(100vh-4rem)] bg-gray-900 text-white overflow-y-auto border-r border-gray-800 float-left">
        <SidebarContent />
      </aside>

      {/* Mobile Pull Tab */}
      <button
        onClick={() => setMobileMenuOpen(true)}
        className="lg:hidden fixed bottom-0 left-1/2 -translate-x-1/2 z-40 bg-gray-900 text-white px-6 py-2 rounded-t-xl shadow-2xl hover:bg-gray-800 transition-all"
        aria-label="Open navigation menu"
      >
        <div className="flex items-center gap-2">
          <ChevronDown className="h-4 w-4 rotate-180" />
          <span className="text-sm font-medium">Articles</span>
          <ChevronDown className="h-4 w-4 rotate-180" />
        </div>
      </button>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <>
          {/* Backdrop */}
          <div
            className="lg:hidden fixed inset-0 bg-black/60 z-40 backdrop-blur-sm"
            onClick={closeMobileMenu}
          />
          
          {/* Drawer */}
          <aside className="lg:hidden fixed bottom-0 left-0 right-0 z-50 bg-gray-900 text-white rounded-t-2xl shadow-2xl max-h-[80vh] overflow-y-auto animate-slide-up">
            <div className="sticky top-0 bg-gray-900 border-b border-gray-800 p-4 flex justify-between items-center">
              <h2 className="text-lg font-bold text-white">Navigation</h2>
              <button
                onClick={closeMobileMenu}
                className="p-2 hover:bg-gray-800 rounded-full transition-colors"
                aria-label="Close menu"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <SidebarContent />
          </aside>
        </>
      )}
    </>
  )
}


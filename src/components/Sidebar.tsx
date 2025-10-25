import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { ChevronDown, ChevronRight, X, Menu } from 'lucide-react'
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

  // Lock scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileMenuOpen])

  const toggleCollection = (collection: string) => {
    setExpandedCollection(expandedCollection === collection ? '' : collection)
  }

  const closeMobileMenu = () => {
    setMobileMenuOpen(false)
  }

  const SidebarContent = () => {
    // Reorder collections to show current collection at the top
    const orderedCollections = currentCollection
      ? [
          currentCollection,
          ...collectionOrder.filter(key => key !== currentCollection)
        ]
      : collectionOrder

    return (
      <div className="p-4">
        <nav className="space-y-1">
          {orderedCollections.map((collectionKey) => {
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
                    ? 'text-white' 
                    : 'text-gray-400 hover:bg-gray-800/30 hover:text-gray-300'
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
                        state={{ fromCollection: collectionKey }}
                        onClick={closeMobileMenu}
                        className={`block px-3 py-2 rounded-lg text-sm transition-colors ${
                          isCurrentPost
                            ? 'text-gray-200 cursor-default pointer-events-none'
                            : 'text-gray-500 hover:bg-gray-800/30 hover:text-gray-300'
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
  }

  return (
    <>
      {/* Desktop Sidebar - Pinned to left with rounded right corners */}
      <aside className="hidden lg:block sticky top-16 left-0 w-64 h-[calc(100vh-4rem)] bg-gray-900 text-white overflow-y-auto border-r border-gray-800 rounded-r-2xl z-20 float-left">
        <SidebarContent />
      </aside>

      {/* Mobile Floating Action Button */}
      <button
        onClick={() => setMobileMenuOpen(true)}
        className="lg:hidden fixed bottom-6 right-6 z-20 bg-gray-900 text-white p-4 rounded-full shadow-2xl hover:bg-gray-800 transition-colors"
        aria-label="Open navigation menu"
      >
        <Menu className="h-6 w-6" />
      </button>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <>
          {/* Backdrop */}
          <div
            className="lg:hidden fixed inset-0 bg-black/60 z-[25] backdrop-blur-sm"
            onClick={closeMobileMenu}
          />
          
          {/* Drawer */}
          <aside className="lg:hidden fixed bottom-0 left-0 right-0 z-30 bg-gray-900 text-white rounded-t-2xl shadow-2xl max-h-[80vh] overflow-y-auto animate-slide-up">
            <div className="sticky top-0 bg-gray-900 border-b border-gray-800 py-2 px-4 flex justify-end items-center">
              <button
                onClick={closeMobileMenu}
                className="p-1.5 hover:bg-gray-800 rounded-full transition-colors"
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


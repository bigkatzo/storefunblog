import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

export function ScrollCTA() {
  const [isVisible, setIsVisible] = useState(false)
  const [lastScrollY, setLastScrollY] = useState(0)
  const [hasScrolledInArticle, setHasScrolledInArticle] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      
      // Calculate featured image height (matches BlogPost hero section)
      // Mobile: h-64 (256px), sm: h-80 (320px), md: h-96 (384px)
      const getImageHeight = () => {
        if (window.innerWidth >= 768) return 384 // md and up
        if (window.innerWidth >= 640) return 320 // sm
        return 256 // default
      }
      
      const imageHeight = getImageHeight()
      const headerHeight = 64 // Header is h-16 (64px)
      const articleStartPosition = imageHeight + headerHeight
      
      // Check if user has scrolled into the article body area (past featured image)
      const inArticleBody = currentScrollY > articleStartPosition
      
      // Track if user has engaged with article content
      if (inArticleBody && currentScrollY > articleStartPosition + 200) {
        setHasScrolledInArticle(true)
      }
      
      // Only show banner when:
      // 1. User is in article body area
      // 2. User has scrolled down at least 200px into the article
      // 3. User is scrolling UP (looking for navigation)
      if (hasScrolledInArticle && inArticleBody) {
        if (currentScrollY < lastScrollY && currentScrollY > articleStartPosition + 100) {
          setIsVisible(true)
        } else {
          setIsVisible(false)
        }
      }
      
      setLastScrollY(currentScrollY)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScrollY, hasScrolledInArticle])

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -100, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed top-16 left-0 right-0 lg:left-64 z-10 bg-black text-white shadow-lg"
        >
          <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between gap-4">
            {/* Logo + Text */}
            <div className="flex items-center gap-3">
              <img 
                src="https://sakysysfksculqobozxi.supabase.co/storage/v1/object/public/site-assets/content/storefunicon.svg"
                alt="Store.fun"
                className="h-6 w-6"
                style={{ filter: 'brightness(0) invert(1)' }}
              />
              <span className="text-sm font-medium">Launch your store today.</span>
            </div>

            {/* CTA Button */}
            <a
              href="https://store.fun/start"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-black px-4 py-2 rounded-full text-sm font-medium hover:bg-gray-100 transition-colors whitespace-nowrap"
            >
              Get Started
              <ArrowRight className="h-3.5 w-3.5" />
            </a>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}


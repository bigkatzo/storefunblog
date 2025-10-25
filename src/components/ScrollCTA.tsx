import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

export function ScrollCTA() {
  const [isVisible, setIsVisible] = useState(false)
  const [lastScrollY, setLastScrollY] = useState(0)
  const [hasScrolledDown, setHasScrolledDown] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      
      // Only show after user has scrolled down at least 300px
      if (currentScrollY > 300) {
        setHasScrolledDown(true)
      }
      
      // Show when scrolling up, hide when scrolling down
      if (hasScrolledDown) {
        if (currentScrollY < lastScrollY && currentScrollY > 200) {
          setIsVisible(true)
        } else {
          setIsVisible(false)
        }
      }
      
      setLastScrollY(currentScrollY)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScrollY, hasScrolledDown])

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -100, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed top-16 left-0 right-0 z-40 bg-black text-white shadow-lg"
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


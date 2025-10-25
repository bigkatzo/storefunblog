import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    // Check if this is a browser back/forward navigation
    // If it is, let the browser handle scroll restoration
    if (window.history.scrollRestoration) {
      window.history.scrollRestoration = 'manual'
    }

    // Scroll to top on route change (new navigation)
    // Small delay to ensure DOM is ready
    const scrollTimer = setTimeout(() => {
      window.scrollTo(0, 0)
    }, 0)

    return () => clearTimeout(scrollTimer)
  }, [pathname])

  return null
}


import { Link } from 'react-router-dom'
import { useState } from 'react'

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navLinks = [
    { href: '/', label: 'Home' },
  ]

  return (
    <>
      <header className="w-full fixed top-0 left-0 right-0 z-[60] bg-white/80 backdrop-blur-xl border-b border-gray-200/50">
        <nav className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <img 
              src="https://sakysysfksculqobozxi.supabase.co/storage/v1/object/public/site-assets/logo.svg" 
              alt="store.fun" 
              className="h-8 w-auto"
              style={{ filter: 'brightness(0)' }}
            />
          </Link>
          
          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center space-x-8 text-sm">
            {navLinks.map((link, index) => (
              <Link 
                key={index}
                to={link.href} 
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
          
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Desktop: Show both buttons */}
            <a 
              href="https://my.store.fun/login" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hidden md:inline-block px-3 sm:px-6 py-2.5 font-medium text-sm text-gray-700 hover:text-gray-900 transition-colors"
            >
              Sign In
            </a>
            <a 
              href="https://my.store.fun/register" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hidden md:inline-block px-4 sm:px-6 py-2.5 rounded-full font-medium text-xs sm:text-sm text-white transition-all hover:scale-105" 
              style={{ backgroundColor: '#0f47e4' }}
            >
              Launch Store
            </a>
            
            {/* Mobile: Show Launch Store + Hamburger */}
            <a 
              href="https://my.store.fun/register" 
              target="_blank" 
              rel="noopener noreferrer"
              className="md:hidden px-4 py-2.5 rounded-full font-medium text-xs text-white transition-all hover:scale-105" 
              style={{ backgroundColor: '#0f47e4' }}
            >
              Launch Store
            </a>
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-gray-700 hover:text-gray-900 transition-colors"
              aria-label="Menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 z-[65] bg-black/50" onClick={() => setMobileMenuOpen(false)}>
          <div 
            className="fixed top-16 right-0 bottom-0 w-64 bg-white shadow-xl z-[70]"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex flex-col p-6 space-y-4">
              {/* Navigation Links */}
              <div className="flex flex-col space-y-3 pb-4 border-b border-gray-200">
                {navLinks.map((link, index) => (
                  <Link 
                    key={index}
                    to={link.href} 
                    className="text-gray-700 hover:text-gray-900 transition-colors font-medium"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
              
              {/* Sign In Button */}
              <a 
                href="https://my.store.fun/login" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full px-4 py-3 text-center rounded-lg font-medium text-sm text-gray-700 hover:bg-gray-100 transition-colors border border-gray-300"
              >
                Sign In
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default Header


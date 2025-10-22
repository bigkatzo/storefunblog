import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { useState } from 'react'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center group">
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <img 
                src="https://sakysysfksculqobozxi.supabase.co/storage/v1/object/public/site-assets/logo.svg"
                alt="StoreFun Blog"
                className="h-12 w-auto"
                style={{ filter: 'brightness(0)' }}
              />
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              to="/"
              className="text-gray-700 hover:text-primary-600 font-medium transition-colors"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="text-gray-700 hover:text-primary-600 font-medium transition-colors"
            >
              About
            </Link>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-primary-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-primary-700 transition-colors shadow-md"
            >
              Subscribe
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-gray-700 hover:text-primary-600"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden py-4 border-t"
          >
            <div className="flex flex-col gap-4">
              <Link
                to="/"
                onClick={() => setIsMenuOpen(false)}
                className="text-gray-700 hover:text-primary-600 font-medium"
              >
                Home
              </Link>
              <Link
                to="/about"
                onClick={() => setIsMenuOpen(false)}
                className="text-gray-700 hover:text-primary-600 font-medium"
              >
                About
              </Link>
              <button className="bg-primary-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-primary-700 transition-colors">
                Subscribe
              </button>
            </div>
          </motion.div>
        )}
      </nav>
    </header>
  )
}

export default Header


import { motion } from 'framer-motion'
import { Github, Twitter, Linkedin, Mail } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    { icon: Github, href: 'https://github.com/bigkatzo/storefunblog', label: 'GitHub' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:contact@storefunblog.com', label: 'Email' },
  ]

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About */}
          <div>
            <div className="mb-4">
              <img 
                src="https://sakysysfksculqobozxi.supabase.co/storage/v1/object/public/site-assets/logo.svg"
                alt="StoreFun Blog"
                className="h-10 w-auto"
                style={{ filter: 'brightness(0) invert(1)' }}
              />
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Exploring the latest trends in technology, design, and innovation. 
              Join us on our journey to create amazing content.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="/" className="text-gray-400 hover:text-primary-400 transition-colors text-sm">
                  Home
                </a>
              </li>
              <li>
                <a href="/about" className="text-gray-400 hover:text-primary-400 transition-colors text-sm">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors text-sm">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors text-sm">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-white text-lg font-bold mb-4">Connect With Us</h3>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gray-800 p-3 rounded-lg hover:bg-primary-600 transition-colors"
                >
                  <social.icon className="h-5 w-5" />
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-sm text-gray-500">
          <p>© {currentYear} StoreFun. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer


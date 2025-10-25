import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { useLocation } from 'react-router-dom'
import BlogCard from '../components/BlogCard'
import { getPostsByCollection } from '../lib/posts'

const collectionLabels: Record<string, string> = {
  'guides': 'Guides',
  'case-studies': 'Case Studies',
  'blog': 'Blog',
  'features': 'Features',
  'compare': 'Compare',
  'news': 'News',
}

const CollectionPage = () => {
  const location = useLocation()
  const collection = location.pathname.split('/').filter(Boolean)[0] || ''
  const posts = collection ? getPostsByCollection(collection) : []
  const title = collectionLabels[collection] || collection

  return (
    <div className="min-h-screen">
      {/* Hero Section - Same as Homepage */}
      <section className="bg-black text-white py-16 px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          {/* Logo */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="mb-8 flex justify-center"
          >
            <img 
              src="https://sakysysfksculqobozxi.supabase.co/storage/v1/object/public/site-assets/content/storefunicon.svg"
              alt="Store.fun Icon"
              className="h-16 w-auto"
              style={{ filter: 'brightness(0) invert(1)' }}
            />
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            Onchain Commerce is Here
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto"
          >
            Everything you need to start your business onchain without middlemen
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-3 justify-center items-center"
          >
            <motion.a
              href="https://store.fun/start"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center justify-center gap-2 bg-white text-black px-6 py-2.5 rounded-lg font-medium hover:bg-gray-100 transition-colors text-sm w-full sm:w-auto sm:min-w-[180px]"
            >
              Launch a store
              <ArrowRight className="h-4 w-4" />
            </motion.a>
            <motion.a
              href="https://t.me/storedotfun"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center justify-center gap-2 bg-transparent text-white px-6 py-2.5 rounded-lg font-medium border-2 border-white hover:bg-white hover:text-black transition-colors text-sm w-full sm:w-auto sm:min-w-[180px]"
            >
              Contact sales
            </motion.a>
          </motion.div>
        </motion.div>
      </section>

      {/* Collection Articles Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          {/* Collection Title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-12 text-center"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              {title}
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Explore our collection of {posts.length} {posts.length === 1 ? 'article' : 'articles'}
            </p>
          </motion.div>

          {/* Articles Grid */}
          {posts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post, index) => (
                <motion.div
                  key={post.slug}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                >
                  <BlogCard {...post} />
                </motion.div>
              ))}
            </div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-center py-12"
            >
              <p className="text-xl text-gray-600">No articles found in this collection yet.</p>
              <p className="text-gray-500 mt-2">Check back soon for new content!</p>
            </motion.div>
          )}
        </div>
      </section>
    </div>
  )
}

export default CollectionPage


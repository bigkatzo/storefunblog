import { motion } from 'framer-motion'
import { ArrowRight, ChevronRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import BlogCard from '../components/BlogCard'
import { getPostsByCollection } from '../lib/posts'

const collections = [
  { name: 'guides', label: 'Guides' },
  { name: 'features', label: 'Features' },
  { name: 'case-studies', label: 'Case Studies' },
  { name: 'compare', label: 'Compare' },
  { name: 'news', label: 'News' },
  { name: 'blog', label: 'Blog' },
]

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Compact Hero Section - Black Background */}
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
              href="https://store.fun"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center justify-center gap-2 bg-white text-black px-6 py-2.5 rounded-lg font-medium hover:bg-gray-100 transition-colors text-sm"
            >
              Launch a store
              <ArrowRight className="h-4 w-4" />
            </motion.a>
            <motion.a
              href="mailto:contact@store.fun"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center justify-center bg-transparent text-white px-6 py-2.5 rounded-lg font-medium border-2 border-white hover:bg-white hover:text-black transition-colors text-sm"
            >
              Contact sales
            </motion.a>
          </motion.div>
        </motion.div>
      </section>

      {/* Collections Sections */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto space-y-16">
          {collections.map((collection, collectionIndex) => {
            const posts = getPostsByCollection(collection.name)
            
            // Skip if no posts in this collection
            if (posts.length === 0) return null

            return (
              <motion.div
                key={collection.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: collectionIndex * 0.1 }}
              >
                {/* Collection Title */}
                <div className="flex items-center justify-between mb-8">
                  <h2 className="text-3xl font-bold text-gray-900">
                    {collection.label}
                  </h2>
                  <Link
                    to={`/${collection.name}`}
                    className="text-primary-600 hover:text-primary-700 font-medium flex items-center gap-1 group"
                  >
                    View all
                    <ChevronRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>

                {/* Horizontal Scrollable Articles */}
                <div className="relative">
                  <div className="overflow-x-auto pb-4 scrollbar-hide">
                    <div className="flex gap-6" style={{ width: 'max-content' }}>
                      {posts.slice(0, 6).map((post, index) => (
                        <motion.div
                          key={post.slug}
                          initial={{ opacity: 0, x: 20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.1 }}
                          className="w-[350px] flex-shrink-0"
                        >
                          <BlogCard {...post} />
                        </motion.div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Gradient fade on the right */}
                  {posts.length > 3 && (
                    <div className="absolute top-0 right-0 h-full w-20 bg-gradient-to-l from-white to-transparent pointer-events-none" />
                  )}
                </div>
              </motion.div>
            )
          })}
        </div>
      </section>
    </div>
  )
}

export default Home


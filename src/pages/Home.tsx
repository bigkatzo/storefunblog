import { motion } from 'framer-motion'
import { Sparkles } from 'lucide-react'
import BlogCard from '../components/BlogCard'
import { getAllPosts } from '../lib/posts'

const blogPosts = getAllPosts()

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
            className="inline-flex items-center gap-2 bg-primary-100 text-primary-700 px-4 py-2 rounded-full mb-6"
          >
            <Sparkles className="h-4 w-4" />
            <span className="text-sm font-medium">Welcome to StoreFun Blog</span>
          </motion.div>

          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Discover Amazing{' '}
            <span className="gradient-text">Stories</span>
          </h1>

          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Explore insightful articles about technology, design, and innovation. 
            Learn from experts and stay ahead of the curve.
          </p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-primary-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-primary-700 transition-colors shadow-lg"
            >
              Explore Articles
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-primary-600 px-8 py-3 rounded-lg font-medium border-2 border-primary-600 hover:bg-primary-50 transition-colors"
            >
              Subscribe Now
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Background Decoration */}
        <div className="absolute top-0 left-0 w-full h-full -z-10 overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob" />
          <div className="absolute top-40 right-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000" />
          <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000" />
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Latest Articles</h2>
            <p className="text-gray-600">Stay updated with our newest posts and insights</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <motion.div
                key={post.slug}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <BlogCard {...post} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-primary-600 to-blue-600">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center text-white"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Never Miss an Update
          </h2>
          <p className="text-lg mb-8 text-white/90">
            Subscribe to our newsletter and get the latest articles delivered to your inbox
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-6 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
            />
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-primary-600 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors"
            >
              Subscribe
            </motion.button>
          </div>
        </motion.div>
      </section>
    </div>
  )
}

export default Home


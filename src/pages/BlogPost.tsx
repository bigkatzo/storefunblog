import { useParams, Link, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Calendar, Clock, ArrowLeft, Share2 } from 'lucide-react'
import { getPostBySlug } from '../lib/posts'

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>()
  const location = useLocation()
  
  // Extract collection from the path (e.g., /guides/my-post -> guides)
  const pathParts = location.pathname.split('/').filter(Boolean)
  const collection = pathParts[0] || ''
  
  // Build full slug with collection (e.g., "guides/my-post")
  const fullSlug = slug ? `${collection}/${slug}` : null
  const post = fullSlug ? getPostBySlug(fullSlug) : null
  const content = post?.content || ''

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Post Not Found</h1>
          <Link to="/" className="text-primary-600 hover:underline">
            Return to Home
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen">
      {/* Back Button */}
      <div className="max-w-4xl mx-auto px-4 pt-8">
        <Link to="/" className="inline-flex items-center gap-2 text-gray-600 hover:text-primary-600 transition-colors">
          <ArrowLeft className="h-4 w-4" />
          Back to Home
        </Link>
      </div>

      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="relative h-64 sm:h-80 md:h-96 mb-8 sm:mb-12"
      >
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
      </motion.div>

      {/* Content */}
      <article className="max-w-4xl mx-auto px-4 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          {/* Tags */}
          {post.tags && post.tags.length > 0 && (
            <div className="flex gap-2 mb-6">
              {post.tags.map((tag: string, index: number) => (
                <span
                  key={index}
                  className="text-sm font-medium px-4 py-1 bg-primary-100 text-primary-700 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}

          {/* Title */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
            {post.title}
          </h1>

          {/* Meta Info */}
          <div className="flex flex-wrap items-center gap-3 sm:gap-6 text-sm sm:text-base text-gray-600 mb-6 sm:mb-8 pb-6 sm:pb-8 border-b">
            <span className="flex items-center gap-2">
              <Calendar className="h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0" />
              <span className="text-xs sm:text-base">{post.date}</span>
            </span>
            <span className="flex items-center gap-2">
              <Clock className="h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0" />
              <span className="text-xs sm:text-base">{post.readTime}</span>
            </span>
            <span className="text-xs sm:text-base">By {post.author}</span>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="ml-auto flex items-center gap-2 text-primary-600 hover:text-primary-700 min-h-[44px] min-w-[44px] justify-center sm:min-h-0 sm:min-w-0"
            >
              <Share2 className="h-4 w-4 sm:h-5 sm:w-5" />
              <span className="hidden sm:inline">Share</span>
            </motion.button>
          </div>

          {/* Article Content */}
          <div className="prose-custom">
            {content.split('\n\n').map((paragraph: string, index: number) => {
              // Simple markdown parsing
              if (paragraph.startsWith('# ')) {
                return (
                  <h1 key={index} className="text-3xl font-bold mt-8 mb-4">
                    {paragraph.replace('# ', '')}
                  </h1>
                )
              }
              if (paragraph.startsWith('## ')) {
                return (
                  <h2 key={index} className="text-2xl font-bold mt-6 mb-3">
                    {paragraph.replace('## ', '')}
                  </h2>
                )
              }
              if (paragraph.startsWith('```')) {
                return (
                  <pre key={index} className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto my-4">
                    <code>{paragraph.replace(/```\w*\n?|\n?```/g, '')}</code>
                  </pre>
                )
              }
              if (paragraph.match(/^\d+\./)) {
                return (
                  <li key={index} className="ml-6 mb-2">
                    {paragraph.replace(/^\d+\.\s*/, '')}
                  </li>
                )
              }
              if (paragraph.startsWith('- ')) {
                return (
                  <li key={index} className="ml-6 mb-2">
                    {paragraph.replace('- ', '')}
                  </li>
                )
              }
              return (
                <p key={index} className="text-gray-700 leading-relaxed mb-4">
                  {paragraph}
                </p>
              )
            })}
          </div>
        </motion.div>

        {/* Author Box */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-12 bg-gradient-to-r from-primary-50 to-blue-50 rounded-2xl p-8"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-2">About the Author</h3>
          <p className="text-gray-700 mb-4">
            The StoreFun team is passionate about sharing knowledge and helping developers
            build amazing applications. Follow us for more insights and tutorials.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-primary-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-primary-700 transition-colors"
          >
            Follow Us
          </motion.button>
        </motion.div>
      </article>
    </div>
  )
}

export default BlogPost


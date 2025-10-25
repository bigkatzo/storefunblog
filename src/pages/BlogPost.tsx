import { useParams, Link, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Calendar, Clock, ChevronLeft, Share2 } from 'lucide-react'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { getPostBySlug } from '../lib/posts'
import { Sidebar } from '../components/Sidebar'
import { SEO } from '../components/SEO'
import { ScrollCTA } from '../components/ScrollCTA'

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
  
  // Check if user came from a collection page
  const fromCollection = (location.state as { fromCollection?: string })?.fromCollection
  
  // Smart back button: go to collection page only if user came from there, otherwise go home
  const backUrl = fromCollection ? `/${fromCollection}` : '/'

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: post?.title,
          text: post?.excerpt,
          url: window.location.href,
        })
      } catch (err) {
        console.log('Error sharing:', err)
      }
    } else {
      // Fallback: copy to clipboard
      navigator.clipboard.writeText(window.location.href)
      alert('Link copied to clipboard!')
    }
  }

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Post Not Found</h1>
          <Link to="/" className="text-gray-600 hover:underline">
            Return to Home
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen">
      {/* SEO Meta Tags */}
      <SEO
        title={post.title}
        description={post.excerpt}
        image={post.image}
        url={typeof window !== 'undefined' ? window.location.href : undefined}
        type="article"
        author={post.author}
        publishedTime={post.date}
        tags={post.tags}
      />
      
      {/* Scroll CTA Banner */}
      <ScrollCTA />
      
      {/* Hero Section with Back Button - Full Width */}
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
        
        {/* Back Button on Image - Smart navigation */}
        <Link 
          to={backUrl}
          className="absolute top-4 left-4 sm:top-6 sm:left-6 bg-white/90 hover:bg-white backdrop-blur-sm rounded-full p-2 sm:p-3 transition-all shadow-lg"
        >
          <ChevronLeft className="h-5 w-5 sm:h-6 sm:w-6 text-gray-900" />
        </Link>
      </motion.div>

      {/* Content Section with Sidebar */}
      <div className="relative">
        {/* Sidebar - Desktop Only - Positioned after hero */}
        <Sidebar />
        
        {/* Main Content */}
        <div className="lg:ml-64">
          <article className="max-w-4xl mx-auto px-4 pb-16">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.2 }}
        >
          {/* Tags */}
          {post.tags && post.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-6">
              {post.tags.map((tag: string, index: number) => (
                <span
                  key={index}
                  className="text-sm font-medium px-4 py-1 bg-gray-100 text-gray-700 rounded-full"
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
              onClick={handleShare}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="ml-auto flex items-center gap-2 text-gray-600 hover:text-gray-900 min-h-[44px] min-w-[44px] justify-center sm:min-h-0 sm:min-w-0"
            >
              <Share2 className="h-4 w-4 sm:h-5 sm:w-5" />
              <span className="hidden sm:inline">Share</span>
            </motion.button>
          </div>

          {/* Article Content */}
          <div className="prose prose-lg prose-gray max-w-none">
            <ReactMarkdown 
              remarkPlugins={[remarkGfm]}
              components={{
                h1: ({node, ...props}) => <h1 className="text-4xl font-bold mt-10 mb-6 text-gray-900 leading-tight" {...props} />,
                h2: ({node, ...props}) => <h2 className="text-3xl font-bold mt-8 mb-4 text-gray-900 leading-tight" {...props} />,
                h3: ({node, ...props}) => <h3 className="text-2xl font-bold mt-6 mb-3 text-gray-900 leading-snug" {...props} />,
                h4: ({node, ...props}) => <h4 className="text-xl font-bold mt-5 mb-2 text-gray-900 leading-snug" {...props} />,
                h5: ({node, ...props}) => <h5 className="text-lg font-bold mt-4 mb-2 text-gray-900" {...props} />,
                h6: ({node, ...props}) => <h6 className="text-base font-bold mt-3 mb-2 text-gray-900" {...props} />,
                p: ({node, ...props}) => <p className="text-gray-700 leading-relaxed mb-6 text-lg" {...props} />,
                ul: ({node, ...props}) => <ul className="list-disc list-outside ml-6 mb-6 space-y-2 text-gray-700" {...props} />,
                ol: ({node, ...props}) => <ol className="list-decimal list-outside ml-6 mb-6 space-y-2 text-gray-700" {...props} />,
                li: ({node, ...props}) => <li className="text-gray-700 leading-relaxed pl-2" {...props} />,
                blockquote: ({node, ...props}) => (
                  <blockquote className="border-l-4 border-gray-900 bg-gray-50 pl-6 pr-4 py-4 my-6 italic text-gray-700" {...props} />
                ),
                code: ({node, className, children, ...props}) => {
                  const inline = !className;
                  return inline ? (
                    <code className="bg-gray-100 text-gray-900 px-2 py-1 rounded text-sm font-mono" {...props}>
                      {children}
                    </code>
                  ) : (
                    <code className={className} {...props}>
                      {children}
                    </code>
                  );
                },
                pre: ({node, ...props}) => (
                  <pre className="bg-gray-900 text-gray-100 p-6 rounded-xl overflow-x-auto my-6 shadow-lg" {...props} />
                ),
                a: ({node, ...props}) => (
                  <a className="text-gray-900 font-medium underline decoration-2 decoration-gray-300 hover:decoration-gray-900 transition-colors" {...props} />
                ),
                strong: ({node, ...props}) => <strong className="font-bold text-gray-900" {...props} />,
                em: ({node, ...props}) => <em className="italic text-gray-700" {...props} />,
                del: ({node, ...props}) => <del className="line-through text-gray-500" {...props} />,
                hr: ({node, ...props}) => <hr className="my-8 border-t-2 border-gray-200" {...props} />,
                table: ({node, ...props}) => (
                  <div className="overflow-x-auto my-6">
                    <table className="min-w-full border-collapse border border-gray-300" {...props} />
                  </div>
                ),
                thead: ({node, ...props}) => <thead className="bg-gray-100" {...props} />,
                tbody: ({node, ...props}) => <tbody className="divide-y divide-gray-200" {...props} />,
                tr: ({node, ...props}) => <tr className="hover:bg-gray-50" {...props} />,
                th: ({node, ...props}) => (
                  <th className="px-6 py-3 text-left text-sm font-bold text-gray-900 border border-gray-300" {...props} />
                ),
                td: ({node, ...props}) => (
                  <td className="px-6 py-3 text-sm text-gray-700 border border-gray-300" {...props} />
                ),
                img: ({node, ...props}) => (
                  <img className="rounded-lg shadow-md my-6 w-full" {...props} />
                ),
              }}
            >
              {content}
            </ReactMarkdown>
          </div>
        </motion.div>

        {/* About Store.fun Box */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.2 }}
          className="mt-12 bg-gray-100 border border-gray-200 rounded-2xl p-6 sm:p-8 shadow-sm"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-3">About Store.fun</h3>
          <p className="text-gray-700 mb-6">
            Store.fun is the decentralized end-to-end commerce platform empowering merchants to sell with full control and ownership.
          </p>
          <motion.a
            href="https://store.fun/about"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block bg-gray-900 text-white px-6 py-3 rounded-full font-medium hover:bg-gray-800 transition-colors"
          >
            Learn More
          </motion.a>
        </motion.div>
          </article>
        </div>
      </div>
    </div>
  )
}

export default BlogPost


import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

interface BlogCardProps {
  title: string
  excerpt: string
  date: string
  readTime: string
  slug: string
  image?: string
  tags?: string[]
}

const BlogCard = ({ title, excerpt, slug, image, tags }: BlogCardProps) => {
  return (
    <Link to={`/${slug}`} className="block">
      <motion.article
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        whileHover={{ y: -8 }}
        transition={{ duration: 0.3 }}
        className="bg-white rounded-xl shadow-lg overflow-hidden card-hover h-full cursor-pointer"
      >
        {/* Image */}
        {image && (
          <div className="relative h-48 overflow-hidden">
            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
          </div>
        )}

        <div className="p-6">
          {/* Tags */}
          {tags && tags.length > 0 && (
            <div className="flex gap-2 mb-3">
              {tags.slice(0, 2).map((tag, index) => (
                <span
                  key={index}
                  className="text-xs font-medium px-3 py-1 bg-primary-100 text-primary-700 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}

          {/* Title */}
          <h3 className="text-xl font-bold text-gray-900 mb-3 hover:text-primary-600 transition-colors line-clamp-2">
            {title}
          </h3>

          {/* Excerpt */}
          <p className="text-gray-600 line-clamp-3">{excerpt}</p>
        </div>
      </motion.article>
    </Link>
  )
}

export default BlogCard


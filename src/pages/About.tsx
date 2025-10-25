import { motion } from 'framer-motion'
import { Heart, Target, Users, Zap } from 'lucide-react'
import { SEO } from '../components/SEO'

const About = () => {
  const features = [
    {
      icon: Heart,
      title: 'Passionate',
      description: 'We love what we do and it shows in every article we publish.',
    },
    {
      icon: Target,
      title: 'Focused',
      description: 'Quality over quantity. Every piece is crafted with care.',
    },
    {
      icon: Users,
      title: 'Community',
      description: 'Building a community of learners and creators together.',
    },
    {
      icon: Zap,
      title: 'Innovative',
      description: 'Always exploring new ideas and pushing boundaries.',
    },
  ]

  return (
    <div className="min-h-screen py-16 px-4">
      {/* SEO Meta Tags */}
      <SEO
        title="About"
        description="Learn about Store.fun Blog - your source for insights on onchain commerce, decentralized ecommerce, and the future of online business."
        image="https://sakysysfksculqobozxi.supabase.co/storage/v1/object/public/site-assets/content/og-about.png"
        url={typeof window !== 'undefined' ? window.location.href : undefined}
        type="website"
      />
      
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 px-4">
            About <span className="gradient-text">StoreFun Blog</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 leading-relaxed px-4">
            We're on a mission to share knowledge, inspire creativity, and 
            build a community of passionate developers and designers.
          </p>
        </motion.div>

        {/* Story Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-16 bg-white rounded-2xl shadow-lg p-8 md:p-12"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>
              StoreFun Blog was born out of a passion for technology and a desire to share 
              knowledge with the world. What started as a small personal blog has grown into 
              a platform that reaches thousands of developers and designers worldwide.
            </p>
            <p>
              We believe that the best way to learn is by sharing experiences and insights 
              with others. Our blog covers a wide range of topics including web development, 
              design trends, and innovative technologies that are shaping the future.
            </p>
            <p>
              Every article we publish is crafted with care, backed by real-world experience, 
              and designed to provide practical value to our readers. We're not just creating 
              content; we're building a resource that helps people grow in their careers and 
              stay ahead in the fast-paced tech industry.
            </p>
          </div>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            What Drives Us
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 + index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-white rounded-xl shadow-lg p-6 card-hover"
              >
                <div className="bg-primary-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="h-6 w-6 text-primary-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="bg-gradient-to-r from-primary-600 to-blue-600 rounded-2xl shadow-xl p-6 sm:p-8 md:p-12 text-center text-white"
        >
          <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">Join Our Journey</h2>
          <p className="text-base sm:text-lg mb-6 sm:mb-8 text-white/90">
            Be part of our growing community and never miss an update
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-gray-900 px-6 sm:px-8 py-3 rounded-full font-medium hover:bg-gray-100 transition-colors shadow-lg text-sm sm:text-base min-h-[44px]"
          >
            Subscribe to Newsletter
          </motion.button>
        </motion.div>
      </div>
    </div>
  )
}

export default About


import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Header from './components/Header'
import Footer from './components/Footer'
import { CTASection } from './components/CTASection'
import { ScrollToTop } from './components/ScrollToTop'
import Home from './pages/Home'
import BlogPost from './pages/BlogPost'
import CollectionPage from './pages/CollectionPage'

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col bg-gradient-to-br from-gray-50 to-blue-50 overflow-x-hidden">
        <Header />
        <main className="flex-grow pt-16">
          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/" element={<Home />} />
              
              {/* Collection category pages */}
              <Route path="/guides" element={<CollectionPage />} />
              <Route path="/case-studies" element={<CollectionPage />} />
              <Route path="/blog" element={<CollectionPage />} />
              <Route path="/features" element={<CollectionPage />} />
              <Route path="/compare" element={<CollectionPage />} />
              <Route path="/news" element={<CollectionPage />} />
              
              {/* Individual post routes */}
              <Route path="/guides/:slug" element={<BlogPost />} />
              <Route path="/case-studies/:slug" element={<BlogPost />} />
              <Route path="/blog/:slug" element={<BlogPost />} />
              <Route path="/features/:slug" element={<BlogPost />} />
              <Route path="/compare/:slug" element={<BlogPost />} />
              <Route path="/news/:slug" element={<BlogPost />} />
              
              {/* Legacy blog route for backward compatibility */}
              <Route path="/posts/:slug" element={<BlogPost />} />
              
              <Route path="/admin" element={<div className="p-8 text-center"><h1 className="text-2xl font-bold">TinaCMS Admin</h1><p className="mt-4">Run <code className="bg-gray-100 px-2 py-1 rounded">npm run tina</code> to access the CMS</p></div>} />
            </Routes>
          </AnimatePresence>
        </main>
        <CTASection />
        <Footer />
      </div>
    </Router>
  )
}

export default App


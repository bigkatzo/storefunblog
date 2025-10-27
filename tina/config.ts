import { defineConfig } from 'tinacms'

export default defineConfig({
  branch: 'main',
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID || process.env.VITE_TINA_CLIENT_ID,
  token: process.env.TINA_TOKEN,
  build: {
    outputFolder: 'admin',
    publicFolder: 'public',
  },
  media: {
    tina: {
      mediaRoot: 'uploads',
      publicFolder: 'public',
    },
  },
  search: {
    tina: {
      indexerToken: process.env.TINA_SEARCH_TOKEN,
      stopwordLanguages: ['eng'],
    },
    indexBatchSize: 100,
    maxSearchIndexFieldLength: 100,
  },
  schema: {
    collections: [
      // Guides Collection
      {
        name: 'guide',
        label: 'Guides',
        path: 'content/guides',
        format: 'mdx',
        ui: {
          router: ({ document }) => {
            return `/guides/${document._sys.filename}`
          },
          filename: {
            slugify: (values) => {
              return `${values?.title?.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')}`
            },
          },
        },
        defaultItem: () => {
          return {
            title: 'New Guide',
            excerpt: 'A brief description of your guide...',
            date: new Date().toISOString(),
            readTime: '7 min read',
            author: 'StoreFun Team',
            published: false,
            tags: [],
          }
        },
        fields: [
          {
            type: 'string',
            name: 'title',
            label: 'Title',
            description: 'The title of your guide',
            isTitle: true,
            required: true,
          },
          {
            type: 'string',
            name: 'slug',
            label: 'Slug',
            description: 'URL-friendly version of the title (optional, auto-generated from title)',
          },
          {
            type: 'boolean',
            name: 'published',
            label: 'Published',
            description: 'Toggle to publish or unpublish this guide',
          },
          {
            type: 'string',
            name: 'excerpt',
            label: 'Excerpt',
            description: 'A short summary (recommended 150-160 characters)',
            required: true,
            ui: {
              component: 'textarea',
            },
          },
          {
            type: 'datetime',
            name: 'date',
            label: 'Publish Date',
            description: 'When this guide was or will be published',
            required: true,
            ui: {
              dateFormat: 'MMMM DD YYYY',
              timeFormat: 'hh:mm A',
            },
          },
          {
            type: 'string',
            name: 'readTime',
            label: 'Read Time',
            description: 'Estimated reading time (e.g., "7 min read")',
            required: true,
          },
          {
            type: 'image',
            name: 'image',
            label: 'Featured Image',
            description: 'Main image (recommended: 1200x630px)',
          },
          {
            type: 'string',
            name: 'imageAlt',
            label: 'Featured Image Alt Text',
            description: 'Describe the image for accessibility and SEO',
          },
          {
            type: 'string',
            name: 'tags',
            label: 'Tags',
            description: 'Add relevant tags',
            list: true,
            ui: {
              component: 'tags',
            },
          },
          {
            type: 'string',
            name: 'author',
            label: 'Author',
            description: 'Who wrote this guide',
            required: true,
            options: [
              'StoreFun Team',
              'Storesy Funson',
            ],
          },
          {
            type: 'rich-text',
            name: 'body',
            label: 'Body',
            description: 'The main content of your guide',
            isBody: true,
          },
        ],
      },
      // Case Studies Collection
      {
        name: 'case_study',
        label: 'Case Studies',
        path: 'content/case-studies',
        format: 'mdx',
        ui: {
          router: ({ document }) => {
            return `/case-studies/${document._sys.filename}`
          },
          filename: {
            slugify: (values) => {
              return `${values?.title?.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')}`
            },
          },
        },
        defaultItem: () => {
          return {
            title: 'New Case Study',
            excerpt: 'Brief overview of the case study...',
            date: new Date().toISOString(),
            readTime: '10 min read',
            author: 'StoreFun Team',
            published: false,
            tags: [],
          }
        },
        fields: [
          {
            type: 'string',
            name: 'title',
            label: 'Title',
            description: 'The title of your case study',
            isTitle: true,
            required: true,
          },
          {
            type: 'string',
            name: 'slug',
            label: 'Slug',
            description: 'URL-friendly version of the title',
          },
          {
            type: 'boolean',
            name: 'published',
            label: 'Published',
            description: 'Toggle to publish or unpublish',
          },
          {
            type: 'string',
            name: 'excerpt',
            label: 'Excerpt',
            description: 'A short summary of the case study',
            required: true,
            ui: {
              component: 'textarea',
            },
          },
          {
            type: 'string',
            name: 'company',
            label: 'Company Name',
            description: 'Name of the company/client featured',
          },
          {
            type: 'string',
            name: 'industry',
            label: 'Industry',
            description: 'Industry sector',
            options: ['E-commerce', 'SaaS', 'Education', 'Healthcare', 'Finance', 'Other'],
          },
          {
            type: 'datetime',
            name: 'date',
            label: 'Publish Date',
            required: true,
            ui: {
              dateFormat: 'MMMM DD YYYY',
              timeFormat: 'hh:mm A',
            },
          },
          {
            type: 'string',
            name: 'readTime',
            label: 'Read Time',
            required: true,
          },
          {
            type: 'image',
            name: 'image',
            label: 'Featured Image',
            description: 'Hero image for the case study',
          },
          {
            type: 'string',
            name: 'imageAlt',
            label: 'Image Alt Text',
          },
          {
            type: 'object',
            name: 'results',
            label: 'Key Results',
            description: 'Highlight key metrics and outcomes',
            fields: [
              {
                type: 'string',
                name: 'metric1',
                label: 'Result 1',
                description: 'e.g., "50% increase in sales"',
              },
              {
                type: 'string',
                name: 'metric2',
                label: 'Result 2',
              },
              {
                type: 'string',
                name: 'metric3',
                label: 'Result 3',
              },
            ],
          },
          {
            type: 'string',
            name: 'tags',
            label: 'Tags',
            list: true,
            ui: {
              component: 'tags',
            },
          },
          {
            type: 'string',
            name: 'author',
            label: 'Author',
            required: true,
            options: [
              'StoreFun Team',
              'Storesy Funson',
            ],
          },
          {
            type: 'rich-text',
            name: 'body',
            label: 'Body',
            description: 'The full case study content',
            isBody: true,
          },
        ],
      },
      // Blog Collection
      {
        name: 'blog',
        label: 'Blog',
        path: 'content/blog',
        format: 'mdx',
        ui: {
          router: ({ document }) => {
            return `/blog/${document._sys.filename}`
          },
          filename: {
            slugify: (values) => {
              return `${values?.title?.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')}`
            },
          },
        },
        defaultItem: () => {
          return {
            title: 'New Blog Post',
            excerpt: 'A brief description of your post...',
            date: new Date().toISOString(),
            readTime: '5 min read',
            author: 'StoreFun Team',
            published: false,
            tags: [],
          }
        },
        fields: [
          {
            type: 'string',
            name: 'title',
            label: 'Title',
            description: 'The title of your blog post',
            isTitle: true,
            required: true,
          },
          {
            type: 'string',
            name: 'slug',
            label: 'Slug',
            description: 'URL-friendly version of the title',
          },
          {
            type: 'boolean',
            name: 'published',
            label: 'Published',
            description: 'Toggle to publish or unpublish',
          },
          {
            type: 'string',
            name: 'excerpt',
            label: 'Excerpt',
            description: 'A short summary (recommended 150-160 characters)',
            required: true,
            ui: {
              component: 'textarea',
            },
          },
          {
            type: 'datetime',
            name: 'date',
            label: 'Publish Date',
            required: true,
            ui: {
              dateFormat: 'MMMM DD YYYY',
              timeFormat: 'hh:mm A',
            },
          },
          {
            type: 'string',
            name: 'readTime',
            label: 'Read Time',
            description: 'Estimated reading time (e.g., "5 min read")',
            required: true,
          },
          {
            type: 'image',
            name: 'image',
            label: 'Featured Image',
            description: 'Main image for the post (recommended: 1200x630px)',
          },
          {
            type: 'string',
            name: 'imageAlt',
            label: 'Image Alt Text',
            description: 'Describe the image for accessibility and SEO',
          },
          {
            type: 'string',
            name: 'tags',
            label: 'Tags',
            description: 'Add relevant tags',
            list: true,
            ui: {
              component: 'tags',
            },
          },
          {
            type: 'string',
            name: 'category',
            label: 'Category',
            description: 'Primary category for this post',
            options: [
              { label: 'Technology', value: 'technology' },
              { label: 'Business', value: 'business' },
              { label: 'Tutorial', value: 'tutorial' },
              { label: 'News', value: 'news' },
              { label: 'Opinion', value: 'opinion' },
            ],
          },
          {
            type: 'string',
            name: 'author',
            label: 'Author',
            required: true,
            options: [
              'StoreFun Team',
              'Storesy Funson',
            ],
          },
          {
            type: 'rich-text',
            name: 'body',
            label: 'Body',
            description: 'The main content of your post',
            isBody: true,
          },
        ],
      },
      // Features Collection
      {
        name: 'feature',
        label: 'Features',
        path: 'content/features',
        format: 'mdx',
        ui: {
          router: ({ document }) => {
            return `/features/${document._sys.filename}`
          },
          filename: {
            slugify: (values) => {
              return `${values?.title?.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')}`
            },
          },
        },
        defaultItem: () => {
          return {
            title: 'New Feature',
            excerpt: 'Brief description of this feature...',
            date: new Date().toISOString(),
            published: false,
            featured: false,
          }
        },
        fields: [
          {
            type: 'string',
            name: 'title',
            label: 'Feature Title',
            description: 'The name of the feature',
            isTitle: true,
            required: true,
          },
          {
            type: 'string',
            name: 'slug',
            label: 'Slug',
            description: 'URL-friendly version',
          },
          {
            type: 'boolean',
            name: 'published',
            label: 'Published',
            description: 'Show/hide this feature',
          },
          {
            type: 'boolean',
            name: 'featured',
            label: 'Featured',
            description: 'Highlight this feature on the homepage',
          },
          {
            type: 'string',
            name: 'excerpt',
            label: 'Short Description',
            description: 'Brief overview of the feature',
            required: true,
            ui: {
              component: 'textarea',
            },
          },
          {
            type: 'datetime',
            name: 'date',
            label: 'Release Date',
            description: 'When this feature was released',
          },
          {
            type: 'image',
            name: 'icon',
            label: 'Feature Icon',
            description: 'Icon or small image representing the feature',
          },
          {
            type: 'image',
            name: 'image',
            label: 'Feature Image',
            description: 'Detailed screenshot or illustration',
          },
          {
            type: 'string',
            name: 'imageAlt',
            label: 'Image Alt Text',
          },
          {
            type: 'string',
            name: 'category',
            label: 'Feature Category',
            options: ['Analytics', 'E-commerce', 'Marketing', 'Integration', 'Security', 'Other'],
          },
          {
            type: 'string',
            name: 'tags',
            label: 'Tags',
            list: true,
            ui: {
              component: 'tags',
            },
          },
          {
            type: 'rich-text',
            name: 'body',
            label: 'Detailed Description',
            description: 'Full feature documentation',
            isBody: true,
          },
        ],
      },
      // Compare Collection
      {
        name: 'compare',
        label: 'Comparisons',
        path: 'content/compare',
        format: 'mdx',
        ui: {
          router: ({ document }) => {
            return `/compare/${document._sys.filename}`
          },
          filename: {
            slugify: (values) => {
              return `${values?.title?.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')}`
            },
          },
        },
        defaultItem: () => {
          return {
            title: 'Product A vs Product B',
            excerpt: 'Comprehensive comparison...',
            date: new Date().toISOString(),
            readTime: '8 min read',
            author: 'StoreFun Team',
            published: false,
          }
        },
        fields: [
          {
            type: 'string',
            name: 'title',
            label: 'Comparison Title',
            description: 'e.g., "Product A vs Product B"',
            isTitle: true,
            required: true,
          },
          {
            type: 'string',
            name: 'slug',
            label: 'Slug',
          },
          {
            type: 'boolean',
            name: 'published',
            label: 'Published',
          },
          {
            type: 'string',
            name: 'excerpt',
            label: 'Excerpt',
            description: 'Brief comparison summary',
            required: true,
            ui: {
              component: 'textarea',
            },
          },
          {
            type: 'object',
            name: 'product1',
            label: 'Product 1',
            fields: [
              {
                type: 'string',
                name: 'name',
                label: 'Product Name',
                required: true,
              },
              {
                type: 'image',
                name: 'logo',
                label: 'Logo',
              },
              {
                type: 'string',
                name: 'url',
                label: 'Website URL',
              },
            ],
          },
          {
            type: 'object',
            name: 'product2',
            label: 'Product 2',
            fields: [
              {
                type: 'string',
                name: 'name',
                label: 'Product Name',
                required: true,
              },
              {
                type: 'image',
                name: 'logo',
                label: 'Logo',
              },
              {
                type: 'string',
                name: 'url',
                label: 'Website URL',
              },
            ],
          },
          {
            type: 'datetime',
            name: 'date',
            label: 'Publish Date',
            required: true,
            ui: {
              dateFormat: 'MMMM DD YYYY',
            },
          },
          {
            type: 'string',
            name: 'readTime',
            label: 'Read Time',
            required: true,
          },
          {
            type: 'image',
            name: 'image',
            label: 'Featured Image',
          },
          {
            type: 'string',
            name: 'imageAlt',
            label: 'Image Alt Text',
          },
          {
            type: 'string',
            name: 'winner',
            label: 'Recommendation',
            description: 'Which product do you recommend?',
            options: ['Product 1', 'Product 2', 'Tie', 'Depends'],
          },
          {
            type: 'string',
            name: 'tags',
            label: 'Tags',
            list: true,
            ui: {
              component: 'tags',
            },
          },
          {
            type: 'string',
            name: 'author',
            label: 'Author',
            required: true,
            options: [
              'StoreFun Team',
              'Storesy Funson',
            ],
          },
          {
            type: 'rich-text',
            name: 'body',
            label: 'Comparison Content',
            description: 'Detailed comparison and analysis',
            isBody: true,
          },
        ],
      },
      // News Collection
      {
        name: 'news',
        label: 'News',
        path: 'content/news',
        format: 'mdx',
        ui: {
          router: ({ document }) => {
            return `/news/${document._sys.filename}`
          },
          filename: {
            slugify: (values) => {
              return `${values?.title?.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')}`
            },
          },
        },
        defaultItem: () => {
          return {
            title: 'News Update',
            excerpt: 'Latest news and updates...',
            date: new Date().toISOString(),
            readTime: '3 min read',
            author: 'StoreFun Team',
            published: false,
            tags: [],
          }
        },
        fields: [
          {
            type: 'string',
            name: 'title',
            label: 'Title',
            description: 'The title of your news article',
            isTitle: true,
            required: true,
          },
          {
            type: 'string',
            name: 'slug',
            label: 'Slug',
          },
          {
            type: 'boolean',
            name: 'published',
            label: 'Published',
          },
          {
            type: 'boolean',
            name: 'breaking',
            label: 'Breaking News',
            description: 'Mark as breaking news for special highlighting',
          },
          {
            type: 'string',
            name: 'excerpt',
            label: 'Excerpt',
            description: 'A short summary',
            required: true,
            ui: {
              component: 'textarea',
            },
          },
          {
            type: 'datetime',
            name: 'date',
            label: 'Publish Date',
            required: true,
            ui: {
              dateFormat: 'MMMM DD YYYY',
              timeFormat: 'hh:mm A',
            },
          },
          {
            type: 'string',
            name: 'readTime',
            label: 'Read Time',
            required: true,
          },
          {
            type: 'image',
            name: 'image',
            label: 'Featured Image',
          },
          {
            type: 'string',
            name: 'imageAlt',
            label: 'Image Alt Text',
          },
          {
            type: 'string',
            name: 'source',
            label: 'Source',
            description: 'Original source or attribution',
          },
          {
            type: 'string',
            name: 'tags',
            label: 'Tags',
            list: true,
            ui: {
              component: 'tags',
            },
          },
          {
            type: 'string',
            name: 'author',
            label: 'Author',
            required: true,
            options: [
              'StoreFun Team',
              'Storesy Funson',
            ],
          },
          {
            type: 'rich-text',
            name: 'body',
            label: 'Body',
            isBody: true,
          },
        ],
      },
    ],
  },
})

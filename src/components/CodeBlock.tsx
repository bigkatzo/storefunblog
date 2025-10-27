import { useState } from 'react'
import { Check, Copy } from 'lucide-react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { vscDarkPlus } from 'react-syntax-highlighter/dist/cjs/styles/prism'

interface CodeBlockProps {
  children: string
  className?: string
  inline?: boolean
}

export const CodeBlock = ({ children, className, inline }: CodeBlockProps) => {
  const [copied, setCopied] = useState(false)

  const match = /language-(\w+)/.exec(className || '')
  const language = match ? match[1] : ''

  const handleCopy = async () => {
    await navigator.clipboard.writeText(children)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  // Inline code
  if (inline || !language) {
    return (
      <code className="bg-gray-100 text-gray-900 px-2 py-1 rounded text-sm font-mono">
        {children}
      </code>
    )
  }

  // Code block with syntax highlighting
  return (
    <div className="relative group my-6">
      <div className="absolute right-2 top-2 z-10">
        <button
          onClick={handleCopy}
          className="flex items-center gap-1 px-3 py-1.5 text-sm bg-gray-700 hover:bg-gray-600 text-white rounded-md transition-colors opacity-0 group-hover:opacity-100"
          aria-label="Copy code"
        >
          {copied ? (
            <>
              <Check className="h-4 w-4" />
              <span>Copied!</span>
            </>
          ) : (
            <>
              <Copy className="h-4 w-4" />
              <span>Copy</span>
            </>
          )}
        </button>
      </div>
      <SyntaxHighlighter
        language={language}
        style={vscDarkPlus}
        customStyle={{
          margin: 0,
          padding: '1.5rem',
          borderRadius: '0.75rem',
          fontSize: '0.875rem',
          lineHeight: '1.5',
        }}
        showLineNumbers={children.split('\n').length > 3}
      >
        {children}
      </SyntaxHighlighter>
    </div>
  )
}


import { ReactNode } from 'react'

interface KbdProps {
  children: ReactNode
}

export const Kbd = ({ children }: KbdProps) => {
  return (
    <kbd className="inline-flex items-center justify-center px-2 py-1 text-sm font-semibold text-gray-800 bg-gray-100 border border-gray-300 rounded shadow-sm font-mono">
      {children}
    </kbd>
  )
}


import { AlertCircle, Info, Lightbulb, AlertTriangle } from 'lucide-react'
import { ReactNode } from 'react'

type CalloutType = 'note' | 'warning' | 'tip' | 'info'

interface CalloutProps {
  type?: CalloutType
  title?: string
  children: ReactNode
}

const calloutStyles = {
  note: {
    container: 'bg-blue-50 border-blue-500 text-blue-900',
    icon: <Info className="h-5 w-5 text-blue-600 flex-shrink-0" />,
    title: 'text-blue-900',
  },
  warning: {
    container: 'bg-red-50 border-red-500 text-red-900',
    icon: <AlertTriangle className="h-5 w-5 text-red-600 flex-shrink-0" />,
    title: 'text-red-900',
  },
  tip: {
    container: 'bg-green-50 border-green-500 text-green-900',
    icon: <Lightbulb className="h-5 w-5 text-green-600 flex-shrink-0" />,
    title: 'text-green-900',
  },
  info: {
    container: 'bg-purple-50 border-purple-500 text-purple-900',
    icon: <AlertCircle className="h-5 w-5 text-purple-600 flex-shrink-0" />,
    title: 'text-purple-900',
  },
}

export const Callout = ({ type = 'note', title, children }: CalloutProps) => {
  const styles = calloutStyles[type]

  return (
    <div className={`border-l-4 rounded-r-lg p-4 my-6 ${styles.container}`}>
      <div className="flex gap-3">
        {styles.icon}
        <div className="flex-1">
          {title && (
            <div className={`font-bold mb-1 ${styles.title}`}>
              {title}
            </div>
          )}
          <div className="prose-sm">{children}</div>
        </div>
      </div>
    </div>
  )
}


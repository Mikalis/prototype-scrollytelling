import { cn } from '@/utils/cn'

interface ButtonProps {
  href?: string
  children: React.ReactNode
  className?: string
  onClick?: () => void
}

export function Button({ href, children, className, onClick }: ButtonProps) {
  const baseClasses = "inline-flex items-center justify-center px-6 py-3 font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
  
  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={cn(baseClasses, className)}
      >
        {children}
      </a>
    )
  }

  return (
    <button
      onClick={onClick}
      className={cn(baseClasses, className)}
    >
      {children}
    </button>
  )
} 
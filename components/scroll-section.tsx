'use client'

import { useScrollAnimation } from '@/hooks/useScrollAnimation'
import { cn } from '@/utils/cn'

interface ScrollSectionProps {
  children: React.ReactNode
  className?: string
}

export function ScrollSection({ children, className }: ScrollSectionProps) {
  const { elementRef, isVisible } = useScrollAnimation()

  return (
    <section className="min-h-screen flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8 py-12">
      <div
        ref={elementRef}
        className={cn(
          'scene max-w-4xl w-full text-center',
          isVisible && 'visible',
          className
        )}
      >
        {children}
      </div>
    </section>
  )
} 
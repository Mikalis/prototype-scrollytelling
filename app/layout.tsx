import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: 'Scrollytelling: 3. Säule Schweiz',
  description: 'So funktioniert die 3. Säule in der Schweiz – spannend & verständlich erklärt.',
}

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="de" className={inter.variable}>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
} 
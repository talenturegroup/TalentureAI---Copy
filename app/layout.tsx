import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { AuthProvider } from '@/lib/auth-context'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

// Disable caching for all pages
export const revalidate = 0

export const metadata: Metadata = {
  title: 'Talenture AI Hub',
  description: 'All Talenture AI tools in one palce',
  generator: 'Talenture',
  icons: {
    icon: [
      {
        url: '/talenture_group_logo.jpeg',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/talenture_group_logo.jpeg',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/talenture_group_logo.jpeg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/talenture_group_logo.jpeg',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        <AuthProvider>
          {children}
        </AuthProvider>
      </body>
    </html>
  )
}

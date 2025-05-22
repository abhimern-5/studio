import { type Metadata } from 'next'
import { ClerkProvider } from '@clerk/nextjs'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
import { Header } from '@/components/layout/header'
import { Toaster } from '@/components/ui/toaster'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Lumina Images',
  description: 'AI Powered Image Generation and 3D Viewer',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <ClerkProvider>
      <html lang="en" className="dark">
        <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground flex flex-col min-h-screen`}>
          <Header />
          <main className="flex-grow w-full">
            {children}
          </main>
          <footer className="py-6 text-center text-sm text-muted-foreground border-t border-border/40">
            Lumina Images &copy; {new Date().getFullYear()}
          </footer>
          <Toaster />
        </body>
      </html>
    </ClerkProvider>
  )
}

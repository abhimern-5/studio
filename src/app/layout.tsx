import { type Metadata } from 'next'
import { ClerkProvider } from '@clerk/nextjs'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
import { Header } from '@/components/layout/header'
import { Toaster } from '@/components/ui/toaster'
import Link from 'next/link'
import { Logo } from '@/components/common/logo'
import { Github, Linkedin, Twitter } from 'lucide-react'

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
          <footer className="bg-secondary/20 border-t border-border/40 py-12">
            <div className="container mx-auto px-4">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                <div>
                  <Logo textSize="text-xl" />
                  <p className="mt-4 text-sm text-muted-foreground">
                    AI-powered image generation and 3D viewing.
                  </p>
                  <div className="mt-6 flex space-x-4">
                    <Link href="#" aria-label="GitHub">
                      <Github className="h-6 w-6 text-muted-foreground hover:text-primary transition-colors" />
                    </Link>
                    <Link href="#" aria-label="Twitter">
                      <Twitter className="h-6 w-6 text-muted-foreground hover:text-primary transition-colors" />
                    </Link>
                    <Link href="#" aria-label="LinkedIn">
                      <Linkedin className="h-6 w-6 text-muted-foreground hover:text-primary transition-colors" />
                    </Link>
                  </div>
                </div>
                <div>
                  <h5 className="font-semibold text-foreground mb-4">Company</h5>
                  <ul className="space-y-2 text-sm">
                    <li><Link href="#" className="text-muted-foreground hover:text-primary transition-colors">About Us</Link></li>
                    <li><Link href="#" className="text-muted-foreground hover:text-primary transition-colors">Careers</Link></li>
                    <li><Link href="#" className="text-muted-foreground hover:text-primary transition-colors">Press</Link></li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-semibold text-foreground mb-4">Resources</h5>
                  <ul className="space-y-2 text-sm">
                    <li><Link href="#" className="text-muted-foreground hover:text-primary transition-colors">Docs</Link></li>
                    <li><Link href="#" className="text-muted-foreground hover:text-primary transition-colors">Blog</Link></li>
                    <li><Link href="#" className="text-muted-foreground hover:text-primary transition-colors">Support</Link></li>
                    <li><Link href="#" className="text-muted-foreground hover:text-primary transition-colors">Contact Us</Link></li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-semibold text-foreground mb-4">Legal</h5>
                  <ul className="space-y-2 text-sm">
                    <li><Link href="#" className="text-muted-foreground hover:text-primary transition-colors">Privacy Policy</Link></li>
                    <li><Link href="#" className="text-muted-foreground hover:text-primary transition-colors">Terms of Service</Link></li>
                    <li><Link href="#" className="text-muted-foreground hover:text-primary transition-colors">Cookie Policy</Link></li>
                  </ul>
                </div>
              </div>
              <div className="mt-10 pt-8 border-t border-border/40 text-center text-sm text-muted-foreground">
                Lumina Images &copy; {new Date().getFullYear()}. All rights reserved.
              </div>
            </div>
          </footer>
          <Toaster />
        </body>
      </html>
    </ClerkProvider>
  )
}

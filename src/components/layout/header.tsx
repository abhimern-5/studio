'use client';

import Link from 'next/link';
import { UserButton, SignInButton, SignedIn, SignedOut } from '@clerk/nextjs';
import { Button } from '@/components/ui/button';
import { Logo } from '@/components/common/logo';
import { LayoutGrid, Wand2 } from 'lucide-react';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

export function Header() {
  const pathname = usePathname();

  const navLinks = [
    { href: '/generate', label: 'Generate', icon: Wand2 },
    // Future: { href: '/gallery', label: 'Gallery', icon: LayoutGrid },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 max-w-screen-2xl items-center justify-between">
        <Logo />
        <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "flex items-center gap-2 transition-colors hover:text-primary",
                pathname === link.href ? "text-primary font-semibold" : "text-foreground/70"
              )}
            >
              <link.icon size={18} />
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center space-x-4">
          <SignedIn>
            <UserButton afterSignOutUrl="/" />
          </SignedIn>
          <SignedOut>
            <SignInButton mode="modal">
              <Button variant="outline" className="neon-glow-accent hover:neon-glow-accent">Sign In</Button>
            </SignInButton>
            <SignInButton mode="modal" afterSignInUrl="/generate" afterSignUpUrl="/generate">
               <Button className="neon-glow-primary hover:neon-glow-primary">Get Started</Button>
            </SignInButton>
          </SignedOut>
        </div>
      </div>
    </header>
  );
}


'use client';

import Link from 'next/link';
import { UserButton, SignInButton, SignedIn, SignedOut } from '@clerk/nextjs';
import { Button, type ButtonProps } from '@/components/ui/button'; // Import ButtonProps
import { Logo } from '@/components/common/logo';
import { Wand2, Captions, Menu as MenuIcon } from 'lucide-react'; 
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger, SheetClose } from '@/components/ui/sheet'; 
import * as React from 'react';

// Wrapper component to strip Clerk-specific props from being passed to the DOM element
const ClerkPropStripperButton = React.forwardRef<
  HTMLButtonElement,
  ButtonProps & {
    // Clerk-specific props that might be passed down and cause warnings
    mode?: 'redirect' | 'modal';
    afterSignInUrl?: string;
    afterSignUpUrl?: string;
    // Other potential Clerk props can be added here if they cause similar warnings
    // e.g., redirectUrl?: string;
  }
>(({
  // Destructure and effectively ignore these Clerk-specific props
  mode,
  afterSignInUrl,
  afterSignUpUrl,
  // Spread the remaining props (which should be valid ButtonProps) to the ShadCN Button
  ...restButtonProps
}, ref) => {
  return <Button ref={ref} {...restButtonProps} />;
});
ClerkPropStripperButton.displayName = 'ClerkPropStripperButton';

export function Header() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  const navLinks = [
    { href: '/generate', label: 'Generate Image', icon: Wand2 },
    { href: '/caption-generator', label: 'Generate Caption', icon: Captions },
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
              <ClerkPropStripperButton variant="outline" className="hidden sm:inline-flex neon-glow-accent hover:neon-glow-accent">Sign In</ClerkPropStripperButton>
            </SignInButton>
            <SignInButton mode="modal" afterSignInUrl="/generate" afterSignUpUrl="/generate">
               <ClerkPropStripperButton className="neon-glow-primary hover:neon-glow-primary">Get Started</ClerkPropStripperButton>
            </SignInButton>
          </SignedOut>

          <div className="md:hidden">
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <MenuIcon className="h-6 w-6" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[280px] sm:w-[320px]">
                <SheetHeader className="mb-6">
                  <SheetTitle>
                    <Logo />
                  </SheetTitle>
                </SheetHeader>
                <nav className="flex flex-col space-y-4">
                  {navLinks.map((link) => (
                    <SheetClose asChild key={link.href}>
                      <Link
                        href={link.href}
                        className={cn(
                          "flex items-center gap-3 rounded-md p-2 text-base transition-colors hover:bg-accent hover:text-accent-foreground",
                          pathname === link.href ? "bg-accent text-accent-foreground font-semibold" : "text-foreground/80"
                        )}
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        <link.icon size={20} />
                        {link.label}
                      </Link>
                    </SheetClose>
                  ))}
                </nav>
                <div className="mt-8 pt-6 border-t border-border/40">
                  <SignedOut>
                    <div className="flex flex-col space-y-3">
                       <SheetClose asChild>
                        <SignInButton mode="modal">
                          <ClerkPropStripperButton variant="outline" className="w-full neon-glow-accent hover:neon-glow-accent">Sign In</ClerkPropStripperButton>
                        </SignInButton>
                      </SheetClose>
                      {/* The "Get Started" button is usually part of the main page content for mobile, or could be added here if desired */}
                    </div>
                  </SignedOut>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}

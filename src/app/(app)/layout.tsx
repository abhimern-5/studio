import { Header } from '@/components/layout/header';
import React from 'react';

export default function AppLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        {children}
      </main>
      <footer className="py-6 text-center text-sm text-muted-foreground border-t border-border/40">
        Lumina Images &copy; {new Date().getFullYear()}
      </footer>
    </div>
  );
}

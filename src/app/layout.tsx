import type { Metadata } from 'next';
import { Geist } from 'next/font/google'; // Keep Geist Sans
import './globals.css';
import { ClerkProvider } from '@clerk/nextjs';
import { Toaster } from "@/components/ui/toaster"; // For potential notifications

const geistSans = Geist({ // Renamed to avoid conflict if Geist_Mono is also used by name
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Lumina Images - AI Image Generation',
  description: 'Generate stunning images from text prompts with AI and view them in 3D.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider appearance={{
      baseTheme: undefined, // Let our CSS drive the dark theme
      variables: {
        colorPrimary: '#4285F4', // Saturated Blue for Clerk components
        colorBackground: '#1A202C', // Dark Navy for Clerk components
        colorText: '#E2E8F0',
        colorInputBackground: '#2D3748', // A slightly lighter navy for inputs
        colorInputText: '#E2E8F0',
      }
    }}>
      <html lang="en" className="dark">
        <body className={`${geistSans.variable} font-sans antialiased`}>
          {children}
          <Toaster />
        </body>
      </html>
    </ClerkProvider>
  );
}

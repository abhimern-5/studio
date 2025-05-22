
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { SignedIn, SignedOut, SignInButton } from "@clerk/nextjs";
import { ArrowRight, Brain, ImageIcon, Sparkles, Zap, Lightbulb, Palette, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="py-20 md:py-32 text-center bg-gradient-to-br from-background to-secondary/30">
        <div className="container px-4 mx-auto">
          <Sparkles className="mx-auto mb-6 h-16 w-16 text-primary animate-pulse" />
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-glow-primary">
            Lumina Images
          </h1>
          <p className="text-xl md:text-2xl text-foreground/80 mb-10 max-w-3xl mx-auto">
            Transform your text into stunning visuals with AI. Create photorealistic images and artistic renders, then explore them in an interactive 3D space.
          </p>
          <div className="space-x-4">
            <SignedOut>
              <SignInButton mode="modal" afterSignInUrl="/generate" afterSignUpUrl="/generate">
                <Button size="lg" className="neon-glow-primary hover:scale-105 transition-transform duration-300">
                  Get Started Free <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </SignInButton>
            </SignedOut>
            <SignedIn>
              <Link href="/generate">
                <Button size="lg" className="neon-glow-primary hover:scale-105 transition-transform duration-300">
                  Go to Generator <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </SignedIn>
            <Link href="#features">
              <Button size="lg" variant="outline" className="hover:scale-105 transition-transform duration-300 hover:neon-glow-accent">
                Learn More
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Example Image Showcase */}
      <section className="py-16 bg-background">
        <div className="container px-4 mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-semibold mb-12">
            Unleash Your Creativity
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
            {[
              { src: "https://placehold.co/600x400.png", alt: "AI Abstract", dataAiHint: "AI abstract" },
              { src: "https://placehold.co/600x400.png", alt: "Cybernetic Dreams", dataAiHint: "cybernetic dream" },
              { src: "https://placehold.co/600x400.png", alt: "Algorithmic Nature", dataAiHint: "algorithmic nature" },
              { src: "https://placehold.co/600x400.png", alt: "Digital Surrealism", dataAiHint: "digital surrealism" },
              { src: "https://placehold.co/600x400.png", alt: "Generated Worlds", dataAiHint: "generated world" },
              { src: "https://placehold.co/600x400.png", alt: "Cosmic AI", dataAiHint: "cosmic AI" },
            ].map((img, idx) => (
              <div key={idx} className="rounded-xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-300 neon-glow-accent group">
                <Image
                  src={img.src}
                  alt={img.alt}
                  data-ai-hint={img.dataAiHint}
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover group-hover:opacity-90 transition-opacity"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 md:py-32 bg-secondary/20">
        <div className="container px-4 mx-auto">
          <h2 className="text-3xl md:text-4xl font-semibold text-center mb-16">
            Why Lumina Images?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard
              icon={<Brain className="h-10 w-10 text-primary" />}
              title="AI-Powered Generation"
              description="Leverage cutting-edge AI to turn your textual ideas into vivid images. Perfect for artists, designers, and creators."
            />
            <FeatureCard
              icon={<ImageIcon className="h-10 w-10 text-primary" />}
              title="Interactive 3D Viewer"
              description="Experience your creations like never before. Rotate, zoom, and immerse yourself in your generated images with our 3D viewer."
            />
            <FeatureCard
              icon={<Zap className="h-10 w-10 text-primary" />}
              title="Seamless Experience"
              description="Secure user authentication, intuitive design, and subtle glow effects for a modern, engaging application."
            />
            <FeatureCard
              icon={<Lightbulb className="h-10 w-10 text-primary" />}
              title="Smart Prompt Assistance"
              description="Get AI suggestions to refine your prompts for even better image results and unlock new creative possibilities."
            />
            <FeatureCard
              icon={<Palette className="h-10 w-10 text-primary" />}
              title="Artistic Style Variety"
              description="Explore a multitude of artistic styles, from photorealism to abstract, anime, impressionist, and more."
            />
            <FeatureCard
              icon={<Star className="h-10 w-10 text-primary" />}
              title="High-Resolution Exports"
              description="Download your stunning creations in high quality, ready for print, digital showcases, or your next masterpiece."
            />
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 text-center bg-background">
        <div className="container px-4 mx-auto">
          <h2 className="text-3xl md:text-4xl font-semibold mb-6">
            Ready to Create Magic?
          </h2>
          <p className="text-lg text-foreground/80 mb-8 max-w-xl mx-auto">
            Join Lumina Images today and start bringing your imagination to life.
          </p>
          <SignedOut>
            <SignInButton mode="modal" afterSignInUrl="/generate" afterSignUpUrl="/generate">
              <Button size="lg" className="neon-glow-primary hover:scale-105 transition-transform duration-300">
                Sign Up Now <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </SignInButton>
          </SignedOut>
          <SignedIn>
            <Link href="/generate">
              <Button size="lg" className="neon-glow-primary hover:scale-105 transition-transform duration-300">
                Start Generating <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </SignedIn>
        </div>
      </section>
    </>
  );
}

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <Card className="bg-background/50 shadow-lg hover:shadow-xl transition-shadow duration-300 neon-glow-accent hover:neon-glow-primary flex flex-col">
      <CardHeader className="items-center">
        <div className="p-4 bg-primary/10 rounded-full mb-4">
          {icon}
        </div>
        <CardTitle className="text-2xl text-glow-accent">{title}</CardTitle>
      </CardHeader>
      <CardContent className="text-center text-foreground/80 flex-grow">
        <p>{description}</p>
      </CardContent>
    </Card>
  );
}

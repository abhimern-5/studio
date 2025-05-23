import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import AppLayout from "@/app/(app)/layout";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

export default function PressPage() {
  const pressReleases = [
    {
      id: 1,
      title: "Lumina Images Launches Revolutionary AI Image Generation Platform",
      date: "October 26, 2023",
      summary: "Lumina Images today announced the launch of its groundbreaking AI-powered image generation and 3D viewing platform, set to redefine creative workflows for artists and designers.",
      link: "#",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3",
      dataAiHint: "technology launch"
    },
    {
      id: 2,
      title: "New 'Prompt Assist' Feature Unveiled by Lumina Images",
      date: "November 15, 2023",
      summary: "Enhancing user creativity, Lumina Images has released its new 'Prompt Assist' feature, providing AI-driven suggestions to help users craft the perfect prompts for stunning visuals.",
      link: "#",
      image: "https://images.unsplash.com/photo-1581472723648-909f4851d4ae",
      dataAiHint: "AI interface"
    },
  ];
  return (
    <AppLayout>
      <div className="space-y-8">
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="text-3xl text-glow-primary">Press & Media</CardTitle>
            <CardDescription>Latest news, announcements, and media resources for Lumina Images.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6 text-foreground/90">
            <p>
              Welcome to the Lumina Images press room. Here you'll find our latest press releases, media kits, and contact information for media inquiries.
            </p>
            
            <h3 className="text-2xl font-semibold text-glow-accent pt-4">Press Releases</h3>
            {pressReleases.length > 0 ? (
              <div className="space-y-6">
                {pressReleases.map((release) => (
                  <Card key={release.id} className="overflow-hidden bg-secondary/30">
                    <div className="md:flex">
                      <div className="md:shrink-0">
                         <Image 
                            src={release.image} 
                            alt={release.title} 
                            width={200} 
                            height={150} 
                            data-ai-hint={release.dataAiHint}
                            className="h-48 w-full object-cover md:h-full md:w-48"
                          />
                      </div>
                      <div className="p-6 flex flex-col justify-between">
                        <div>
                          <CardTitle className="text-xl mb-1">{release.title}</CardTitle>
                          <CardDescription className="text-xs text-muted-foreground mb-2">{release.date}</CardDescription>
                          <p className="text-sm text-foreground/80 mb-3">{release.summary}</p>
                        </div>
                        <Button variant="link" asChild className="p-0 h-auto self-start">
                          <Link href={release.link}>Read Full Release</Link>
                        </Button>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            ) : (
              <p className="text-muted-foreground">No press releases at this time. Check back soon!</p>
            )}

            <div className="pt-8 border-t border-border/40">
              <h3 className="text-xl font-semibold text-glow-accent mb-2">Media Kit</h3>
              <p className="mb-3">
                Our media kit includes logos, company information, and high-resolution images.
              </p>
              <Button className="neon-glow-primary hover:scale-105 transition-transform" asChild>
                <Link href="#">Download Media Kit (Coming Soon)</Link>
              </Button>
            </div>

            <div className="pt-6">
              <h3 className="text-xl font-semibold text-glow-accent mb-2">Media Inquiries</h3>
              <p>
                For all media inquiries, please contact:
              </p>
              <p className="font-semibold">press@luminaimages.example.com</p>
              <p className="text-sm text-muted-foreground">(Not a real email address)</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </AppLayout>
  );
}

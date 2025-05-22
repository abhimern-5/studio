import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import AppLayout from "@/app/(app)/layout";

export default function AboutPage() {
  return (
    <AppLayout>
      <div className="space-y-8">
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="text-3xl text-glow-primary">About Lumina Images</CardTitle>
            <CardDescription>Discover the story and mission behind Lumina Images.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4 text-foreground/90">
            <p>
              Lumina Images was born from a passion for creativity and the transformative power of artificial intelligence.
              We believe that everyone has a vision, and our goal is to provide the tools to bring those visions to life
              in stunning visual detail.
            </p>
            <p>
              Our platform combines cutting-edge AI image generation with an interactive 3D viewing experience, allowing
              users to not only create unique artwork but also to explore it in new and immersive ways. Whether you're an
              artist, a designer, a marketer, or simply someone with an idea, Lumina Images is here to help you unleash
              your creative potential.
            </p>
            <h3 className="text-xl font-semibold text-glow-accent pt-4">Our Mission</h3>
            <p>
              To empower individuals and businesses to visualize their ideas effortlessly through advanced AI technology,
              fostering a world where imagination knows no bounds.
            </p>
            <h3 className="text-xl font-semibold text-glow-accent pt-4">Our Team</h3>
            <p>
              We are a diverse team of AI researchers, software engineers, and design enthusiasts dedicated to building
              intuitive and powerful tools for creative expression. We are constantly exploring new frontiers in AI
              and user experience to make Lumina Images the best platform it can be.
            </p>
          </CardContent>
        </Card>
      </div>
    </AppLayout>
  );
}

import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import AppLayout from "@/app/(app)/layout";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function BlogPage() {
  const blogPosts = [
    {
      id: 1,
      title: "The Art of Prompt Engineering: Crafting the Perfect AI Image",
      date: "November 20, 2023",
      excerpt: "Unlock the full potential of AI image generation by mastering the art of prompt engineering. Learn tips and tricks to translate your ideas into stunning visuals.",
      slug: "art-of-prompt-engineering",
      image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
      dataAiHint: "creative process",
      author: "AI Insights Team",
      tags: ["AI", "Prompting", "Creativity"],
    },
    {
      id: 2,
      title: "Exploring New Dimensions: The Power of 3D Image Viewing",
      date: "November 05, 2023",
      excerpt: "Discover how interactive 3D viewing transforms the way we experience digital art. Dive into the technology behind Lumina Images' immersive viewer.",
      slug: "3d-image-viewing-power",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
      dataAiHint: "3d model",
      author: "Tech Spotlight",
      tags: ["3D", "Visualization", "Technology"],
    },
    {
      id: 3,
      title: "Lumina Images Feature Update: Enhanced Styles & Faster Generation",
      date: "October 30, 2023",
      excerpt: "We're excited to announce our latest update, bringing a wider range of artistic styles and significantly improved image generation speeds to Lumina Images.",
      slug: "feature-update-styles-speed",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3",
      dataAiHint: "software update",
      author: "Lumina Team",
      tags: ["Update", "Features", "Announcement"],
    },
  ];
  return (
    <AppLayout>
      <div className="space-y-8">
        <Card className="shadow-lg">
          <CardHeader className="text-center">
            <CardTitle className="text-4xl text-glow-primary">Lumina Insights Blog</CardTitle>
            <CardDescription className="text-lg">Discover articles, tips, and news about AI image generation and creative technology.</CardDescription>
          </CardHeader>
        </Card>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <Card key={post.id} className="flex flex-col overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 neon-glow-accent hover:neon-glow-primary">
              <Link href={`/blog/${post.slug}`} className="block">
                <Image
                  src={post.image}
                  alt={post.title}
                  data-ai-hint={post.dataAiHint}
                  width={600}
                  height={300} /* Adjusted height for better aspect ratio */
                  className="w-full h-48 object-cover" /* Fixed height for consistency */
                />
              </Link>
              <CardHeader>
                <Link href={`/blog/${post.slug}`} className="hover:text-primary transition-colors">
                  <CardTitle className="text-xl leading-tight">{post.title}</CardTitle>
                </Link>
                <CardDescription className="text-xs pt-1">
                  By {post.author} on {post.date}
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-sm text-foreground/80">{post.excerpt}</p>
              </CardContent>
              <CardFooter className="flex justify-between items-center">
                 <div className="space-x-2">
                  {post.tags.map(tag => (
                    <span key={tag} className="px-2 py-1 bg-secondary text-xs rounded-full text-secondary-foreground">{tag}</span>
                  ))}
                </div>
                <Button variant="link" asChild className="p-0 h-auto text-accent hover:text-primary">
                  <Link href={`/blog/${post.slug}`}>Read More <ArrowRight className="ml-1 h-4 w-4" /></Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        {/* Placeholder for pagination or load more button */}
        <div className="text-center mt-12">
            <Button variant="outline" size="lg" disabled>More Posts (Coming Soon)</Button>
        </div>
      </div>
    </AppLayout>
  );
}

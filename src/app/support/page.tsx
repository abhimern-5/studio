import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import AppLayout from "@/app/(app)/layout";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { LifeBuoy, MessageCircle, FileText } from "lucide-react";

export default function SupportPage() {
  return (
    <AppLayout>
      <div className="space-y-8">
        <Card className="shadow-lg">
          <CardHeader className="text-center">
            <LifeBuoy className="mx-auto h-16 w-16 text-primary mb-4" />
            <CardTitle className="text-3xl text-glow-primary">Lumina Images Support Center</CardTitle>
            <CardDescription className="text-lg">We're here to help you make the most of Lumina Images.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-8 text-foreground/90">
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-center">
              <Card className="bg-secondary/30 p-6">
                <FileText className="mx-auto h-10 w-10 text-accent mb-3" />
                <h3 className="text-xl font-semibold mb-2">Knowledge Base & Docs</h3>
                <p className="text-sm text-muted-foreground mb-4">Find answers to common questions and detailed guides in our documentation.</p>
                <Button asChild>
                  <Link href="/docs">Explore Docs</Link>
                </Button>
              </Card>
              <Card className="bg-secondary/30 p-6">
                <MessageCircle className="mx-auto h-10 w-10 text-accent mb-3" />
                <h3 className="text-xl font-semibold mb-2">Contact Support</h3>
                <p className="text-sm text-muted-foreground mb-4">Can't find what you're looking for? Reach out to our support team directly.</p>
                <Button asChild>
                  <Link href="/contact">Contact Us</Link>
                </Button>
              </Card>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-glow-accent mb-4 text-center md:text-left">Frequently Asked Questions (FAQ)</h3>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger className="text-lg hover:text-primary">How do I get the best image results?</AccordionTrigger>
                  <AccordionContent className="space-y-2">
                    <p>The key is a detailed and specific prompt. Describe the subject, style, colors, lighting, and any other important elements. Use our "Improve Prompt" feature for suggestions. Check our <Link href="/docs#prompt-engineering" className="text-primary underline">Prompt Engineering Tips</Link> in the docs for more info.</p>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger className="text-lg hover:text-primary">Is there a limit to how many images I can generate?</AccordionTrigger>
                  <AccordionContent className="space-y-2">
                    <p>Currently, users on the free plan may have daily or monthly generation limits. Paid plans offer higher or unlimited generation capabilities. Please check our (soon to be created) pricing page for details.</p>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger className="text-lg hover:text-primary">Can I use the generated images for commercial purposes?</AccordionTrigger>
                  <AccordionContent className="space-y-2">
                    <p>Yes, subject to our Terms of Service. You retain ownership of the images you generate and can use them for personal or commercial projects, provided your use does not infringe on any third-party rights and complies with applicable laws. See our <Link href="/terms-of-service" className="text-primary underline">Terms of Service</Link> for full details.</p>
                  </AccordionContent>
                </AccordionItem>
                 <AccordionItem value="item-4">
                  <AccordionTrigger className="text-lg hover:text-primary">What if my generated image is not what I expected?</AccordionTrigger>
                  <AccordionContent className="space-y-2">
                    <p>AI image generation can sometimes be unpredictable. Try refining your prompt, being more specific, or using different keywords. The "Improve Prompt" feature can also provide alternative phrasing. Experimentation is often part of the creative process!</p>
                  </AccordionContent>
                </AccordionItem>
                 <AccordionItem value="item-5">
                  <AccordionTrigger className="text-lg hover:text-primary">How is my data and privacy protected?</AccordionTrigger>
                  <AccordionContent className="space-y-2">
                    <p>We take your privacy seriously. Your authentication is handled securely by Clerk. Prompts and generated images may be processed by third-party AI providers. We encourage you to review our <Link href="/privacy-policy" className="text-primary underline">Privacy Policy</Link> for detailed information.</p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>

            <div className="text-center pt-6 border-t border-border/40">
              <h3 className="text-xl font-semibold text-glow-accent mb-2">Still Need Help?</h3>
              <p className="mb-4 text-muted-foreground">Our support team is available to assist you. Please provide as much detail as possible so we can help you effectively.</p>
              <Button size="lg" className="neon-glow-primary hover:scale-105 transition-transform" asChild>
                  <Link href="/contact">Submit a Support Ticket</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </AppLayout>
  );
}

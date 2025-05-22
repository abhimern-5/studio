import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import AppLayout from "@/app/(app)/layout";

export default function DocsPage() {
  return (
    <AppLayout>
      <div className="space-y-8">
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="text-3xl text-glow-primary">Documentation</CardTitle>
            <CardDescription>Find guides and information on how to use Lumina Images.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4 text-foreground/90">
            <p>
              Welcome to the Lumina Images documentation. Here you'll find everything you need to know to get the most
              out of our AI image generation and 3D viewing platform.
            </p>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-lg hover:text-primary">Getting Started</AccordionTrigger>
                <AccordionContent className="space-y-2">
                  <p><strong>Signing Up:</strong> Create an account to start generating images. You can sign up using your email or social media accounts.</p>
                  <p><strong>Your First Generation:</strong> Navigate to the "Generate" page. Enter a descriptive prompt in the text area. The more detailed your prompt, the better the AI can understand your vision.</p>
                  <p><strong>Viewing Your Image:</strong> Once generated, your image will appear in the interactive 3D viewer. Use your mouse or touch gestures to rotate and zoom.</p>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger className="text-lg hover:text-primary">Prompt Engineering Tips</AccordionTrigger>
                <AccordionContent className="space-y-2">
                  <p><strong>Be Specific:</strong> Instead of "a cat", try "a fluffy ginger cat with green eyes, sleeping on a velvet cushion, photorealistic."</p>
                  <p><strong>Use Keywords for Style:</strong> Add terms like "impressionist painting," "sci-fi concept art," "80s synthwave," "macro photography" to guide the style.</p>
                  <p><strong>Iterate:</strong> Don't expect the perfect image on the first try. Use the "Improve Prompt" feature or tweak your prompt and regenerate.</p>
                  <p><strong>Negative Prompts (Advanced):</strong> Some systems allow specifying what you *don't* want (e.g., --no blurry). While not explicitly a feature here, structuring your prompt to exclude undesired elements can help.</p>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger className="text-lg hover:text-primary">Using the 3D Viewer</AccordionTrigger>
                <AccordionContent className="space-y-2">
                  <p><strong>Rotation:</strong> Click and drag (or use touch) to rotate the image plane in 3D space.</p>
                  <p><strong>Zoom:</strong> Use your mouse scroll wheel or pinch gestures on touch devices to zoom in and out.</p>
                  <p><strong>Full Screen:</strong> Look for a full-screen option if available for a more immersive experience (feature may vary).</p>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger className="text-lg hover:text-primary">Downloading Images</AccordionTrigger>
                <AccordionContent className="space-y-2">
                  <p>Once an image is generated, a "Download Image" button will appear. Click this button to save the image to your device.</p>
                  <p>Images are typically downloaded in PNG format to preserve quality.</p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </CardContent>
        </Card>
      </div>
    </AppLayout>
  );
}

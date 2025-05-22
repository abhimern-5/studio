// src/app/(app)/generate/page.tsx
'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Loader2, Wand2, Lightbulb, Image as ImageIcon, CornerRightDown, Download } from 'lucide-react';
import { generateImage, GenerateImageInput } from '@/ai/flows/generate-image-from-prompt';
import { improvePrompt, ImprovePromptInput } from '@/ai/flows/improve-prompt-for-better-image';
import ThreeJsImageViewer from '@/components/image/three-js-image-viewer';
import { useToast } from '@/hooks/use-toast';
import Image from 'next/image'; // Standard Next.js Image component for placeholder

export default function GeneratePage() {
  const [prompt, setPrompt] = useState<string>('');
  const [improvedPrompt, setImprovedPrompt] = useState<string>('');
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isImproving, setIsImproving] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const { toast } = useToast();

  const handleGenerateImage = async (currentPrompt: string) => {
    if (!currentPrompt.trim()) {
      setError('Prompt cannot be empty.');
      return;
    }
    setIsLoading(true);
    setError(null);
    setImageUrl(null);

    try {
      const input: GenerateImageInput = { prompt: currentPrompt };
      const result = await generateImage(input);
      if (result.imageUrl) {
        setImageUrl(result.imageUrl);
        toast({
          title: 'Image Generated!',
          description: 'Your image has been successfully created.',
        });
      } else {
        throw new Error('Image generation failed to return a URL.');
      }
    } catch (err) {
      console.error('Image generation error:', err);
      const errorMessage = err instanceof Error ? err.message : 'An unknown error occurred during image generation.';
      setError(errorMessage);
      toast({
        title: 'Generation Error',
        description: errorMessage,
        variant: 'destructive',
      });
    } finally {
      setIsLoading(false);
    }
  };
  
  const handleImprovePrompt = async () => {
    if (!prompt.trim()) {
      setError('Enter a prompt to improve.');
      return;
    }
    setIsImproving(true);
    setError(null);
    try {
      const input: ImprovePromptInput = { prompt };
      const result = await improvePrompt(input);
      setImprovedPrompt(result.improvedPrompt);
      toast({
        title: 'Prompt Improved!',
        description: (
            <div>
                <p className="font-semibold">Suggestion:</p>
                <p>{result.improvedPrompt}</p>
                <p className="mt-2 font-semibold">Reasoning:</p>
                <p>{result.reasoning}</p>
            </div>
        ),
        duration: 10000, // Longer duration for reading
      });
    } catch (err) {
       console.error('Prompt improvement error:', err);
       const errorMessage = err instanceof Error ? err.message : 'An unknown error occurred during prompt improvement.';
       setError(errorMessage);
       toast({
        title: 'Improvement Error',
        description: errorMessage,
        variant: 'destructive',
      });
    } finally {
        setIsImproving(false);
    }
  };

  const useImprovedPrompt = () => {
    if(improvedPrompt) {
        setPrompt(improvedPrompt);
        toast({ title: "Improved prompt applied!"});
    }
  }

  const handleDownloadImage = () => {
    if (!imageUrl) {
      toast({
        title: 'Download Error',
        description: 'No image to download.',
        variant: 'destructive',
      });
      return;
    }
    try {
      const link = document.createElement('a');
      link.href = imageUrl;
      // Extract extension from data URI if possible, default to png
      const mimeTypeMatch = imageUrl.match(/^data:(image\/[a-zA-Z+]+);base64,/);
      const extension = mimeTypeMatch && mimeTypeMatch[1] ? mimeTypeMatch[1].split('/')[1] : 'png';
      link.download = `lumina-generated-image.${extension}`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      toast({
        title: 'Image Downloading',
        description: 'Your image has started downloading.',
      });
    } catch (downloadError) {
      console.error('Download error:', downloadError);
      const errorMessage = downloadError instanceof Error ? downloadError.message : 'An unknown error occurred during download.';
      setError(errorMessage);
      toast({
        title: 'Download Error',
        description: errorMessage,
        variant: 'destructive',
      });
    }
  };

  return (
    <div className="space-y-8">
      <Card className="shadow-xl neon-glow-accent">
        <CardHeader>
          <CardTitle className="flex items-center text-3xl text-glow-primary">
            <Wand2 className="mr-3 h-8 w-8 text-primary" /> AI Image Generator
          </CardTitle>
          <CardDescription>
            Enter a prompt to generate a unique image using AI. You can also get suggestions to improve your prompt.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {error && (
            <Alert variant="destructive">
              <AlertTitle>Error</AlertTitle>
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}
          <div className="space-y-1">
            <label htmlFor="prompt-input" className="text-sm font-medium text-foreground/80">Your Prompt</label>
            <Textarea
              id="prompt-input"
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              placeholder="e.g., A futuristic cityscape at sunset, neon lights, flying cars, cinematic lighting"
              className="min-h-[100px] text-base"
              rows={4}
            />
          </div>
          {improvedPrompt && prompt !== improvedPrompt && (
             <Card className="bg-secondary/50 p-4">
                <CardDescription className="text-sm text-foreground/80">
                    <span className="font-semibold">Suggestion:</span> {improvedPrompt}
                </CardDescription>
                <Button variant="link" size="sm" onClick={useImprovedPrompt} className="p-0 h-auto text-accent hover:text-primary">
                    Use this prompt <CornerRightDown className="ml-1 h-4 w-4" />
                </Button>
             </Card>
          )}
        </CardContent>
        <CardFooter className="flex flex-col sm:flex-row justify-between gap-4">
            <Button 
                onClick={handleImprovePrompt} 
                disabled={isImproving || isLoading} 
                variant="outline"
                className="w-full sm:w-auto hover:neon-glow-accent transition-all"
            >
            {isImproving ? (
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            ) : (
              <Lightbulb className="mr-2 h-4 w-4" />
            )}
            Improve Prompt
          </Button>
          <Button 
            onClick={() => handleGenerateImage(prompt)} 
            disabled={isLoading || isImproving || !prompt.trim()} 
            className="w-full sm:w-auto neon-glow-primary hover:scale-105 transition-transform"
            size="lg"
          >
            {isLoading ? (
              <Loader2 className="mr-2 h-5 w-5 animate-spin" />
            ) : (
              <ImageIcon className="mr-2 h-5 w-5" />
            )}
            Generate Image
          </Button>
        </CardFooter>
      </Card>

      {isLoading && (
        <div className="flex flex-col items-center justify-center space-y-4 p-8 rounded-lg bg-card shadow-md">
          <Loader2 className="h-12 w-12 animate-spin text-primary" />
          <p className="text-lg text-foreground/80">Generating your masterpiece... Please wait.</p>
        </div>
      )}

      {imageUrl && !isLoading && (
        <Card className="shadow-xl neon-glow-primary">
          <CardHeader className="flex flex-row justify-between items-center">
            <CardTitle className="text-2xl text-glow-accent">Generated Image</CardTitle>
            <Button 
              onClick={handleDownloadImage} 
              variant="outline" 
              className="hover:neon-glow-accent transition-all"
            >
              <Download className="mr-2 h-4 w-4" />
              Download Image
            </Button>
          </CardHeader>
          <CardContent>
            <ThreeJsImageViewer imageUrl={imageUrl} />
          </CardContent>
           <CardFooter>
            <CardDescription>Interact with the image: rotate with your mouse/touch, zoom with scroll/pinch.</CardDescription>
           </CardFooter>
        </Card>
      )}
      
      {!imageUrl && !isLoading && (
        <Card className="border-dashed border-2">
            <CardContent className="p-6 text-center flex flex-col items-center justify-center h-96">
                <ImageIcon size={64} className="text-muted-foreground mb-4" />
                <p className="text-muted-foreground">Your generated image will appear here.</p>
                <p className="text-sm text-muted-foreground mt-1">Try generating an image with a descriptive prompt!</p>
            </CardContent>
        </Card>
      )}
    </div>
  );
}

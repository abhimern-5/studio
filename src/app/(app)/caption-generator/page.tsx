'use client';

import { useState, ChangeEvent, FormEvent } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Loader2, UploadCloud, Tags, Sparkles, Captions } from 'lucide-react'; // Changed FileText to Captions
import { useToast } from '@/hooks/use-toast';
import { generateCaptionAndHashtags, GenerateCaptionAndHashtagsInput } from '@/ai/flows/generate-caption-and-hashtags-flow';
import { Badge } from '@/components/ui/badge';

export default function CaptionGeneratorPage() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [caption, setCaption] = useState<string>('');
  const [hashtags, setHashtags] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const { toast } = useToast();

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) { // 5MB limit
        setError('File is too large. Please select an image under 5MB.');
        setSelectedFile(null);
        setPreviewUrl(null);
        toast({
          title: 'Upload Error',
          description: 'File is too large (max 5MB).',
          variant: 'destructive',
        });
        event.target.value = ''; // Reset file input
        return;
      }
      setSelectedFile(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewUrl(reader.result as string);
        setError(null); 
      };
      reader.onerror = () => {
        setError('Failed to read file.');
        toast({
            title: 'File Read Error',
            description: 'Could not read the selected file.',
            variant: 'destructive',
        });
      }
      reader.readAsDataURL(file);
      setCaption('');
      setHashtags([]);
    } else {
        setSelectedFile(null);
        setPreviewUrl(null);
    }
  };

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    if (!selectedFile || !previewUrl) {
      setError('Please select an image first.');
      toast({
        title: 'Missing Image',
        description: 'You need to upload an image to generate content.',
        variant: 'destructive',
      });
      return;
    }

    setIsLoading(true);
    setError(null);
    setCaption('');
    setHashtags([]);

    try {
      const input: GenerateCaptionAndHashtagsInput = { imageDataUri: previewUrl };
      const result = await generateCaptionAndHashtags(input);
      
      if (result.caption && result.hashtags) {
        setCaption(result.caption);
        setHashtags(result.hashtags);
        toast({
          title: 'Content Generated!',
          description: 'Caption and hashtags created successfully.',
        });
      } else {
        throw new Error('AI model did not return complete data.');
      }
    } catch (err) {
      console.error('Caption generation error:', err);
      const errorMessage = err instanceof Error ? err.message : 'An unknown error occurred.';
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

  return (
    <div className="space-y-8">
      <Card className="shadow-xl neon-glow-accent">
        <CardHeader>
          <CardTitle className="flex items-center text-3xl text-glow-primary">
            <Captions className="mr-3 h-8 w-8 text-primary" /> AI Caption & Hashtag Generator
          </CardTitle>
          <CardDescription>
            Upload an image and let AI craft the perfect caption and relevant hashtags for your social media.
          </CardDescription>
        </CardHeader>
        <form onSubmit={handleSubmit}>
          <CardContent className="space-y-6">
            {error && (
              <Alert variant="destructive">
                <AlertTitle>Error</AlertTitle>
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            )}

            <div>
              <label htmlFor="image-upload-input" className="block text-sm font-medium text-foreground/80 mb-1">
                Upload Image
              </label>
              <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-border border-dashed rounded-md hover:border-primary transition-colors">
                <div className="space-y-1 text-center">
                  <UploadCloud className="mx-auto h-12 w-12 text-muted-foreground" />
                  <div className="flex text-sm text-muted-foreground">
                    <label
                      htmlFor="image-upload-input"
                      className="relative cursor-pointer rounded-md font-medium text-primary hover:text-primary/80 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-ring"
                    >
                      <span>Upload a file</span>
                      <Input 
                        id="image-upload-input" 
                        name="image-upload" 
                        type="file" 
                        className="sr-only" 
                        accept="image/png, image/jpeg, image/webp, image/gif"
                        onChange={handleFileChange}
                      />
                    </label>
                    <p className="pl-1">or drag and drop</p>
                  </div>
                  <p className="text-xs text-muted-foreground">PNG, JPG, GIF, WEBP up to 5MB</p>
                </div>
              </div>
            </div>

            {previewUrl && (
              <Card className="bg-secondary/30 mt-4">
                <CardHeader>
                  <CardTitle className="text-xl">Image Preview</CardTitle>
                </CardHeader>
                <CardContent className="flex justify-center">
                  <div className="relative w-full max-w-sm aspect-square rounded-md overflow-hidden border border-border">
                    <Image src={previewUrl} alt="Selected preview" layout="fill" objectFit="contain" />
                  </div>
                </CardContent>
              </Card>
            )}
          </CardContent>
          <CardFooter>
            <Button 
              type="submit" 
              disabled={isLoading || !selectedFile} 
              className="w-full sm:w-auto neon-glow-primary hover:scale-105 transition-transform"
              size="lg"
            >
              {isLoading ? (
                <Loader2 className="mr-2 h-5 w-5 animate-spin" />
              ) : (
                <Sparkles className="mr-2 h-5 w-5" />
              )}
              Generate Content
            </Button>
          </CardFooter>
        </form>
      </Card>

      {(caption || hashtags.length > 0) && !isLoading && (
        <Card className="shadow-xl neon-glow-primary">
          <CardHeader>
            <CardTitle className="text-2xl text-glow-accent">Generated Content</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {caption && (
              <div>
                <h3 className="text-xl font-semibold mb-2 flex items-center">
                  <Captions className="mr-2 h-5 w-5 text-primary" /> Generated Caption
                </h3>
                <Textarea
                  value={caption}
                  readOnly
                  className="min-h-[100px] text-base bg-secondary/20 border-border"
                  rows={5}
                />
              </div>
            )}
            {hashtags.length > 0 && (
              <div>
                <h3 className="text-xl font-semibold mb-2 flex items-center">
                  <Tags className="mr-2 h-5 w-5 text-primary" /> Generated Hashtags
                </h3>
                <div className="flex flex-wrap gap-2">
                  {hashtags.map((tag, index) => (
                    <Badge key={index} variant="secondary" className="text-sm px-3 py-1">
                      #{tag}
                    </Badge>
                  ))}
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      )}
    </div>
  );
}

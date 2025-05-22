'use server';
/**
 * @fileOverview AI agent for generating image captions and hashtags.
 *
 * - generateCaptionAndHashtags - Function to generate caption and hashtags for an image.
 * - GenerateCaptionAndHashtagsInput - Input type for the function.
 * - GenerateCaptionAndHashtagsOutput - Output type for the function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

export const GenerateCaptionAndHashtagsInputSchema = z.object({
  imageDataUri: z
    .string()
    .describe(
      "A photo of an image, as a data URI that must include a MIME type and use Base64 encoding. Expected format: 'data:<mimetype>;base64,<encoded_data>'."
    ),
});
export type GenerateCaptionAndHashtagsInput = z.infer<typeof GenerateCaptionAndHashtagsInputSchema>;

export const GenerateCaptionAndHashtagsOutputSchema = z.object({
  caption: z.string().describe('A descriptive and engaging caption for the image (around 2-3 sentences).'),
  hashtags: z
    .array(z.string())
    .describe('An array of 5 to 7 relevant hashtags, without the # prefix. Example: ["travel", "nature", "adventure"]'),
});
export type GenerateCaptionAndHashtagsOutput = z.infer<typeof GenerateCaptionAndHashtagsOutputSchema>;

export async function generateCaptionAndHashtags(input: GenerateCaptionAndHashtagsInput): Promise<GenerateCaptionAndHashtagsOutput> {
  return generateCaptionAndHashtagsFlow(input);
}

const captionPrompt = ai.definePrompt({
  name: 'generateCaptionAndHashtagsPrompt',
  input: {schema: GenerateCaptionAndHashtagsInputSchema},
  output: {schema: GenerateCaptionAndHashtagsOutputSchema},
  prompt: `You are a social media expert specializing in crafting engaging content.
Analyze the provided image and generate:
1. A compelling and descriptive caption for the image (around 2-3 sentences long).
2. A list of 5-7 relevant hashtags (without the '#' symbol, returned as an array of strings).

Image: {{media url=imageDataUri}}
`,
});

const generateCaptionAndHashtagsFlow = ai.defineFlow(
  {
    name: 'generateCaptionAndHashtagsFlow',
    inputSchema: GenerateCaptionAndHashtagsInputSchema,
    outputSchema: GenerateCaptionAndHashtagsOutputSchema,
  },
  async input => {
    const {output} = await captionPrompt(input);
    if (!output) {
      throw new Error('Failed to generate caption and hashtags. The AI model did not return an output.');
    }
    return output;
  }
);

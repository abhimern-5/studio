
// src/ai/flows/improve-prompt-for-better-image.ts
'use server';

/**
 * @fileOverview An AI agent that suggests improvements to a user's prompt for better image generation.
 *
 * - improvePrompt - A function that handles the prompt improvement process.
 * - ImprovePromptInput - The input type for the improvePrompt function.
 * - ImprovePromptOutput - The return type for the improvePrompt function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const ImprovePromptInputSchema = z.object({
  prompt: z.string().describe('The original prompt provided by the user.'),
});
export type ImprovePromptInput = z.infer<typeof ImprovePromptInputSchema>;

const ImprovePromptOutputSchema = z.object({
  improvedPrompt: z
    .string()
    .describe('The improved prompt suggested by the AI to generate a better image.'),
  reasoning: z
    .string()
    .describe(
      'The AI explanation behind the suggested improvements to the original prompt.'
    ),
});
export type ImprovePromptOutput = z.infer<typeof ImprovePromptOutputSchema>;

export async function improvePrompt(input: ImprovePromptInput): Promise<ImprovePromptOutput> {
  return improvePromptFlow(input);
}

const prompt = ai.definePrompt({
  name: 'improvePromptPrompt',
  input: {schema: ImprovePromptInputSchema},
  output: {schema: ImprovePromptOutputSchema},
  prompt: `You are an AI prompt engineer specializing in improving prompts for image generation.

You will receive a prompt from the user, and your goal is to suggest improvements to the prompt so that they can generate a better image.

You should provide an improved prompt, and explain your reasoning behind the changes.

Original Prompt: {{{prompt}}}

Please provide the improved prompt in the 'improvedPrompt' field and your reasoning in the 'reasoning' field.`,
});


const improvePromptFlow = ai.defineFlow(
  {
    name: 'improvePromptFlow',
    inputSchema: ImprovePromptInputSchema,
    outputSchema: ImprovePromptOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    if (!output) {
      throw new Error('Failed to get prompt improvement suggestions. The AI model did not return an output.');
    }
    return output;
  }
);

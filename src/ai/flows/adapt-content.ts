'use server';

/**
 * @fileOverview An AI agent that adapts portfolio content based on user interests.
 *
 * - adaptContent - A function that adapts content presentation based on user interests.
 * - AdaptContentInput - The input type for the adaptContent function.
 * - AdaptContentOutput - The return type for the adaptContent function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const AdaptContentInputSchema = z.object({
  interests: z
    .string()
    .describe('A comma separated list of the user interests.'),
  content: z.string().describe('The content to be adapted for the user.'),
});
export type AdaptContentInput = z.infer<typeof AdaptContentInputSchema>;

const AdaptContentOutputSchema = z.object({
  adaptedContent: z
    .string()
    .describe('The content adapted based on the user interests.'),
});
export type AdaptContentOutput = z.infer<typeof AdaptContentOutputSchema>;

export async function adaptContent(input: AdaptContentInput): Promise<AdaptContentOutput> {
  return adaptContentFlow(input);
}

const prompt = ai.definePrompt({
  name: 'adaptContentPrompt',
  input: {schema: AdaptContentInputSchema},
  output: {schema: AdaptContentOutputSchema},
  prompt: `You are an AI expert in personalizing content based on user interests.

You will receive a content and a comma separated list of user interests. You will adapt the content to be more relevant to the user interests.

Interests: {{{interests}}}
Content: {{{content}}}

Adapted Content:`,
});

const adaptContentFlow = ai.defineFlow(
  {
    name: 'adaptContentFlow',
    inputSchema: AdaptContentInputSchema,
    outputSchema: AdaptContentOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);

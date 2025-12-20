'use server';

/**
 * @fileOverview Ad copy generation flow using customer reviews to identify unique selling points.
 *
 * - generateAdCopy - A function that generates ad copy based on customer reviews.
 * - GenerateAdCopyInput - The input type for the generateAdCopy function.
 * - GenerateAdCopyOutput - The return type for the generateAdCopy function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateAdCopyInputSchema = z.object({
  customerReviews: z
    .string()
    .describe('Customer reviews of the cafe, separated by newlines.'),
});

export type GenerateAdCopyInput = z.infer<typeof GenerateAdCopyInputSchema>;

const GenerateAdCopyOutputSchema = z.object({
  adCopy: z.string().describe('Generated ad copy for the cafe.'),
});

export type GenerateAdCopyOutput = z.infer<typeof GenerateAdCopyOutputSchema>;

export async function generateAdCopy(input: GenerateAdCopyInput): Promise<GenerateAdCopyOutput> {
  return generateAdCopyFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateAdCopyPrompt',
  input: {schema: GenerateAdCopyInputSchema},
  output: {schema: GenerateAdCopyOutputSchema},
  prompt: `You are a marketing expert tasked with generating compelling ad copy for a cafe.
  Your primary source of information will be customer reviews.
  Identify the unique selling points and highlight them in the ad copy.
  
  Customer Reviews:
  {{customerReviews}}
  
  Generate ad copy that is concise, engaging, and persuasive, encouraging potential customers to visit the cafe.`,
});

const generateAdCopyFlow = ai.defineFlow(
  {
    name: 'generateAdCopyFlow',
    inputSchema: GenerateAdCopyInputSchema,
    outputSchema: GenerateAdCopyOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);

'use server';

/**
 * @fileOverview Generates a short summary of a blog post given its content.
 *
 * - generateBlogSummary - A function that generates the blog summary.
 * - GenerateBlogSummaryInput - The input type for the generateBlogSummary function.
 * - GenerateBlogSummaryOutput - The return type for the generateBlogSummary function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateBlogSummaryInputSchema = z.object({
  blogContent: z
    .string()
    .describe('The full content of the blog post to summarize.'),
});
export type GenerateBlogSummaryInput = z.infer<typeof GenerateBlogSummaryInputSchema>;

const GenerateBlogSummaryOutputSchema = z.object({
  summary: z.string().describe('A short summary of the blog post.'),
});
export type GenerateBlogSummaryOutput = z.infer<typeof GenerateBlogSummaryOutputSchema>;

export async function generateBlogSummary(input: GenerateBlogSummaryInput): Promise<GenerateBlogSummaryOutput> {
  return generateBlogSummaryFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateBlogSummaryPrompt',
  input: {schema: GenerateBlogSummaryInputSchema},
  output: {schema: GenerateBlogSummaryOutputSchema},
  prompt: `You are an expert blog summarizer.  Please summarize the following blog post in a single paragraph.\n\nBlog Post:\n\n{{{blogContent}}}`,
});

const generateBlogSummaryFlow = ai.defineFlow(
  {
    name: 'generateBlogSummaryFlow',
    inputSchema: GenerateBlogSummaryInputSchema,
    outputSchema: GenerateBlogSummaryOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);

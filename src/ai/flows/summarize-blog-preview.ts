'use server';

/**
 * @fileOverview Generates a short summary of a blog post preview.
 *
 * - summarizeBlogPreview - A function that generates the blog summary.
 * - SummarizeBlogPreviewInput - The input type for the summarizeBlogPreview function.
 * - SummarizeBlogPreviewOutput - The return type for the summarizeBlogPreview function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SummarizeBlogPreviewInputSchema = z.object({
  blogPreviewContent: z
    .string()
    .describe('The content of the blog preview to summarize.'),
});
export type SummarizeBlogPreviewInput = z.infer<typeof SummarizeBlogPreviewInputSchema>;

const SummarizeBlogPreviewOutputSchema = z.object({
  summary: z.string().describe('A short summary of the blog preview.'),
});
export type SummarizeBlogPreviewOutput = z.infer<typeof SummarizeBlogPreviewOutputSchema>;

export async function summarizeBlogPreview(input: SummarizeBlogPreviewInput): Promise<SummarizeBlogPreviewOutput> {
  return summarizeBlogPreviewFlow(input);
}

const prompt = ai.definePrompt({
  name: 'summarizeBlogPreviewPrompt',
  input: {schema: SummarizeBlogPreviewInputSchema},
  output: {schema: SummarizeBlogPreviewOutputSchema},
  prompt: `You are an expert blog preview summarizer.  Please summarize the following blog preview in a single sentence.\n\nBlog Preview:\n\n{{{blogPreviewContent}}}`,
});

const summarizeBlogPreviewFlow = ai.defineFlow(
  {
    name: 'summarizeBlogPreviewFlow',
    inputSchema: SummarizeBlogPreviewInputSchema,
    outputSchema: SummarizeBlogPreviewOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);

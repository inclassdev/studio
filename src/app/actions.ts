'use server';

import { generateBlogSummary } from '@/ai/flows/generate-blog-summary';
import type { GenerateBlogSummaryInput, GenerateBlogSummaryOutput } from '@/ai/flows/generate-blog-summary';
import { summarizeBlogPreview } from '@/ai/flows/summarize-blog-preview';
import type { SummarizeBlogPreviewInput, SummarizeBlogPreviewOutput } from '@/ai/flows/summarize-blog-preview';

export async function getBlogSummary(input: GenerateBlogSummaryInput): Promise<GenerateBlogSummaryOutput> {
  // This is a simple wrapper for now, but could include caching, error handling, etc.
  try {
    const output = await generateBlogSummary(input);
    return output;
  } catch (error) {
    console.error('Error generating blog summary:', error);
    return { summary: 'Could not generate summary at this time.' };
  }
}

export async function getBlogPreviewSummary(input: SummarizeBlogPreviewInput): Promise<SummarizeBlogPreviewOutput> {
  try {
    const output = await summarizeBlogPreview(input);
    return output;
  } catch (error) {
    console.error('Error summarizing blog preview:', error);
    return { summary: 'Could not generate summary at this time.' };
  }
}

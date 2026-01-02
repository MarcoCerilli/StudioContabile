'use server';

/**
 * @fileOverview This file defines a Genkit flow for generating blog content related to accounting, tax laws, and financial regulations.
 *
 * It exports:
 *   - `generateBlogContent`: A function that triggers the blog content generation flow.
 *   - `GenerateBlogContentInput`: The input type for the `generateBlogContent` function.
 *   - `GenerateBlogContentOutput`: The output type for the `generateBlogContent` function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateBlogContentInputSchema = z.object({
  topic: z.string().describe('The topic of the blog post.'),
  keywords: z.string().describe('Comma separated keywords related to the blog post.'),
});
export type GenerateBlogContentInput = z.infer<typeof GenerateBlogContentInputSchema>;

const GenerateBlogContentOutputSchema = z.object({
  title: z.string().describe('The title of the blog post.'),
  content: z.string().describe('The generated blog content.'),
});
export type GenerateBlogContentOutput = z.infer<typeof GenerateBlogContentOutputSchema>;

export async function generateBlogContent(input: GenerateBlogContentInput): Promise<GenerateBlogContentOutput> {
  return generateBlogContentFlow(input);
}

const generateBlogContentPrompt = ai.definePrompt({
  name: 'generateBlogContentPrompt',
  input: {schema: GenerateBlogContentInputSchema},
  prompt: `You are an expert blog content writer specializing in accounting, tax laws, and financial regulations.

  Generate a blog post with the following topic and keywords.

  Topic: {{{topic}}}
  Keywords: {{{keywords}}}

  The blog post should be informative, engaging, and provide valuable insights to potential clients.

  ONLY return the content of the blog post, not the title.
  `,
});

const generateBlogContentFlow = ai.defineFlow(
  {
    name: 'generateBlogContentFlow',
    inputSchema: GenerateBlogContentInputSchema,
    outputSchema: GenerateBlogContentOutputSchema,
  },
  async input => {
    const {output} = await generateBlogContentPrompt(input);
    const content = output as string;
    
    if (!content) {
      throw new Error('Failed to generate blog content.');
    }
    
    // Capitalize the first letter of the topic for the title
    const title = input.topic.charAt(0).toUpperCase() + input.topic.slice(1);

    return {
      title,
      content,
    };
  }
);

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

const generateBlogContentFlow = ai.defineFlow(
  {
    name: 'generateBlogContentFlow',
    inputSchema: GenerateBlogContentInputSchema,
    outputSchema: GenerateBlogContentOutputSchema,
  },
  async (input) => {
    const llmResponse = await ai.generate({
      prompt: `Sei un esperto di contenuti per blog specializzato in contabilità, leggi fiscali e regolamenti finanziari.

      Genera un post per un blog con il seguente argomento e parole chiave.

      Argomento: ${input.topic}
      Parole chiave: ${input.keywords}

      Il post del blog deve essere informativo, coinvolgente e fornire spunti preziosi ai potenziali clienti.

      RESTITUISCI SOLO IL CONTENUTO del post, non il titolo.
      `,
      model: 'googleai/gemini-1.5-flash',
      config: {
        temperature: 0.7,
      },
    });

    const content = llmResponse.text;

    if (!content) {
      throw new Error('Failed to generate blog content from the AI model.');
    }

    const title = input.topic.charAt(0).toUpperCase() + input.topic.slice(1);

    return {
      title,
      content,
    };
  }
);

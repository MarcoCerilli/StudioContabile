'use server';

import { z } from 'zod';
import { generateBlogContent } from '@/ai/flows/generate-blog-content';

const BlogFormSchema = z.object({
  topic: z.string().min(5, { message: "L'argomento deve avere almeno 5 caratteri." }),
  keywords: z.string().min(3, { message: "Le parole chiave devono avere almeno 3 caratteri." }),
});

export type BlogFormState = {
  message: string;
  fields?: Record<string, string>;
  issues?: string[];
  data?: {
    title: string;
    content: string;
  };
};

export async function generateBlogAction(
  prevState: BlogFormState,
  formData: FormData
): Promise<BlogFormState> {
  const validatedFields = BlogFormSchema.safeParse({
    topic: formData.get('topic'),
    keywords: formData.get('keywords'),
  });

  if (!validatedFields.success) {
    const fieldErrors = validatedFields.error.flatten().fieldErrors;
    const firstError = Object.values(fieldErrors).flat()[0] || 'Errore nei dati inseriti.';
    return {
      message: firstError,
      issues: validatedFields.error.flatten().formErrors,
    };
  }

  try {
    const result = await generateBlogContent(validatedFields.data);
    return {
      message: 'Articolo generato con successo!',
      data: result,
    };
  } catch (error) {
    console.error(error);
    return {
      message: "Si è verificato un errore durante la generazione dell'articolo.",
    };
  }
}


const ContactFormSchema = z.object({
  name: z.string().min(2, "Il nome è troppo corto"),
  email: z.string().email("Email non valida"),
  subject: z.string().min(5, "L'oggetto è troppo corto"),
  message: z.string().min(10, "Il messaggio è troppo corto"),
});

export type ContactFormState = {
  message: string;
  success: boolean;
};

export async function submitContactForm(prevState: ContactFormState, formData: FormData): Promise<ContactFormState> {
  const validatedFields = ContactFormSchema.safeParse(Object.fromEntries(formData.entries()));

  if (!validatedFields.success) {
    const firstError = Object.values(validatedFields.error.flatten().fieldErrors).flat()[0] || "Errore nei dati. Per favore, controlla i campi.";
    return {
      message: firstError,
      success: false
    };
  }

  // Here you would typically send an email or save to a database
  console.log("Contact form submitted:", validatedFields.data);

  return {
    message: "Grazie per il tuo messaggio! Ti risponderò al più presto.",
    success: true
  };
}

'use server';

export async function generateBlogContent(input: { topic: string, keywords: string }) {
  // Usa l'URL del trigger che trovi in alto nel workflow di Pipedream
  const PIPEDREAM_URL = "https://eom17onw8394gsa.m.pipedream.net";

  try {
    const response = await fetch(PIPEDREAM_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(input),
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`Errore Pipey: ${errorText}`);
    }

    // Riceviamo il testo dell'articolo direttamente
    const articleText = await response.text();
    
    return {
      title: input.topic,
      content: articleText
    };
  } catch (error) {
    console.error("Errore durante la generazione:", error);
    throw error;
  }
}
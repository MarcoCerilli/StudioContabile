'use client';

import { useFormState, useFormStatus } from 'react-dom';
import { generateBlogAction } from '@/app/actions';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useEffect, useRef } from 'react';
import { useToast } from '@/hooks/use-toast';
import { Loader2, Sparkles } from 'lucide-react';

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} className="w-full sm:w-auto" style={{ backgroundColor: 'hsl(var(--accent))', color: 'hsl(var(--accent-foreground))' }}>
      {pending ? (
        <>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          Generazione in corso...
        </>
      ) : (
        <>
         <Sparkles className="mr-2 h-4 w-4" />
          Genera Articolo
        </>
      )}
    </Button>
  );
}

export default function Blog() {
  const initialState = { message: '', data: undefined, issues: [] };
  const [state, formAction] = useFormState(generateBlogAction, initialState);
  const { toast } = useToast();
  const formRef = useRef<HTMLFormElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (state.message && !state.data) {
      toast({
        variant: "destructive",
        title: "Errore",
        description: state.message,
      });
    }
    if (state.data) {
      formRef.current?.reset();
      toast({
        title: "Successo",
        description: "Il tuo articolo è stato generato!",
      });
      contentRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }, [state, toast]);

  return (
    <section id="blog" className="py-20 lg:py-32 bg-card">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-headline font-bold">Blog & Aggiornamenti</h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
            Usa il nostro strumento AI per generare articoli informativi su temi fiscali e finanziari. Inserisci un argomento e delle parole chiave per iniziare.
          </p>
        </div>

        <Card className="max-w-3xl mx-auto shadow-lg">
          <CardContent className="p-6">
            <form ref={formRef} action={formAction} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="topic">Argomento</Label>
                  <Input id="topic" name="topic" placeholder="es. Nuova legge di bilancio" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="keywords">Parole chiave (separate da virgola)</Label>
                  <Input id="keywords" name="keywords" placeholder="es. bonus, flat tax, imprese" required />
                </div>
              </div>
              <div className="flex justify-end">
                <SubmitButton />
              </div>
            </form>
          </CardContent>
        </Card>
        
        {state.data && (
            <div ref={contentRef} className="mt-12 max-w-4xl mx-auto">
                <Card className="animate-in fade-in-50 duration-500">
                    <CardHeader>
                        <CardTitle className="font-headline text-3xl">{state.data.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-6 text-muted-foreground leading-relaxed text-lg">
                          {state.data.content.split('\n').filter(p => p.trim() !== '').map((paragraph, index) => (
                            <p key={index}>{paragraph}</p>
                          ))}
                        </div>
                    </CardContent>
                </Card>
            </div>
        )}

      </div>
    </section>
  );
}

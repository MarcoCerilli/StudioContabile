'use client';

import { useActionState, useState, useEffect, useRef } from 'react';
import { useFormStatus } from 'react-dom';
import { generateBlogAction } from '@/app/actions';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { Loader2, Sparkles, Copy, FileText } from 'lucide-react';

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} className="w-full sm:w-auto" style={{ backgroundColor: 'hsl(var(--accent))', color: 'hsl(var(--accent-foreground))' }}>
      {pending ? (
        <>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          L'esperto sta scrivendo...
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
  const [state, formAction] = useActionState(generateBlogAction, initialState);
  const [isGenerating, setIsGenerating] = useState(false);
  const { toast } = useToast();
  const formRef = useRef<HTMLFormElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  // Effetto per gestire l'inizio/fine della generazione e i toast
  useEffect(() => {
    if (state.message && !state.data) {
      setIsGenerating(false);
      toast({
        variant: "destructive",
        title: "Errore",
        description: state.message,
      });
    }
    if (state.data) {
      setIsGenerating(false);
      formRef.current?.reset();
      toast({
        title: "Articolo Generato!",
        description: "Il contenuto è pronto per il blog.",
      });
      contentRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }, [state, toast]);

  const copyToClipboard = () => {
    if (state.data?.content) {
      navigator.clipboard.writeText(state.data.content);
      toast({ title: "Copiato!", description: "Testo pronto per essere incollato." });
    }
  };

  return (
    <section id="blog" className="py-20 lg:py-32 bg-card">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-headline font-bold">Blog AI per lo Studio</h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
            Crea bozze di articoli professionali in pochi secondi.
          </p>
        </div>

        <Card className="max-w-3xl mx-auto shadow-lg border-t-4 border-t-accent">
          <CardContent className="p-6">
            <form 
              ref={formRef} 
              action={formAction} 
              onSubmit={() => setIsGenerating(true)} // Attiva lo stato caricamento
              className="space-y-6"
            >
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="topic">Argomento Fiscale</Label>
                  <Input id="topic" name="topic" placeholder="es. Bonus Ristrutturazioni 2026" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="keywords">Parole chiave</Label>
                  <Input id="keywords" name="keywords" placeholder="es. detrazioni, massimali" required />
                </div>
              </div>
              <div className="flex justify-end">
                <SubmitButton />
              </div>
            </form>
          </CardContent>
        </Card>
        
        {/* SKELETON LOADER: Si vede solo mentre genera */}
        {isGenerating && !state.data && (
          <div className="mt-12 max-w-4xl mx-auto animate-pulse">
            <Card className="bg-muted/30">
              <CardContent className="p-10 space-y-4">
                <div className="h-8 bg-slate-200 rounded w-3/4 mb-6"></div>
                <div className="h-4 bg-slate-200 rounded w-full"></div>
                <div className="h-4 bg-slate-200 rounded w-5/6"></div>
                <div className="h-4 bg-slate-200 rounded w-full"></div>
                <div className="flex justify-center pt-4">
                  <p className="text-sm text-muted-foreground">Consultazione fonti fiscali in corso...</p>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* RISULTATO FINALE */}
        {state.data && (
            <div ref={contentRef} className="mt-12 max-w-4xl mx-auto">
                <Card className="animate-in slide-in-from-bottom-4 duration-700 shadow-2xl">
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4 border-b">
                        <CardTitle className="font-headline text-2xl md:text-3xl pr-4">
                          {state.data.title}
                        </CardTitle>
                        <Button variant="outline" size="icon" onClick={copyToClipboard} title="Copia testo">
                          <Copy className="h-4 w-4" />
                        </Button>
                    </CardHeader>
                    <CardContent className="pt-6">
                        <div className="space-y-6 text-foreground leading-relaxed text-lg italic-p">
                          {state.data.content.split('\n').filter(p => p.trim() !== '').map((paragraph, index) => (
                            <p key={index} className="first-letter:text-2xl first-letter:font-bold">
                              {paragraph}
                            </p>
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
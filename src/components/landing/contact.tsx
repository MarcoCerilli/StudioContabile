'use client';

import { useActionState } from 'react';
import { useFormStatus } from 'react-dom';
import { useEffect, useRef } from 'react';
import { useToast } from '@/hooks/use-toast';
import { submitContactForm } from '@/app/actions';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Loader2, Send, Mail, Phone, MapPin, Inbox } from 'lucide-react';

function ContactSubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} className="w-full" style={{ backgroundColor: 'hsl(var(--accent))', color: 'hsl(var(--accent-foreground))' }}>
      {pending ? (
        <>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          Invio in corso...
        </>
      ) : (
        <>
          <Send className="mr-2 h-4 w-4" />
          Invia Messaggio
        </>
      )}
    </Button>
  );
}

export default function Contact() {
  const initialState = { message: '', success: false };
  const [state, formAction] = useActionState(submitContactForm, initialState);
  const { toast } = useToast();
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if(state.message) {
      if (state.success) {
        toast({
          title: 'Messaggio Inviato!',
          description: state.message,
        });
        formRef.current?.reset();
      } else {
        toast({
          variant: 'destructive',
          title: 'Errore',
          description: state.message,
        });
      }
    }
  }, [state, toast]);

  const contactDetails = [
    { icon: MapPin, text: 'Via Alessandro Manzoni 35, Terracina', href: 'https://www.google.com/maps/search/?api=1&query=Via+Alessandro+Manzoni+35+Terracina' },
    { icon: Phone, text: '0773 702972', href: 'tel:0773702972' },
    { icon: Mail, text: 'studiocittarelli@gmail.com', href: 'mailto:studiocittarelli@gmail.com' },
    { icon: Inbox, text: 'francesca.cittarelli@altapec.it', href: 'mailto:francesca.cittarelli@altapec.it' },
  ];

  return (
    <section id="contatti" className="py-20 lg:py-32 bg-card">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto grid lg:grid-cols-2 gap-12">
        <div className="flex flex-col justify-center">
            <h2 className="text-3xl md:text-4xl font-headline font-bold">Contatti Diretti</h2>
            <p className="mt-4 text-muted-foreground">
              Preferisci un contatto diretto? Qui trovi tutti i miei recapiti. Sarò felice di risponderti al più presto.
            </p>
            <div className="mt-8 space-y-4">
              {contactDetails.map((detail, index) => (
                <a key={index} href={detail.href} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group">
                  <div className="bg-accent/20 p-3 rounded-full group-hover:bg-accent/40 transition-colors">
                    <detail.icon className="h-5 w-5 text-primary" />
                  </div>
                  <span className="text-muted-foreground group-hover:text-primary transition-colors">{detail.text}</span>
                </a>
              ))}
            </div>
          </div>
          <Card className="shadow-lg">
            <CardHeader className="text-center lg:text-left">
              <CardTitle className="text-3xl md:text-4xl font-headline font-bold">Scrivimi</CardTitle>
              <CardDescription className="mt-2 text-lg">
                Hai una domanda o vuoi una consulenza? Compila il modulo.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form ref={formRef} action={formAction} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Nome Completo</Label>
                  <Input id="name" name="name" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" name="email" type="email" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="subject">Oggetto</Label>
                  <Input id="subject" name="subject" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Messaggio</Label>
                  <Textarea id="message" name="message" rows={5} required />
                </div>
                <ContactSubmitButton />
              </form>
            </CardContent>
          </Card>
          
        </div>
      </div>
    </section>
  );
}

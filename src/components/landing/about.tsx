import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Award, Users, Coffee } from 'lucide-react';
import { Card } from '@/components/ui/card';

export default function About() {
  const bioImage = PlaceHolderImages.find(p => p.id === 'accountant-bio');

  return (
    <section id="chi-sono" className="py-20 lg:py-32 bg-card">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          <div className="relative aspect-[3/4] rounded-lg overflow-hidden shadow-2xl transform lg:rotate-[-3deg] transition-transform duration-500 hover:rotate-0">
            {bioImage && (
              <Image
                src={bioImage.imageUrl}
                alt={bioImage.description}
                fill
                className="object-cover"
                data-ai-hint={bioImage.imageHint}
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent"></div>
          </div>
          <div className="lg:order-first">
            <h2 className="text-3xl md:text-4xl font-headline font-bold">Dr.ssa Francesca Cittarelli</h2>
            <p className="mt-2 text-xl text-primary font-semibold">Commercialista e Revisore Legale</p>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              Con oltre 15 anni di esperienza nel settore, offro una consulenza personalizzata che va oltre i semplici numeri. La mia missione è essere un partner strategico per i miei clienti, aiutandoli a raggiungere i loro obiettivi finanziari e di business con chiarezza e sicurezza.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Credo in un approccio proattivo e trasparente, costruendo rapporti di fiducia a lungo termine. Sono costantemente aggiornata sulle ultime normative per garantire sempre il miglior servizio possibile.
            </p>
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
              <Card className="p-4 bg-background">
                <Award className="h-8 w-8 text-accent mx-auto mb-2" />
                <p className="font-bold text-xl">15+</p>
                <p className="text-sm text-muted-foreground">Anni di Esperienza</p>
              </Card>
              <Card className="p-4 bg-background">
                <Users className="h-8 w-8 text-accent mx-auto mb-2" />
                <p className="font-bold text-xl">200+</p>
                <p className="text-sm text-muted-foreground">Clienti Soddisfatti</p>
              </Card>
              <Card className="p-4 bg-background">
                <Coffee className="h-8 w-8 text-accent mx-auto mb-2" />
                <p className="font-bold text-xl">∞</p>
                <p className="text-sm text-muted-foreground">Caffè Bevuti</p>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

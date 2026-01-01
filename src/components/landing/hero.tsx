import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function Hero() {
  const heroImage = PlaceHolderImages.find(p => p.id === 'hero-background');

  return (
    <section className="relative h-[85vh] min-h-[600px] flex items-center justify-center text-center text-white">
      {heroImage && (
        <Image
          src={heroImage.imageUrl}
          alt={heroImage.description}
          fill
          className="object-cover"
          data-ai-hint={heroImage.imageHint}
          priority
        />
      )}
      <div className="absolute inset-0 bg-black/60" />
      <div className="relative z-10 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-headline font-bold leading-tight tracking-tight">
          Il Tuo Studio Contabile di Fiducia a Terracina
        </h1>
        <p className="mt-4 text-lg font-body">di Francesca Cittarelli</p>
        <p className="mt-6 text-lg md:text-xl max-w-2xl mx-auto text-primary-foreground/90">
          Esperienza e professionalità al tuo servizio per navigare con sicurezza tra normative fiscali e opportunità finanziarie.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg" style={{ backgroundColor: 'hsl(var(--accent))', color: 'hsl(var(--accent-foreground))' }} className="shadow-lg transform hover:scale-105 transition-transform duration-300 hover:brightness-110">
            <Link href="#servizi">Scopri i Servizi</Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary shadow-lg transform hover:scale-105 transition-transform duration-300">
            <Link href="#contatti">Richiedi una Consulenza</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

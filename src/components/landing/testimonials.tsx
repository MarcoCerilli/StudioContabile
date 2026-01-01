'use client';

import React from 'react';
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import type { Testimonial } from '@/lib/types';

const testimonialsData: Testimonial[] = [
  {
    id: 't1',
    quote: "Francesca ha trasformato la gestione fiscale della mia startup. Professionale, disponibile e incredibilmente competente. Non potrei chiedere di meglio.",
    name: 'Marco Bianchi',
    role: 'CEO di Innovatech Srl',
    image: {
      id: 'testimonial-1',
      url: PlaceHolderImages.find(p => p.id === 'testimonial-1')?.imageUrl || '',
      hint: PlaceHolderImages.find(p => p.id === 'testimonial-1')?.imageHint || '',
    },
  },
  {
    id: 't2',
    quote: "Grazie alla sua pianificazione finanziaria, ho ottimizzato i miei investimenti e ora guardo al futuro con molta più serenità. Una vera professionista.",
    name: 'Giulia Verdi',
    role: 'Libera Professionista',
    image: {
      id: 'testimonial-2',
      url: PlaceHolderImages.find(p => p.id === 'testimonial-2')?.imageUrl || '',
      hint: PlaceHolderImages.find(p => p.id === 'testimonial-2')?.imageHint || '',
    },
  },
  {
    id: 't3',
    quote: "La gestione delle buste paga era un incubo. Da quando ci affidiamo a lei, tutto è più semplice e non abbiamo più avuto problemi. Consigliatissima!",
    name: 'Luca Russo',
    role: 'Titolare di Ristorante La Brace',
    image: {
      id: 'testimonial-3',
      url: PlaceHolderImages.find(p => p.id === 'testimonial-3')?.imageUrl || '',
      hint: PlaceHolderImages.find(p => p.id === 'testimonial-3')?.imageHint || '',
    },
  },
];

export default function Testimonials() {
  return (
    <section id="testimonial" className="py-20 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-headline font-bold">Dicono di Me</h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            La soddisfazione dei miei clienti è la mia più grande ricompensa.
          </p>
        </div>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-sm sm:max-w-xl md:max-w-2xl lg:max-w-4xl mx-auto"
        >
          <CarouselContent>
            {testimonialsData.map((testimonial) => (
              <CarouselItem key={testimonial.id} className="md:basis-1/2">
                <div className="p-2">
                  <Card className="h-full flex flex-col shadow-sm">
                    <CardContent className="flex-1 flex flex-col justify-between p-6">
                      <blockquote className="text-muted-foreground italic mb-6 before:content-['“'] after:content-['”']">
                        {testimonial.quote}
                      </blockquote>
                      <div className="flex items-center gap-4 mt-auto">
                        {testimonial.image.url && 
                          <Image
                            src={testimonial.image.url}
                            alt={`Foto di ${testimonial.name}`}
                            width={40}
                            height={40}
                            className="rounded-full object-cover"
                            data-ai-hint={testimonial.image.hint}
                          />
                        }
                        <div>
                          <p className="font-bold">{testimonial.name}</p>
                          <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden sm:flex" />
          <CarouselNext className="hidden sm:flex" />
        </Carousel>
      </div>
    </section>
  );
}

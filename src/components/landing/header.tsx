'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, Gem } from 'lucide-react';
import { cn } from '@/lib/utils';

const navLinks = [
  { href: '#servizi', label: 'Servizi' },
  { href: '#chi-sono', label: 'Chi Sono' },
  { href: '#testimonial', label: 'Testimonianze' },
  { href: '#blog', label: 'Blog' },
  { href: '#faq', label: 'FAQ' },
  { href: '#contatti', label: 'Contatti' },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
      isScrolled ? "bg-card/95 shadow-md backdrop-blur-sm" : "bg-transparent"
    )}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center gap-2 text-xl font-headline font-bold text-primary">
            <Gem className="h-6 w-6 text-accent" />
            <span>Studio Contabile Cittarelli</span>
          </Link>

          <nav className="hidden lg:flex items-center space-x-6">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} className={cn("text-sm font-medium transition-colors", isScrolled ? "text-foreground/80 hover:text-primary" : "text-white/80 hover:text-white")}>
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center">
            <Button asChild style={{ backgroundColor: 'hsl(var(--accent))', color: 'hsl(var(--accent-foreground))' }} className="hover:brightness-110 transition-all">
              <Link href="#contatti">Consulenza Gratuita</Link>
            </Button>
          </div>

          <div className="lg:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Apri menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right">
                <div className="flex flex-col space-y-6 pt-10">
                  <Link href="/" className="flex items-center gap-2 text-2xl font-headline font-bold text-primary">
                    <Gem className="h-6 w-6 text-accent" />
                    <span>Studio Contabile Cittarelli</span>
                  </Link>
                  <nav className="flex flex-col space-y-4">
                  {navLinks.map((link) => (
                    <Link key={link.href} href={link.href} className="text-lg font-medium text-foreground/80 hover:text-primary transition-colors">
                      {link.label}
                    </Link>
                  ))}
                  </nav>
                  <Button asChild className="w-full" style={{ backgroundColor: 'hsl(var(--accent))', color: 'hsl(var(--accent-foreground))' }}>
                    <Link href="#contatti">Consulenza Gratuita</Link>
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}

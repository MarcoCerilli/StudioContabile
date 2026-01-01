import Link from 'next/link';
import { Gem, Linkedin, Facebook, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8 text-center md:text-left">
          <div className="flex flex-col items-center md:items-start">
            <Link href="/" className="flex items-center gap-2 text-2xl font-headline font-bold">
              <Gem className="h-6 w-6 text-accent" />
              <span>Accounting Ace</span>
            </Link>
            <p className="mt-2 text-sm text-primary-foreground/80">Dr.ssa Elisa Rossi <br/> P.IVA 12345678901</p>
          </div>
          <div className="flex flex-col items-center md:items-start">
            <h3 className="font-bold mb-4">Link Utili</h3>
            <nav className="flex flex-col space-y-2">
              <Link href="#servizi" className="text-sm text-primary-foreground/80 hover:text-white">Servizi</Link>
              <Link href="#chi-sono" className="text-sm text-primary-foreground/80 hover:text-white">Chi Sono</Link>
              <Link href="#faq" className="text-sm text-primary-foreground/80 hover:text-white">FAQ</Link>
              <Link href="#contatti" className="text-sm text-primary-foreground/80 hover:text-white">Contatti</Link>
            </nav>
          </div>
          <div className="flex flex-col items-center md:items-start">
            <h3 className="font-bold mb-4">Seguimi su</h3>
            <div className="flex space-x-4">
              <Link href="#" className="text-primary-foreground/80 hover:text-white" aria-label="LinkedIn">
                <Linkedin className="h-6 w-6" />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link href="#" className="text-primary-foreground/80 hover:text-white" aria-label="Facebook">
                <Facebook className="h-6 w-6" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-primary-foreground/80 hover:text-white" aria-label="Twitter">
                <Twitter className="h-6 w-6" />
                <span className="sr-only">Twitter</span>
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-primary-foreground/20 text-center text-sm text-primary-foreground/60">
          <p>&copy; {new Date().getFullYear()} Accounting Ace. Tutti i diritti riservati.</p>
          <p className="mt-1">Sito web realizzato con orgoglio.</p>
        </div>
      </div>
    </footer>
  );
}

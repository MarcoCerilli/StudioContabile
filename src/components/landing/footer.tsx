import Link from 'next/link';
import { Gem, Linkedin, Facebook, Twitter, Phone, Mail, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8 text-center md:text-left">
          <div className="flex flex-col items-center md:items-start md:col-span-2">
            <Link href="/" className="flex items-center gap-2 text-xl font-headline font-bold">
              <Gem className="h-6 w-6 text-accent" />
              <span>Studio Contabile Cittarelli</span>
            </Link>
            <p className="mt-2 text-sm text-primary-foreground/80">Dr.ssa Francesca Cittarelli</p>
            <p className="mt-1 text-sm text-primary-foreground/80">P.IVA 03076350598</p>
            <p className="mt-1 text-sm text-primary-foreground/80">C.F. CTTFNC76A70L120H</p>
          </div>
          
          <div className="flex flex-col items-center md:items-start">
            <h3 className="font-bold mb-4">Contatti</h3>
            <div className="flex flex-col space-y-2 text-sm text-primary-foreground/80">
              <span className="flex items-center gap-2 justify-center md:justify-start"><MapPin className="h-4 w-4"/> Via A. Manzoni 35, Terracina</span>
              <a href="tel:0773702972" className="flex items-center gap-2 hover:text-white justify-center md:justify-start"><Phone className="h-4 w-4"/> 0773 702972</a>
              <a href="mailto:studiocittarelli@gmail.com" className="flex items-center gap-2 hover:text-white justify-center md:justify-start"><Mail className="h-4 w-4"/> studiocittarelli@gmail.com</a>
            </div>
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
          <p>&copy; {new Date().getFullYear()} Studio Contabile Cittarelli. Tutti i diritti riservati.</p>
          <p className="mt-1">Sito web realizzato con orgoglio.</p>
        </div>
      </div>
    </footer>
  );
}

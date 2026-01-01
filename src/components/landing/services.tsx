import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Landmark, LineChart, Users, Briefcase, FileText, ClipboardCheck, type LucideIcon } from 'lucide-react';

interface Service {
  icon: LucideIcon;
  title: string;
  description: string;
}

const services: Service[] = [
  {
    icon: Landmark,
    title: 'Consulenza Fiscale',
    description: 'Assistenza completa per adempimenti fiscali, dichiarazioni e pianificazione per ottimizzare il carico fiscale.',
  },
  {
    icon: LineChart,
    title: 'Pianificazione Finanziaria',
    description: 'Strategie personalizzate per la gestione del patrimonio, investimenti e pianificazione pensionistica.',
  },
  {
    icon: Users,
    title: 'Gestione Buste Paga',
    description: 'Servizi di elaborazione paghe precisi e puntuali, gestione dei contributi e adempimenti connessi.',
  },
  {
    icon: Briefcase,
    title: 'Contabilità Aziendale',
    description: 'Tenuta della contabilità ordinaria e semplificata, bilanci e report periodici per monitorare la salute dell\'azienda.',
  },
  {
    icon: FileText,
    title: 'Dichiarazione dei Redditi',
    description: 'Compilazione e invio telematico di modelli 730, Redditi PF, e consulenza per detrazioni e deduzioni.',
  },
  {
    icon: ClipboardCheck,
    title: 'Revisione Contabile',
    description: 'Verifica della correttezza delle scritture contabili e certificazione dei bilanci secondo le normative vigenti.',
  },
];

export default function Services() {
  return (
    <section id="servizi" className="py-20 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-headline font-bold">I Miei Servizi</h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Soluzioni complete e su misura per privati, professionisti e aziende.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="text-center hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-2">
              <CardHeader className="items-center p-6">
                <div className="bg-accent/20 p-4 rounded-full mb-4">
                  <service.icon className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-xl font-bold">{service.title}</CardTitle>
                <CardDescription className="pt-2">{service.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

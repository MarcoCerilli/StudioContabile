import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Quali sono i vostri orari di apertura?",
    answer: "Lo studio è aperto dal lunedì al venerdì, dalle 9:00 alle 13:00 e dalle 14:30 alle 18:30. Si riceve solo su appuntamento."
  },
  {
    question: "Offrite una prima consulenza gratuita?",
    answer: "Sì, offro un primo incontro conoscitivo gratuito di 30 minuti per discutere le vostre esigenze e capire come posso aiutarvi al meglio."
  },
  {
    question: "Quali documenti devo portare per la dichiarazione dei redditi?",
    answer: "Dipende dalla sua situazione specifica. Generalmente, sono necessari CUD/CU, scontrini e fatture di spese mediche, interessi passivi del mutuo, spese di ristrutturazione, e altri documenti relativi a redditi e oneri deducibili/detraibili. Contattami per una lista personalizzata."
  },
  {
    question: "Lavorate anche con clienti a distanza?",
    answer: "Assolutamente sì. Grazie agli strumenti digitali, posso assistere clienti in tutta Italia, gestendo pratiche e consulenze in via telematica in modo efficiente e sicuro."
  },
  {
    question: "Quali sono i costi dei vostri servizi?",
    answer: "I costi variano in base alla complessità del servizio richiesto. Dopo il primo incontro conoscitivo, sarò in grado di fornirle un preventivo chiaro e dettagliato, senza sorprese."
  },
];

export default function Faq() {
  return (
    <section id="faq" className="py-20 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-headline font-bold">Domande Frequenti</h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Trova qui le risposte alle domande più comuni.
          </p>
        </div>
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full space-y-2">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="bg-card border-b-0 rounded-lg shadow-sm">
                <AccordionTrigger className="text-left font-semibold text-lg px-6 py-4 hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base px-6 pb-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}

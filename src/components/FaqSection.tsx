import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  { q: "What areas do you serve?", a: "We proudly serve Hudson, Normal, Bloomington, and surrounding communities in McLean County, IL." },
  { q: "Do you offer free estimates?", a: "Absolutely! We provide free, no-obligation estimates for all our services. Just fill out our contact form or call us directly." },
  { q: "Are you licensed and insured?", a: "Yes, Normal Valley Landscaping is fully licensed and insured for your complete peace of mind." },
  { q: "How quickly can you start a project?", a: "For lawn care and maintenance, we can often start within a few days. Larger projects like hardscaping or landscape design typically begin within 1-2 weeks of approval." },
  { q: "Do you offer recurring maintenance plans?", a: "Yes! We offer weekly, bi-weekly, and monthly maintenance plans customized to your property's needs and your budget." },
  { q: "What payment methods do you accept?", a: "We accept cash, checks, and all major credit cards. We also offer financing options for larger projects." },
];

const FaqSection = () => (
  <section className="py-20 lg:py-28 bg-muted">
    <div className="container mx-auto px-4">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <span className="font-body text-sm font-semibold text-secondary uppercase tracking-widest">FAQ</span>
        <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-3 mb-4">
          Common Questions
        </h2>
      </div>

      <div className="max-w-3xl mx-auto">
        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((faq, i) => (
            <AccordionItem
              key={i}
              value={`faq-${i}`}
              className="bg-card rounded-xl px-6 border border-border/50 shadow-soft"
            >
              <AccordionTrigger className="font-display text-lg font-semibold text-foreground hover:no-underline py-5">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="font-body text-muted-foreground pb-5 leading-relaxed">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  </section>
);

export default FaqSection;

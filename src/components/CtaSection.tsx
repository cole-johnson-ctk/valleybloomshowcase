import { Phone, ArrowRight } from "lucide-react";

const CtaSection = () => (
  <section className="py-20 lg:py-28 bg-gradient-cta relative overflow-hidden">
    <div className="absolute inset-0 opacity-10">
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-gold rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
    </div>

    <div className="container mx-auto px-4 relative z-10 text-center">
      <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
        Ready for Your Dream Yard?
      </h2>
      <p className="font-body text-primary-foreground/80 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
        Join hundreds of happy homeowners across Central Illinois. Get your free estimate today — no pressure, no obligation.
      </p>

      <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
        <a
          href="#top"
          className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-secondary text-secondary-foreground font-body font-bold text-lg hover:brightness-110 transition-all shadow-hero"
        >
          Get Your Free Estimate <ArrowRight className="w-5 h-5" />
        </a>
        <a
          href="tel:3095334808"
          className="inline-flex items-center gap-2 px-8 py-4 rounded-lg border-2 border-primary-foreground/30 text-primary-foreground font-body font-semibold text-lg hover:bg-primary-foreground/10 transition-all"
        >
          <Phone className="w-5 h-5" /> (309) 533-4808
        </a>
      </div>
    </div>
  </section>
);

export default CtaSection;

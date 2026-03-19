import { Leaf, Hammer, Droplets, Snowflake, TreePine, Flower2 } from "lucide-react";

const services = [
  { icon: Leaf, title: "Lawn Care", desc: "Mowing, edging, fertilization, and year-round maintenance to keep your lawn pristine." },
  { icon: TreePine, title: "Landscape Design", desc: "Custom designs that transform your property with trees, shrubs, and flower beds." },
  { icon: Hammer, title: "Hardscaping", desc: "Patios, walkways, retaining walls, and fire pits built to last a lifetime." },
  { icon: Droplets, title: "Irrigation Systems", desc: "Smart sprinkler installation and repair to keep your landscape healthy and green." },
  { icon: Flower2, title: "Garden Installation", desc: "Beautiful flower gardens, mulch beds, and ornamental plantings for year-round color." },
  { icon: Snowflake, title: "Seasonal Services", desc: "Spring clean-ups, fall leaf removal, and winter snow management." },
];

const ServicesSection = () => (
  <section id="services" className="py-20 lg:py-28 bg-background">
    <div className="container mx-auto px-4">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <span className="font-body text-sm font-semibold text-secondary uppercase tracking-widest">Our Services</span>
        <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-3 mb-4">
          Everything Your Property Needs
        </h2>
        <p className="font-body text-muted-foreground text-lg">
          From routine maintenance to complete outdoor transformations, we handle it all.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {services.map((s) => (
          <div
            key={s.title}
            className="group bg-card rounded-xl p-8 shadow-soft hover:shadow-card transition-all duration-300 hover:-translate-y-1 border border-border/50"
          >
            <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
              <s.icon className="w-7 h-7 text-primary" />
            </div>
            <h3 className="font-display text-xl font-bold text-foreground mb-3">{s.title}</h3>
            <p className="font-body text-muted-foreground leading-relaxed">{s.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;

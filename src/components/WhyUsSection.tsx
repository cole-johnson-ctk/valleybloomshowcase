import { Shield, Clock, Award, Heart } from "lucide-react";

const reasons = [
  { icon: Award, title: "5-Star Rated", desc: "Perfect rating from every client. Our work speaks for itself." },
  { icon: Clock, title: "Reliable & On Time", desc: "We show up when we say we will — every single time." },
  { icon: Shield, title: "Fully Insured", desc: "Licensed and insured for your complete peace of mind." },
  { icon: Heart, title: "Locally Owned", desc: "Proudly serving Hudson, IL and the surrounding communities." },
];

const WhyUsSection = () => (
  <section className="py-20 lg:py-28 bg-muted">
    <div className="container mx-auto px-4">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <span className="font-body text-sm font-semibold text-secondary uppercase tracking-widest">Why Choose Us</span>
        <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-3 mb-4">
          Hudson's Most Trusted Landscaper
        </h2>
        <p className="font-body text-muted-foreground text-lg">
          We treat every property like it's our own — because your satisfaction is our reputation.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {reasons.map((r) => (
          <div key={r.title} className="text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center mx-auto">
              <r.icon className="w-8 h-8 text-primary-foreground" />
            </div>
            <h3 className="font-display text-xl font-bold text-foreground">{r.title}</h3>
            <p className="font-body text-muted-foreground">{r.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default WhyUsSection;

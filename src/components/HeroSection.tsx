import { useState } from "react";
import { Phone, MapPin, Star, CheckCircle } from "lucide-react";
import heroImg from "@/assets/hero-landscaping.jpg";

const HeroSection = () => {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", phone: "", email: "", service: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="relative min-h-screen flex items-center">
      {/* Background */}
      <div className="absolute inset-0">
        <img src={heroImg} alt="Beautiful landscaped yard" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-hero" />
      </div>

      <div className="relative z-10 container mx-auto px-4 py-20 lg:py-28">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left - Copy */}
          <div className="text-primary-foreground space-y-6">
            <div className="flex items-center gap-2 text-gold">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-current" />
              ))}
              <span className="font-body text-sm ml-2 text-primary-foreground/80">5.0 Rating on Google</span>
            </div>

            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Transform Your
              <span className="block text-gold"> Outdoor Space</span>
            </h1>

            <p className="font-body text-lg md:text-xl text-primary-foreground/85 max-w-lg leading-relaxed">
              Hudson, IL's most trusted landscaping team. From lawn care to full property transformations — we bring your vision to life.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <div className="flex items-center gap-2 text-primary-foreground/80 font-body text-sm">
                <MapPin className="w-4 h-4 text-gold" />
                406 N Broadway St, Hudson, IL 61748
              </div>
              <a href="tel:3095334808" className="flex items-center gap-2 text-gold font-body font-semibold text-sm hover:text-gold-light transition-colors">
                <Phone className="w-4 h-4" />
                (309) 533-4808
              </a>
            </div>
          </div>

          {/* Right - Form */}
          <div className="bg-card rounded-xl p-8 shadow-hero">
            {submitted ? (
              <div className="text-center py-12 space-y-4">
                <CheckCircle className="w-16 h-16 text-forest mx-auto" />
                <h3 className="font-display text-2xl font-bold text-foreground">Thank You!</h3>
                <p className="font-body text-muted-foreground">We'll get back to you within 24 hours.</p>
              </div>
            ) : (
              <>
                <h2 className="font-display text-2xl font-bold text-foreground mb-2">Get Your Free Estimate</h2>
                <p className="font-body text-muted-foreground mb-6 text-sm">No obligation. Response within 24 hours.</p>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <input
                    type="text"
                    placeholder="Your Name"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-forest transition-all"
                  />
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    required
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-forest transition-all"
                  />
                  <input
                    type="email"
                    placeholder="Email Address"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-forest transition-all"
                  />
                  <select
                    value={form.service}
                    onChange={(e) => setForm({ ...form, service: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background font-body text-foreground focus:outline-none focus:ring-2 focus:ring-forest transition-all"
                  >
                    <option value="">Select a Service</option>
                    <option value="lawn">Lawn Care & Maintenance</option>
                    <option value="design">Landscape Design</option>
                    <option value="hardscape">Hardscaping & Patios</option>
                    <option value="seasonal">Seasonal Clean-Up</option>
                    <option value="other">Other</option>
                  </select>
                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-lg bg-secondary text-secondary-foreground font-body font-bold text-lg hover:brightness-110 transition-all shadow-soft"
                  >
                    Get My Free Quote →
                  </button>
                  <p className="text-center text-xs text-muted-foreground font-body">
                    ✓ No spam &nbsp; ✓ 100% free &nbsp; ✓ Fast response
                  </p>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

import { MapPin, Phone, Clock } from "lucide-react";

const Footer = () => (
  <footer className="bg-foreground py-12">
    <div className="container mx-auto px-4">
      <div className="grid sm:grid-cols-3 gap-8 mb-8">
        <div>
          <h3 className="font-display text-lg font-bold text-primary-foreground mb-3">
            Normal Valley <span className="text-gold">Landscaping</span>
          </h3>
          <p className="font-body text-sm text-primary-foreground/60">
            Transforming outdoor spaces across Central Illinois since day one.
          </p>
        </div>
        <div className="space-y-3">
          <div className="flex items-start gap-2 text-primary-foreground/70 font-body text-sm">
            <MapPin className="w-4 h-4 mt-0.5 text-gold" />
            406 N Broadway St, Hudson, IL 61748
          </div>
          <div className="flex items-center gap-2 text-primary-foreground/70 font-body text-sm">
            <Phone className="w-4 h-4 text-gold" />
            <a href="tel:3095334808" className="hover:text-primary-foreground transition-colors">(309) 533-4808</a>
          </div>
          <div className="flex items-center gap-2 text-primary-foreground/70 font-body text-sm">
            <Clock className="w-4 h-4 text-gold" />
            Mon–Fri: 8AM – 6PM
          </div>
        </div>
        <div>
          <h4 className="font-display font-bold text-primary-foreground mb-3">Services</h4>
          <ul className="space-y-1.5 font-body text-sm text-primary-foreground/60">
            <li>Lawn Care</li>
            <li>Landscape Design</li>
            <li>Hardscaping</li>
            <li>Seasonal Clean-Up</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-primary-foreground/10 pt-6 text-center">
        <p className="font-body text-xs text-primary-foreground/40">
          © {new Date().getFullYear()} Normal Valley Landscaping. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;

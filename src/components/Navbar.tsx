import { useState } from "react";
import { Phone, Menu, X } from "lucide-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-foreground/80 backdrop-blur-md border-b border-primary-foreground/10">
      <div className="container mx-auto px-4 flex items-center justify-between h-16">
        <a href="#top" className="font-display text-xl font-bold text-primary-foreground">
          Normal Valley <span className="text-gold">Landscaping</span>
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#services" className="font-body text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">Services</a>
          <a href="#gallery" className="font-body text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">Gallery</a>
          <a href="tel:3095334808" className="inline-flex items-center gap-2 px-5 py-2 rounded-lg bg-secondary text-secondary-foreground font-body font-semibold text-sm hover:brightness-110 transition-all">
            <Phone className="w-4 h-4" /> Call Now
          </a>
        </div>

        {/* Mobile toggle */}
        <button onClick={() => setOpen(!open)} className="md:hidden text-primary-foreground">
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-foreground/95 backdrop-blur-md border-t border-primary-foreground/10 px-4 py-6 space-y-4">
          <a href="#services" onClick={() => setOpen(false)} className="block font-body text-primary-foreground/80 hover:text-primary-foreground">Services</a>
          <a href="#gallery" onClick={() => setOpen(false)} className="block font-body text-primary-foreground/80 hover:text-primary-foreground">Gallery</a>
          <a href="tel:3095334808" className="block font-body text-gold font-semibold">
            <Phone className="w-4 h-4 inline mr-2" />(309) 533-4808
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

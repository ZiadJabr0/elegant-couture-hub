import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-accent text-accent-foreground py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="md:col-span-2">
            <h3 className="font-serif text-2xl tracking-[0.3em] uppercase mb-4">Maison Élégance</h3>
            <p className="text-accent-foreground/70 max-w-md leading-relaxed">
              Where timeless craftsmanship meets contemporary vision. Each piece tells a story of dedication, artistry, and uncompromising quality.
            </p>
          </div>

          <div>
            <h4 className="text-sm tracking-[0.2em] uppercase mb-4 font-medium">Collections</h4>
            <nav className="flex flex-col gap-2">
              <Link to="/men" className="text-accent-foreground/70 hover:text-accent-foreground transition-colors">Men</Link>
              <Link to="/women" className="text-accent-foreground/70 hover:text-accent-foreground transition-colors">Women</Link>
              <Link to="/contact" className="text-accent-foreground/70 hover:text-accent-foreground transition-colors">Contact</Link>
            </nav>
          </div>

          <div>
            <h4 className="text-sm tracking-[0.2em] uppercase mb-4 font-medium">Follow Us</h4>
            <div className="flex gap-4">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-accent-foreground/70 hover:text-accent-foreground transition-colors" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-accent-foreground/70 hover:text-accent-foreground transition-colors" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-accent-foreground/70 hover:text-accent-foreground transition-colors" aria-label="Twitter">
                <Twitter size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-accent-foreground/20 mt-12 pt-8 text-center text-accent-foreground/50 text-sm">
          © {new Date().getFullYear()} Maison Élégance. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Instagram, Facebook, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-accent text-accent-foreground py-12 sm:py-16">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 sm:gap-12">
          <div className="sm:col-span-2">
            <h3 className="font-serif text-xl sm:text-2xl tracking-[0.3em] uppercase mb-4">Maison Élégance</h3>
            <p className="text-accent-foreground/70 max-w-md leading-relaxed text-sm sm:text-base">
              Where timeless craftsmanship meets contemporary vision. Each piece tells a story of dedication, artistry, and uncompromising quality.
            </p>
          </div>

          <div>
            <h4 className="text-sm tracking-[0.2em] uppercase mb-4 font-medium">Collections</h4>
            <nav className="flex flex-col gap-2">
              {[
                { to: '/men', label: 'Men' },
                { to: '/women', label: 'Women' },
                { to: '/contact', label: 'Contact' },
              ].map(link => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="text-accent-foreground/70 hover:text-accent-foreground transition-colors duration-300 hover:translate-x-1 inline-block transform text-sm sm:text-base"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <h4 className="text-sm tracking-[0.2em] uppercase mb-4 font-medium">Follow Us</h4>
            <div className="flex gap-4">
              {[
                { href: 'https://instagram.com', icon: Instagram, label: 'Instagram' },
                { href: 'https://facebook.com', icon: Facebook, label: 'Facebook' },
                { href: 'https://twitter.com', icon: Twitter, label: 'Twitter' },
              ].map(({ href, icon: Icon, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent-foreground/70 hover:text-accent-foreground transition-colors p-2 -m-2"
                  aria-label={label}
                  whileHover={{ scale: 1.15, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Icon size={20} />
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="border-t border-accent-foreground/20 mt-10 sm:mt-12 pt-6 sm:pt-8 text-center text-accent-foreground/50 text-xs sm:text-sm origin-left"
        >
          © {new Date().getFullYear()} Maison Élégance. All rights reserved.
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;

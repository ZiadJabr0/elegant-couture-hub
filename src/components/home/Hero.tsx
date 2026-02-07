import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import heroImage from '@/assets/hero-banner.jpg';

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Luxury fashion atelier showcasing haute couture garments"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-foreground/50" />
      </div>

      <div className="relative z-10 text-center px-6">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-sm tracking-[0.4em] uppercase mb-6 text-background/90"
        >
          The Art of Elegance
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="font-serif text-5xl md:text-7xl lg:text-8xl mb-8 leading-tight text-background"
        >
          Maison<br />Élégance
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-lg md:text-xl mb-10 max-w-lg mx-auto font-light text-background/90"
        >
          Bespoke fashion crafted with passion, precision, and timeless sophistication
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex gap-4 justify-center flex-wrap"
        >
          <Button variant="hero" size="lg" asChild>
            <Link to="/women">Women's Collection</Link>
          </Button>
          <Button variant="heroOutline" size="lg" asChild>
            <Link to="/men">Men's Collection</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
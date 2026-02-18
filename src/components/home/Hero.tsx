import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronDown } from 'lucide-react';
import heroImage from '@/assets/hero-banner.jpg';

const Hero = () => {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);
  const textY = useTransform(scrollYProgress, [0, 1], ['0%', '40%']);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <section ref={ref} className="relative h-[100svh] flex items-center justify-center overflow-hidden">
      <motion.div className="absolute inset-0" style={{ y: imageY }}>
        <img
          src={heroImage}
          alt="Luxury fashion atelier showcasing haute couture garments"
          className="w-full h-full object-cover scale-110"
        />
        <div className="absolute inset-0 bg-foreground/50" />
      </motion.div>

      <motion.div className="relative z-10 text-center px-4 sm:px-6" style={{ y: textY, opacity }}>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xs sm:text-sm tracking-[0.3em] sm:tracking-[0.4em] uppercase mb-4 sm:mb-6 text-background/90"
        >
          The Art of Elegance
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 30, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="font-serif text-4xl sm:text-5xl md:text-7xl lg:text-8xl mb-6 sm:mb-8 leading-tight text-background"
        >
          Maison<br />Élégance
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-base sm:text-lg md:text-xl mb-8 sm:mb-10 max-w-lg mx-auto font-light text-background/90"
        >
          Bespoke fashion crafted with passion, precision, and timeless sophistication
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex gap-3 sm:gap-4 justify-center flex-col sm:flex-row px-4 sm:px-0"
        >
          <Button variant="hero" size="lg" asChild className="hover:scale-105 active:scale-95 transition-transform">
            <Link to="/women">Women's Collection</Link>
          </Button>
          <Button variant="heroOutline" size="lg" asChild className="hover:scale-105 active:scale-95 transition-transform">
            <Link to="/men">Men's Collection</Link>
          </Button>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-6 sm:bottom-10 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ChevronDown size={24} className="text-background/70" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;

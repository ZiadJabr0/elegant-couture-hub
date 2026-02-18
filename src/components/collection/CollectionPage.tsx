import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import ProductGallery from '@/components/collection/ProductGallery';
import BookingForm from '@/components/collection/BookingForm';
import type { Product } from '@/data/products';

interface CollectionPageProps {
  title: string;
  subtitle: string;
  heroImage: string;
  products: Product[];
}

const CollectionPage = ({ title, subtitle, heroImage, products }: CollectionPageProps) => {
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], ['0%', '25%']);
  const textOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const textY = useTransform(scrollYProgress, [0, 0.5], ['0%', '30%']);

  return (
    <main className="pt-20">
      {/* Hero */}
      <section ref={heroRef} className="relative h-[50vh] sm:h-[60vh] flex items-center justify-center overflow-hidden">
        <motion.div className="absolute inset-0" style={{ y: imageY }}>
          <img
            src={heroImage}
            alt={`${title} Collection`}
            className="w-full h-full object-cover scale-110"
          />
          <div className="absolute inset-0 bg-foreground/40" />
        </motion.div>
        <motion.div className="relative z-10 text-center" style={{ opacity: textOpacity, y: textY }}>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-xs sm:text-sm tracking-[0.4em] uppercase mb-3 text-background/90"
          >
            {subtitle}
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="font-serif text-4xl sm:text-5xl md:text-7xl text-background"
          >
            {title}
          </motion.h1>
        </motion.div>
      </section>

      {/* Gallery */}
      <section className="py-12 sm:py-20 px-4 sm:px-6">
        <div className="container mx-auto">
          <ProductGallery products={products} />
        </div>
      </section>

      {/* Booking */}
      <section className="py-12 sm:py-20 px-4 sm:px-6 bg-secondary">
        <div className="container mx-auto">
          <BookingForm />
        </div>
      </section>
    </main>
  );
};

export default CollectionPage;

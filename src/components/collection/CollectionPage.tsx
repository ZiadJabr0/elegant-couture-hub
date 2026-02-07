import { motion } from 'framer-motion';
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
  return (
    <main className="pt-20">
      {/* Hero */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt={`${title} Collection`}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-foreground/40" />
        </div>
        <div className="relative z-10 text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-sm tracking-[0.4em] uppercase mb-3 text-background/90"
          >
            {subtitle}
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-serif text-5xl md:text-7xl text-background"
          >
            {title}
          </motion.h1>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <p className="section-heading">Browse</p>
            <h2 className="section-title">The Collection</h2>
          </div>
          <ProductGallery products={products} />
        </div>
      </section>

      {/* Booking */}
      <section className="py-20 px-6 bg-secondary">
        <div className="container mx-auto">
          <BookingForm />
        </div>
      </section>
    </main>
  );
};

export default CollectionPage;
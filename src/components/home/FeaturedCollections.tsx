import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import menCollection from '@/assets/men-collection.jpg';
import womenCollection from '@/assets/women-collection.jpg';

const FeaturedCollections = () => {
  return (
    <section className="py-24 px-6">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="section-heading">Discover</p>
          <h2 className="section-title">Our Collections</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Link to="/men" className="group relative block overflow-hidden aspect-[3/4]">
              <img
                src={menCollection}
                alt="Men's Collection"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-foreground/30 group-hover:bg-foreground/40 transition-colors duration-300" />
              <div className="collection-overlay text-background">
                <p className="text-sm tracking-[0.3em] uppercase mb-2">Explore</p>
                <h3 className="font-serif text-4xl md:text-5xl">Men</h3>
              </div>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Link to="/women" className="group relative block overflow-hidden aspect-[3/4]">
              <img
                src={womenCollection}
                alt="Women's Collection"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-foreground/30 group-hover:bg-foreground/40 transition-colors duration-300" />
              <div className="collection-overlay text-background">
                <p className="text-sm tracking-[0.3em] uppercase mb-2">Explore</p>
                <h3 className="font-serif text-4xl md:text-5xl">Women</h3>
              </div>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCollections;
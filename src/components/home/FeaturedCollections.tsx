import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import menCollection from '@/assets/men-collection.jpg';
import womenCollection from '@/assets/women-collection.jpg';

const collectionCard = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.2, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  }),
};

const FeaturedCollections = () => {
  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <p className="section-heading">Discover</p>
          <h2 className="section-title">Our Collections</h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="w-16 h-px bg-primary mx-auto mt-4 origin-center"
          />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8">
          {[
            { to: '/men', img: menCollection, alt: "Men's Collection", label: 'Men' },
            { to: '/women', img: womenCollection, alt: "Women's Collection", label: 'Women' },
          ].map((col, i) => (
            <motion.div
              key={col.to}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-50px' }}
              variants={collectionCard}
            >
              <Link to={col.to} className="group relative block overflow-hidden aspect-[3/4]">
                <motion.img
                  src={col.img}
                  alt={col.alt}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.07 }}
                  transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                />
                <div className="absolute inset-0 bg-foreground/30 group-hover:bg-foreground/45 transition-colors duration-500" />
                <div className="collection-overlay text-background">
                  <p className="text-xs sm:text-sm tracking-[0.3em] uppercase mb-2">Explore</p>
                  <h3 className="font-serif text-3xl sm:text-4xl md:text-5xl mb-4">{col.label}</h3>
                  <motion.div
                    className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0"
                  >
                    <span className="text-xs tracking-[0.2em] uppercase">View Collection</span>
                    <ArrowRight size={14} />
                  </motion.div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCollections;

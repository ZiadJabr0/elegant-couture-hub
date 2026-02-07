import { motion } from 'framer-motion';
import aboutImage from '@/assets/about-atelier.jpg';

const AboutSection = () => {
  return (
    <section className="py-24 bg-secondary">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="overflow-hidden">
              <img
                src={aboutImage}
                alt="Our luxury fashion atelier workspace"
                className="w-full aspect-square object-cover"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="section-heading">Our Story</p>
            <h2 className="section-title mb-6">The Atelier</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Founded on the principles of exceptional craftsmanship and timeless design, Maison Élégance represents the pinnacle of bespoke fashion. Every stitch, every fold, every detail is meticulously crafted by our master artisans.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              From the selection of the finest fabrics sourced from Italy and France to the final fitting, we ensure each garment is a masterpiece that reflects your unique style and personality.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
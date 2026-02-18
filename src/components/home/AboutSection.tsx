import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import aboutImage from '@/assets/about-atelier.jpg';

const stats = [
  { value: '25+', label: 'Years of Excellence' },
  { value: '150+', label: 'Master Artisans' },
  { value: '40+', label: 'Countries Served' },
];

const AboutSection = () => {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });
  const imageScale = useTransform(scrollYProgress, [0, 0.5], [1.1, 1]);

  return (
    <section ref={ref} className="py-16 sm:py-24 bg-secondary">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="overflow-hidden rounded-sm">
              <motion.img
                src={aboutImage}
                alt="Our luxury fashion atelier workspace"
                className="w-full aspect-[4/5] sm:aspect-square object-cover"
                style={{ scale: imageScale }}
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="section-heading">Our Story</p>
            <h2 className="section-title mb-6">The Atelier</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Founded on the principles of exceptional craftsmanship and timeless design, Maison Élégance represents the pinnacle of bespoke fashion. Every stitch, every fold, every detail is meticulously crafted by our master artisans.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8 sm:mb-10">
              From the selection of the finest fabrics sourced from Italy and France to the final fitting, we ensure each garment is a masterpiece that reflects your unique style and personality.
            </p>

            <div className="grid grid-cols-3 gap-4 sm:gap-6">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                  className="text-center sm:text-left"
                >
                  <p className="font-serif text-2xl sm:text-3xl text-primary mb-1">{stat.value}</p>
                  <p className="text-xs sm:text-sm text-muted-foreground tracking-wide">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

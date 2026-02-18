import { useState } from 'react';
import { motion } from 'framer-motion';
import ProductCard from './ProductCard';
import ProductDetailModal from './ProductDetailModal';
import type { Product } from '@/data/products';

interface ProductGalleryProps {
  products: Product[];
}

const categoryLabels: Record<string, { title: string; subtitle: string }> = {
  clothing: { title: 'Clothing', subtitle: 'Tailored & Ready-to-Wear' },
  boots: { title: 'Footwear', subtitle: 'Shoes & Boots' },
  accessories: { title: 'Accessories', subtitle: 'Bags, Scarves & More' },
};

const ProductGallery = ({ products }: ProductGalleryProps) => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const clothing = products.filter(p => p.category === 'clothing');
  const boots = products.filter(p => p.category === 'boots');
  const accessories = products.filter(p => p.category === 'accessories');

  const sections = [
    { key: 'clothing', products: clothing },
    { key: 'boots', products: boots },
    { key: 'accessories', products: accessories },
  ];

  return (
    <div className="space-y-16 sm:space-y-24">
      {sections.map(({ key, products: sectionProducts }) => {
        const { title, subtitle } = categoryLabels[key];
        return (
          <section key={key}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{ duration: 0.6 }}
              className="text-center mb-8 sm:mb-12"
            >
              <p className="text-xs sm:text-sm tracking-[0.3em] uppercase text-muted-foreground mb-2">
                {subtitle}
              </p>
              <h3 className="font-serif text-2xl sm:text-3xl md:text-4xl">{title}</h3>
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="w-12 sm:w-16 h-px bg-primary mx-auto mt-3 sm:mt-4 origin-center"
              />
            </motion.div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
              {sectionProducts.map((product, i) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  index={i}
                  onSelect={setSelectedProduct}
                />
              ))}
            </div>
          </section>
        );
      })}

      <ProductDetailModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />
    </div>
  );
};

export default ProductGallery;

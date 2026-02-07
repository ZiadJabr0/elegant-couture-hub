import { useState } from 'react';
import ProductCard from './ProductCard';
import type { Product } from '@/data/products';

interface ProductGalleryProps {
  products: Product[];
}

const categories = ['all', 'clothing', 'boots', 'accessories'] as const;

const ProductGallery = ({ products }: ProductGalleryProps) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const filtered = activeCategory === 'all'
    ? products
    : products.filter(p => p.category === activeCategory);

  return (
    <div>
      <div className="flex justify-center gap-6 mb-12 flex-wrap">
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`nav-link pb-2 border-b-2 ${
              activeCategory === cat
                ? 'border-primary text-foreground'
                : 'border-transparent text-muted-foreground hover:text-foreground'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filtered.map((product, i) => (
          <ProductCard key={product.id} product={product} index={i} />
        ))}
      </div>
    </div>
  );
};

export default ProductGallery;
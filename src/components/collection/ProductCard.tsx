import { motion } from 'framer-motion';
import { Eye } from 'lucide-react';
import type { Product } from '@/data/products';

interface ProductCardProps {
  product: Product;
  index: number;
  onSelect: (product: Product) => void;
}

const ProductCard = ({ product, index, onSelect }: ProductCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-30px' }}
      transition={{ duration: 0.5, delay: (index % 4) * 0.08, ease: [0.22, 1, 0.36, 1] }}
      className="group cursor-pointer"
      onClick={() => onSelect(product)}
    >
      <div className="relative overflow-hidden aspect-[3/4] mb-3 sm:mb-4 bg-secondary rounded-sm">
        <motion.img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover"
          loading="lazy"
          whileHover={{ scale: 1.06 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        />
        <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/10 transition-colors duration-300" />
        <motion.div
          className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4 bg-background/90 backdrop-blur-sm text-foreground p-2.5 sm:p-3 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-primary hover:text-primary-foreground"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          aria-label={`View ${product.name}`}
        >
          <Eye size={16} className="sm:w-[18px] sm:h-[18px]" />
        </motion.div>
      </div>
      <h3 className="text-xs sm:text-sm tracking-wide mb-0.5 sm:mb-1 group-hover:text-primary transition-colors duration-300">{product.name}</h3>
      <p className="text-muted-foreground text-xs sm:text-sm">${product.price.toLocaleString()}</p>
    </motion.div>
  );
};

export default ProductCard;

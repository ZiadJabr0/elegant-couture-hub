import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from 'sonner';
import type { Product } from '@/data/products';

const COLORS: Record<string, { name: string; value: string }[]> = {
  clothing: [
    { name: 'Black', value: 'hsl(0 0% 10%)' },
    { name: 'Navy', value: 'hsl(220 40% 20%)' },
    { name: 'Charcoal', value: 'hsl(0 0% 30%)' },
    { name: 'Ivory', value: 'hsl(40 30% 92%)' },
    { name: 'Camel', value: 'hsl(30 40% 55%)' },
    { name: 'Burgundy', value: 'hsl(345 50% 30%)' },
  ],
  boots: [
    { name: 'Black', value: 'hsl(0 0% 10%)' },
    { name: 'Cognac', value: 'hsl(25 60% 35%)' },
    { name: 'Dark Brown', value: 'hsl(20 40% 22%)' },
    { name: 'Tan', value: 'hsl(30 45% 50%)' },
    { name: 'Burgundy', value: 'hsl(345 50% 30%)' },
  ],
  accessories: [
    { name: 'Black', value: 'hsl(0 0% 10%)' },
    { name: 'Brown', value: 'hsl(20 40% 30%)' },
    { name: 'Navy', value: 'hsl(220 40% 20%)' },
    { name: 'Burgundy', value: 'hsl(345 50% 30%)' },
  ],
};

const SIZES: Record<string, string[]> = {
  clothing: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
  boots: ['38', '39', '40', '41', '42', '43', '44', '45'],
  accessories: ['One Size'],
};

interface ProductDetailModalProps {
  product: Product | null;
  onClose: () => void;
}

const ProductDetailModal = ({ product, onClose }: ProductDetailModalProps) => {
  const [selectedColor, setSelectedColor] = useState('');
  const [selectedSize, setSelectedSize] = useState('');
  const [showQuoteForm, setShowQuoteForm] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });

  if (!product) return null;

  const colors = COLORS[product.category] || [];
  const sizes = SIZES[product.category] || [];

  const handleRequestQuote = () => {
    if (!selectedColor && colors.length > 1) {
      toast.error('Please select a color');
      return;
    }
    if (!selectedSize) {
      toast.error('Please select a size');
      return;
    }
    setShowQuoteForm(true);
  };

  const handleSubmitQuote = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmedName = formData.name.trim();
    const trimmedEmail = formData.email.trim();
    if (!trimmedName || !trimmedEmail) {
      toast.error('Please fill in your name and email');
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmedEmail)) {
      toast.error('Please enter a valid email address');
      return;
    }
    toast.success('Quote request sent! Our team will contact you shortly.');
    setShowQuoteForm(false);
    setFormData({ name: '', email: '', phone: '', message: '' });
    setSelectedColor('');
    setSelectedSize('');
    onClose();
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-foreground/60 z-50 flex items-center justify-center p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 30, scale: 0.97 }}
          transition={{ duration: 0.3 }}
          className="bg-background rounded-sm max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex flex-col md:flex-row">
            {/* Image */}
            <div className="md:w-1/2 aspect-[3/4] bg-secondary flex-shrink-0">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Details */}
            <div className="md:w-1/2 p-6 md:p-8 flex flex-col">
              <div className="flex justify-between items-start mb-1">
                <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground">
                  {product.gender}'s {product.category}
                </p>
                <button
                  onClick={onClose}
                  className="text-muted-foreground hover:text-foreground transition-colors -mt-1"
                  aria-label="Close"
                >
                  <X size={20} />
                </button>
              </div>

              <h2 className="font-serif text-2xl md:text-3xl mb-2">{product.name}</h2>
              <p className="text-lg text-muted-foreground mb-6">
                ${product.price.toLocaleString()}
              </p>

              {!showQuoteForm ? (
                <>
                  {/* Color Picker */}
                  {colors.length > 1 && (
                    <div className="mb-6">
                      <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground mb-3">
                        Color {selectedColor && `— ${selectedColor}`}
                      </p>
                      <div className="flex gap-2 flex-wrap">
                        {colors.map((color) => (
                          <button
                            key={color.name}
                            onClick={() => setSelectedColor(color.name)}
                            className={`w-8 h-8 rounded-full border-2 transition-all ${
                              selectedColor === color.name
                                ? 'border-primary scale-110'
                                : 'border-border hover:border-muted-foreground'
                            }`}
                            style={{ backgroundColor: color.value }}
                            aria-label={color.name}
                            title={color.name}
                          />
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Size Picker */}
                  <div className="mb-8">
                    <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground mb-3">
                      Size
                    </p>
                    <div className="flex gap-2 flex-wrap">
                      {sizes.map((size) => (
                        <button
                          key={size}
                          onClick={() => setSelectedSize(size)}
                          className={`min-w-[2.5rem] h-10 px-3 text-sm border transition-all ${
                            selectedSize === size
                              ? 'border-primary bg-primary text-primary-foreground'
                              : 'border-border text-foreground hover:border-muted-foreground'
                          }`}
                        >
                          {size}
                        </button>
                      ))}
                    </div>
                  </div>

                  <Button onClick={handleRequestQuote} size="lg" className="w-full mt-auto gap-2">
                    <Send size={16} />
                    Request a Quote
                  </Button>
                </>
              ) : (
                <form onSubmit={handleSubmitQuote} className="flex flex-col gap-4 mt-2">
                  <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground mb-1">
                    {selectedColor && `${selectedColor} · `}{selectedSize}
                  </p>
                  <Input
                    placeholder="Your Name *"
                    value={formData.name}
                    onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                    maxLength={100}
                    required
                  />
                  <Input
                    type="email"
                    placeholder="Email Address *"
                    value={formData.email}
                    onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                    maxLength={255}
                    required
                  />
                  <Input
                    type="tel"
                    placeholder="Phone (optional)"
                    value={formData.phone}
                    onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                    maxLength={20}
                  />
                  <Textarea
                    placeholder="Additional notes (optional)"
                    value={formData.message}
                    onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                    maxLength={500}
                    rows={3}
                  />
                  <div className="flex gap-3 mt-2">
                    <Button
                      type="button"
                      variant="outline"
                      onClick={() => setShowQuoteForm(false)}
                      className="flex-1"
                    >
                      Back
                    </Button>
                    <Button type="submit" className="flex-1 gap-2">
                      <Send size={16} />
                      Send Request
                    </Button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ProductDetailModal;

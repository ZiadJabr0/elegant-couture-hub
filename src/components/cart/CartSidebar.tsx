import { motion, AnimatePresence } from 'framer-motion';
import { X, Plus, Minus, ShoppingBag } from 'lucide-react';
import { useCart } from '@/contexts/CartContext';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';

const CartSidebar = () => {
  const { items, isOpen, setIsOpen, removeFromCart, updateQuantity, totalPrice, clearCart } = useCart();

  const handleCheckout = () => {
    toast.success('Thank you for your order! Our team will contact you to finalize.');
    clearCart();
    setIsOpen(false);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-foreground/50 z-50"
            onClick={() => setIsOpen(false)}
          />
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className="fixed right-0 top-0 bottom-0 w-full max-w-md bg-background z-50 shadow-2xl flex flex-col"
          >
            <div className="flex items-center justify-between p-6 border-b border-border">
              <h2 className="font-serif text-xl">Shopping Bag</h2>
              <button
                onClick={() => setIsOpen(false)}
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="Close cart"
              >
                <X size={20} />
              </button>
            </div>

            {items.length === 0 ? (
              <div className="flex-1 flex flex-col items-center justify-center text-muted-foreground">
                <ShoppingBag size={48} className="mb-4 opacity-30" />
                <p className="text-sm">Your bag is empty</p>
              </div>
            ) : (
              <>
                <div className="flex-1 overflow-y-auto p-6 space-y-6">
                  {items.map(item => (
                    <div key={item.product.id} className="flex gap-4">
                      <div className="w-20 h-24 bg-secondary overflow-hidden flex-shrink-0">
                        <img
                          src={item.product.image}
                          alt={item.product.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-sm font-medium mb-1 truncate">{item.product.name}</h3>
                        <p className="text-sm text-muted-foreground mb-2">
                          ${item.product.price.toLocaleString()}
                        </p>
                        <div className="flex items-center gap-3">
                          <button
                            onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                            className="text-muted-foreground hover:text-foreground transition-colors"
                            aria-label="Decrease quantity"
                          >
                            <Minus size={14} />
                          </button>
                          <span className="text-sm w-6 text-center">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                            className="text-muted-foreground hover:text-foreground transition-colors"
                            aria-label="Increase quantity"
                          >
                            <Plus size={14} />
                          </button>
                        </div>
                      </div>
                      <button
                        onClick={() => removeFromCart(item.product.id)}
                        className="text-muted-foreground hover:text-foreground self-start transition-colors"
                        aria-label={`Remove ${item.product.name}`}
                      >
                        <X size={16} />
                      </button>
                    </div>
                  ))}
                </div>

                <div className="border-t border-border p-6">
                  <div className="flex justify-between mb-4">
                    <span className="text-sm tracking-wider uppercase">Total</span>
                    <span className="font-serif text-lg">${totalPrice.toLocaleString()}</span>
                  </div>
                  <Button onClick={handleCheckout} className="w-full" size="lg">
                    Proceed to Checkout
                  </Button>
                </div>
              </>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default CartSidebar;
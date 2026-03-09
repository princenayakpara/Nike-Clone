import { motion, AnimatePresence } from 'framer-motion';
import { HiOutlineX, HiPlus, HiMinus, HiOutlineTrash } from 'react-icons/hi';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

export default function CartSidebar({ isOpen, onClose }) {
  const { cart, cartTotal, removeFromCart, updateQuantity } = useCart();

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 z-[70]"
          />

          {/* Sidebar */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className="fixed top-0 right-0 h-full w-full sm:w-[420px] bg-white dark:bg-nike-dark z-[80] shadow-2xl flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-5 border-b border-gray-200 dark:border-gray-700">
              <h2 className="text-lg font-bold dark:text-white">
                Your Bag ({cart.length})
              </h2>
              <button
                onClick={onClose}
                className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors"
              >
                <HiOutlineX className="w-5 h-5 dark:text-white" />
              </button>
            </div>

            {/* Items */}
            <div className="flex-1 overflow-y-auto px-6 py-4">
              {cart.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full text-center">
                  <svg className="w-20 h-20 text-gray-300 dark:text-gray-600 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                  </svg>
                  <p className="text-gray-500 dark:text-gray-400 font-medium">Your bag is empty</p>
                  <p className="text-sm text-gray-400 dark:text-gray-500 mt-1">Add items to get started</p>
                </div>
              ) : (
                <div className="space-y-4">
                  <AnimatePresence>
                    {cart.map((item) => (
                      <motion.div
                        key={`${item.id}-${item.selectedSize}`}
                        layout
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20, height: 0 }}
                        className="flex gap-4 p-3 bg-gray-50 dark:bg-gray-800/50 rounded-xl"
                      >
                        <Link to={`/products/${item.id}`} onClick={onClose} className="w-20 h-20 bg-gray-100 dark:bg-gray-700 rounded-lg overflow-hidden flex-shrink-0">
                          <img src={item.images[0]} alt={item.name} className="w-full h-full object-contain p-1" />
                        </Link>
                        <div className="flex-1 min-w-0">
                          <h4 className="text-sm font-semibold dark:text-white line-clamp-1">{item.name}</h4>
                          <p className="text-xs text-gray-500 mt-0.5">Size: {item.selectedSize}</p>
                          <p className="text-sm font-bold mt-1 dark:text-white">${item.price}</p>
                          <div className="flex items-center gap-2 mt-2">
                            <button
                              onClick={() => updateQuantity(item.id, item.selectedSize, item.quantity - 1)}
                              className="p-1 rounded-full hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                            >
                              <HiMinus className="w-3 h-3 dark:text-white" />
                            </button>
                            <span className="text-sm font-medium w-6 text-center dark:text-white">{item.quantity}</span>
                            <button
                              onClick={() => updateQuantity(item.id, item.selectedSize, item.quantity + 1)}
                              className="p-1 rounded-full hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                            >
                              <HiPlus className="w-3 h-3 dark:text-white" />
                            </button>
                            <button
                              onClick={() => removeFromCart(item.id, item.selectedSize)}
                              className="ml-auto p-1 text-gray-400 hover:text-nike-red transition-colors"
                            >
                              <HiOutlineTrash className="w-4 h-4" />
                            </button>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </AnimatePresence>
                </div>
              )}
            </div>

            {/* Footer */}
            {cart.length > 0 && (
              <div className="px-6 py-5 border-t border-gray-200 dark:border-gray-700 space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600 dark:text-gray-400">Subtotal</span>
                  <span className="text-lg font-bold dark:text-white">${cartTotal.toFixed(2)}</span>
                </div>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  Shipping and taxes calculated at checkout
                </p>
                <div className="space-y-2">
                  <Link
                    to="/cart"
                    onClick={onClose}
                    className="btn-outline w-full text-center block"
                  >
                    View Bag
                  </Link>
                  <Link
                    to="/checkout"
                    onClick={onClose}
                    className="btn-primary w-full text-center block"
                  >
                    Checkout
                  </Link>
                </div>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { HiPlus, HiMinus, HiOutlineTrash } from 'react-icons/hi';
import { useCart } from '../context/CartContext';

export default function Cart() {
  const { cart, cartTotal, removeFromCart, updateQuantity, clearCart } = useCart();

  const shipping = cartTotal >= 150 ? 0 : 8;
  const tax = cartTotal * 0.08;
  const total = cartTotal + shipping + tax;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="max-w-7xl mx-auto px-4 lg:px-6 py-8"
    >
      <h1 className="text-3xl md:text-4xl font-black text-nike-black dark:text-white mb-8">
        Your Bag
      </h1>

      {cart.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-20 text-center">
          <svg className="w-24 h-24 text-gray-300 dark:text-gray-600 mb-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
          </svg>
          <h2 className="text-xl font-bold mb-2 dark:text-white">Your bag is empty</h2>
          <p className="text-gray-500 dark:text-gray-400 mb-6">Looks like you haven't added anything to your bag yet.</p>
          <Link to="/products" className="btn-primary">Continue Shopping</Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {/* Free shipping notice */}
            {cartTotal < 150 && (
              <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-xl p-4">
                <p className="text-sm text-blue-800 dark:text-blue-300">
                  You're <span className="font-bold">${(150 - cartTotal).toFixed(2)}</span> away from free shipping!
                </p>
                <div className="mt-2 w-full bg-blue-200 dark:bg-blue-800 rounded-full h-1.5">
                  <div
                    className="bg-blue-600 h-1.5 rounded-full transition-all duration-500"
                    style={{ width: `${Math.min((cartTotal / 150) * 100, 100)}%` }}
                  />
                </div>
              </div>
            )}

            {cart.map((item) => (
              <motion.div
                key={`${item.id}-${item.selectedSize}`}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="flex gap-4 md:gap-6 p-4 md:p-6 bg-gray-50 dark:bg-gray-800/50 rounded-2xl"
              >
                <Link
                  to={`/products/${item.id}`}
                  className="w-24 h-24 md:w-32 md:h-32 bg-white dark:bg-gray-700 rounded-xl overflow-hidden flex-shrink-0"
                >
                  <img src={item.images[0]} alt={item.name} className="w-full h-full object-contain p-2" />
                </Link>
                <div className="flex-1 min-w-0">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-bold text-nike-black dark:text-white line-clamp-1">{item.name}</h3>
                      <p className="text-sm text-gray-500 mt-0.5">{item.gender}'s {item.category}</p>
                      <p className="text-sm text-gray-500">Size: {item.selectedSize}</p>
                    </div>
                    <p className="font-bold text-nike-black dark:text-white ml-4">
                      ${(item.price * item.quantity).toFixed(2)}
                    </p>
                  </div>
                  <div className="flex items-center justify-between mt-4">
                    <div className="flex items-center gap-3 bg-white dark:bg-gray-700 rounded-full px-3 py-1">
                      <button
                        onClick={() => updateQuantity(item.id, item.selectedSize, item.quantity - 1)}
                        className="p-1 hover:bg-gray-100 dark:hover:bg-gray-600 rounded-full transition-colors"
                      >
                        <HiMinus className="w-4 h-4 dark:text-white" />
                      </button>
                      <span className="font-semibold w-6 text-center dark:text-white">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.id, item.selectedSize, item.quantity + 1)}
                        className="p-1 hover:bg-gray-100 dark:hover:bg-gray-600 rounded-full transition-colors"
                      >
                        <HiPlus className="w-4 h-4 dark:text-white" />
                      </button>
                    </div>
                    <button
                      onClick={() => removeFromCart(item.id, item.selectedSize)}
                      className="p-2 text-gray-400 hover:text-nike-red transition-colors"
                    >
                      <HiOutlineTrash className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}

            <button
              onClick={clearCart}
              className="text-sm text-gray-500 hover:text-nike-red transition-colors underline"
            >
              Clear All Items
            </button>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-gray-50 dark:bg-gray-800/50 rounded-2xl p-6 sticky top-24">
              <h2 className="text-lg font-bold mb-6 dark:text-white">Order Summary</h2>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between text-gray-600 dark:text-gray-400">
                  <span>Subtotal</span>
                  <span>${cartTotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-gray-600 dark:text-gray-400">
                  <span>Estimated Shipping</span>
                  <span className={shipping === 0 ? 'text-green-600 font-semibold' : ''}>
                    {shipping === 0 ? 'Free' : `$${shipping.toFixed(2)}`}
                  </span>
                </div>
                <div className="flex justify-between text-gray-600 dark:text-gray-400">
                  <span>Estimated Tax</span>
                  <span>${tax.toFixed(2)}</span>
                </div>
                <div className="border-t border-gray-200 dark:border-gray-700 pt-3 mt-3">
                  <div className="flex justify-between font-bold text-lg text-nike-black dark:text-white">
                    <span>Total</span>
                    <span>${total.toFixed(2)}</span>
                  </div>
                </div>
              </div>

              <Link
                to="/checkout"
                className="btn-primary w-full text-center block mt-6"
              >
                Checkout
              </Link>

              <Link
                to="/products"
                className="block text-center text-sm text-gray-500 hover:text-nike-black dark:hover:text-white mt-4 transition-colors"
              >
                Continue Shopping
              </Link>

              {/* Trust badges */}
              <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
                <div className="grid grid-cols-2 gap-3 text-center">
                  {[
                    { icon: '🔒', text: 'Secure Checkout' },
                    { icon: '🚚', text: 'Free Returns' },
                    { icon: '⭐', text: 'Authentic Products' },
                    { icon: '💬', text: '24/7 Support' },
                  ].map((badge) => (
                    <div key={badge.text} className="text-xs text-gray-500 dark:text-gray-400">
                      <span className="text-lg block mb-1">{badge.icon}</span>
                      {badge.text}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </motion.div>
  );
}

import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { HiOutlineHeart, HiHeart, HiOutlineShoppingBag } from 'react-icons/hi';
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishlistContext';

export default function ProductCard({ product, index = 0 }) {
  const { addToCart } = useCart();
  const { isInWishlist, toggleWishlist } = useWishlist();
  const liked = isInWishlist(product.id);

  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product, product.sizes[0]);
  };

  const handleToggleWishlist = (e) => {
    e.preventDefault();
    e.stopPropagation();
    toggleWishlist(product);
  };

  const getBadgeColor = (badge) => {
    switch (badge) {
      case 'Best Seller': return 'bg-nike-black text-white dark:bg-white dark:text-nike-black';
      case 'New': return 'bg-green-500 text-white';
      case 'Sale': return 'bg-nike-red text-white';
      case 'Iconic': return 'bg-purple-600 text-white';
      case 'Legendary': return 'bg-gradient-to-r from-yellow-500 to-orange-500 text-white';
      case 'Popular': return 'bg-blue-600 text-white';
      case 'Classic': return 'bg-amber-700 text-white';
      case 'Pro': return 'bg-emerald-600 text-white';
      default: return 'bg-gray-800 text-white';
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
    >
      <Link to={`/products/${product.id}`} className="product-card block">
        {/* Badge */}
        {product.badge && (
          <span className={`badge ${getBadgeColor(product.badge)}`}>
            {product.badge}
          </span>
        )}

        {/* Wishlist button */}
        <button
          onClick={handleToggleWishlist}
          className="absolute top-3 right-3 z-10 p-2 rounded-full bg-white/90 dark:bg-gray-800/90 shadow-md hover:scale-110 transition-transform"
          aria-label="Toggle wishlist"
        >
          {liked ? (
            <HiHeart className="w-5 h-5 text-nike-red" />
          ) : (
            <HiOutlineHeart className="w-5 h-5 text-gray-600 dark:text-gray-300" />
          )}
        </button>

        {/* Image */}
        <div className="relative aspect-square bg-gray-50 dark:bg-gray-800 overflow-hidden">
          <img
            src={product.images[0]}
            alt={product.name}
            className="w-full h-full object-contain p-4 group-hover:scale-110 transition-transform duration-500"
            loading="lazy"
          />

          {/* Quick add overlay */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileHover={{ opacity: 1, y: 0 }}
            className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300"
          >
            <button
              onClick={handleAddToCart}
              className="w-full flex items-center justify-center gap-2 bg-white text-nike-black py-2.5 rounded-full text-sm font-semibold hover:bg-gray-100 transition-colors"
            >
              <HiOutlineShoppingBag className="w-4 h-4" />
              Add to Cart
            </button>
          </motion.div>
        </div>

        {/* Info */}
        <div className="p-4">
          <p className="text-xs text-nike-orange font-semibold uppercase mb-1">
            {product.gender}'s {product.category}
          </p>
          <h3 className="font-semibold text-sm text-nike-black dark:text-white line-clamp-1 mb-1">
            {product.name}
          </h3>
          <div className="flex items-center gap-1 mb-2">
            {[...Array(5)].map((_, i) => (
              <svg
                key={i}
                className={`w-3 h-3 ${
                  i < Math.floor(product.rating) ? 'text-yellow-400' : 'text-gray-300 dark:text-gray-600'
                }`}
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
            <span className="text-xs text-gray-500 ml-1">({product.reviews})</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="font-bold text-nike-black dark:text-white">${product.price}</span>
            {product.originalPrice && (
              <span className="text-sm text-gray-400 line-through">${product.originalPrice}</span>
            )}
            {product.originalPrice && (
              <span className="text-xs font-semibold text-green-600">
                {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% off
              </span>
            )}
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

import { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { HiOutlineHeart, HiHeart, HiArrowLeft, HiStar } from 'react-icons/hi';
import ImageZoom from '../components/ImageZoom';
import ProductCard from '../components/ProductCard';
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishlistContext';
import products from '../data/products';

export default function ProductDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = products.find((p) => p.id === parseInt(id));
  const { addToCart } = useCart();
  const { isInWishlist, toggleWishlist } = useWishlist();

  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedSize, setSelectedSize] = useState(null);
  const [selectedColor, setSelectedColor] = useState(0);
  const [showSizeError, setShowSizeError] = useState(false);
  const [addedToCart, setAddedToCart] = useState(false);

  if (!product) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4">
        <h1 className="text-2xl font-bold mb-4 dark:text-white">Product Not Found</h1>
        <Link to="/products" className="btn-primary">Back to Products</Link>
      </div>
    );
  }

  const liked = isInWishlist(product.id);
  const relatedProducts = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  const handleAddToCart = () => {
    if (!selectedSize) {
      setShowSizeError(true);
      return;
    }
    setShowSizeError(false);
    addToCart(product, selectedSize);
    setAddedToCart(true);
    setTimeout(() => setAddedToCart(false), 2000);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="max-w-7xl mx-auto px-4 lg:px-6 py-8">
        {/* Breadcrumb */}
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-sm text-gray-500 hover:text-nike-black dark:hover:text-white mb-6 transition-colors"
        >
          <HiArrowLeft className="w-4 h-4" />
          Back
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Image Gallery */}
          <div className="space-y-4">
            {/* Main Image with Zoom */}
            <ImageZoom
              src={product.images[selectedImage]}
              alt={product.name}
            />

            {/* Thumbnail row */}
            <div className="flex gap-2 overflow-x-auto pb-2">
              {product.images.map((img, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden border-2 transition-all ${
                    selectedImage === index
                      ? 'border-nike-black dark:border-white'
                      : 'border-transparent hover:border-gray-300'
                  }`}
                >
                  <img src={img} alt="" className="w-full h-full object-contain bg-gray-50 dark:bg-gray-800 p-1" />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              {product.badge && (
                <span className="inline-block px-3 py-1 text-xs font-bold uppercase bg-nike-orange text-white rounded-full mb-3">
                  {product.badge}
                </span>
              )}
              <p className="text-sm text-nike-orange font-semibold uppercase mb-2">
                {product.gender}'s {product.category}
              </p>
              <h1 className="text-3xl md:text-4xl font-black text-nike-black dark:text-white mb-4">
                {product.name}
              </h1>

              {/* Rating */}
              <div className="flex items-center gap-2 mb-4">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <HiStar
                      key={i}
                      className={`w-4 h-4 ${
                        i < Math.floor(product.rating) ? 'text-yellow-400' : 'text-gray-300 dark:text-gray-600'
                      }`}
                    />
                  ))}
                </div>
                <span className="text-sm text-gray-500">
                  {product.rating} ({product.reviews} reviews)
                </span>
              </div>

              {/* Price */}
              <div className="flex items-center gap-3 mb-6">
                <span className="text-2xl font-black text-nike-black dark:text-white">
                  ${product.price}
                </span>
                {product.originalPrice && (
                  <>
                    <span className="text-lg text-gray-400 line-through">${product.originalPrice}</span>
                    <span className="text-sm font-bold text-green-600 bg-green-50 dark:bg-green-900/30 px-2 py-0.5 rounded-full">
                      {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% off
                    </span>
                  </>
                )}
              </div>

              {/* Color selection */}
              <div className="mb-6">
                <p className="text-sm font-semibold mb-3 dark:text-white">
                  Color: <span className="font-normal text-gray-500">{product.colors[selectedColor]}</span>
                </p>
                <div className="flex gap-2">
                  {product.colors.map((color, index) => (
                    <button
                      key={color}
                      onClick={() => setSelectedColor(index)}
                      className={`px-4 py-2 rounded-lg border text-sm font-medium transition-all ${
                        selectedColor === index
                          ? 'border-nike-black dark:border-white bg-nike-black text-white dark:bg-white dark:text-nike-black'
                          : 'border-gray-300 dark:border-gray-600 hover:border-nike-black dark:hover:border-white dark:text-gray-300'
                      }`}
                    >
                      {color}
                    </button>
                  ))}
                </div>
              </div>

              {/* Size selection */}
              <div className="mb-6">
                <div className="flex items-center justify-between mb-3">
                  <p className="text-sm font-semibold dark:text-white">Select Size</p>
                  <button className="text-xs text-gray-500 hover:text-nike-black dark:hover:text-white underline transition-colors">
                    Size Guide
                  </button>
                </div>
                <div className="grid grid-cols-4 sm:grid-cols-5 gap-2">
                  {product.sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => {
                        setSelectedSize(size);
                        setShowSizeError(false);
                      }}
                      className={`py-3 rounded-lg border text-sm font-medium transition-all ${
                        selectedSize === size
                          ? 'border-nike-black dark:border-white bg-nike-black text-white dark:bg-white dark:text-nike-black'
                          : 'border-gray-300 dark:border-gray-600 hover:border-nike-black dark:hover:border-white dark:text-gray-300'
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
                {showSizeError && (
                  <motion.p
                    initial={{ opacity: 0, y: -5 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-sm text-nike-red mt-2"
                  >
                    Please select a size
                  </motion.p>
                )}
              </div>

              {/* Action Buttons */}
              <div className="space-y-3 mb-8">
                <motion.button
                  whileTap={{ scale: 0.98 }}
                  onClick={handleAddToCart}
                  className={`w-full py-4 rounded-full font-semibold text-sm uppercase tracking-wider transition-all duration-300 ${
                    addedToCart
                      ? 'bg-green-500 text-white'
                      : 'bg-nike-black text-white hover:bg-gray-800 dark:bg-white dark:text-nike-black dark:hover:bg-gray-200'
                  }`}
                >
                  {addedToCart ? '✓ Added to Bag' : 'Add to Bag'}
                </motion.button>
                <motion.button
                  whileTap={{ scale: 0.98 }}
                  onClick={() => toggleWishlist(product)}
                  className="w-full py-4 rounded-full border-2 border-gray-300 dark:border-gray-600 font-semibold text-sm uppercase tracking-wider hover:border-nike-black dark:hover:border-white transition-colors flex items-center justify-center gap-2 dark:text-white"
                >
                  {liked ? (
                    <HiHeart className="w-5 h-5 text-nike-red" />
                  ) : (
                    <HiOutlineHeart className="w-5 h-5" />
                  )}
                  {liked ? 'Saved to Wishlist' : 'Add to Wishlist'}
                </motion.button>
              </div>

              {/* Description */}
              <div className="border-t border-gray-200 dark:border-gray-700 pt-6">
                <h3 className="font-bold text-lg mb-3 dark:text-white">Product Details</h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-sm">
                  {product.description}
                </p>
                <ul className="mt-4 space-y-2 text-sm text-gray-600 dark:text-gray-400">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-nike-orange rounded-full" />
                    Free shipping on orders over $150
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-nike-orange rounded-full" />
                    30-day return policy
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-nike-orange rounded-full" />
                    Nike Member exclusive
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <section className="mt-16 pt-16 border-t border-gray-200 dark:border-gray-700">
            <h2 className="section-title mb-8">You Might Also Like</h2>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
              {relatedProducts.map((product, index) => (
                <ProductCard key={product.id} product={product} index={index} />
              ))}
            </div>
          </section>
        )}
      </div>
    </motion.div>
  );
}

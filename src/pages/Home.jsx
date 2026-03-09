import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import ProductCard from '../components/ProductCard';
import products from '../data/products';

const categories = [
  {
    name: 'Running',
    image: 'https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?w=800&q=80',
    query: 'Shoes',
  },
  {
    name: 'Sportswear',
    image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&q=80',
    query: 'Sportswear',
  },
  {
    name: 'Training',
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&q=80',
    query: 'Shoes',
  },
];

export default function Home() {
  const featuredProducts = products.filter((p) => p.badge).slice(0, 8);
  const newArrivals = products.filter((p) => p.badge === 'New' || p.badge === 'Legendary' || p.badge === 'Pro');
  const trendingProducts = products.slice(0, 4);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      {/* Hero Section */}
      <Hero />

      {/* Announcement Banner */}
      <div className="bg-nike-black dark:bg-white py-3">
        <p className="text-center text-white dark:text-nike-black text-sm font-medium tracking-wide">
          Members: Free Shipping on Orders $50+ &nbsp;
          <Link to="/products" className="underline font-bold hover:opacity-80 transition-opacity">
            Shop Now
          </Link>
        </p>
      </div>

      {/* Featured Categories */}
      <section className="max-w-7xl mx-auto px-4 lg:px-6 py-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-title mb-8"
        >
          Shop By Category
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {categories.map((cat, index) => (
            <motion.div
              key={cat.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
            >
              <Link
                to={`/products?category=${cat.query}`}
                className="relative block aspect-[4/5] rounded-2xl overflow-hidden group"
              >
                <img
                  src={cat.image}
                  alt={cat.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <h3 className="text-white text-2xl font-bold mb-3">{cat.name}</h3>
                  <span className="inline-block bg-white text-nike-black px-6 py-2 rounded-full text-sm font-semibold group-hover:bg-gray-200 transition-colors">
                    Shop
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Trending Now */}
      <section className="bg-gray-50 dark:bg-gray-900/50 py-16 transition-colors">
        <div className="max-w-7xl mx-auto px-4 lg:px-6">
          <div className="flex items-center justify-between mb-8">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="section-title"
            >
              Trending Now
            </motion.h2>
            <Link
              to="/products"
              className="text-sm font-semibold text-nike-black dark:text-white hover:underline"
            >
              View All →
            </Link>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
            {trendingProducts.map((product, index) => (
              <ProductCard key={product.id} product={product} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="max-w-7xl mx-auto px-4 lg:px-6 py-16">
        <div className="flex items-center justify-between mb-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-title"
          >
            Featured Products
          </motion.h2>
          <Link
            to="/products"
            className="text-sm font-semibold text-nike-black dark:text-white hover:underline"
          >
            View All →
          </Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-6">
          {featuredProducts.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>
      </section>

      {/* Nike Membership Banner */}
      <section className="max-w-7xl mx-auto px-4 lg:px-6 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-nike-black via-gray-900 to-nike-black p-8 md:p-16"
        >
          <div className="relative z-10 max-w-lg">
            <p className="text-nike-orange text-sm font-semibold uppercase tracking-widest mb-4">
              Nike Membership
            </p>
            <h2 className="text-3xl md:text-5xl font-black text-white mb-4 leading-tight">
              Become a Member.<br />Get Rewarded.
            </h2>
            <p className="text-gray-400 mb-8">
              Sign up for free. Join the community. Get exclusive access, member rewards, and early drops. 
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <button className="bg-white text-nike-black px-8 py-3 rounded-full font-semibold text-sm hover:bg-gray-200 transition-colors">
                Join Us
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-full font-semibold text-sm hover:bg-white/10 transition-colors">
                Sign In
              </button>
            </div>
          </div>
          {/* Background swoosh */}
          <div className="absolute top-0 right-0 w-1/2 h-full opacity-5">
            <svg viewBox="0 0 69 32" className="w-full h-full fill-white">
              <path d="M68.56 4L18.4 25.36Q12.16 28 7.92 28q-4.8 0-6.48-3.36-1.2-2.4.24-5.76t4.56-6.24q1.44-1.2.72-.48-6 7.68-1.68 10.56 2.64 1.68 8.16-.48L68.56 4z" />
            </svg>
          </div>
        </motion.div>
      </section>

      {/* New Arrivals */}
      {newArrivals.length > 0 && (
        <section className="bg-gray-50 dark:bg-gray-900/50 py-16 transition-colors">
          <div className="max-w-7xl mx-auto px-4 lg:px-6">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="section-title mb-8"
            >
              Don't Miss
            </motion.h2>
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
              {newArrivals.map((product, index) => (
                <ProductCard key={product.id} product={product} index={index} />
              ))}
            </div>
          </div>
        </section>
      )}
    </motion.div>
  );
}

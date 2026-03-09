import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section className="relative w-full overflow-hidden bg-gray-100 dark:bg-gray-900">
      {/* Hero content */}
      <div className="max-w-7xl mx-auto px-4 lg:px-6">
        <div className="flex flex-col lg:flex-row items-center min-h-[70vh] lg:min-h-[85vh] py-12 lg:py-0">
          {/* Text content */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="flex-1 text-center lg:text-left z-10 order-2 lg:order-1 mt-8 lg:mt-0"
          >
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-nike-orange font-semibold text-sm uppercase tracking-[0.2em] mb-4"
            >
              New Collection 2026
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.7 }}
              className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-black uppercase leading-[0.9] tracking-tighter mb-6"
            >
              <span className="block text-gradient">Just</span>
              <span className="block text-gradient">Do It.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="text-gray-600 dark:text-gray-400 text-base lg:text-lg max-w-md mx-auto lg:mx-0 mb-8"
            >
              Discover the latest innovations in Nike shoes, clothing, and gear. 
              Built for athletes, designed for everyone.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Link to="/products" className="btn-primary text-center">
                Shop Now
              </Link>
              <Link to="/products?category=Shoes" className="btn-outline text-center">
                Explore Shoes
              </Link>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1 }}
              className="flex gap-8 mt-12 justify-center lg:justify-start"
            >
              {[
                { value: '1K+', label: 'Products' },
                { value: '500+', label: 'Brands' },
                { value: '50K+', label: 'Customers' },
              ].map((stat) => (
                <div key={stat.label} className="text-center lg:text-left">
                  <p className="text-2xl lg:text-3xl font-black text-nike-black dark:text-white">{stat.value}</p>
                  <p className="text-xs text-gray-500 uppercase tracking-wider">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Hero image */}
          <motion.div
            initial={{ opacity: 0, x: 60, rotate: -15 }}
            animate={{ opacity: 1, x: 0, rotate: -5 }}
            transition={{ duration: 1, ease: 'easeOut' }}
            className="flex-1 relative order-1 lg:order-2 flex items-center justify-center"
          >
            <div className="relative">
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-nike-orange/20 to-nike-red/20 blur-3xl rounded-full scale-75" />
              <motion.img
                animate={{ y: [0, -15, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
                src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&q=80"
                alt="Nike Air Max 270"
                className="w-[300px] sm:w-[400px] lg:w-[500px] xl:w-[600px] object-contain drop-shadow-2xl relative z-10"
              />
            </div>

            {/* Floating badges */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut', delay: 0.5 }}
              className="absolute top-10 right-4 lg:top-20 lg:right-10 bg-white dark:bg-gray-800 rounded-2xl shadow-xl px-4 py-3 z-20"
            >
              <p className="text-xs font-bold text-nike-black dark:text-white">Air Max 270</p>
              <p className="text-lg font-black text-nike-orange">$150</p>
            </motion.div>

            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 3.5, ease: 'easeInOut', delay: 1 }}
              className="absolute bottom-10 left-4 lg:bottom-20 lg:left-0 bg-white dark:bg-gray-800 rounded-2xl shadow-xl px-4 py-3 z-20"
            >
              <p className="text-xs text-gray-500">⭐ 4.5 Rating</p>
              <p className="text-xs font-bold text-nike-black dark:text-white">Best Seller</p>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] opacity-5 dark:opacity-[0.03] pointer-events-none">
        <svg viewBox="0 0 69 32" className="w-full h-full fill-current">
          <path d="M68.56 4L18.4 25.36Q12.16 28 7.92 28q-4.8 0-6.48-3.36-1.2-2.4.24-5.76t4.56-6.24q1.44-1.2.72-.48-6 7.68-1.68 10.56 2.64 1.68 8.16-.48L68.56 4z" />
        </svg>
      </div>
    </section>
  );
}

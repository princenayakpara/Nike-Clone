import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { HiOutlineShoppingBag, HiOutlineHeart, HiOutlineSearch, HiOutlineMenu, HiOutlineX, HiMoon, HiSun } from 'react-icons/hi';
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishlistContext';
import { useTheme } from '../context/ThemeContext';
import { useSearch } from '../context/SearchContext';

const navLinks = [
  { name: 'New & Featured', path: '/products' },
  { name: 'Men', path: '/products?gender=Men' },
  { name: 'Women', path: '/products?gender=Women' },
  { name: 'Shoes', path: '/products?category=Shoes' },
  { name: 'Sportswear', path: '/products?category=Sportswear' },
];

export default function Navbar({ onCartClick }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const { cartCount } = useCart();
  const { wishlist } = useWishlist();
  const { isDark, toggleTheme } = useTheme();
  const { searchQuery, setSearchQuery } = useSearch();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/products?search=${encodeURIComponent(searchQuery.trim())}`);
      setIsSearchOpen(false);
    }
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'glass shadow-lg'
            : 'bg-white dark:bg-nike-dark'
        }`}
      >
        {/* Top bar */}
        <div className="hidden lg:block bg-gray-100 dark:bg-gray-800 transition-colors">
          <div className="max-w-7xl mx-auto px-6 py-1.5 flex justify-between items-center text-xs text-gray-600 dark:text-gray-400">
            <span className="font-medium">Free shipping on orders over $150</span>
            <div className="flex gap-4">
              <span className="hover:text-nike-black dark:hover:text-white cursor-pointer transition-colors">Find a Store</span>
              <span>|</span>
              <span className="hover:text-nike-black dark:hover:text-white cursor-pointer transition-colors">Help</span>
              <span>|</span>
              <span className="hover:text-nike-black dark:hover:text-white cursor-pointer transition-colors">Join Us</span>
              <span>|</span>
              <span className="hover:text-nike-black dark:hover:text-white cursor-pointer transition-colors">Sign In</span>
            </div>
          </div>
        </div>

        {/* Main navbar */}
        <div className="max-w-7xl mx-auto px-4 lg:px-6">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link to="/" className="flex-shrink-0">
              <svg className="h-6 w-16 fill-current text-nike-black dark:text-white" viewBox="0 0 69 32">
                <path d="M68.56 4L18.4 25.36Q12.16 28 7.92 28q-4.8 0-6.48-3.36-1.2-2.4.24-5.76t4.56-6.24q1.44-1.2.72-.48-6 7.68-1.68 10.56 2.64 1.68 8.16-.48L68.56 4z" />
              </svg>
            </Link>

            {/* Desktop nav links */}
            <div className="hidden lg:flex items-center gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className="text-sm font-medium text-nike-black dark:text-white hover:text-nike-gray dark:hover:text-gray-300 transition-colors relative group"
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-nike-black dark:bg-white group-hover:w-full transition-all duration-300" />
                </Link>
              ))}
            </div>

            {/* Right icons */}
            <div className="flex items-center gap-2">
              {/* Search */}
              <button
                id="search-toggle"
                onClick={() => setIsSearchOpen(!isSearchOpen)}
                className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              >
                <HiOutlineSearch className="w-5 h-5 dark:text-white" />
              </button>

              {/* Dark mode toggle */}
              <button
                id="theme-toggle"
                onClick={toggleTheme}
                className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              >
                {isDark ? (
                  <HiSun className="w-5 h-5 text-yellow-400" />
                ) : (
                  <HiMoon className="w-5 h-5" />
                )}
              </button>

              {/* Wishlist */}
              <Link
                to="/products"
                id="wishlist-icon"
                className="relative p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              >
                <HiOutlineHeart className="w-5 h-5 dark:text-white" />
                {wishlist.length > 0 && (
                  <span className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-nike-red text-white text-[10px] font-bold rounded-full flex items-center justify-center">
                    {wishlist.length}
                  </span>
                )}
              </Link>

              {/* Cart */}
              <button
                id="cart-icon"
                onClick={onCartClick}
                className="relative p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              >
                <HiOutlineShoppingBag className="w-5 h-5 dark:text-white" />
                {cartCount > 0 && (
                  <motion.span
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-nike-red text-white text-[10px] font-bold rounded-full flex items-center justify-center"
                  >
                    {cartCount}
                  </motion.span>
                )}
              </button>

              {/* Mobile menu toggle */}
              <button
                id="mobile-menu-toggle"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              >
                {isMobileMenuOpen ? (
                  <HiOutlineX className="w-5 h-5 dark:text-white" />
                ) : (
                  <HiOutlineMenu className="w-5 h-5 dark:text-white" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Search bar dropdown */}
        <AnimatePresence>
          {isSearchOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="overflow-hidden border-t border-gray-200 dark:border-gray-700"
            >
              <div className="max-w-7xl mx-auto px-4 lg:px-6 py-4">
                <form onSubmit={handleSearch} className="relative">
                  <HiOutlineSearch className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    id="search-input"
                    type="text"
                    placeholder="Search for shoes, clothing, and more..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    autoFocus
                    className="w-full pl-12 pr-4 py-3 bg-gray-100 dark:bg-gray-800 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-nike-black dark:focus:ring-white dark:text-white placeholder-gray-500"
                  />
                </form>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className="fixed inset-0 z-[60] bg-white dark:bg-nike-dark lg:hidden"
          >
            <div className="flex flex-col h-full">
              <div className="flex justify-end p-4">
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full"
                >
                  <HiOutlineX className="w-6 h-6 dark:text-white" />
                </button>
              </div>
              <div className="flex flex-col px-8 gap-4">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.name}
                    initial={{ x: 50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      to={link.path}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="text-2xl font-bold text-nike-black dark:text-white hover:text-nike-gray transition-colors"
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                ))}
              </div>
              <div className="mt-auto px-8 pb-8 flex flex-col gap-3">
                <button className="btn-primary w-full text-center">Join Us</button>
                <button className="btn-outline w-full text-center">Sign In</button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Spacer for fixed navbar */}
      <div className="h-16 lg:h-[88px]" />
    </>
  );
}

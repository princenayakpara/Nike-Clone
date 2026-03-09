import { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import ProductCard from '../components/ProductCard';
import ProductFilter from '../components/ProductFilter';
import products from '../data/products';
import { useSearch } from '../context/SearchContext';

export default function Products() {
  const [searchParams] = useSearchParams();
  const { searchQuery } = useSearch();

  const initialCategory = searchParams.get('category') || 'All';
  const initialGender = searchParams.get('gender') || 'All';
  const urlSearch = searchParams.get('search') || '';

  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [selectedGender, setSelectedGender] = useState(initialGender);
  const [sortBy, setSortBy] = useState('featured');

  const activeSearch = urlSearch || searchQuery;

  const filteredProducts = useMemo(() => {
    let result = [...products];

    // Search filter
    if (activeSearch) {
      const query = activeSearch.toLowerCase();
      result = result.filter(
        (p) =>
          p.name.toLowerCase().includes(query) ||
          p.category.toLowerCase().includes(query) ||
          p.description.toLowerCase().includes(query)
      );
    }

    // Category filter
    if (selectedCategory !== 'All') {
      result = result.filter((p) => p.category === selectedCategory);
    }

    // Gender filter
    if (selectedGender !== 'All') {
      result = result.filter((p) => p.gender === selectedGender);
    }

    // Sorting
    switch (sortBy) {
      case 'price-low':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        result.sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        result.sort((a, b) => b.rating - a.rating);
        break;
      case 'newest':
        result.sort((a, b) => b.id - a.id);
        break;
      default:
        break;
    }

    return result;
  }, [selectedCategory, selectedGender, sortBy, activeSearch]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="max-w-7xl mx-auto px-4 lg:px-6 py-8"
    >
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl md:text-4xl font-black text-nike-black dark:text-white mb-2">
          {activeSearch ? `Results for "${activeSearch}"` : 'All Products'}
        </h1>
        <p className="text-gray-500 dark:text-gray-400">
          {activeSearch
            ? `${filteredProducts.length} products found`
            : 'Shop the latest Nike shoes, clothing, and gear.'}
        </p>
      </div>

      {/* Filters */}
      <div className="mb-8">
        <ProductFilter
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          selectedGender={selectedGender}
          setSelectedGender={setSelectedGender}
          sortBy={sortBy}
          setSortBy={setSortBy}
          productCount={filteredProducts.length}
        />
      </div>

      {/* Product Grid */}
      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-6">
          {filteredProducts.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center py-20 text-center">
          <svg className="w-20 h-20 text-gray-300 dark:text-gray-600 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <p className="text-lg font-semibold text-gray-600 dark:text-gray-400">No products found</p>
          <p className="text-sm text-gray-400 dark:text-gray-500 mt-1">
            Try adjusting your filters or search query
          </p>
          <button
            onClick={() => {
              setSelectedCategory('All');
              setSelectedGender('All');
            }}
            className="mt-4 btn-primary"
          >
            Clear Filters
          </button>
        </div>
      )}
    </motion.div>
  );
}

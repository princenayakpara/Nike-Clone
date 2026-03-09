import { motion } from 'framer-motion';

const categories = ['All', 'Shoes', 'Sportswear'];
const genders = ['All', 'Men', 'Women'];
const sortOptions = [
  { value: 'featured', label: 'Featured' },
  { value: 'price-low', label: 'Price: Low to High' },
  { value: 'price-high', label: 'Price: High to Low' },
  { value: 'rating', label: 'Highest Rated' },
  { value: 'newest', label: 'Newest' },
];

export default function ProductFilter({
  selectedCategory,
  setSelectedCategory,
  selectedGender,
  setSelectedGender,
  sortBy,
  setSortBy,
  productCount,
}) {
  return (
    <div className="space-y-4">
      {/* Filter row */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="flex flex-wrap items-center gap-2">
          {/* Category filters */}
          <div className="flex items-center gap-2 mr-4">
            <span className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Category:</span>
            {categories.map((cat) => (
              <motion.button
                key={cat}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all ${
                  selectedCategory === cat
                    ? 'bg-nike-black text-white dark:bg-white dark:text-nike-black'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700'
                }`}
              >
                {cat}
              </motion.button>
            ))}
          </div>

          {/* Gender filters */}
          <div className="flex items-center gap-2">
            <span className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Gender:</span>
            {genders.map((gen) => (
              <motion.button
                key={gen}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedGender(gen)}
                className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all ${
                  selectedGender === gen
                    ? 'bg-nike-black text-white dark:bg-white dark:text-nike-black'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700'
                }`}
              >
                {gen}
              </motion.button>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-4">
          <span className="text-sm text-gray-500">{productCount} Results</span>
          <select
            id="sort-select"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="text-sm bg-transparent border border-gray-300 dark:border-gray-600 rounded-lg px-3 py-1.5 focus:outline-none focus:ring-2 focus:ring-nike-black dark:focus:ring-white dark:text-white dark:bg-gray-800 cursor-pointer"
          >
            {sortOptions.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
}

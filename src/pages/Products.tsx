import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, SlidersHorizontal, ArrowRight, Info } from 'lucide-react';
import { products } from '../data/products';
import { Link, useSearchParams } from 'react-router-dom';
import { Button } from '../components/ui/Button';

export const Products = () => {
  const [searchParams] = useSearchParams();
  const categoryParam = searchParams.get('category');
  
  const [activeCategory, setActiveCategory] = useState<string>(categoryParam || 'all');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = ['all', 'soda', 'water', 'energy', 'juice'];

  const filteredProducts = products.filter(p => {
    const matchesCategory = activeCategory === 'all' || p.category === activeCategory;
    const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          p.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="pt-32 pb-24 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div className="max-w-2xl">
            <h1 className="text-5xl md:text-7xl font-black uppercase mb-6 italic tracking-tighter">
              Refreshment <br />
              <span className="text-stroke text-primary">Reimagined</span>
            </h1>
            <p className="text-lg text-gray-500 font-semibold max-w-lg">
              Explore our full portfolio of iconic brands and innovative beverages designed to uplift your every moment.
            </p>
          </div>
          
          <div className="relative w-full md:w-96">
            <input
              type="text"
              placeholder="Search beverages..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-gray-50 border-b-2 border-gray-200 px-4 py-4 pr-12 text-sm font-bold focus:outline-none focus:border-primary transition-colors uppercase tracking-widest"
            />
            <Search className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
          </div>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap items-center gap-4 mb-16">
          <div className="flex items-center gap-2 mr-4">
            <SlidersHorizontal className="text-primary w-5 h-5" />
            <span className="text-xs font-black uppercase tracking-widest text-secondary">Filter by</span>
          </div>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2 text-xs font-black uppercase tracking-[0.2em] transition-all border-2 ${
                activeCategory === cat 
                  ? 'bg-primary border-primary text-white shadow-lg shadow-primary/20' 
                  : 'bg-white border-gray-100 text-gray-400 hover:border-primary hover:text-primary'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Product Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-8 gap-y-16">
            <AnimatePresence mode="popLayout">
              {filteredProducts.map((product) => (
                <motion.div
                  key={product.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="group"
                >
                  <div className="relative mb-6">
                    <div className="aspect-[3/4] bg-gray-50 overflow-hidden relative">
                      <motion.img
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.4 }}
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                      />
                      <div className="absolute top-4 right-4 z-10">
                        <Button
                          variant="ghost"
                          className="bg-white/90 backdrop-blur-sm p-4 h-12 w-12 rounded-none hover:bg-primary hover:text-white"
                        >
                          <Info size={20} />
                        </Button>
                      </div>
                    </div>
                    {/* Floating Can Label Teaser */}
                    <div className="absolute -bottom-4 -left-4 bg-primary text-white p-4 font-black uppercase text-[10px] tracking-widest shadow-xl">
                      Featured Range
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between items-start">
                      <h3 className="text-2xl font-black uppercase leading-tight group-hover:text-primary transition-colors">
                        {product.name}
                      </h3>
                      <span className="text-xl font-bold text-gray-400 tabular-nums">
                        ${product.price}
                      </span>
                    </div>
                    <p className="text-sm text-gray-500 line-clamp-2 leading-relaxed font-semibold">
                      {product.description}
                    </p>
                    <div className="pt-4 flex gap-2">
                       <Link to={`/product/${product.slug}`} className="flex-1">
                        <Button className="w-full bg-secondary group-hover:bg-primary transition-colors text-xs py-4 px-0">
                          View Details <ArrowRight size={14} className="ml-2" />
                        </Button>
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        ) : (
          <div className="py-32 flex flex-col items-center justify-center text-center">
            <div className="w-20 h-20 bg-gray-50 flex items-center justify-center rounded-full mb-6">
              <Search className="text-gray-300 w-10 h-10" />
            </div>
            <h3 className="text-2xl font-black uppercase mb-2">No beverages found</h3>
            <p className="text-gray-500 font-semibold">Try adjusting your filters or search keywords.</p>
            <Button variant="outline" className="mt-8" onClick={() => { setActiveCategory('all'); setSearchQuery(''); }}>
              Reset Filters
            </Button>
          </div>
        )}
      </div>

      {/* Corporate Promotion Section */}
      <section className="mt-32 py-24 bg-secondary text-white overflow-hidden relative">
         <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary/20 blur-[100px] rounded-full" />
         <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10 flex flex-col md:flex-row items-center gap-16">
           <div className="max-w-xl">
              <h2 className="text-4xl md:text-6xl font-black uppercase mb-6 leading-none tracking-tighter italic">Bulk Ordering for Business</h2>
              <p className="text-gray-400 text-lg font-medium mb-10 leading-relaxed">
                Partner with the world’s most recognizable brand. Streamline your inventory and get exclusive corporate pricing for large-scale operations.
              </p>
              <Button size="lg" className="bg-white text-secondary hover:bg-primary hover:text-white transition-all">Get a Quote</Button>
           </div>
           <div className="flex-1 w-full flex justify-center">
              <div className="relative group perspective-1000">
                <motion.img
                  animate={{ rotateY: [0, 10, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                  src="https://images.unsplash.com/photo-1554866585-cd94860890b7?w=800"
                  className="w-full max-w-md shadow-2xl skew-y-3 grayscale group-hover:grayscale-0 transition-all duration-700"
                  alt="Business Partner"
                />
                <div className="absolute inset-0 border-2 border-primary/50 -translate-x-4 -translate-y-4 -z-10" />
              </div>
           </div>
         </div>
      </section>
    </div>
  );
};

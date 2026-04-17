import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { products } from '../data/products';
import { ArrowLeft, ArrowRight, Share2, Heart, Droplets, Zap, ShieldCheck } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { cn } from '../lib/utils';

export const ProductDetail = () => {
  const { slug } = useParams();
  const product = products.find((p) => p.slug === slug);

  if (!product) {
    return (
      <div className="pt-32 pb-24 text-center">
        <h2 className="text-4xl font-black uppercase mb-4">Product Not Found</h2>
        <Link to="/products">
          <Button variant="outline">Back to catalog</Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="pt-24 pb-24 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Breadcrumb */}
        <div className="mb-12">
          <Link to="/products" className="flex items-center gap-2 text-gray-400 font-black uppercase text-[10px] tracking-[0.3em] hover:text-primary transition-colors">
            <ArrowLeft size={16} />
            Back to Refreshment
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Main Visual */}
          <div className="relative group">
            <div 
              className="absolute inset-x-0 bottom-0 h-2/3 -z-10 blur-[100px] opacity-20 transition-opacity duration-1000 group-hover:opacity-40"
              style={{ backgroundColor: product.color }}
            />
            <motion.div
              layoutId={`can-${product.id}`}
              className="relative aspect-square flex items-center justify-center p-12 overflow-hidden bg-gray-50/50 backdrop-blur-sm shadow-inner"
            >
              <motion.img
                initial={{ y: 200, opacity: 0, scale: 0.5 }}
                animate={{ y: 0, opacity: 1, scale: 1 }}
                transition={{ duration: 1, type: "spring", stiffness: 50 }}
                src={product.image}
                alt={product.name}
                className="w-full h-full object-contain drop-shadow-[0_25px_25px_rgba(0,0,0,0.2)]"
              />
              
              {/* Feature bubbles */}
              <div className="absolute top-12 left-12 space-y-4">
                 <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.5 }} className="bg-white/80 p-3 shadow-lg border-l-4 border-primary flex items-center gap-3">
                   <Zap size={16} className="text-primary" />
                   <span className="text-[10px] font-black uppercase tracking-widest">Instant Refreshment</span>
                 </motion.div>
                 <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.7 }} className="bg-white/80 p-3 shadow-lg border-l-4 border-secondary flex items-center gap-3">
                   <ShieldCheck size={16} className="text-secondary" />
                   <span className="text-[10px] font-black uppercase tracking-widest">Quality Guaranteed</span>
                 </motion.div>
              </div>
            </motion.div>
          </div>

          {/* Details Content */}
          <div className="space-y-10">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="px-3 py-1 bg-primary text-white text-[10px] font-black uppercase tracking-widest">{product.category}</span>
                <span className="px-3 py-1 border border-gray-100 text-gray-400 text-[10px] font-black uppercase tracking-widest">In Stock</span>
              </div>
              <h1 className="text-5xl md:text-7xl font-black uppercase leading-[0.9] mb-4">{product.name}</h1>
              <p className="text-xl text-gray-500 font-semibold leading-relaxed">
                {product.longDescription}
              </p>
            </div>

            {/* Nutrition Grid */}
            <div className="bg-gray-50 p-8 rounded-none border-l-4 border-primary grid grid-cols-2 md:grid-cols-4 gap-8">
              {Object.entries(product.nutrition).map(([key, value]) => (
                <div key={key}>
                  <p className="text-[10px] text-gray-400 font-black uppercase tracking-widest mb-1">{key}</p>
                  <p className="text-2xl font-black italic tracking-tighter">{value}</p>
                </div>
              ))}
            </div>

            {/* Selection */}
            <div className="flex flex-wrap gap-8 items-center">
              <div>
                <span className="block text-[10px] text-gray-400 font-black uppercase tracking-widest mb-4">Select Pack Size</span>
                <div className="flex gap-2">
                  {['330ml Can', '500ml Bottle', '2L Bottle'].map((size) => (
                    <button key={size} className="px-4 py-2 border border-gray-200 text-xs font-black uppercase tracking-widest hover:border-primary hover:text-primary transition-colors">
                      {size}
                    </button>
                  ))}
                </div>
              </div>
              <div className="flex-1">
                 <span className="block text-[10px] text-gray-400 font-black uppercase tracking-widest mb-4">MSRP</span>
                 <p className="text-3xl font-black tabular-nums">${product.price}</p>
              </div>
            </div>

            <div className="flex gap-4">
              <Button size="xl" className="flex-1">
                Order Now <ArrowRight className="ml-2" />
              </Button>
              <button className="p-5 border border-gray-200 hover:border-primary hover:text-primary transition-all">
                <Heart />
              </button>
               <button className="p-5 border border-gray-200 hover:border-primary hover:text-primary transition-all">
                <Share2 />
              </button>
            </div>

            {/* Ingredients */}
            <div className="pt-10 border-t border-gray-100 grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h4 className="text-sm font-black uppercase mb-4 tracking-widest border-b border-primary w-fit pb-1">Ingredients</h4>
                <p className="text-sm text-gray-500 leading-loose font-medium">
                  {product.ingredients.join(', ')}
                </p>
              </div>
              <div>
                <h4 className="text-sm font-black uppercase mb-4 tracking-widest border-b border-primary w-fit pb-1">Our Promise</h4>
                <div className="flex items-center gap-3 group cursor-help">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                    <Droplets size={20} />
                  </div>
                  <p className="text-xs font-bold text-gray-400 uppercase tracking-widest group-hover:text-secondary transition-colors">
                    Sustainably Sourced <br /> & Water Neutral
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Similar Products */}
        <div className="mt-32">
          <h2 className="text-3xl font-black uppercase mb-12 italic border-b-2 border-primary w-fit pb-2">More Favorites</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {products.slice(0, 4).map((p) => (
              <Link key={p.id} to={`/product/${p.slug}`} className="group">
                <div className="aspect-[3/4] overflow-hidden bg-gray-50 mb-4">
                  <img src={p.image} className="w-full h-full object-cover transition-transform group-hover:scale-110" alt={p.name} />
                </div>
                <h4 className="text-sm font-black uppercase group-hover:text-primary transition-colors">{p.name}</h4>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

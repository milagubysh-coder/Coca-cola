import { motion, useScroll, useTransform } from 'motion/react';
import { Button } from '../components/ui/Button';
import { ArrowRight, Play, Heart, Globe, Droplets } from 'lucide-react';
import { products } from '../data/products';
import { Link } from 'react-router-dom';

export const Home = () => {
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.8]);
  const rotate = useTransform(scrollYProgress, [0, 0.2], [0, -5]);

  return (
    <div className="relative overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-secondary overflow-hidden">
        {/* Background Animation */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 blur-[120px] rounded-full animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-primary/10 blur-[150px] rounded-full animate-float" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-block px-4 py-1 bg-primary text-white text-xs font-black uppercase tracking-[0.3em] mb-6"
            >
              Since 1886
            </motion.span>
            <h1 className="text-6xl md:text-8xl font-black text-white leading-none mb-6">
              REAL MAGIC <br />
              <span className="text-stroke text-white/50">EVERYWHERE</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-lg mb-10 leading-relaxed font-medium">
              Experience the legendary taste that has shared happiness across the globe for generations. 
              Always crisp, always refreshing, always Coca-Cola.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/products">
                <Button size="xl" className="group">
                  Explore Products
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Button size="xl" variant="outline" className="text-white border-white hover:bg-white hover:text-secondary group">
                <Play className="mr-2 h-5 w-5 fill-current" />
                Watch Story
              </Button>
            </div>
          </motion.div>

          {/* Prominent Can Animation */}
          <motion.div
            style={{ scale, rotate }}
            initial={{ opacity: 0, y: 100, scale: 0.5 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1.2, type: "spring", bounce: 0.3 }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative group">
              {/* Glow effect */}
              <div className="absolute inset-0 bg-primary/30 blur-[60px] rounded-full scale-110 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              
              <img
                src="https://images.unsplash.com/photo-1622483767028-3f66f32aef97?q=80&w=1000&auto=format&fit=crop"
                alt="Coca-Cola Can"
                className="w-full max-w-[400px] drop-shadow-[0_35px_35px_rgba(238,29,35,0.4)] relative z-10 animate-float"
              />
              
              {/* Floating micro-labels */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-10 -right-10 glass-panel p-4 rounded-none hidden md:block"
              >
                <div className="flex items-center gap-2">
                  <Droplets className="text-primary w-5 h-5" />
                  <span className="text-xs font-black uppercase tracking-widest text-secondary">Original Taste</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/30 flex flex-col items-center gap-2"
        >
          <span className="text-[10px] uppercase tracking-[0.4em] font-bold">Scroll</span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-white/50 to-transparent" />
        </motion.div>
      </section>

      {/* Featured Products */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-16">
            <div className="max-w-xl">
              <h2 className="text-4xl md:text-5xl font-black uppercase mb-4">The Iconic Range</h2>
              <p className="text-gray-500 font-semibold tracking-tight">From the classic red to zero-sugar variants and pure hydration, we’ve got a refreshment for every moment.</p>
            </div>
            <Link to="/products">
              <Button variant="ghost" className="text-primary hover:text-primary/80 group">
                View All Collection <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((product, idx) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group relative"
              >
                <div className="aspect-[3/4] overflow-hidden bg-gray-100 relative mb-6">
                  <motion.img
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                  <div 
                    className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ backgroundImage: `linear-gradient(to top, ${product.color}aa, transparent)` }}
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-white text-secondary text-[10px] font-black uppercase tracking-widest">{product.category}</span>
                  </div>
                </div>
                <h3 className="text-xl font-black uppercase mb-2">{product.name}</h3>
                <p className="text-gray-500 text-sm font-medium mb-4">{product.description}</p>
                <Link to={`/product/${product.slug}`}>
                  <Button variant="ghost" size="sm" className="p-0 text-primary group-hover:translate-x-1 transition-transform">
                    View Details
                  </Button>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Brand Values / Sustainability Teaser */}
      <section className="py-24 bg-gray-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
             <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="aspect-square bg-primary/5 rounded-full absolute inset-0 -z-10 animate-float"
            />
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <img src="https://images.unsplash.com/photo-1594498653385-d5172b532c00?w=400" className="w-full aspect-[4/5] object-cover grayscale hover:grayscale-0 transition-all duration-500" alt="Sust 1" />
                <div className="bg-primary p-8 aspect-square flex flex-col justify-end">
                  <Heart className="text-white w-10 h-10 mb-4" />
                  <span className="text-white font-black text-2xl uppercase leading-none italic">World Without Waste</span>
                </div>
              </div>
              <div className="pt-12 space-y-4">
                <div className="bg-secondary p-8 aspect-square flex flex-col justify-end">
                  <Globe className="text-white w-10 h-10 mb-4" />
                  <span className="text-white font-black text-2xl uppercase leading-none italic">Global Impact</span>
                </div>
                <img src="https://images.unsplash.com/photo-1625772290748-390b1df0f031?w=400" className="w-full aspect-[4/5] object-cover grayscale hover:grayscale-0 transition-all duration-500" alt="Sust 2" />
              </div>
            </div>
          </div>
          <div>
            <span className="text-primary font-black uppercase tracking-[0.3em] mb-4 inline-block">Our Mission</span>
            <h2 className="text-4xl md:text-6xl font-black uppercase mb-8 leading-[0.9]">Creating a Better Shared Future</h2>
            <p className="text-lg text-gray-600 font-medium mb-10 leading-relaxed">
              We are not just a beverage company. We are a part of your moments, your celebrations, and your daily life.
              Our goal is to refresh the world and make a difference through sustainability, diversity, and innovation.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
              <div className="flex gap-4">
                <div className="h-1px w-8 bg-primary mt-3 flex-shrink-0" />
                <div>
                  <h4 className="font-black uppercase mb-2">Sustainable Packing</h4>
                  <p className="text-sm text-gray-500">Aiming for 100% recyclable materials by 2030.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="h-1px w-8 bg-primary mt-3 flex-shrink-0" />
                <div>
                  <h4 className="font-black uppercase mb-2">Water Stewardship</h4>
                  <p className="text-sm text-gray-500">Replenishing 100% of the water we use in our drinks.</p>
                </div>
              </div>
            </div>
            <Link to="/sustainability">
              <Button size="lg">Explore ESG Goals</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* News & Stories */}
      <section className="py-24 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex flex-col items-center">
          <h2 className="text-4xl md:text-5xl font-black uppercase mb-16 text-center italic">What's Popping</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 w-full">
            {[
              {
                title: 'The "Summer Vibes" Campaign 2026',
                date: 'April 15, 2026',
                image: 'https://picsum.photos/seed/summer/600/400'
              },
              {
                title: 'Innovation Lab: The Future of Cans',
                date: 'March 28, 2026',
                image: 'https://picsum.photos/seed/can/600/400'
              },
              {
                title: 'Partnering for a Greener Planet',
                date: 'March 10, 2026',
                image: 'https://picsum.photos/seed/green/600/400'
              }
            ].map((post, idx) => (
              <motion.article 
                key={idx}
                whileHover={{ y: -10 }}
                className="group cursor-pointer"
              >
                <div className="aspect-video overflow-hidden mb-6 relative">
                  <img src={post.image} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt={post.title} />
                  <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <span className="text-[10px] font-black uppercase tracking-widest text-primary mb-2 block">{post.date}</span>
                <h3 className="text-2xl font-black uppercase group-hover:text-primary transition-colors leading-tight mb-4">{post.title}</h3>
                <div className="h-[2px] w-0 bg-primary group-hover:w-full transition-all duration-300" />
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

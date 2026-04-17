import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Facebook, Twitter, Instagram, Youtube, Linkedin, ArrowRight } from 'lucide-react';
import { navItems } from '../../data/navigation';

export const Footer = () => {
  return (
    <footer className="bg-secondary text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-2 group">
              <div className="w-10 h-10 bg-primary flex items-center justify-center rounded-full shadow-lg">
                <span className="text-white font-black text-xl italic tracking-tighter">C</span>
              </div>
              <span className="font-display text-2xl font-black tracking-tighter uppercase">
                Coca-Cola
              </span>
            </Link>
            <p className="text-gray-400 max-w-xs leading-relaxed">
              Sharing happiness and spreading refreshment across the globe since 1886. Committed to sustainability, diversity, and innovation.
            </p>
            <div className="flex gap-4">
              {[Facebook, Twitter, Instagram, Youtube, Linkedin].map((Icon, i) => (
                <motion.a
                  key={i}
                  href="#"
                  whileHover={{ y: -5, color: '#F40009' }}
                  className="p-2 bg-white/5 rounded-full text-gray-400 transition-colors"
                >
                  <Icon size={20} />
                </motion.a>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 lg:col-span-2">
            <div>
              <h4 className="font-display font-bold uppercase tracking-widest text-sm mb-6 text-primary">Explore</h4>
              <ul className="space-y-4">
                {navItems.map((item) => (
                   <li key={item.label}>
                    <Link to={item.path} className="text-gray-400 hover:text-white transition-colors">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-display font-bold uppercase tracking-widest text-sm mb-6 text-primary">Support</h4>
              <ul className="space-y-4 text-gray-400">
                <li><Link to="/faq" className="hover:text-white">FAQs</Link></li>
                <li><Link to="/contact" className="hover:text-white">Contact Us</Link></li>
                <li><Link to="/corporate" className="hover:text-white">Corporate Info</Link></li>
                <li><Link to="/legal" className="hover:text-white">Privacy Policy</Link></li>
                <li><Link to="/legal" className="hover:text-white">Terms of Use</Link></li>
              </ul>
            </div>
          </div>

          <div className="bg-white/5 p-8 rounded-none border border-white/10 relative overflow-hidden group">
            <h4 className="font-display font-bold uppercase tracking-widest text-sm mb-4 relative z-10">Fresh News</h4>
            <p className="text-gray-400 text-sm mb-6 relative z-10">Subscribe to get iconic stories directly in your inbox.</p>
            <div className="relative z-10">
              <input
                type="email"
                placeholder="Email Address"
                className="w-full bg-white/10 border border-white/20 px-4 py-3 text-sm focus:outline-none focus:border-primary transition-colors text-white"
              />
              <button className="absolute right-2 top-1/2 -translate-y-1/2 text-primary hover:translate-x-1 transition-transform">
                <ArrowRight size={20} />
              </button>
            </div>
            <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-primary/20 blur-3xl rounded-full group-hover:scale-150 transition-transform duration-700" />
          </div>
        </div>

        <div className="pt-10 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6 text-xs text-gray-500 font-semibold tracking-tighter uppercase">
          <p>© 2026 The Coca-Cola Company. All rights reserved.</p>
          <div className="flex gap-8">
            <Link to="/cookies" className="hover:text-white transition-colors">Cookie Settings</Link>
            <Link to="/legal" className="hover:text-white transition-colors">Accessibility</Link>
            <Link to="/legal" className="hover:text-white transition-colors">Do Not Sell My Info</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

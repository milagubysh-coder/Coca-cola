import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Search, Globe, ChevronDown } from 'lucide-react';
import { navItems } from '../../data/navigation';
import { cn } from '../../lib/utils';
import { Button } from '../ui/Button';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled
          ? 'bg-white/90 backdrop-blur-md shadow-md py-3'
          : 'bg-transparent py-6'
      )}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <motion.div
            initial={{ rotate: -10 }}
            animate={{ rotate: 0 }}
            className="w-10 h-10 bg-primary flex items-center justify-center rounded-full shadow-lg overflow-hidden"
          >
             <span className="text-white font-black text-xl italic tracking-tighter">C</span>
          </motion.div>
          <span className={cn(
            "font-display text-2xl font-black tracking-tighter uppercase transition-colors duration-300",
            isScrolled ? "text-secondary" : "text-white drop-shadow-md"
          )}>
            Coca-Cola
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <div key={item.label} className="relative group">
              <Link
                to={item.path}
                className={cn(
                  "font-semibold text-sm uppercase tracking-widest flex items-center gap-1 transition-colors duration-300",
                  isScrolled ? "text-secondary hover:text-primary" : "text-white hover:text-primary drop-shadow-md"
                )}
              >
                {item.label}
                {item.children && <ChevronDown className="w-4 h-4" />}
              </Link>
              
              {item.children && (
                <div className="absolute top-full left-0 pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  <div className="bg-white shadow-2xl border border-gray-100 p-4 min-w-[200px]">
                    {item.children.map((child) => (
                      <Link
                        key={child.label}
                        to={child.path}
                        className="block py-2 text-sm text-secondary hover:text-primary hover:translate-x-1 transition-all"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <button
            onClick={() => setSearchOpen(!searchOpen)}
            className={cn(
              "p-2 rounded-full transition-colors",
              isScrolled ? "hover:bg-gray-100 text-secondary" : "hover:bg-white/20 text-white"
            )}
          >
            <Search className="w-5 h-5" />
          </button>
          
          <button
            className={cn(
              "hidden md:flex items-center gap-1 text-sm font-bold uppercase tracking-tighter transition-colors",
              isScrolled ? "text-secondary hover:text-primary" : "text-white hover:text-primary"
            )}
          >
            <Globe className="w-4 h-4" />
            EN
          </button>

          <Button
            variant={isScrolled ? "primary" : "outline"}
            size="sm"
            className={cn(
              "hidden md:inline-flex",
              !isScrolled && "border-white text-white hover:bg-white hover:text-primary"
            )}
          >
            Join the movement
          </Button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={cn(
              "lg:hidden p-2 rounded-full",
              isScrolled ? "text-secondary" : "text-white"
            )}
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="lg:hidden absolute top-full left-0 right-0 bg-white shadow-2xl p-6 h-[100vh]"
          >
            <div className="flex flex-col gap-6">
              {navItems.map((item) => (
                <div key={item.label} className="border-b border-gray-100 pb-4">
                  <Link
                    to={item.path}
                    className="text-2xl font-display font-black uppercase text-secondary"
                  >
                    {item.label}
                  </Link>
                  {item.children && (
                    <div className="mt-4 flex flex-col gap-2 pl-4">
                      {item.children.map((child) => (
                        <Link
                          key={child.label}
                          to={child.path}
                          className="text-gray-500 font-semibold"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <Button size="lg" className="mt-4">Join Us</Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

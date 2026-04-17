/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { Home } from './pages/Home';
import { Products } from './pages/Products';
import { ProductDetail } from './pages/ProductDetail';

// Scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

// Placeholder for other pages
const Placeholder = ({ name }: { name: string }) => (
  <div className="pt-32 pb-24 min-h-screen flex items-center justify-center bg-gray-50">
    <div className="text-center">
      <h1 className="text-6xl font-black uppercase mb-4 italic text-primary">{name}</h1>
      <p className="text-gray-500 font-bold uppercase tracking-widest">Coming Soon to the Magical World of Coca-Cola</p>
    </div>
  </div>
);

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/product/:slug" element={<ProductDetail />} />
            <Route path="/about" element={<Placeholder name="Our Story" />} />
            <Route path="/sustainability" element={<Placeholder name="Sustainability" />} />
            <Route path="/news" element={<Placeholder name="Fresh News" />} />
            <Route path="/careers" element={<Placeholder name="Careers" />} />
            <Route path="/contact" element={<Placeholder name="Contact" />} />
            <Route path="/faq" element={<Placeholder name="FAQ" />} />
            <Route path="/legal" element={<Placeholder name="Legal" />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

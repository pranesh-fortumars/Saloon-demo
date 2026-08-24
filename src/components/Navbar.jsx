import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { siteConfig } from '../config/siteConfig';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Body scroll lock when menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [menuOpen]);

  // Handle escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && menuOpen) {
        setMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [menuOpen]);

  const navLinks = [
    { name: 'HOME', href: '#' },
    { name: 'ABOUT', href: '#about' },
    { name: 'SERVICES', href: '#services' },
    { name: 'EXPERIENCE', href: '#experience' },
    { name: 'GALLERY', href: '#gallery' },
    { name: 'CONTACT', href: '#contact' },
  ];

  return (
    <>
      <header 
        className={`fixed top-0 w-full z-50 px-6 md:px-12 flex justify-between items-center transition-all duration-300 ${
          scrolled ? 'h-20 backdrop-blur-md bg-[#0B1210]/90 border-b border-[#C99A3D]/20' : 'h-28 bg-transparent border-b border-transparent'
        }`}
      >
        <h1 className="font-serif text-xl md:text-2xl tracking-widest text-[#F5F1E8] cursor-pointer hover:text-[#C99A3D] transition-colors">
          {siteConfig.brand.name}
        </h1>
        
        {/* Desktop Nav */}
        <nav className="hidden lg:flex gap-8 text-sm tracking-widest text-[#F5F1E8]/80">
          {navLinks.slice(1).map(link => (
            <a key={link.name} href={link.href} className="hover:text-[#C99A3D] transition-colors relative group">
              {link.name}
              <span className="absolute -bottom-2 left-0 w-0 h-px bg-[#C99A3D] transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </nav>
        
        <a href="#booking" className="hidden lg:block text-xs font-semibold tracking-widest px-8 py-3 bg-transparent border border-[#C99A3D] text-[#C99A3D] hover:bg-[#C99A3D] hover:text-[#0B1210] transition-colors cursor-pointer">
          BOOK NOW
        </a>

        {/* Mobile Toggle */}
        <button 
          className="lg:hidden text-[#F5F1E8] z-[60] relative flex items-center gap-4 text-sm tracking-widest font-semibold hover:text-[#C99A3D] transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
        >
          {menuOpen ? 'CLOSE' : '☰ MENU'}
        </button>
      </header>

      {/* Mobile Nav Overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: '-100%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '-100%' }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 bg-[#0B1210] z-50 flex flex-col justify-center items-center lg:hidden"
          >
            <nav className="flex flex-col items-center gap-8">
              {navLinks.map((link, i) => (
                <motion.a 
                  key={link.name}
                  href={link.href} 
                  onClick={() => setMenuOpen(false)} 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + (i * 0.1) }}
                  className="font-serif text-4xl text-[#F5F1E8] hover:text-[#C99A3D] transition-colors"
                >
                  {link.name}
                </motion.a>
              ))}
            </nav>
            <motion.a 
              href="#booking"
              onClick={() => setMenuOpen(false)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="mt-12 bg-[#C99A3D] text-[#0B1210] px-10 py-5 font-semibold tracking-widest text-sm"
            >
              BOOK APPOINTMENT
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;

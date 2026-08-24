import React, { useState, useEffect } from 'react';
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

  return (
    <>
      <header 
        className={`fixed top-0 w-full z-50 py-6 px-8 flex justify-between items-center transition-all duration-300 ${
          scrolled ? 'backdrop-blur-md bg-[#111111]/90 border-b border-[#D4AF37]/30 py-4' : 'bg-transparent border-b border-transparent'
        }`}
      >
        <h1 className="font-serif text-xl md:text-2xl tracking-widest text-[#F7E7CE] cursor-pointer">
          {siteConfig.brand.name}
        </h1>
        
        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-8 text-sm tracking-widest text-[#FAFAFA]/80">
          <a href="#about" className="hover:text-[#D4AF37] transition-colors">ABOUT</a>
          <a href="#services" className="hover:text-[#D4AF37] transition-colors">SERVICES</a>
          <a href="#gallery" className="hover:text-[#D4AF37] transition-colors">GALLERY</a>
          <a href="#contact" className="hover:text-[#D4AF37] transition-colors">CONTACT</a>
        </nav>
        
        <button className="hidden md:block text-xs font-semibold tracking-widest px-6 py-3 border border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-[#111111] transition-all">
          BOOK NOW
        </button>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-[#FAFAFA] z-50 relative"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? 'CLOSE' : 'MENU'}
        </button>
      </header>

      {/* Mobile Nav Overlay */}
      {menuOpen && (
        <div className="fixed inset-0 bg-[#111111] z-40 flex flex-col justify-center items-center gap-8 md:hidden">
          <a href="#about" onClick={() => setMenuOpen(false)} className="font-serif text-3xl text-[#FAFAFA] hover:text-[#D4AF37]">ABOUT</a>
          <a href="#services" onClick={() => setMenuOpen(false)} className="font-serif text-3xl text-[#FAFAFA] hover:text-[#D4AF37]">SERVICES</a>
          <a href="#gallery" onClick={() => setMenuOpen(false)} className="font-serif text-3xl text-[#FAFAFA] hover:text-[#D4AF37]">GALLERY</a>
          <a href="#contact" onClick={() => setMenuOpen(false)} className="font-serif text-3xl text-[#FAFAFA] hover:text-[#D4AF37]">CONTACT</a>
          <button className="mt-8 bg-[#D4AF37] text-[#111111] px-8 py-4 font-semibold tracking-widest">
            BOOK AN APPOINTMENT
          </button>
        </div>
      )}
    </>
  );
};

export default Navbar;

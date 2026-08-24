import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ServicesSection from './components/ServicesSection';
import FeaturedExperience from './components/FeaturedExperience';
import GallerySection from './components/GallerySection';
import TestimonialSection from './components/TestimonialSection';
import ContactFooter from './components/ContactFooter';
import CustomCursor from './components/CustomCursor';
import ScrollProgress from './components/ScrollProgress';

function App() {
  return (
    <div className="min-h-screen cursor-none">
      <CustomCursor />
      <ScrollProgress />
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <FeaturedExperience />
        <GallerySection />
        <TestimonialSection />
      </main>
      <ContactFooter />
      
      {/* Mobile Sticky CTA */}
      <div className="fixed bottom-0 left-0 right-0 p-4 md:hidden z-40 bg-gradient-to-t from-[#111111] to-transparent pointer-events-none">
        <a href="tel:8072083897" className="w-full bg-[#D4AF37] text-[#111111] font-bold tracking-widest py-4 text-center block pointer-events-auto shadow-lg shadow-[#D4AF37]/20">
          CALL NOW | BOOK APPOINTMENT
        </a>
      </div>
    </div>
  );
}

export default App;

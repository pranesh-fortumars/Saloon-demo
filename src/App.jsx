import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import WhyChooseUs from './components/WhyChooseUs';
import ServicesSection from './components/ServicesSection';
import FeaturedExperience from './components/FeaturedExperience';
import BeforeAfterSection from './components/BeforeAfterSection';
import GallerySection from './components/GallerySection';
import TestimonialSection from './components/TestimonialSection';
import BookingSection from './components/BookingSection';
import VisitUsSection from './components/VisitUsSection';
import FinalCTA from './components/FinalCTA';
import ContactFooter from './components/ContactFooter';
import CustomCursor from './components/CustomCursor';
import ScrollProgress from './components/ScrollProgress';
import { siteConfig } from './config/siteConfig';

function App() {
  return (
    <div className="min-h-screen bg-[#0B1210] selection:bg-[#C99A3D] selection:text-[#0B1210]">
      <CustomCursor />
      <ScrollProgress />
      <Navbar />
      
      <main>
        {/* 01 HERO */}
        <HeroSection />
        
        {/* 02 ABOUT */}
        <AboutSection />
        
        {/* 03 WHY CHOOSE US */}
        <WhyChooseUs />
        
        {/* 04 SERVICES */}
        <ServicesSection />
        
        {/* 05 SIGNATURE EXPERIENCE */}
        <FeaturedExperience />
        
        {/* 06 BEFORE / AFTER */}
        <BeforeAfterSection />
        
        {/* 07 GALLERY */}
        <GallerySection />
        
        {/* 08 CLIENT EXPERIENCES */}
        <TestimonialSection />
        
        {/* 09 BOOK APPOINTMENT */}
        <BookingSection />
        
        {/* 10 VISIT US / CONTACT */}
        <VisitUsSection />
        
        {/* 11 FINAL CTA */}
        <FinalCTA />
      </main>
      
      {/* 12 FOOTER */}
      <ContactFooter />
      
      {/* Mobile Sticky CTA */}
      <div className="fixed bottom-0 left-0 right-0 p-4 md:hidden z-40 bg-gradient-to-t from-[#0B1210] to-transparent pointer-events-none">
        <div className="flex gap-2 pointer-events-auto shadow-lg shadow-[#0B1210]">
          <a href={`tel:${siteConfig.contact.phones[0].replace(/\s/g, '')}`} className="flex-1 bg-[#101A17] border border-[#C99A3D] text-[#C99A3D] font-semibold tracking-widest py-4 text-center text-xs">
            CALL
          </a>
          <a href="#booking" className="flex-1 bg-[#C99A3D] text-[#0B1210] font-semibold tracking-widest py-4 text-center text-xs">
            BOOK NOW
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;

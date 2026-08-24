import React from 'react';
import { motion } from 'framer-motion';
import { siteConfig } from '../config/siteConfig';

const HeroSection = () => {
  return (
    <section className="relative h-screen flex flex-col justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <motion.img 
          initial={{ scale: 1.15 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2.5, ease: "easeOut" }}
          src={siteConfig.images.hero} 
          alt="Luxury Salon Background" 
          className="w-full h-full object-cover opacity-50"
          loading="eager"
          decoding="sync"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0B1210]/70 via-[#0B1210]/40 to-[#0B1210]"></div>
      </div>
      
      <div className="relative z-10 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto w-full">
        <motion.span 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-[#C99A3D] text-sm tracking-[0.3em] uppercase font-medium mb-4 block"
        >
          {siteConfig.brand.name}
        </motion.span>
        
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="font-serif text-hero mb-6 text-white tracking-tight"
        >
          YOUR STYLE. <br/>
          <span className="text-[#E4C477]">YOUR SIGNATURE.</span>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.7 }}
          className="text-subheading text-[#F5F1E8] font-light mb-4 tracking-wide"
        >
          Hair • Beauty • Makeup • Grooming
        </motion.p>
        
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.9 }}
          className="text-body text-[#A9A49A] font-light max-w-2xl mb-12"
        >
          {siteConfig.brand.description}
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1 }}
          className="flex flex-col sm:flex-row gap-6"
        >
          <a href="#booking" className="bg-[#C99A3D] text-[#070908] font-semibold tracking-widest text-sm px-10 py-5 hover:bg-[#E4C477] transition-colors inline-block text-center cursor-pointer">
            BOOK AN APPOINTMENT
          </a>
          <a href={`tel:${siteConfig.contact.phones[0].replace(/\s/g, '')}`} className="border border-white/20 text-white font-semibold tracking-widest text-sm px-10 py-5 hover:border-[#C99A3D] hover:text-[#C99A3D] transition-colors inline-block text-center cursor-pointer">
            CALL {siteConfig.contact.phones[0]}
          </a>
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 pointer-events-none"
      >
        <span className="text-[#A9A49A] text-xs tracking-widest uppercase">Scroll to explore</span>
        <div className="w-px h-12 bg-gradient-to-b from-[#C99A3D] to-transparent"></div>
      </motion.div>
    </section>
  );
};

export default HeroSection;

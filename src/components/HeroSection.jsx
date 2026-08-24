import React from 'react';
import { motion } from 'framer-motion';
import { siteConfig } from '../config/siteConfig';

const HeroSection = () => {
  return (
    <section className="relative h-screen flex items-center justify-center pt-20 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <motion.img 
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
          src={siteConfig.images.hero} 
          alt="Luxury Salon Background" 
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#111111]/60 via-[#111111]/30 to-[#111111]"></div>
      </div>
      
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto flex flex-col items-center">
        <motion.span 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-[#D4AF37] text-sm md:text-base tracking-[0.3em] font-medium mb-6"
        >
          {siteConfig.brand.name}
        </motion.span>
        
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="font-serif text-5xl md:text-7xl lg:text-8xl leading-tight mb-8"
        >
          YOUR STYLE. <br/>
          <span className="italic font-light text-[#F7E7CE]">YOUR SIGNATURE.</span>
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="text-lg md:text-xl text-[#FAFAFA]/70 font-light max-w-2xl mx-auto mb-12"
        >
          {siteConfig.brand.description}
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="flex flex-col sm:flex-row gap-6"
        >
          <a href="#contact" className="bg-[#D4AF37] text-[#111111] font-semibold tracking-widest text-sm px-8 py-4 hover:bg-[#F7E7CE] transition-colors inline-block text-center cursor-pointer">
            BOOK AN APPOINTMENT
          </a>
          <a href="#services" className="border border-white/30 text-white font-semibold tracking-widest text-sm px-8 py-4 hover:border-white transition-colors inline-block text-center cursor-pointer">
            EXPLORE SERVICES
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;

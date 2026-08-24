import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { siteConfig } from '../config/siteConfig';

const FeaturedExperience = () => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);

  return (
    <section className="relative h-[80vh] overflow-hidden flex items-center justify-center">
      <motion.div 
        style={{ y }}
        className="absolute inset-0 z-0"
      >
        <img 
          src={siteConfig.images.featured} 
          alt="Discover your signature style" 
          className="w-full h-full object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-transparent to-[#111111]"></div>
      </motion.div>
      
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <div className="flex items-center justify-center gap-4 mb-6">
          <div className="h-px bg-[#D4AF37]/40 w-12"></div>
          <span className="text-[#D4AF37] tracking-widest text-sm uppercase">03 / Experience</span>
          <div className="h-px bg-[#D4AF37]/40 w-12"></div>
        </div>
        
        <h3 className="font-serif text-4xl md:text-6xl lg:text-7xl leading-tight mb-8">
          DISCOVER YOUR <br className="hidden md:block"/>
          <span className="italic font-light text-[#F7E7CE]">SIGNATURE STYLE</span>
        </h3>
      </div>
    </section>
  );
};

export default FeaturedExperience;

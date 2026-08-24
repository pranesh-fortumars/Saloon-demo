import React from 'react';
import { motion } from 'framer-motion';
import { siteConfig } from '../config/siteConfig';

const AboutSection = () => {
  return (
    <section id="about" className="py-32 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto">
      <div className="flex flex-col lg:flex-row gap-16 items-center">
        <div className="lg:w-1/2">
          <div className="flex items-center gap-4 mb-6">
            <span className="text-[#D4AF37] tracking-widest text-sm">01</span>
            <div className="h-px bg-[#D4AF37]/40 w-12"></div>
            <span className="text-white/60 tracking-widest text-sm uppercase">About Us</span>
          </div>
          
          <h3 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-tight mb-8">
            MORE THAN A SALON. <br/>
            <span className="italic text-[#F7E7CE]">A SIGNATURE EXPERIENCE.</span>
          </h3>
          
          <p className="text-white/70 font-light leading-relaxed mb-6">
            We believe that true luxury lies in the details. Our space is designed to offer a comfortable, professional environment where modern techniques meet personalized care. 
          </p>
          <p className="text-white/70 font-light leading-relaxed mb-12">
            Whether you are looking for a subtle refinement or a complete transformation, our stylists and beauty experts dedicate themselves to bringing your vision to life.
          </p>
          
          <div className="flex gap-12 border-t border-white/10 pt-8">
            <div>
              <span className="block text-[#D4AF37] font-serif text-2xl mb-1">STYLE</span>
              <span className="text-white/50 text-xs tracking-widest uppercase">Expertise</span>
            </div>
            <div>
              <span className="block text-[#D4AF37] font-serif text-2xl mb-1">BEAUTY</span>
              <span className="text-white/50 text-xs tracking-widest uppercase">Refined</span>
            </div>
            <div>
              <span className="block text-[#D4AF37] font-serif text-2xl mb-1">CONFIDENCE</span>
              <span className="text-white/50 text-xs tracking-widest uppercase">Elevated</span>
            </div>
          </div>
        </div>
        
        <div className="lg:w-1/2 relative">
          <div className="aspect-[3/4] overflow-hidden rounded-sm relative">
            <motion.img 
              initial={{ scale: 1.1 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 1.5 }}
              viewport={{ once: true }}
              src={siteConfig.images.about} 
              alt="Salon Experience" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 border border-white/10 m-4 z-10 pointer-events-none"></div>
          </div>
          
          <div className="absolute -bottom-8 -left-8 w-48 h-48 bg-[#1A1A1A] border border-[#D4AF37]/30 flex items-center justify-center hidden md:flex">
            <p className="text-center font-serif text-xl italic text-[#F7E7CE] px-6">
              "Excellence in every detail."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

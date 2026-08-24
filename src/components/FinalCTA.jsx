import React from 'react';
import { motion } from 'framer-motion';
import { siteConfig } from '../config/siteConfig';

const FinalCTA = () => {
  return (
    <section className="relative py-32 md:py-48 flex items-center justify-center overflow-hidden border-t border-white/5">
      <div className="absolute inset-0 z-0">
        <img 
          src={siteConfig.images.hero} 
          alt="Luxury Salon" 
          className="w-full h-full object-cover opacity-20"
          loading="lazy"
          decoding="async"
        />
        <div className="absolute inset-0 bg-[#0B1210]/80"></div>
        {/* Subtle gold light effect */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#C99A3D]/5 rounded-full blur-[100px] pointer-events-none"></div>
      </div>
      
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="font-serif text-4xl md:text-6xl lg:text-7xl text-white mb-6 leading-tight"
        >
          READY FOR YOUR <br/>
          <span className="italic text-[#E4C477]">NEXT LOOK?</span>
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-[#A9A49A] text-lg mb-12 font-light"
        >
          Let's create something that feels like you.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row justify-center gap-6"
        >
          <a href="#booking" className="bg-[#C99A3D] text-[#070908] font-semibold tracking-widest text-sm px-10 py-5 hover:bg-[#E4C477] transition-colors inline-block text-center cursor-pointer">
            BOOK AN APPOINTMENT
          </a>
          <a href={`tel:${siteConfig.contact.phones[0].replace(/\s/g, '')}`} className="border border-white/20 text-white font-semibold tracking-widest text-sm px-10 py-5 hover:border-[#C99A3D] hover:text-[#C99A3D] transition-colors inline-block text-center cursor-pointer">
            CALL NOW
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTA;

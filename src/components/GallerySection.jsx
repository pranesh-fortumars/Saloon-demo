import React from 'react';
import { motion } from 'framer-motion';
import { siteConfig } from '../config/siteConfig';

const GallerySection = () => {
  return (
    <section id="gallery" className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
      <div className="flex items-center gap-4 mb-16">
        <span className="text-[#D4AF37] tracking-widest text-sm">04</span>
        <div className="h-px bg-[#D4AF37]/40 w-12"></div>
        <span className="text-white/60 tracking-widest text-sm uppercase">Gallery</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 auto-rows-[300px]">
        {siteConfig.images.gallery.map((img, i) => {
          let spanClass = "col-span-1 row-span-1";
          if (i === 0) spanClass = "col-span-1 md:col-span-2 row-span-1 md:row-span-2";
          else if (i === 3) spanClass = "col-span-1 md:col-span-1 row-span-2";
          
          return (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true }}
              className={`relative overflow-hidden group cursor-pointer ${spanClass}`}
            >
              <img 
                src={img} 
                alt={`Gallery ${i}`} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500"></div>
              
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <span className="text-white tracking-[0.2em] text-sm uppercase font-light border border-white/30 px-6 py-2 backdrop-blur-sm">
                  EXPLORE
                </span>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default GallerySection;

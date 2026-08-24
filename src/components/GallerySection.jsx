import React from 'react';
import { motion } from 'framer-motion';
import { siteConfig } from '../config/siteConfig';

const GallerySection = () => {
  return (
    <section id="gallery" className="py-24 px-6 md:px-12 lg:px-24 max-w-[1400px] mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
        <div>
          <div className="flex items-center gap-4 mb-6">
            <span className="text-[#C99A3D] tracking-widest text-sm">04 / GALLERY</span>
            <div className="h-px bg-[#C99A3D]/40 w-16"></div>
          </div>
          <h2 className="font-serif text-section text-white leading-tight">
            THE WORK <br/>
            <span className="italic text-[#E4C477]">SPEAKS.</span>
          </h2>
        </div>
        
        <a href="#booking" className="text-[#C99A3D] text-sm tracking-widest uppercase font-semibold border-b border-[#C99A3D] hover:text-white hover:border-white transition-colors pb-1">
          GET YOUR LOOK
        </a>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6 auto-rows-[250px] md:auto-rows-[300px]">
        {siteConfig.images.gallery.map((img, i) => {
          // Asymmetric Editorial Layout Logic
          let spanClass = "col-span-1 md:col-span-12"; 
          if (i === 0) spanClass = "col-span-1 md:col-span-7 row-span-2"; // Large portrait
          else if (i === 1) spanClass = "col-span-1 md:col-span-5 row-span-1"; // Small landscape
          else if (i === 2) spanClass = "col-span-1 md:col-span-5 row-span-1"; // Small landscape 2
          else if (i === 3) spanClass = "col-span-1 md:col-span-6 row-span-2"; // Portrait 2
          else if (i === 4) spanClass = "col-span-1 md:col-span-6 row-span-2"; // Portrait 3
          
          return (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true, margin: "-50px" }}
              className={`relative overflow-hidden group cursor-pointer ${spanClass}`}
            >
              <img 
                src={img} 
                alt={`Gallery visual ${i + 1}`} 
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                loading="lazy"
                decoding="async"
              />
              <div className="absolute inset-0 bg-[#0B1210]/10 group-hover:bg-[#0B1210]/50 transition-colors duration-500"></div>
              <div className="absolute inset-0 border border-white/0 group-hover:border-[#C99A3D]/30 transition-all duration-500 pointer-events-none m-4"></div>
              
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <span className="text-[#F5F1E8] tracking-[0.2em] text-sm uppercase font-light border border-white/30 px-8 py-3 backdrop-blur-md">
                  VIEW
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

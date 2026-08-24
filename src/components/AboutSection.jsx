import React from 'react';
import { motion } from 'framer-motion';
import { siteConfig } from '../config/siteConfig';

const AboutSection = () => {
  return (
    <section id="about" className="py-32 px-6 md:px-12 lg:px-24 max-w-[1400px] mx-auto">
      <div className="flex flex-col lg:flex-row gap-20 items-center">
        <div className="lg:w-1/2 w-full order-2 lg:order-1 relative">
          <div className="aspect-[3/4] overflow-hidden rounded-sm relative">
            <motion.img 
              initial={{ scale: 1.1 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 1.5 }}
              viewport={{ once: true, margin: "-100px" }}
              src={siteConfig.images.about} 
              alt="Salon Experience" 
              className="w-full h-full object-cover"
              loading="lazy"
              decoding="async"
            />
            <div className="absolute inset-0 border border-white/5 m-4 pointer-events-none"></div>
          </div>
        </div>

        <div className="lg:w-1/2 w-full order-1 lg:order-2">
          <div className="flex items-center gap-4 mb-8">
            <span className="text-[#C99A3D] tracking-widest text-sm">01 / ABOUT</span>
            <div className="h-px bg-[#C99A3D]/40 w-16"></div>
          </div>
          
          <h2 className="font-serif text-section mb-6 text-white">
            MORE THAN <br/>
            <span className="italic text-[#E4C477]">A SALON.</span>
          </h2>
          
          <p className="text-subheading font-serif italic text-[#A9A49A] mb-8">
            A place where your everyday look becomes your signature.
          </p>
          
          <p className="text-body text-[#F5F1E8]/70 font-light mb-12">
            Every style begins with understanding what makes you feel confident. From hair and beauty to makeup and grooming, every service is approached with attention to detail and a focus on your individual style.
          </p>
          
          <div className="flex gap-12 border-t border-white/10 pt-10">
            <div>
              <span className="block text-[#C99A3D] font-serif text-2xl mb-1">STYLE</span>
            </div>
            <div>
              <span className="block text-[#C99A3D] font-serif text-2xl mb-1">BEAUTY</span>
            </div>
            <div>
              <span className="block text-[#C99A3D] font-serif text-2xl mb-1">CONFIDENCE</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

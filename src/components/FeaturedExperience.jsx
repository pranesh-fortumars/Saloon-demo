import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { siteConfig } from '../config/siteConfig';

const FeaturedExperience = () => {
  const { scrollYProgress } = useScroll();
  // Parallax effect on the background image
  const y = useTransform(scrollYProgress, [0, 1], ['-10%', '10%']);
  
  const steps = ["CONSULT", "CREATE", "REFINE", "REVEAL"];

  return (
    <section id="experience" className="relative min-h-screen overflow-hidden flex items-center justify-center py-24">
      <motion.div 
        style={{ y }}
        className="absolute inset-0 z-0 h-[120%]"
      >
        <img 
          src={siteConfig.images.experience} 
          alt="Discover your signature style" 
          className="w-full h-full object-cover opacity-60"
          loading="lazy"
          decoding="async"
        />
        <div className="absolute inset-0 bg-[#0B1210]/40 mix-blend-multiply"></div>
      </motion.div>
      
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto w-full">
        <div className="flex items-center justify-center gap-4 mb-8">
          <span className="text-[#C99A3D] tracking-widest text-sm uppercase">03 / Experience</span>
        </div>
        
        <h2 className="font-serif text-section text-white mb-24 leading-tight">
          YOUR SIGNATURE <span className="italic font-light text-[#E4C477]">STYLE.</span>
        </h2>
        
        <div className="flex flex-col md:flex-row justify-center gap-8 md:gap-16">
          {steps.map((step, index) => (
            <motion.div 
              key={step}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true, margin: "-50px" }}
              className="flex flex-col items-center"
            >
              <span className="text-[#C99A3D] font-serif text-4xl mb-4 italic">0{index + 1}</span>
              <span className="text-[#F5F1E8] tracking-widest text-sm uppercase">{step}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedExperience;

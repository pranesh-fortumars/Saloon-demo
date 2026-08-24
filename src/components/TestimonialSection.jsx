import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { siteConfig } from '../config/siteConfig';

const TestimonialSection = () => {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((c) => (c + 1) % siteConfig.testimonials.length);
  const prev = () => setCurrent((c) => (c - 1 + siteConfig.testimonials.length) % siteConfig.testimonials.length);

  return (
    <section className="py-32 bg-[#101A17] text-center px-6 border-y border-[#C99A3D]/10">
      <div className="max-w-5xl mx-auto relative">
        <h2 className="text-[#C99A3D] tracking-widest text-sm uppercase mb-16">
          CLIENT EXPERIENCES
        </h2>

        <div className="relative h-[200px] md:h-[150px] flex items-center justify-center mb-12 overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="absolute w-full"
            >
              <h3 className="font-serif text-3xl md:text-5xl lg:text-6xl italic text-[#F5F1E8] leading-tight mb-8">
                "{siteConfig.testimonials[current].text}"
              </h3>
              <p className="text-[#A9A49A] tracking-widest text-sm uppercase">
                — {siteConfig.testimonials[current].author}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="flex items-center justify-center gap-8">
          <button 
            onClick={prev} 
            className="text-white/40 hover:text-[#C99A3D] transition-colors uppercase text-xs tracking-widest p-2"
            aria-label="Previous testimonial"
          >
            Prev
          </button>
          <div className="flex gap-3">
            {siteConfig.testimonials.map((_, i) => (
              <div 
                key={i} 
                className={`h-px transition-all duration-300 ${i === current ? 'w-12 bg-[#C99A3D]' : 'w-4 bg-white/20'}`}
              ></div>
            ))}
          </div>
          <button 
            onClick={next} 
            className="text-white/40 hover:text-[#C99A3D] transition-colors uppercase text-xs tracking-widest p-2"
            aria-label="Next testimonial"
          >
            Next
          </button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;

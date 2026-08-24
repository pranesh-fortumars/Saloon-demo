import React, { useState } from 'react';
import { siteConfig } from '../config/siteConfig';

const TestimonialSection = () => {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((c) => (c + 1) % siteConfig.testimonials.length);
  const prev = () => setCurrent((c) => (c - 1 + siteConfig.testimonials.length) % siteConfig.testimonials.length);

  return (
    <section className="py-24 bg-[#1A1A1A] text-center px-6">
      <div className="max-w-4xl mx-auto relative">
        <h3 className="font-serif text-3xl md:text-5xl italic text-[#F7E7CE] leading-relaxed mb-8">
          "{siteConfig.testimonials[current].text}"
        </h3>
        <p className="text-[#D4AF37] tracking-widest text-sm uppercase mb-12">
          — {siteConfig.testimonials[current].author}
        </p>

        <div className="flex items-center justify-center gap-6">
          <button onClick={prev} className="text-white/50 hover:text-white transition-colors uppercase text-xs tracking-widest">Prev</button>
          <div className="flex gap-2">
            {siteConfig.testimonials.map((_, i) => (
              <div key={i} className={`h-px w-8 transition-colors ${i === current ? 'bg-[#D4AF37]' : 'bg-white/20'}`}></div>
            ))}
          </div>
          <button onClick={next} className="text-white/50 hover:text-white transition-colors uppercase text-xs tracking-widest">Next</button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;

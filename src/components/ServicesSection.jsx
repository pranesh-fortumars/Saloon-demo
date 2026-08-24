import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { siteConfig } from '../config/siteConfig';
import { ArrowRight } from 'lucide-react';

const ServicesSection = () => {
  const [hoveredService, setHoveredService] = useState(siteConfig.services[0].imageKey);

  return (
    <section id="services" className="py-24 bg-[#1A1A1A] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
        
        <div className="flex items-center gap-4 mb-16">
          <span className="text-[#D4AF37] tracking-widest text-sm">02</span>
          <div className="h-px bg-[#D4AF37]/40 w-12"></div>
          <span className="text-white/60 tracking-widest text-sm uppercase">Services</span>
        </div>

        <div className="flex flex-col lg:flex-row gap-16">
          {/* Service List */}
          <div className="lg:w-1/2 flex flex-col justify-center">
            {siteConfig.services.map((service, index) => (
              <div 
                key={service.id}
                className="group border-b border-white/10 py-8 cursor-pointer relative"
                onMouseEnter={() => setHoveredService(service.imageKey)}
              >
                <div className="flex items-end justify-between relative z-10">
                  <div className="flex gap-6 items-baseline">
                    <span className="text-white/30 font-serif text-2xl group-hover:text-[#D4AF37] transition-colors">{service.id}</span>
                    <h4 className="font-serif text-4xl md:text-5xl text-white group-hover:text-[#F7E7CE] transition-colors">
                      {service.title}
                    </h4>
                  </div>
                  <ArrowRight className="text-white/0 group-hover:text-[#D4AF37] transition-all transform -translate-x-4 group-hover:translate-x-0" />
                </div>
                
                {/* Expandable Content (Desktop hover simulation via opacity/height or just visible items) */}
                <div className="overflow-hidden max-h-0 group-hover:max-h-40 transition-all duration-500 ease-in-out pl-12 mt-0 group-hover:mt-4">
                  <ul className="text-white/60 font-light flex gap-4 flex-wrap">
                    {service.items.map(item => (
                      <li key={item} className="after:content-['•'] after:mx-2 last:after:content-['']">{item}</li>
                    ))}
                  </ul>
                </div>
                
                {/* Gold hover line */}
                <div className="absolute bottom-0 left-0 h-[1px] w-0 bg-gradient-to-r from-[#D4AF37] to-transparent group-hover:w-full transition-all duration-700"></div>
              </div>
            ))}
          </div>

          {/* Dynamic Image */}
          <div className="lg:w-1/2 hidden lg:block relative h-[600px]">
            {Object.entries(siteConfig.images.services).map(([key, src]) => (
              <motion.img
                key={key}
                src={src}
                alt={`${key} service`}
                initial={{ opacity: 0 }}
                animate={{ opacity: hoveredService === key ? 1 : 0 }}
                transition={{ duration: 0.6 }}
                className="absolute inset-0 w-full h-full object-cover rounded-sm grayscale hover:grayscale-0 transition-all duration-500"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { siteConfig } from '../config/siteConfig';
import { ArrowRight } from 'lucide-react';
import ServiceDetailDrawer from './ServiceDetailDrawer';

const ServicesSection = () => {
  const [hoveredService, setHoveredService] = useState(siteConfig.services[0]);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [selectedService, setSelectedService] = useState(null);

  const handleServiceClick = (service) => {
    setSelectedService(service);
    setDrawerOpen(true);
  };

  return (
    <>
      <section id="services" className="py-24 bg-[#070908] relative overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-24">
          
          <div className="flex items-center gap-4 mb-16">
            <span className="text-[#C99A3D] tracking-widest text-sm">02 / SERVICES</span>
            <div className="h-px bg-[#C99A3D]/40 w-16"></div>
          </div>
          
          <h2 className="font-serif text-section text-white mb-16 hidden md:block">
            DESIGNED <span className="italic text-[#E4C477]">AROUND YOU.</span>
          </h2>

          <div className="flex flex-col lg:flex-row gap-16">
            {/* Service List */}
            <div className="lg:w-1/2 flex flex-col justify-center">
              {siteConfig.services.map((service) => (
                <div 
                  key={service.id}
                  className="group border-b border-white/10 py-10 cursor-pointer relative"
                  onMouseEnter={() => setHoveredService(service)}
                  onClick={() => handleServiceClick(service)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') handleServiceClick(service);
                  }}
                >
                  <div className="flex items-center justify-between relative z-10">
                    <div className="flex gap-8 items-baseline">
                      <span className="text-white/20 font-serif text-3xl group-hover:text-[#C99A3D] transition-colors">{service.id}</span>
                      <h3 className="font-serif text-4xl md:text-5xl text-[#F5F1E8] group-hover:text-[#E4C477] transition-colors">
                        {service.title}
                      </h3>
                    </div>
                    <ArrowRight className="text-white/30 group-hover:text-[#C99A3D] transition-all transform -translate-x-4 group-hover:translate-x-0" />
                  </div>
                  
                  {/* Gold hover line */}
                  <div className="absolute bottom-0 left-0 h-[1px] w-0 bg-[#C99A3D] group-hover:w-full transition-all duration-700 ease-out"></div>
                </div>
              ))}
            </div>

            {/* Dynamic Image */}
            <div className="lg:w-1/2 relative h-[500px] md:h-[600px] lg:h-[700px] overflow-hidden rounded-sm">
              <AnimatePresence mode="wait">
                <motion.img
                  key={hoveredService.id}
                  src={siteConfig.images.services[hoveredService.imageKey]}
                  alt={`${hoveredService.title} service`}
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.6 }}
                  className="absolute inset-0 w-full h-full object-cover"
                  loading="lazy"
                  decoding="async"
                />
              </AnimatePresence>
              <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500 pointer-events-none"></div>
            </div>
          </div>
        </div>
      </section>

      <ServiceDetailDrawer 
        isOpen={drawerOpen} 
        onClose={() => setDrawerOpen(false)} 
        service={selectedService} 
      />
    </>
  );
};

export default ServicesSection;

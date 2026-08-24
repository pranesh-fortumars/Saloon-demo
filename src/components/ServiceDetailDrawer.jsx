import React, { useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, X } from 'lucide-react';

const ServiceDetailDrawer = ({ isOpen, onClose, service }) => {
  const drawerRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      // Focus management
      if (drawerRef.current) {
        drawerRef.current.focus();
      }
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [isOpen, onClose]);

  if (!service) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100]"
            onClick={onClose}
          />
          
          {/* Drawer */}
          <motion.div
            ref={drawerRef}
            tabIndex={-1}
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.4, ease: [0.25, 1, 0.5, 1] }}
            className="fixed top-0 right-0 bottom-0 w-full md:w-[500px] bg-[#101A17] z-[110] border-l border-[#C99A3D]/20 shadow-2xl overflow-y-auto flex flex-col focus:outline-none"
            role="dialog"
            aria-modal="true"
            aria-labelledby="drawer-title"
          >
            <div className="p-8 flex justify-between items-center border-b border-white/5 sticky top-0 bg-[#101A17]/90 backdrop-blur-md z-10">
              <span className="text-[#C99A3D] font-serif tracking-widest text-sm">SERVICE DETAILS</span>
              <button 
                onClick={onClose}
                className="text-white/60 hover:text-white transition-colors p-2"
                aria-label="Close drawer"
              >
                <X size={24} />
              </button>
            </div>
            
            <div className="p-8 flex-grow">
              <h2 id="drawer-title" className="font-serif text-4xl text-white mb-2">{service.title} SERVICES</h2>
              <p className="text-[#A9A49A] mb-12 font-light">Select a service to proceed with booking.</p>
              
              <div className="flex flex-col gap-2">
                {service.items.map((item, i) => (
                  <div key={i} className="group flex justify-between items-center py-6 border-b border-white/10 hover:border-[#C99A3D]/50 transition-colors cursor-pointer">
                    <span className="text-lg text-[#F5F1E8] group-hover:text-[#E4C477] transition-colors">{item}</span>
                    <ArrowRight size={18} className="text-[#C99A3D] opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                  </div>
                ))}
              </div>
            </div>
            
            <div className="p-8 border-t border-white/5 sticky bottom-0 bg-[#101A17]">
              <a 
                href="#booking"
                onClick={onClose}
                className="block w-full text-center bg-[#C99A3D] text-[#070908] font-semibold tracking-widest text-sm px-8 py-5 hover:bg-[#E4C477] transition-colors"
              >
                BOOK THIS SERVICE
              </a>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default ServiceDetailDrawer;

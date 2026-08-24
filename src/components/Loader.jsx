import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { siteConfig } from '../config/siteConfig';

const Loader = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Very short loading sequence as requested
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1200); // 1.2s max, just enough to show the brand

    // If document is fully loaded before timer, we could hide it earlier,
    // but the prompt asked for a very short branded sequence.
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div 
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="fixed inset-0 z-[200] bg-[#0B1210] flex flex-col items-center justify-center"
        >
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="flex flex-col items-center gap-6"
          >
            <h1 className="font-serif text-3xl tracking-widest text-[#E4C477]">
              {siteConfig.brand.name}
            </h1>
            
            <div className="relative w-48 h-px bg-white/10 overflow-hidden">
              <motion.div 
                initial={{ x: '-100%' }}
                animate={{ x: '100%' }}
                transition={{ duration: 1, ease: "easeInOut" }}
                className="absolute inset-0 bg-[#C99A3D]"
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Loader;

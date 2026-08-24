import React, { useState, useRef, useEffect, useCallback } from 'react';
import { siteConfig } from '../config/siteConfig';

const BeforeAfterSection = () => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef(null);

  const handleMove = useCallback((clientX) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    const percent = Math.max(0, Math.min((x / rect.width) * 100, 100));
    setSliderPosition(percent);
  }, []);

  const onMouseMove = useCallback((e) => {
    if (isDragging) handleMove(e.clientX);
  }, [isDragging, handleMove]);

  const onTouchMove = useCallback((e) => {
    if (isDragging) handleMove(e.touches[0].clientX);
  }, [isDragging, handleMove]);

  const onMouseUp = useCallback(() => {
    setIsDragging(false);
  }, []);

  useEffect(() => {
    if (isDragging) {
      window.addEventListener('mousemove', onMouseMove);
      window.addEventListener('mouseup', onMouseUp);
      window.addEventListener('touchmove', onTouchMove, { passive: false });
      window.addEventListener('touchend', onMouseUp);
    }
    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', onMouseUp);
      window.removeEventListener('touchmove', onTouchMove);
      window.removeEventListener('touchend', onMouseUp);
    };
  }, [isDragging, onMouseMove, onMouseUp, onTouchMove]);

  return (
    <section className="py-24 bg-[#0B1210]">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-24">
        <h2 className="font-serif text-section text-center text-white mb-16">
          THE <span className="italic text-[#E4C477]">TRANSFORMATION</span>
        </h2>

        <div 
          ref={containerRef}
          className="relative w-full max-w-5xl mx-auto aspect-[4/3] md:aspect-[16/9] overflow-hidden select-none cursor-ew-resize group"
          onMouseDown={(e) => {
            setIsDragging(true);
            handleMove(e.clientX);
          }}
          onTouchStart={(e) => {
            setIsDragging(true);
            handleMove(e.touches[0].clientX);
          }}
        >
          {/* After Image (Background) */}
          <img 
            src={siteConfig.images.after} 
            alt="After styling" 
            className="absolute inset-0 w-full h-full object-cover"
            loading="lazy"
            decoding="async"
            draggable="false"
          />
          <div className="absolute top-6 right-6 bg-[#0B1210]/60 backdrop-blur-sm px-4 py-2 border border-[#C99A3D]/30 text-[#C99A3D] text-xs tracking-widest uppercase">
            After
          </div>

          {/* Before Image (Foreground overlay) */}
          <div 
            className="absolute inset-0 w-full h-full overflow-hidden"
            style={{ width: `${sliderPosition}%` }}
          >
            <img 
              src={siteConfig.images.before} 
              alt="Before styling" 
              className="absolute inset-0 w-[100vw] max-w-[1400px] h-full object-cover"
              style={{ width: containerRef.current?.offsetWidth || '100%' }}
              loading="lazy"
              decoding="async"
              draggable="false"
            />
            <div className="absolute top-6 left-6 bg-[#0B1210]/60 backdrop-blur-sm px-4 py-2 border border-white/30 text-white text-xs tracking-widest uppercase">
              Before
            </div>
          </div>

          {/* Slider Handle */}
          <div 
            className="absolute top-0 bottom-0 w-1 bg-[#C99A3D] cursor-ew-resize flex items-center justify-center transform -translate-x-1/2"
            style={{ left: `${sliderPosition}%` }}
          >
            <div className="w-10 h-10 rounded-full bg-[#101A17] border-2 border-[#C99A3D] flex items-center justify-center shadow-[0_0_20px_rgba(201,154,61,0.3)] transition-transform group-hover:scale-110">
              <div className="flex gap-1">
                <div className="w-1 h-3 bg-[#C99A3D] rounded-full"></div>
                <div className="w-1 h-3 bg-[#C99A3D] rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BeforeAfterSection;

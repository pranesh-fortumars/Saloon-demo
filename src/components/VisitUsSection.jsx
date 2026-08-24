import React from 'react';
import { siteConfig } from '../config/siteConfig';

const VisitUsSection = () => {
  return (
    <section id="contact" className="py-24 bg-[#0B1210]">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-24">
        <h2 className="font-serif text-4xl md:text-5xl text-white mb-16 text-center md:text-left">
          VISIT <span className="italic text-[#E4C477]">US</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 border-t border-[#C99A3D]/20 pt-16">
          
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <h3 className="text-[#C99A3D] tracking-widest text-sm uppercase mb-6">Phone</h3>
            {siteConfig.contact.phones.map(phone => (
              <a key={phone} href={`tel:${phone.replace(/\s/g, '')}`} className="font-serif text-2xl text-[#F5F1E8] hover:text-[#C99A3D] transition-colors mb-2 block">
                {phone}
              </a>
            ))}
          </div>

          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <h3 className="text-[#C99A3D] tracking-widest text-sm uppercase mb-6">Hours</h3>
            <p className="text-[#A9A49A] font-light">
              {siteConfig.contact.hours}
            </p>
          </div>

          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <h3 className="text-[#C99A3D] tracking-widest text-sm uppercase mb-6">Location</h3>
            <p className="text-[#A9A49A] font-light">
              {siteConfig.contact.address}
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default VisitUsSection;

import React from 'react';
import { siteConfig } from '../config/siteConfig';

const VisitUsSection = () => {
  return (
    <section id="contact" className="py-24 bg-[#0B1210]">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-24">
        <h2 className="font-serif text-4xl md:text-5xl text-white mb-16 text-center md:text-left">
          VISIT <span className="italic text-[#E4C477]">US</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 border-t border-[#C99A3D]/20 pt-16 mb-16">
          
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

        {/* Google Maps Embed */}
        <div className="w-full h-[400px] border border-white/10 filter grayscale contrast-125 opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-700">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3023.364434234567!2d-74.0016335!3d40.7265147!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2598f988156a9%3A0xd54629bdf9d61d68!2sSoHo%2C%20New%20York%2C%20NY!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="Salon Location"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default VisitUsSection;

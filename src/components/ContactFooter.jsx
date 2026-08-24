import React from 'react';
import { siteConfig } from '../config/siteConfig';

const ContactFooter = () => {
  return (
    <footer className="bg-[#070908] pt-16 pb-8 px-6 md:px-12 border-t border-[#C99A3D]/20">
      <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-12 mb-16">
        <div>
          <h2 className="font-serif text-3xl text-[#E4C477] mb-2">{siteConfig.brand.name}</h2>
          <p className="text-[#A9A49A] font-light text-xs tracking-widest uppercase">Hair • Beauty • Makeup • Grooming</p>
        </div>

        <nav className="flex flex-wrap gap-x-8 gap-y-4 text-xs tracking-widest text-[#F5F1E8]/70 uppercase">
          <a href="#" className="hover:text-[#C99A3D] transition-colors">HOME</a>
          <a href="#about" className="hover:text-[#C99A3D] transition-colors">ABOUT</a>
          <a href="#services" className="hover:text-[#C99A3D] transition-colors">SERVICES</a>
          <a href="#experience" className="hover:text-[#C99A3D] transition-colors">EXPERIENCE</a>
          <a href="#gallery" className="hover:text-[#C99A3D] transition-colors">GALLERY</a>
          <a href="#contact" className="hover:text-[#C99A3D] transition-colors">CONTACT</a>
        </nav>

        <div className="text-left md:text-right">
          {siteConfig.contact.phones.map(phone => (
            <p key={phone} className="text-[#F5F1E8] font-sans font-light tracking-wide text-xl mb-1">{phone}</p>
          ))}
          <a href="#booking" className="text-[#C99A3D] text-xs tracking-widest uppercase hover:text-white transition-colors mt-2 inline-block">
            BOOK AN APPOINTMENT
          </a>
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto pt-8 border-t border-white/5 text-[#A9A49A] text-[10px] tracking-widest uppercase flex flex-col sm:flex-row justify-between items-center gap-4">
        <p>© {new Date().getFullYear()} {siteConfig.brand.name}</p>
      </div>
    </footer>
  );
};

export default ContactFooter;

import React from 'react';
import { siteConfig } from '../config/siteConfig';

const ContactFooter = () => {
  return (
    <footer id="contact" className="pt-24 pb-8 px-6 md:px-12 border-t border-white/10 text-center md:text-left">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12 mb-16">
        <div>
          <h2 className="font-serif text-3xl text-[#F7E7CE] mb-2">{siteConfig.brand.name}</h2>
          <p className="text-white/50 font-light text-sm tracking-widest">Hair • Beauty • Makeup</p>
        </div>

        <div className="text-center">
          <h3 className="font-serif text-4xl lg:text-5xl mb-6">READY FOR YOUR NEXT LOOK?</h3>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={`tel:${siteConfig.contact.phones[0].replace(/\s/g, '')}`} className="bg-[#D4AF37] text-[#111111] font-semibold tracking-widest text-sm px-8 py-4 hover:bg-[#F7E7CE] transition-colors inline-block text-center cursor-pointer">
              CALL NOW
            </a>
            <a href="#booking" className="border border-white/30 text-white font-semibold tracking-widest text-sm px-8 py-4 hover:border-white transition-colors inline-block text-center cursor-pointer">
              BOOK AN APPOINTMENT
            </a>
          </div>
        </div>

        <div className="text-right">
          <p className="text-white/70 mb-2 font-light">Call Us</p>
          {siteConfig.contact.phones.map(phone => (
            <p key={phone} className="text-[#D4AF37] font-serif text-xl">{phone}</p>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/5 text-white/30 text-xs tracking-widest uppercase">
        <p>© {new Date().getFullYear()} {siteConfig.brand.name}</p>
        <div className="flex gap-6 mt-4 md:mt-0">
          <a href="#" className="hover:text-[#D4AF37]">Privacy Policy</a>
          <a href="#" className="hover:text-[#D4AF37]">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

export default ContactFooter;

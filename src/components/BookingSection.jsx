import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { siteConfig } from '../config/siteConfig';

const BookingSection = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    service: '',
    date: '',
    time: '',
    name: '',
    phone: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const nextStep = () => setStep(s => Math.min(s + 1, 4));
  const prevStep = () => setStep(s => Math.max(s - 1, 1));

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const handleWhatsApp = () => {
    const text = `Hello, I would like to book an appointment at ${siteConfig.brand.name}.%0A%0AService: ${formData.service || '[Not selected]'}%0ADate: ${formData.date || '[Not selected]'}%0ATime: ${formData.time || '[Not selected]'}%0AName: ${formData.name || '[Not provided]'}`;
    window.open(`https://wa.me/${siteConfig.contact.whatsapp}?text=${text}`, '_blank');
  };

  const servicesList = siteConfig.services.flatMap(s => s.items);
  const times = ["10:00 AM", "11:30 AM", "01:00 PM", "03:00 PM", "05:00 PM", "06:30 PM"];

  return (
    <section id="booking" className="py-32 bg-[#070908] px-6 md:px-12 border-y border-white/5">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-serif text-4xl md:text-6xl text-center text-white mb-4">
          BOOK YOUR <span className="italic text-[#E4C477]">APPOINTMENT</span>
        </h2>
        <p className="text-center text-[#A9A49A] mb-16 font-light">Secure your preferred time for a signature experience.</p>

        {isSubmitted ? (
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-[#101A17] border border-[#C99A3D]/30 p-12 text-center"
          >
            <h3 className="font-serif text-3xl text-[#C99A3D] mb-4">REQUEST RECEIVED</h3>
            <p className="text-[#F5F1E8] font-light mb-8">
              Your appointment request has been received. Our team will contact you shortly to confirm your booking.
            </p>
            <button 
              onClick={() => { setIsSubmitted(false); setStep(1); }}
              className="border border-[#C99A3D] text-[#C99A3D] px-8 py-3 text-sm tracking-widest hover:bg-[#C99A3D] hover:text-[#0B1210] transition-colors"
            >
              BOOK ANOTHER SERVICE
            </button>
          </motion.div>
        ) : (
          <div className="bg-[#101A17] border border-white/10 p-6 md:p-12 relative overflow-hidden">
            
            {/* Progress Bar */}
            <div className="flex justify-between mb-12 relative">
              <div className="absolute top-1/2 left-0 right-0 h-[1px] bg-white/10 -z-10 -translate-y-1/2"></div>
              <div 
                className="absolute top-1/2 left-0 h-[1px] bg-[#C99A3D] -z-10 -translate-y-1/2 transition-all duration-500"
                style={{ width: `${((step - 1) / 3) * 100}%` }}
              ></div>
              
              {[1, 2, 3, 4].map(num => (
                <div 
                  key={num} 
                  className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-serif transition-colors duration-500 ${
                    step >= num ? 'bg-[#C99A3D] text-[#070908]' : 'bg-[#0B1210] border border-white/20 text-white/50'
                  }`}
                >
                  {num}
                </div>
              ))}
            </div>

            <form onSubmit={handleSubmit} className="min-h-[250px] relative">
              <AnimatePresence mode="wait">
                {step === 1 && (
                  <motion.div key="step1" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.3 }}>
                    <h3 className="text-[#E4C477] tracking-widest uppercase text-sm mb-6">Step 1: Select Service</h3>
                    <select 
                      name="service" 
                      value={formData.service} 
                      onChange={handleChange}
                      className="w-full bg-[#0B1210] border border-white/20 text-white p-4 focus:outline-none focus:border-[#C99A3D] appearance-none cursor-pointer rounded-none"
                      required
                    >
                      <option value="" disabled>Choose a service...</option>
                      {servicesList.map(s => <option key={s} value={s}>{s}</option>)}
                    </select>
                  </motion.div>
                )}

                {step === 2 && (
                  <motion.div key="step2" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.3 }}>
                    <h3 className="text-[#E4C477] tracking-widest uppercase text-sm mb-6">Step 2: Preferred Date</h3>
                    <input 
                      type="date" 
                      name="date" 
                      value={formData.date} 
                      onChange={handleChange}
                      className="w-full bg-[#0B1210] border border-white/20 text-white p-4 focus:outline-none focus:border-[#C99A3D] rounded-none"
                      required
                    />
                  </motion.div>
                )}

                {step === 3 && (
                  <motion.div key="step3" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.3 }}>
                    <h3 className="text-[#E4C477] tracking-widest uppercase text-sm mb-6">Step 3: Preferred Time</h3>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                      {times.map(t => (
                        <button 
                          key={t}
                          type="button"
                          onClick={() => setFormData({ ...formData, time: t })}
                          className={`p-4 border text-sm tracking-widest transition-colors ${
                            formData.time === t ? 'border-[#C99A3D] bg-[#C99A3D]/10 text-[#C99A3D]' : 'border-white/10 text-white/70 hover:border-[#C99A3D]/50'
                          }`}
                        >
                          {t}
                        </button>
                      ))}
                    </div>
                  </motion.div>
                )}

                {step === 4 && (
                  <motion.div key="step4" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.3 }}>
                    <h3 className="text-[#E4C477] tracking-widest uppercase text-sm mb-6">Step 4: Your Details</h3>
                    <div className="space-y-4">
                      <input type="text" name="name" placeholder="Full Name" value={formData.name} onChange={handleChange} className="w-full bg-[#0B1210] border border-white/20 text-white p-4 focus:outline-none focus:border-[#C99A3D] rounded-none" required />
                      <input type="tel" name="phone" placeholder="Phone Number" value={formData.phone} onChange={handleChange} className="w-full bg-[#0B1210] border border-white/20 text-white p-4 focus:outline-none focus:border-[#C99A3D] rounded-none" required />
                      <textarea name="message" placeholder="Optional Message" value={formData.message} onChange={handleChange} className="w-full bg-[#0B1210] border border-white/20 text-white p-4 focus:outline-none focus:border-[#C99A3D] min-h-[100px] resize-none rounded-none" />
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              <div className="mt-12 flex justify-between items-center border-t border-white/10 pt-8">
                {step > 1 ? (
                  <button type="button" onClick={prevStep} className="text-white/50 hover:text-white uppercase text-xs tracking-widest p-2">Back</button>
                ) : <div></div>}
                
                {step < 4 ? (
                  <button 
                    type="button" 
                    onClick={nextStep}
                    disabled={
                      (step === 1 && !formData.service) ||
                      (step === 2 && !formData.date) ||
                      (step === 3 && !formData.time)
                    }
                    className="bg-[#C99A3D] text-[#0B1210] px-8 py-3 font-semibold tracking-widest text-xs disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    NEXT STEP
                  </button>
                ) : (
                  <button type="submit" className="bg-[#C99A3D] text-[#0B1210] px-8 py-3 font-semibold tracking-widest text-xs hover:bg-[#E4C477] transition-colors">
                    REQUEST APPOINTMENT
                  </button>
                )}
              </div>
            </form>
          </div>
        )}

        <div className="mt-12 text-center flex flex-col items-center">
          <p className="text-white/50 text-sm mb-4">Prefer to book via WhatsApp?</p>
          <button 
            onClick={handleWhatsApp}
            className="flex items-center gap-2 border border-[#25D366]/30 text-[#25D366] px-8 py-4 tracking-widest text-sm hover:bg-[#25D366]/10 transition-colors"
          >
            BOOK VIA WHATSAPP
          </button>
        </div>
      </div>
    </section>
  );
};

export default BookingSection;

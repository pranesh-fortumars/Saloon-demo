import React from 'react';

const WhyChooseUs = () => {
  const features = [
    { num: "01", title: "PERSONALIZED STYLING", desc: "Services tailored to your preferred look and personality." },
    { num: "02", title: "HAIR & BEAUTY", desc: "A complete range of hair and beauty experiences." },
    { num: "03", title: "UNISEX EXPERIENCE", desc: "A welcoming styling experience designed for everyone." },
    { num: "04", title: "ATTENTION TO DETAIL", desc: "A refined approach to every appointment." }
  ];

  return (
    <section className="py-24 bg-[#101A17] border-y border-[#C99A3D]/10">
      <div className="px-6 md:px-12 lg:px-24 max-w-[1400px] mx-auto">
        <h3 className="font-serif text-3xl md:text-5xl text-center text-white mb-20 italic">
          Why Choose Us
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {features.map(f => (
            <div key={f.num} className="flex flex-col border-t border-[#C99A3D]/30 pt-6">
              <span className="text-[#C99A3D] font-serif text-2xl mb-4 block">{f.num}</span>
              <h4 className="text-white tracking-widest text-sm uppercase mb-3">{f.title}</h4>
              <p className="text-[#A9A49A] text-body font-light">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;

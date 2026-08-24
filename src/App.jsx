import React from 'react'

function App() {
  return (
    <div className="min-h-screen">
      <header className="fixed top-0 w-full z-50 py-6 px-8 flex justify-between items-center backdrop-blur-md bg-[#111111]/80 border-b border-[#D4AF37]/20">
        <h1 className="font-serif text-2xl tracking-widest text-[#F7E7CE]">UNISEX SALON</h1>
        <nav className="hidden md:flex gap-8 text-sm tracking-widest text-[#FAFAFA]/80">
          <a href="#" className="hover:text-[#D4AF37] transition-colors">HOME</a>
          <a href="#" className="hover:text-[#D4AF37] transition-colors">ABOUT</a>
          <a href="#" className="hover:text-[#D4AF37] transition-colors">SERVICES</a>
          <a href="#" className="hover:text-[#D4AF37] transition-colors">GALLERY</a>
          <a href="#" className="hover:text-[#D4AF37] transition-colors">CONTACT</a>
        </nav>
        <button className="hidden md:block text-xs font-semibold tracking-widest px-6 py-3 border border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-[#111111] transition-all">
          BOOK NOW
        </button>
      </header>

      <main>
        <section className="relative h-screen flex items-center justify-center pt-20">
          <div className="absolute inset-0 z-0">
            <img 
              src="https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&q=80&w=2000" 
              alt="Luxury Salon Background" 
              className="w-full h-full object-cover opacity-30"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[#111111]/50 to-[#111111]"></div>
          </div>
          
          <div className="relative z-10 text-center px-4 max-w-4xl mx-auto flex flex-col items-center">
            <span className="text-[#D4AF37] text-sm md:text-base tracking-[0.3em] font-medium mb-6">
              UNISEX SALON
            </span>
            <h2 className="font-serif text-5xl md:text-7xl lg:text-8xl leading-tight mb-8">
              YOUR STYLE. <br/>
              <span className="italic font-light text-[#F7E7CE]">YOUR SIGNATURE.</span>
            </h2>
            <p className="text-lg md:text-xl text-[#FAFAFA]/70 font-light max-w-2xl mx-auto mb-12">
              Hair, beauty, styling and grooming designed around you.
            </p>
            <div className="flex flex-col sm:flex-row gap-6">
              <button className="bg-[#D4AF37] text-[#111111] font-semibold tracking-widest text-sm px-8 py-4 hover:bg-[#F7E7CE] transition-colors">
                BOOK AN APPOINTMENT
              </button>
              <button className="border border-white/30 text-white font-semibold tracking-widest text-sm px-8 py-4 hover:border-white transition-colors">
                EXPLORE SERVICES
              </button>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default App

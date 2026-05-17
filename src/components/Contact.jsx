import React from 'react';
import { ArrowUpRight, ArrowUp, Mail } from 'lucide-react';

const Contact = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contact" className="bg-dark pb-6 px-3 md:px-4 flex flex-col items-center">
      <div className="w-full max-w-[1800px] mx-auto">
        
        {/* Contact Banner */}
        <div className="bg-dark-card rounded-[2rem] py-8 px-8 md:px-10 flex flex-col xl:flex-row items-center justify-between gap-8 mb-5 shadow-xl">
          
          <div className="flex flex-col items-center text-center xl:text-left xl:items-start gap-2 shrink-0">
            <h2 className="text-xl md:text-[26px] font-sans font-medium leading-tight tracking-wide">
              <span className="text-[var(--color-text-light)]">¿TIENES UN PROYECTO</span><br/>
              <span className="text-[#a855f7]">EN MENTE?</span>
            </h2>
            {/* Squiggle SVG */}
            <svg width="80" height="12" viewBox="0 0 80 12" fill="none" stroke="#a855f7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mt-1">
              <path d="M2 6 Q 6 1, 10 6 T 18 6 T 26 6 T 34 6 T 42 6 T 50 6 T 58 6 T 66 6 T 74 6"></path>
            </svg>
          </div>

          <div className="max-w-md text-center xl:text-left">
            <p className="text-gray-400 font-outfit text-xs md:text-[13px] leading-relaxed">
              Trabajo integrando estrategia, comunicación y diseño para desarrollar soluciones digitales que generen impacto.
            </p>
          </div>

          <div className="flex flex-wrap justify-center xl:justify-end items-center gap-3 sm:gap-4 shrink-0">
            <a 
              href="https://wa.me/51907459557"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center gap-2 bg-gradient-to-r from-[#9b51e0] to-[#c77dff] hover:opacity-90 text-[var(--color-text-light)] px-6 py-3 md:py-3.5 rounded-xl font-sans font-bold text-[10px] md:text-xs tracking-widest uppercase transition-all duration-300"
            >
              HABLEMOS
              <ArrowUpRight size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </a>

            {/* Social Icons inside circles */}
            <div className="flex items-center gap-2 sm:gap-3">
              {/* WhatsApp */}
              <a href="https://wa.me/51907459557" target="_blank" rel="noopener noreferrer" className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center border border-white/10 rounded-full text-white hover:bg-white/5 transition-colors">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
                </svg>
              </a>
              {/* Email */}
              <a href="mailto:mitzi.ip20@gmail.com" className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center border border-white/10 rounded-full text-white hover:bg-white/5 transition-colors">
                <Mail size={20} strokeWidth={1.5} />
              </a>
              {/* Instagram */}
              <a href="https://instagram.com/mitziparraguirre" target="_blank" rel="noopener noreferrer" className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center border border-white/10 rounded-full text-white hover:bg-white/5 transition-colors">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
              {/* LinkedIn */}
              <a href="https://linkedin.com/in/mitziparraguirre" target="_blank" rel="noopener noreferrer" className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center border border-white/10 rounded-full text-white hover:bg-white/5 transition-colors">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
              {/* Peace Sign Square */}
              <div className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center bg-[#a855f7] rounded-[10px] text-white">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M14 6l-2-2-2 2"></path><path d="M14 12V6a2 2 0 0 0-4 0v6"></path><path d="M10 18A6 6 0 1 1 10 6"></path>
                  {/* Simplified Peace Hand Sign representation */}
                  <path d="M8 13V5a2 2 0 0 1 4 0v3"></path>
                  <path d="M12 8V4a2 2 0 0 1 4 0v6"></path>
                  <path d="M16 10v4"></path>
                  <path d="M19 14v2a5 5 0 0 1-10 0v-6"></path>
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer Section (Kept from original) */}
        <div className="pt-6 flex flex-col md:flex-row items-center justify-between gap-6 px-4 border-t border-white/5">
          
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6">
            <div className="flex items-center gap-3">
              <span className="text-[28px] font-display text-primary-light leading-none tracking-tight">MI</span>
              <span className="text-[var(--color-text-light)] font-outfit font-bold text-[10px] md:text-[11px] tracking-widest uppercase mt-1">MITZI IPARRAGUIRRE</span>
            </div>
            
            <div className="hidden md:block w-[1px] h-4 bg-white/20"></div>
            
            <span className="text-gray-500 font-outfit text-[9px] md:text-[10px] font-light">
              © 2026 Todos los derechos reservados.
            </span>
          </div>

          <div className="flex items-center gap-8">
            <button
              onClick={scrollToTop}
              className="w-10 h-10 rounded-full bg-primary-light text-dark flex items-center justify-center hover:bg-white transition-colors group"
            >
              <ArrowUp size={18} strokeWidth={2} className="group-hover:-translate-y-1 transition-transform" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Contact;

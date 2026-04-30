import React from 'react';
import { ArrowUpRight, ArrowUp } from 'lucide-react';

const Contact = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contact" className="bg-black pt-12 pb-6 border-t border-white/5">
      <div className="container mx-auto px-4 md:px-8">
        
        {/* Contact Banner */}
        <div className="bg-[radial-gradient(ellipse_at_left,_var(--tw-gradient-stops))] from-[#1a0833] via-[#050505] to-black rounded-none md:rounded-xl py-10 px-4 md:px-12 flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12 mb-10 relative overflow-hidden">
          
          {/* Subtle Glow Overlay */}
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-primary/5 to-transparent pointer-events-none"></div>

          <div className="flex flex-col md:flex-row items-center md:items-start gap-6 lg:gap-10 z-10 w-full lg:w-auto">
            
            {/* Sparkle Icon */}
            <div className="hidden md:flex items-center justify-center text-white/80 mt-1">
              <svg width="45" height="45" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="drop-shadow-[0_0_15px_rgba(255,255,255,0.4)]">
                <path d="M12 2v20M2 12h20" stroke="white" strokeWidth="0.5" />
                <path d="M12 2C12 7.5 7.5 12 2 12C7.5 12 12 16.5 12 22C12 16.5 16.5 12 22 12C16.5 12 12 7.5 12 2Z" fill="white" stroke="none" />
              </svg>
            </div>

            {/* Main Headline */}
            <div className="text-center md:text-left">
              <h2 className="text-2xl md:text-[2rem] font-display font-bold leading-tight">
                <span className="text-white block tracking-wide">¿TIENES UN PROYECTO</span>
                <span className="text-primary block tracking-wide">EN MENTE?</span>
              </h2>
            </div>

            {/* Vertical Divider */}
            <div className="hidden md:block w-[1px] h-12 bg-white/20 mx-2 mt-2"></div>

            {/* Subtext */}
            <div className="max-w-[220px] text-center md:text-left mt-2 md:mt-0">
              <p className="text-gray-400 font-outfit text-xs font-light leading-relaxed">
                Hablemos sobre cómo puedo ayudarte a llevar tu marca al <span className="text-primary font-medium">siguiente nivel.</span>
              </p>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto z-10">
            <a 
              href="https://wa.me/51907459557"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center gap-2 bg-[#6b21a8] hover:bg-primary text-white px-8 py-3.5 rounded-md font-outfit font-bold text-[10px] tracking-widest uppercase transition-all duration-300 min-w-[200px]"
            >
              {/* WhatsApp SVG Icon */}
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
              </svg>
              WHATSAPP
              <ArrowUpRight size={14} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </a>

            <a
              href="mailto:your@email.com"
              className="group flex items-center justify-center gap-2 border border-white/20 hover:border-white text-white px-8 py-3.5 rounded-md font-outfit font-bold text-[10px] tracking-widest uppercase transition-all duration-300 min-w-[200px]"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="4" width="20" height="16" rx="2" ry="2"></rect>
                <path d="M2 4l10 8 10-8"></path>
              </svg>
              ENVIAR EMAIL
            </a>
          </div>
        </div>

        {/* Bottom Footer Section */}
        <div className="pt-6 flex flex-col md:flex-row items-center justify-between gap-6 px-2 border-t border-white/5">
          
          {/* Left Side: Logo & Copyright */}
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6">
            <div className="flex items-center gap-3">
              <span className="text-[28px] font-display text-[#7c3aed] leading-none tracking-tight">MI</span>
              <span className="text-white font-outfit font-bold text-[10px] md:text-[11px] tracking-widest uppercase mt-1">MITZI IPARRAGUIRRE</span>
            </div>
            
            <div className="hidden md:block w-[1px] h-4 bg-white/20"></div>
            
            <span className="text-gray-500 font-outfit text-[9px] md:text-[10px] font-light">
              © 2026 Todos los derechos reservados.
            </span>
          </div>

          {/* Right Side: Social Icons & Scroll to Top */}
          <div className="flex items-center gap-8">
            {/* Social Icons */}
            <div className="flex items-center gap-6">
              <a href="#" className="text-primary hover:text-white transition-colors">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
              <a href="#" className="text-primary hover:text-white transition-colors">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
              <a href="#" className="text-primary hover:text-white transition-colors">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="4" width="20" height="16" rx="2" ry="2"></rect><path d="M2 4l10 8 10-8"></path>
                </svg>
              </a>
            </div>

            {/* Scroll up button */}
            <button
              onClick={scrollToTop}
              className="w-8 h-8 rounded-full bg-[#7c3aed] text-white flex items-center justify-center hover:bg-white hover:text-[#7c3aed] transition-all shadow-[0_0_15px_rgba(124,58,237,0.3)] group"
            >
              <ArrowUp size={16} strokeWidth={2} className="group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Contact;

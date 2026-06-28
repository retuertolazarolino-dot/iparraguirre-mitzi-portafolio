import React, { useState } from 'react';
import { ArrowUpRight, ArrowUp, Mail, X } from 'lucide-react';

const Contact = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({ name: '', subject: '', message: '' });

  const handleWhatsAppSubmit = (e) => {
    e.preventDefault();
    const text = `Hola Mitzi, soy ${formData.name}. Estoy interesado(a) en: ${formData.subject}. \n\n${formData.message}`;
    const url = `https://wa.me/51907459557?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
    setIsModalOpen(false);
    setFormData({ name: '', subject: '', message: '' });
  };

  return (
    <footer id="contact" className="bg-dark pb-6 px-3 md:px-4 flex flex-col items-center">
      <div className="w-full max-w-[1800px] mx-auto">
        
        {/* Contact Banner */}
        <div className="bg-dark-card rounded-[2rem] py-8 px-8 md:px-10 flex flex-col xl:flex-row items-center xl:items-start justify-between gap-6 xl:gap-8 mb-5 shadow-xl">
          
          {/* 1. Título */}
          <div className="flex flex-col items-center text-center xl:text-left xl:items-start gap-2 shrink-0 xl:w-1/4">
            <h2 className="text-xl md:text-[22px] lg:text-[26px] font-sans font-medium leading-tight tracking-wide">
              <span className="text-[var(--color-text-light)]">¿TIENES UNA IDEA</span><br/>
              <span className="text-[#a855f7]">O UN NUEVO RETO?</span>
            </h2>
            {/* Squiggle SVG */}
            <svg width="80" height="12" viewBox="0 0 80 12" fill="none" stroke="#a855f7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mt-1">
              <path d="M2 6 Q 6 1, 10 6 T 18 6 T 26 6 T 34 6 T 42 6 T 50 6 T 58 6 T 66 6 T 74 6"></path>
            </svg>
          </div>

          {/* 2. Primer Párrafo */}
          <div className="text-center xl:text-left xl:w-1/4">
            <p className="text-gray-400 font-outfit text-[13px] md:text-[14px] leading-relaxed">
              Me gusta transformar desafíos en soluciones digitales mediante estrategia, contenido y experiencias centradas en las personas.
            </p>
          </div>

          {/* 3. Segundo Párrafo y Botón */}
          <div className="flex flex-col items-center xl:items-start gap-4 text-center xl:text-left xl:w-1/4">
            <p className="text-gray-300 font-outfit text-[13px] md:text-[14px] leading-relaxed font-medium">
              Si buscas aportar valor a tu marca o desarrollar un proyecto con propósito...
            </p>
            <button 
              onClick={() => setIsModalOpen(true)}
              className="group flex items-center justify-center gap-2 bg-gradient-to-r from-[#9b51e0] to-[#c77dff] hover:opacity-90 text-[var(--color-text-light)] px-6 py-3 rounded-xl font-sans font-bold text-[10px] md:text-xs tracking-widest uppercase transition-all duration-300 w-max"
            >
              HABLEMOS
              <ArrowUpRight size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </button>
          </div>

          {/* 4. Links */}
          <div className="flex items-center justify-center xl:justify-center gap-3 sm:gap-4 shrink-0 xl:w-1/4 my-auto h-full">
            {/* WhatsApp */}
            <a href="https://wa.me/51907459557" target="_blank" rel="noopener noreferrer" className="w-12 h-12 md:w-14 md:h-14 flex items-center justify-center border border-white/10 rounded-full text-white bg-gradient-to-r from-[#9b51e0] to-[#c77dff] hover:opacity-90 transition-all shadow-lg hover:scale-105">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
              </svg>
            </a>
            {/* Email */}
            <a href="mailto:mitzi.ip20@gmail.com" className="w-12 h-12 md:w-14 md:h-14 flex items-center justify-center border border-white/10 rounded-full text-white hover:bg-white/10 transition-colors">
              <Mail size={24} strokeWidth={1.5} />
            </a>
            {/* LinkedIn */}
            <a href="https://linkedin.com/in/mitziparraguirre" target="_blank" rel="noopener noreferrer" className="w-12 h-12 md:w-14 md:h-14 flex items-center justify-center border border-white/10 rounded-full text-white hover:bg-white/10 transition-colors">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle>
              </svg>
            </a>
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

      {/* Modal de Contacto */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4 bg-black/70 backdrop-blur-sm">
          <div className="bg-[#1a1a24] border border-white/10 rounded-2xl p-6 w-full max-w-md relative animate-in fade-in zoom-in duration-300">
            <button 
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
            >
              <X size={20} />
            </button>
            <h3 className="text-xl font-sans font-medium text-white mb-1">Conversemos</h3>
            <p className="text-sm text-gray-400 font-outfit mb-6">Cuéntame un poco sobre tu proyecto y me contactaré contigo a la brevedad.</p>
            
            <form onSubmit={handleWhatsAppSubmit} className="flex flex-col gap-4">
              <div>
                <label className="block text-xs font-outfit text-gray-400 mb-1">Nombre</label>
                <input 
                  type="text" required
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-white font-outfit text-sm focus:outline-none focus:border-[#a855f7] transition-colors"
                  placeholder="Tu nombre"
                />
              </div>
              <div>
                <label className="block text-xs font-outfit text-gray-400 mb-1">Servicio de interés</label>
                <select 
                  required
                  value={formData.subject}
                  onChange={(e) => setFormData({...formData, subject: e.target.value})}
                  className="w-full bg-[#1a1a24] border border-white/10 rounded-lg px-4 py-2.5 text-white font-outfit text-sm focus:outline-none focus:border-[#a855f7] transition-colors"
                >
                  <option value="">Selecciona una opción...</option>
                  <option value="Marketing Digital & Estrategia">Marketing Digital & Estrategia</option>
                  <option value="Diseño de Contenido">Diseño de Contenido</option>
                  <option value="Contenido Audiovisual">Contenido Audiovisual</option>
                  <option value="UX/UI & Diseño Web">UX/UI & Diseño Web</option>
                  <option value="Branding">Branding</option>
                  <option value="Otro">Otro</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-outfit text-gray-400 mb-1">Mensaje breve</label>
                <textarea 
                  required rows="3"
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-white font-outfit text-sm focus:outline-none focus:border-[#a855f7] transition-colors resize-none"
                  placeholder="¿En qué te puedo ayudar?"
                />
              </div>
              <button 
                type="submit"
                className="w-full mt-2 bg-gradient-to-r from-[#9b51e0] to-[#c77dff] hover:opacity-90 text-white py-3 rounded-xl font-sans font-bold text-xs tracking-widest uppercase transition-all duration-300 flex items-center justify-center gap-2"
              >
                ENVIAR A WHATSAPP
                <ArrowUpRight size={16} />
              </button>
            </form>
          </div>
        </div>
      )}
    </footer>
  );
};

export default Contact;

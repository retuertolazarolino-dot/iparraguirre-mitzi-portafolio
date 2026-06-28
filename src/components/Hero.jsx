import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Heart, Mail, Globe, MapPin, Calendar, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

const bannerTexts = [
  "Estrategia digital & comunicación",
  "Diseño y creación de contenido",
  "Gestión de redes sociales",
  "Análisis de datos y métricas"
];

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % bannerTexts.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="bg-dark w-full pt-32 pb-5 px-3 md:px-4 flex justify-center overflow-hidden">
      <div className="w-full max-w-[1800px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.7fr_1.3fr] xl:grid-cols-[1.1fr_1.6fr_1.4fr] gap-3 md:gap-4 items-stretch h-full">

          {/* Left Column - Image Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-dark-card rounded-3xl h-[400px] sm:h-[450px] lg:h-full lg:min-h-[600px] relative overflow-hidden flex items-center justify-center shadow-lg"
          >
            {/* Animated spinning background - Glow effect */}
            <div 
              className="absolute w-[250%] h-[250%] animate-spin pointer-events-none z-0 blur-md"
              style={{
                background: 'conic-gradient(from 0deg, transparent 0%, transparent 30%, rgba(155, 81, 224, 0.1) 50%, rgba(199, 125, 255, 0.4) 80%, rgba(235, 200, 255, 1) 100%)',
                animationDuration: '14s'
              }}
            />
            
            {/* Mask to create the border effect (2px border) */}
            <div className="absolute inset-[2px] rounded-[1.35rem] bg-[#111115] z-0"></div>

            {/* Inner purple glow gradient */}
            <div className="absolute inset-[1px] rounded-[1.35rem] bg-gradient-to-br from-[#9b51e0]/10 via-transparent to-transparent opacity-40 z-0 pointer-events-none"></div>

            <motion.img
              src="/assets/images/mitzi-iparraguirre-foto-casual.webp"
              alt="Mitzi Iparraguirre"
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              className="absolute inset-[6px] w-[calc(100%-12px)] h-[calc(100%-12px)] object-cover rounded-[1.2rem] z-10 object-top"
              onError={(e) => { e.target.style.display = 'none'; }}
            />
          </motion.div>

          {/* Middle Column - Text Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-dark-card rounded-3xl p-6 lg:p-8 flex flex-col justify-between h-full relative overflow-hidden"
          >
            <div>
              <div className="flex items-center justify-between mb-8">
                <div className="bg-white/5 border border-white/10 rounded-full px-4 sm:px-5 py-2">
                  <span className="text-[9px] sm:text-[11px] font-bold tracking-[0.15em] text-gray-300 font-outfit uppercase">
                    Marketing Digital • Contenido • Experiencia Digital
                  </span>
                </div>
                <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-primary-light">
                  <Heart size={18} className="fill-primary-light/20" />
                </div>
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-sans font-bold leading-[1.05] tracking-tight mb-6 relative z-10 break-words w-full">
                <span className="text-[var(--color-text-light)] block">MITZI</span>
                <span className="block bg-gradient-to-r from-[#E2B2F4] to-[#A669D7] bg-clip-text text-transparent">IPARRAGUIRRE</span>
              </h1>

              <div className="h-[32px] md:h-[40px] mb-6 flex items-center">
                <AnimatePresence mode="wait">
                  <motion.h2
                    key={currentIndex}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                    className="text-xl md:text-2xl font-semibold text-[var(--color-text-light)] m-0"
                  >
                    {bannerTexts[currentIndex]}
                  </motion.h2>
                </AnimatePresence>
              </div>

              <div className="space-y-4 text-gray-400 text-sm md:text-base font-outfit font-light leading-relaxed mb-10 max-w-md">
                <p>
                  Creo experiencias digitales que comunican, conectan y generan valor.
                </p>
                <p>
                  Integro estrategia, contenido y diseño para transformar ideas en soluciones centradas en las personas.
                </p>
              </div>
            </div>

            <a href="#portfolio" className="group flex items-center gap-3 bg-primary-light text-dark hover:bg-white px-6 py-4 rounded-full font-bold transition-all duration-300 uppercase tracking-widest text-xs w-max mt-4 relative z-10">
              Ver Proyectos
              <ArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" size={16} strokeWidth={2} />
            </a>
          </motion.div>

          {/* Right Column - Contact & Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col gap-3 md:gap-4 h-full"
          >
            {/* Top CV Card */}
            <a href="https://docs.google.com/document/d/1QR6cfYAIlqs8-x7RGZWAjxMWIPpNsFow/edit?usp=sharing&ouid=117684595889054258712&rtpof=true&sd=true" target="_blank" rel="noreferrer" className="bg-dark-card rounded-3xl p-5 md:p-6 flex items-center justify-between group hover:bg-white/5 transition-colors flex-[0.4]">
              <div>
                <span className="text-[10px] text-gray-400 font-bold tracking-widest uppercase mb-3 block">Currículum Vitae</span>
                <div className="flex items-center gap-4">
                  <div className="text-3xl font-bold font-sans text-[var(--color-text-light)]">CV</div>
                  <span className="text-gray-300 font-medium hidden sm:block">Conoce mi trayectoria</span>
                </div>
              </div>
              <div className="w-10 h-10 min-w-10 rounded-full bg-white/5 flex items-center justify-center text-primary-light group-hover:bg-primary-light group-hover:text-dark transition-colors">
                <ArrowUpRight size={18} />
              </div>
            </a>

            {/* Grid - 6 Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4 flex-[2]">
              {/* Email */}
              <a href="mailto:jhoselyn.mitzi025@gmail.com" className="bg-dark-card rounded-3xl p-5 flex flex-col justify-center gap-3 hover:bg-white/5 transition-colors group h-full">
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-primary-light">
                  <Mail size={20} />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-[var(--color-text-light)]">Email</h3>
                  <p className="text-xs text-gray-400 mt-1 truncate">jhoselyn.mitzi025@gmail.com</p>
                </div>
              </a>

              {/* Ubicación */}
              <div className="bg-dark-card rounded-3xl p-5 flex flex-col justify-center gap-3 hover:bg-white/5 transition-colors group h-full">
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-primary-light">
                  <MapPin size={20} />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-[var(--color-text-light)]">Ubicación</h3>
                  <p className="text-xs text-gray-400 mt-1 truncate">Perú</p>
                </div>
              </div>

              {/* LinkedIn */}
              <a href="https://linkedin.com/in/iparraguirre-m" target="_blank" rel="noreferrer" className="bg-dark-card rounded-3xl p-5 flex flex-col justify-center gap-3 hover:bg-white/5 transition-colors group h-full">
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-primary-light">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-[var(--color-text-light)]">LinkedIn</h3>
                  <p className="text-[11px] sm:text-xs text-gray-400 mt-1 truncate">linkedin.com/in/iparraguirre-m</p>
                </div>
              </a>

              {/* Teléfono */}
              <a href="https://wa.me/51907459557" target="_blank" rel="noreferrer" className="bg-dark-card rounded-3xl p-5 flex flex-col justify-center gap-3 hover:bg-white/5 transition-colors group h-full">
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-primary-light">
                  <Phone size={20} />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-[var(--color-text-light)]">Teléfono</h3>
                  <p className="text-xs text-gray-400 mt-1 truncate">+51 907 459 557</p>
                </div>
              </a>

              {/* Disponibilidad */}
              <div className="bg-dark-card rounded-3xl p-5 flex items-center gap-4 hover:bg-white/5 transition-colors group h-full sm:col-span-2">
                <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-primary-light shrink-0">
                  <Calendar size={24} />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-[var(--color-text-light)]">Disponibilidad</h3>
                  <p className="text-[12px] sm:text-[13px] text-gray-400 mt-0.5 leading-snug">Disponible para oportunidades laborales y proyectos freelance.</p>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;

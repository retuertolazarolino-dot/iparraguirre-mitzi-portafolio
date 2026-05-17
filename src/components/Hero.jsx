import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Heart, Mail, Globe, MapPin, Calendar, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section id="home" className="bg-dark w-full pt-32 pb-5 px-3 md:px-4 flex justify-center">
      <div className="w-full max-w-[1800px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1.5fr_1.8fr] gap-3 md:gap-4 items-stretch h-full">

          {/* Left Column - Image Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-dark-card rounded-3xl p-2 h-full min-h-[500px] lg:min-h-[600px] relative overflow-hidden"
            style={{
              boxShadow: "inset 0 0 0 2px rgba(217, 172, 242, 0.3)", // Light fuxia subtle border
            }}
          >
            {/* Inner purple glow gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/30 via-transparent to-transparent opacity-50 z-0"></div>
            
            <img
              src="/assets/images/foto-hero.webp"
              alt="Mitzi Iparraguirre"
              className="w-full h-full object-cover rounded-[1.25rem] relative z-10 object-top"
              onError={(e) => { e.target.style.display = 'none'; }}
            />
          </motion.div>

          {/* Middle Column - Text Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-dark-card rounded-3xl p-6 lg:p-8 flex flex-col justify-between h-full relative"
          >
            <div>
              <div className="flex items-center justify-between mb-8">
                <div className="bg-white/5 border border-white/10 rounded-full px-5 py-2">
                  <span className="text-[11px] font-bold tracking-[0.15em] text-gray-300 font-outfit uppercase">
                    Estrategia • Contenido • Diseño
                  </span>
                </div>
                <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-primary-light">
                  <Heart size={18} className="fill-primary-light/20" />
                </div>
              </div>

              <h1 className="text-5xl md:text-6xl xl:text-7xl font-sans font-bold leading-[1.1] tracking-tight mb-6">
                <span className="text-[var(--color-text-light)] block">MITZI</span>
                <span className="block bg-gradient-to-r from-[#E2B2F4] to-[#A669D7] bg-clip-text text-transparent">IPARRAGUIRRE</span>
              </h1>

              <h2 className="text-xl md:text-2xl font-semibold mb-6 text-[var(--color-text-light)]">
                Estrategia digital & comunicación
              </h2>

              <div className="space-y-4 text-gray-400 text-sm md:text-base font-outfit font-light leading-relaxed mb-10 max-w-md">
                <p>
                  Me apasiona comprender el comportamiento del consumidor y aplicarlo en una era digital.
                </p>
                <p>
                  Creo estrategias de contenido, experiencias y comunicación que conectan y generan resultados.
                </p>
              </div>
            </div>

            <Link to="/mis-proyectos" className="group flex items-center gap-3 bg-primary-light text-dark hover:bg-white px-6 py-4 rounded-full font-bold transition-all duration-300 uppercase tracking-widest text-xs w-max mt-4">
              Ver Proyectos
              <ArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" size={16} strokeWidth={2} />
            </Link>
          </motion.div>

          {/* Right Column - Contact & Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col gap-3 md:gap-4 h-full"
          >
            {/* Top Behance Card */}
            <a href="https://behance.net/mitziparraguirre" target="_blank" rel="noreferrer" className="bg-dark-card rounded-3xl p-5 md:p-6 flex items-start justify-between group hover:bg-white/5 transition-colors flex-[0.8]">
              <div>
                <span className="text-[10px] text-gray-400 font-bold tracking-widest uppercase mb-4 block">Portafolio</span>
                <div className="flex items-center gap-4">
                  <div className="text-3xl font-bold font-sans text-[var(--color-text-light)]">Bē</div>
                  <span className="text-gray-300 font-medium hidden sm:block">behance.net/mitziparraguirre</span>
                </div>
              </div>
              <div className="w-10 h-10 min-w-10 rounded-full bg-white/5 flex items-center justify-center text-primary-light group-hover:bg-primary-light group-hover:text-dark transition-colors">
                <ArrowUpRight size={18} />
              </div>
            </a>

            {/* Middle Grid - 4 Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4 flex-[2]">
              {/* Email */}
              <a href="mailto:mitzi.ip20@gmail.com" className="bg-dark-card rounded-3xl p-5 flex flex-col justify-center gap-3 hover:bg-white/5 transition-colors group h-full">
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-primary-light">
                  <Mail size={20} />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-[var(--color-text-light)]">Email</h3>
                  <p className="text-xs text-gray-400 mt-1 truncate">mitzi.ip20@gmail.com</p>
                </div>
              </a>

              {/* Web */}
              <a href="https://mitziparraguirre.com" target="_blank" rel="noreferrer" className="bg-dark-card rounded-3xl p-5 flex flex-col justify-center gap-3 hover:bg-white/5 transition-colors group h-full">
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-primary-light">
                  <Globe size={20} />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-[var(--color-text-light)]">Web</h3>
                  <p className="text-xs text-gray-400 mt-1 truncate">mitziparraguirre.com</p>
                </div>
              </a>

              {/* Instagram */}
              <a href="https://instagram.com/mitziparraguirre" target="_blank" rel="noreferrer" className="bg-dark-card rounded-3xl p-5 flex flex-col justify-center gap-3 hover:bg-white/5 transition-colors group h-full">
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-primary-light">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-[var(--color-text-light)]">Instagram</h3>
                  <p className="text-xs text-gray-400 mt-1 truncate">@mitziparraguirre</p>
                </div>
              </a>

              {/* LinkedIn */}
              <a href="https://linkedin.com/in/mitziparraguirre" target="_blank" rel="noreferrer" className="bg-dark-card rounded-3xl p-5 flex flex-col justify-center gap-3 hover:bg-white/5 transition-colors group h-full">
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-primary-light">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-[var(--color-text-light)]">LinkedIn</h3>
                  <p className="text-xs text-gray-400 mt-1 truncate">Mitzi Iparraguirre</p>
                </div>
              </a>
            </div>

            {/* Bottom Bar - Contact Info */}
            <div className="bg-dark-card rounded-3xl p-4 sm:p-5 flex flex-wrap xl:flex-nowrap items-center justify-between gap-3 flex-[0.8]">
              <div className="flex flex-wrap items-center gap-3 w-full justify-between lg:justify-start lg:gap-4">
                <div className="flex items-center gap-2">
                  <div className="text-primary-light"><Phone size={16} /></div>
                  <span className="text-[11px] sm:text-xs text-gray-300 font-medium whitespace-nowrap">+51 962 180 847</span>
                </div>
                
                <div className="flex items-center gap-2">
                  <div className="text-primary-light"><MapPin size={16} /></div>
                  <span className="text-[11px] sm:text-xs text-gray-300 font-medium whitespace-nowrap">Huancayo, Perú</span>
                </div>
                
                <div className="flex items-center gap-2 bg-white/5 py-2 px-3 sm:px-4 rounded-full w-full xl:w-auto justify-center mt-2 xl:mt-0 xl:ml-auto">
                  <div className="text-primary-light"><Calendar size={14} /></div>
                  <span className="text-[11px] sm:text-xs text-gray-300 font-medium whitespace-nowrap">Disponible para proyectos</span>
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

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen bg-[#050505] overflow-hidden flex items-center section-padding pt-20">

      <div className="container mx-auto z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 items-center">

          {/* Left Content (Title & Text) */}
          <div className="lg:col-span-7 z-20">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-2 h-2 rounded-full bg-primary shadow-[0_0_10px_#7c3aed]"></div>
                <span className="text-gray-400 text-xs font-bold tracking-[0.2em] uppercase font-outfit">
                  Estrategia que conecta
                </span>
              </div>

              <h1 className="text-[5rem] md:text-8xl lg:text-[clamp(5.5rem,7vw,110px)] font-display leading-[0.85] tracking-tight mb-8">
                <span className="text-white block">CONTENIDO</span>
                <span className="text-primary block">QUE CONVIERTE.</span>
              </h1>

              <p className="text-gray-400 text-base md:text-lg max-w-md mb-10 font-outfit font-light leading-relaxed">
                Transformo ideas en estrategias digitales y experiencias que generan resultados reales.
              </p>

              <div className="flex flex-wrap gap-4 font-outfit mt-12">
                <Link to="/mis-proyectos" className="group flex items-center justify-center gap-2 bg-primary hover:bg-primary/80 text-white px-8 py-3.5 font-bold transition-all duration-300 uppercase tracking-widest text-xs min-w-[200px]">
                  Ver Proyectos
                  <ArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" size={16} strokeWidth={1.5} />
                </Link>
                <a href="#contact" className="group flex items-center justify-center gap-2 border border-white/20 hover:border-white text-white px-8 py-3.5 font-bold transition-all duration-300 uppercase tracking-widest text-xs min-w-[200px]">
                  Hablemos
                  <ArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" size={16} strokeWidth={1.5} />
                </a>
              </div>
            </motion.div>
          </div>

          {/* Right Content - Image Section */}
          <div className="lg:col-span-5 relative flex justify-center items-center mt-12 lg:mt-0">
            {/* Glowing Purple Background */}
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
              className="absolute w-[140%] max-w-[600px] aspect-square bg-primary/20 rounded-full blur-[100px] z-0"
            />
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
              className="absolute w-[90%] max-w-[400px] aspect-square rounded-full border border-primary/30 z-0 shadow-[0_0_50px_rgba(124,58,237,0.3)] bg-gradient-to-tr from-[#1a0b36] to-transparent"
            />
            {/* Additional orbit lines */}
            <motion.div
              initial={{ scale: 0, opacity: 0, rotate: -45 }}
              animate={{ scale: 1, opacity: 1, rotate: 0 }}
              transition={{ duration: 1.5, delay: 0.6, ease: "easeOut" }}
              className="absolute w-[110%] max-w-[480px] aspect-square rounded-full border border-white/10 z-0"
            >
              <div className="absolute top-[10%] left-[10%] w-2 h-2 rounded-full bg-white shadow-[0_0_10px_white]"></div>
              <div className="absolute bottom-[20%] right-[10%] w-1.5 h-1.5 rounded-full bg-primary shadow-[0_0_10px_#7c3aed]"></div>
            </motion.div>

            {/* Mitzi's Image Overlaid */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative z-10 w-full max-w-lg flex justify-center"
            >
              <img
                src="/assets/images/hero.png"
                alt="Mitzi"
                className="w-full h-auto object-contain drop-shadow-2xl z-10 pointer-events-none select-none"
                style={{ filter: "drop-shadow(0 0 20px rgba(0,0,0,0.5))", maxHeight: "80vh" }}
                onError={(e) => { e.target.style.display = 'none'; }}
              />
            </motion.div>
          </div>

        </div>
      </div>

      {/* Vertical Social Links Sidebar */}
      <div className="fixed right-4 lg:right-10 top-1/2 -translate-y-1/2 hidden md:flex flex-col items-center gap-10 z-50">
        <div className="w-[1px] h-16 bg-gradient-to-b from-transparent to-white/20"></div>
        
        <a href="#" className="flex flex-col items-center gap-2 group">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary group-hover:text-white transition-colors">
            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle>
          </svg>
          <span className="text-[9px] font-bold tracking-[0.2em] text-white/50 group-hover:text-white transition-colors font-outfit uppercase">
            LinkedIn
          </span>
        </a>

        <a href="#" className="flex flex-col items-center gap-2 group">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary group-hover:text-white transition-colors">
            <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
          </svg>
          <span className="text-[9px] font-bold tracking-[0.2em] text-white/50 group-hover:text-white transition-colors font-outfit uppercase">
            INSTAGRAMA
          </span>
        </a>

        <a href="#" className="flex flex-col items-center gap-2 group">
          <Mail size={20} className="text-primary group-hover:text-white transition-colors" />
          <span className="text-[9px] font-bold tracking-[0.2em] text-white/50 group-hover:text-white transition-colors font-outfit uppercase">
            Email
          </span>
        </a>

        <div className="w-[1px] h-16 bg-gradient-to-t from-transparent to-white/20"></div>
      </div>
    </section>
  );
};

export default Hero;

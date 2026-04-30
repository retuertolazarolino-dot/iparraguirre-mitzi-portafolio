import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const WebDesign = () => {
  return (
    <section id="web-design" className="bg-[#050505] overflow-hidden py-12 border-t border-white/5 border-b pb-24">
      <div className="container mx-auto px-4 md:px-8">
        
        {/* 2-Column Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
          
          {/* Left Column - Details */}
          <div className="lg:col-span-4 flex flex-col justify-between h-full lg:pr-8">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <span className="text-primary font-display text-5xl md:text-6xl mb-1 block leading-none">
                04.
              </span>
              <h3 className="text-white font-display text-3xl md:text-4xl tracking-wide uppercase mb-6 leading-none">
                DISEÑO WEB
              </h3>
              
              <p className="text-gray-400 font-outfit text-xs md:text-sm font-light leading-relaxed mb-8 max-w-xs">
                Diseño de interfaces web con enfoque en experiencia de usuario (UX/UI) y estructura estratégica.
              </p>

              <div className="space-y-3 mb-16">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full border border-primary flex-shrink-0"></div>
                  <span className="text-gray-400 font-outfit text-xs md:text-sm">Wireframes y prototipos</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full border border-primary flex-shrink-0"></div>
                  <span className="text-gray-400 font-outfit text-xs md:text-sm">Diseño de páginas y secciones</span>
                </div>
              </div>

              <Link to="/mis-proyectos#web-design" className="group flex items-center justify-center gap-2 border border-primary/50 text-white hover:bg-primary/10 px-8 py-3.5 font-bold transition-all duration-300 uppercase tracking-widest text-[10px] max-w-[180px]">
                VER MÁS
                <ArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" size={14} strokeWidth={1.5} />
              </Link>
            </motion.div>
          </div>

          {/* Right Column - Showcase Grid */}
          <div className="lg:col-span-8 relative">
            {/* Divider line for desktop */}
            <div className="hidden lg:block absolute left-0 top-0 w-[1px] h-full bg-white/5 -ml-4"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 lg:gap-4 h-full">
              
              {/* Card 1: Exelta Web Mockup */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                className="relative rounded-xl overflow-hidden bg-black border border-white/10 flex flex-col p-6 min-h-[280px]"
              >
                {/* Navbar mock */}
                <div className="flex justify-between items-center mb-10 z-10">
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 rounded-full bg-primary/20 flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-primary"></div>
                    </div>
                    <span className="text-white font-outfit font-black tracking-widest text-[10px]">EXELTA <span className="font-sans font-light">GROUP</span></span>
                  </div>
                  <div className="hidden md:flex gap-4">
                    <div className="w-8 h-1 bg-white/20 rounded-full"></div>
                    <div className="w-8 h-1 bg-white/20 rounded-full"></div>
                    <div className="w-8 h-1 bg-white/20 rounded-full"></div>
                  </div>
                </div>

                {/* Hero Mock */}
                <div className="flex-1 flex flex-col justify-center z-10">
                  <h4 className="text-white font-display text-xl md:text-3xl leading-none mb-4 w-3/4">
                    Estrategia <span className="text-primary">digital</span> que impulsa tu negocio.
                  </h4>
                  <div className="w-20 h-6 rounded-md bg-primary/20 border border-primary/50 flex items-center justify-center">
                    <span className="text-primary text-[6px] tracking-widest font-bold">HABLEMOS</span>
                  </div>
                </div>

                {/* Decor elements */}
                <div className="absolute right-0 bottom-0 w-3/4 h-3/4 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-primary/30 via-transparent to-transparent opacity-80 pointer-events-none"></div>
                <div className="absolute right-0 bottom-0 text-primary/10 -m-10">
                   <svg width="200" height="200" viewBox="0 0 200 200" fill="none" stroke="currentColor" strokeWidth="0.5">
                     <circle cx="100" cy="100" r="50" />
                     <circle cx="100" cy="100" r="75" />
                     <circle cx="100" cy="100" r="100" />
                   </svg>
                </div>
              </motion.div>

              {/* Card 2: Avanti Web Mockup */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="relative rounded-xl overflow-hidden bg-[#e6e2df] border border-white/10 flex flex-col p-6 min-h-[280px]"
              >
                {/* Navbar mock */}
                <div className="flex justify-between items-center mb-8 z-10">
                  <div className="flex items-center gap-1.5">
                    <div className="w-3 h-3 rounded-full border border-black flex items-center justify-center">
                      <div className="w-1 h-1 rounded-full bg-black"></div>
                    </div>
                    <span className="text-black font-outfit font-light tracking-widest text-[8px]">AVANTI</span>
                  </div>
                  <div className="hidden md:flex gap-3">
                    <div className="w-6 h-0.5 bg-black/20 rounded-full"></div>
                    <div className="w-6 h-0.5 bg-black/20 rounded-full"></div>
                    <div className="w-6 h-0.5 bg-black/20 rounded-full"></div>
                  </div>
                </div>

                {/* Hero Mock */}
                <div className="flex-1 flex flex-col justify-center z-10 w-2/3">
                  <h4 className="text-black font-display text-2xl md:text-3xl leading-[1.1] mb-4">
                    Bienestar emocional para una vida plena.
                  </h4>
                  <div className="w-24 h-6 rounded-md bg-[#4c1d95] flex items-center justify-center">
                    <span className="text-white text-[6px] tracking-widest font-bold">AGENDA TU CITA</span>
                  </div>
                </div>

                {/* Plant element (Simulated with SVG leaves) */}
                <div className="absolute right-[-20px] bottom-[-20px] w-40 h-40 opacity-90 z-0">
                  <svg viewBox="0 0 100 100" fill="#2d4a22" className="drop-shadow-2xl">
                    <path d="M50 100 C 50 50, 20 20, 20 20 C 40 30, 50 60, 50 100" />
                    <path d="M50 100 C 50 60, 80 30, 80 30 C 60 40, 50 70, 50 100" fill="#3a5c2d" />
                    <path d="M50 100 C 40 40, 10 40, 10 40 C 30 50, 45 70, 50 100" fill="#1f3616" />
                    <path d="M50 100 C 60 50, 90 50, 90 50 C 70 60, 55 80, 50 100" fill="#4b783b" />
                    {/* Pot */}
                    <rect x="40" y="85" width="20" height="15" fill="#f5f5f5" />
                  </svg>
                </div>
              </motion.div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default WebDesign;

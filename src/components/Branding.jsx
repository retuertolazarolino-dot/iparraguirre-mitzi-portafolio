import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Branding = () => {
  return (
    <section id="branding" className="bg-[#050505] overflow-hidden py-12 border-t border-white/5">
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
                03.
              </span>
              <h3 className="text-white font-display text-3xl md:text-4xl tracking-wide uppercase mb-6 leading-none">
                BRANDING
              </h3>
              
              <p className="text-gray-400 font-outfit text-xs md:text-sm font-light leading-relaxed mb-8 max-w-xs">
                Desarrollo de identidad visual completa para marcas con propósito.
              </p>

              <div className="space-y-3 mb-16">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full border border-primary flex-shrink-0"></div>
                  <span className="text-gray-400 font-outfit text-xs md:text-sm">Diseño de logo</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full border border-primary flex-shrink-0"></div>
                  <span className="text-gray-400 font-outfit text-xs md:text-sm">Identidad visual</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full border border-primary flex-shrink-0"></div>
                  <span className="text-gray-400 font-outfit text-xs md:text-sm">Aplicaciones de marca</span>
                </div>
              </div>

              <Link to="/mis-proyectos#branding" className="group flex items-center justify-center gap-2 border border-primary/50 text-white hover:bg-primary/10 px-8 py-3.5 font-bold transition-all duration-300 uppercase tracking-widest text-[10px] max-w-[180px]">
                VER MÁS
                <ArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" size={14} strokeWidth={1.5} />
              </Link>
            </motion.div>
          </div>

          {/* Right Column - Showcase Grid */}
          <div className="lg:col-span-8 relative">
            {/* Divider line for desktop */}
            <div className="hidden lg:block absolute left-0 top-0 w-[1px] h-full bg-white/5 -ml-4"></div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 lg:gap-4">
              
              {/* Card 1: Logo Dark */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                className="relative aspect-square rounded-xl overflow-hidden bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#2a0e4a] via-[#110521] to-[#0a0216] shadow-xl border border-white/5 flex flex-col items-center justify-center"
              >
                <div className="w-10 h-10 border border-white/50 rounded-full mb-3 flex items-center justify-center rotate-45">
                  <div className="w-4 h-4 border border-white/80"></div>
                </div>
                <h4 className="text-white font-outfit font-light tracking-widest text-lg uppercase">AVANTI</h4>
                <p className="text-white/40 font-outfit text-[6px] tracking-widest uppercase mt-1">Centro Psicoterapéutico</p>
              </motion.div>

              {/* Card 2: Brand Book/Papers */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="relative aspect-square rounded-xl overflow-hidden bg-[#111] shadow-xl border border-white/5 p-4"
              >
                {/* Simulated Paper 1 */}
                <div className="absolute top-2 left-6 right-2 h-2/3 bg-gray-100 rounded-md shadow-lg transform -rotate-6 flex items-center justify-center">
                   <span className="text-black/50 font-outfit font-light tracking-widest text-[10px] uppercase">AVANTI</span>
                </div>
                {/* Simulated Paper 2 */}
                <div className="absolute bottom-4 left-2 right-6 h-1/2 bg-primary rounded-md shadow-2xl transform rotate-3 flex items-center justify-center">
                   <span className="text-white font-outfit font-light tracking-widest text-xs uppercase">AVANTI</span>
                </div>
              </motion.div>

              {/* Card 3: Tote Bag Mockup (Simulated) */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
                className="relative aspect-square rounded-xl overflow-hidden bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] shadow-xl border border-white/5 flex items-center justify-center"
              >
                {/* Simple geometric representation of bag */}
                <div className="w-3/4 h-2/3 bg-[#111] border border-white/10 rounded-b-xl shadow-2xl flex flex-col items-center justify-center relative">
                  <div className="absolute -top-4 w-1/2 h-8 border-2 border-white/10 rounded-t-full"></div>
                  <span className="text-white font-serif italic text-xl mt-4">Mandys</span>
                </div>
              </motion.div>

              {/* Card 4: Polo / Print Mockup (Simulated) */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
                className="relative aspect-square rounded-xl overflow-hidden bg-[#080808] shadow-xl border border-white/5 p-4 flex flex-col items-end justify-end"
              >
                {/* Abstract shape representing the polo */}
                <div className="absolute top-0 right-0 w-full h-full bg-[#4c1d95] mix-blend-screen opacity-40 blur-2xl rounded-full translate-x-1/4 -translate-y-1/4"></div>
                
                {/* Business Card */}
                <div className="w-24 h-14 bg-primary rounded shadow-xl flex items-center justify-center transform -rotate-12 z-10 border border-white/10">
                   <span className="text-white font-display text-xs tracking-widest">TRIAD</span>
                </div>
              </motion.div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Branding;

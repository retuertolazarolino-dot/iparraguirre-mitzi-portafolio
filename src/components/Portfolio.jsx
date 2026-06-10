import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Sparkles, MessageSquareHeart, Clapperboard, Star, LayoutTemplate, Play, Flower } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useModal } from '../context/ModalContext';

const socialMediaCards = [
  {
    id: '01',
    title: 'CUIDARTE TAMBIÉN ES PRODUCTIVO.',
    bgClass: 'bg-gradient-to-br from-[#d8b4e2] to-[#b392c6]',
    textClass: 'text-[#4a2e5d]',
  },
  {
    id: '02',
    title: '3 PASOS PARA MEJORAR TU ENFOQUE',
    bgClass: 'bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-[#8a4fff] via-[#6328e0] to-[#4c1d95]',
    textClass: 'text-white',
  },
  {
    id: '03',
    title: 'NUEVA COLECCIÓN DISPONIBLE',
    bgClass: 'bg-[#e0e0e0]',
    textClass: 'text-black',
  },
  {
    id: '04',
    title: 'TU MARCA MERECE SER RECORDADA.',
    bgClass: 'bg-gradient-to-br from-[#d8b4e2] to-[#c79cd6]',
    textClass: 'text-[#4a2e5d]',
  },
  {
    id: '05',
    title: 'CONOCE NUESTROS SERVICIOS',
    bgClass: 'bg-gradient-to-tr from-[#8a4fff] to-[#d8b4e2]',
    textClass: 'text-white',
  }
];

const videoCards = [
  { img: 'https://images.unsplash.com/photo-1556228578-0d85b1a4d571?q=80&w=800&auto=format&fit=crop', duration: '0:26' },
  { img: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=800&auto=format&fit=crop', duration: '0:19' },
  { img: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800&auto=format&fit=crop', duration: '0:22' },
  { img: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=800&auto=format&fit=crop', duration: '0:29' },
  { img: 'https://images.unsplash.com/photo-1507146426996-ef05306b995a?q=80&w=800&auto=format&fit=crop', duration: '0:19' },
];

const Portfolio = () => {
  const { openContactModal } = useModal();
  return (
    <section id="portfolio" className="bg-dark w-full pb-5 px-3 md:px-4 flex justify-center">
      <div className="w-full max-w-[1800px] mx-auto">
        <div className="bg-dark-card rounded-3xl p-6 md:p-8 lg:p-10 w-full overflow-hidden">
          
          {/* Header Section */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 mb-12">
            <div className="flex items-start gap-4">
              <Sparkles size={36} className="text-primary-light shrink-0" strokeWidth={1.5} />
              <div>
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-sans font-medium text-[var(--color-text-light)] uppercase tracking-wide mb-2">
                  PROYECTOS SELECCIONADOS
                </h2>
                <p className="text-gray-400 font-outfit text-sm font-light">
                  Exploraciones y trabajos realizados en diferentes áreas del marketing digital y diseño.
                </p>
              </div>
            </div>
            <Link to="/mis-proyectos" className="group flex items-center justify-center gap-2 border border-white/10 text-gray-300 hover:text-white hover:border-white/30 hover:bg-white/5 rounded-full px-6 py-3 font-medium transition-all duration-300 uppercase tracking-widest text-[11px] min-w-max">
              VER TODOS LOS PROYECTOS
              <ArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" size={16} strokeWidth={1.5} />
            </Link>
          </div>

          <div className="w-full h-[1px] bg-white/5 mb-10"></div>

          {/* Categories Grid Rows */}
          <div className="flex flex-col gap-12">

            {/* Row 1: SOCIAL MEDIA */}
            <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 pb-12 border-b border-white/5">
              <div className="lg:w-[280px] shrink-0">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-primary-light/20 flex items-center justify-center shrink-0">
                    <MessageSquareHeart size={28} className="text-primary-light" strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="text-white font-sans text-lg md:text-xl font-medium tracking-wide mb-2 uppercase">
                      01. SOCIAL MEDIA
                    </h3>
                    <p className="text-gray-400 font-outfit text-sm font-light leading-relaxed">
                      Contenido estratégico visual para redes sociales que conecta marcas con su audiencia.
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex-1 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 lg:gap-4">
                {socialMediaCards.map((card, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className={`aspect-square rounded-2xl overflow-hidden p-4 flex flex-col justify-between ${card.bgClass}`}
                  >
                    <div className="opacity-60 flex items-center gap-1">
                       <span className={`text-[8px] tracking-widest ${card.textClass}`}>AVANTI</span>
                    </div>
                    <h4 className={`text-[11px] md:text-xs font-bold leading-tight ${card.textClass}`}>
                      {card.title}
                    </h4>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Row 2: EDICIÓN DE VIDEOS */}
            <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 pb-12 border-b border-white/5">
              <div className="lg:w-[280px] shrink-0">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-[#9b51e0]/20 flex items-center justify-center shrink-0">
                    <Clapperboard size={28} className="text-[#9b51e0]" strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="text-white font-sans text-lg md:text-xl font-medium tracking-wide mb-2 uppercase">
                      02. EDICIÓN DE VIDEOS
                    </h3>
                    <p className="text-gray-400 font-outfit text-sm font-light leading-relaxed">
                      Producción, grabación y edición de videos para marcas y redes sociales.
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex-1 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 lg:gap-4">
                {videoCards.map((video, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="aspect-square rounded-2xl overflow-hidden relative group cursor-pointer"
                  >
                    <img src={video.img} alt={`Video ${index}`} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                      <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center border border-white/30">
                        <Play size={18} className="text-white fill-white ml-0.5" />
                      </div>
                    </div>
                    <div className="absolute bottom-2 right-2 bg-black/60 backdrop-blur-sm px-2 py-0.5 rounded text-[10px] text-white font-medium">
                      {video.duration}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Row 3: BRANDING */}
            <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 pb-12 border-b border-white/5">
              <div className="lg:w-[280px] shrink-0">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-[#ff9a9e]/20 flex items-center justify-center shrink-0">
                    <Star size={28} className="text-[#ff9a9e]" strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="text-white font-sans text-lg md:text-xl font-medium tracking-wide mb-2 uppercase">
                      03. BRANDING
                    </h3>
                    <p className="text-gray-400 font-outfit text-sm font-light leading-relaxed">
                      Desarrollo de identidad visual que traduce el propósito de una marca en elementos gráficos coherentes.
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 lg:gap-4">
                <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="h-32 md:h-full min-h-[140px] rounded-2xl bg-[#2b1f41] flex flex-col items-center justify-center p-4">
                  <Flower size={36} className="text-white mb-2" strokeWidth={1} />
                  <span className="text-white font-sans text-xl tracking-widest font-light uppercase">AVANTI</span>
                  <span className="text-white/50 text-[6px] tracking-widest uppercase mt-1">Centro Psicoterapéutico</span>
                </motion.div>
                <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="h-32 md:h-full min-h-[140px] rounded-2xl bg-[#e6e6e6] overflow-hidden relative">
                   {/* Placeholder for Mockup */}
                   <div className="absolute inset-0 bg-gradient-to-tr from-gray-300 to-gray-100 flex items-center justify-center">
                     <span className="text-gray-400 text-xs font-bold uppercase tracking-widest">Mockup</span>
                   </div>
                </motion.div>
                <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="h-32 md:h-full min-h-[140px] rounded-2xl bg-gradient-to-br from-[#8a4fff] to-[#6328e0] overflow-hidden relative p-6">
                   <span className="text-white font-sans text-xl tracking-widest font-bold uppercase block mb-1">TRIAD</span>
                   <span className="text-white/60 text-[8px] tracking-widest uppercase block">Agencia de Mkt</span>
                </motion.div>
                <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.3 }} className="h-32 md:h-full min-h-[140px] rounded-2xl bg-[#f0f0f0] flex flex-col items-center justify-center p-4">
                   <div className="text-[#333] font-bold text-lg uppercase tracking-wider">EXELTA</div>
                   <div className="text-[#666] text-[7px] tracking-widest uppercase mt-0.5">GROUP</div>
                </motion.div>
              </div>
            </div>

            {/* Row 4: DISEÑO WEB */}
            <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
              <div className="lg:w-[280px] shrink-0">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-[#76c8ff]/20 flex items-center justify-center shrink-0">
                    <LayoutTemplate size={28} className="text-[#76c8ff]" strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="text-white font-sans text-lg md:text-xl font-medium tracking-wide mb-2 uppercase">
                      04. DISEÑO WEB
                    </h3>
                    <p className="text-gray-400 font-outfit text-sm font-light leading-relaxed">
                      Diseño de interfaces digitales con enfoque en experiencia de usuario (UX/UI) y estructura orientada a objetivos.
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-3 lg:gap-4">
                <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="h-48 md:h-[220px] rounded-2xl bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-[#4c1d95] via-[#1a0b36] to-black p-6 md:p-8 flex flex-col justify-end relative overflow-hidden">
                   <div className="absolute top-6 left-6 text-white text-xs font-bold tracking-widest">EXELTA GROUP</div>
                   <div className="relative z-10 w-2/3">
                     <h4 className="text-white text-xl md:text-2xl font-bold leading-tight mb-4">Estrategia <span className="text-primary-light">digital</span> que impulsa tu negocio.</h4>
                     <button onClick={openContactModal} className="cursor-pointer hover:bg-primary-light/30 transition-colors bg-primary-light/20 border border-primary-light/50 text-primary-light text-[10px] px-4 py-1.5 rounded-full font-bold uppercase tracking-wider relative z-20">CONOCE MÁS</button>
                   </div>
                </motion.div>
                
                <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="h-48 md:h-[220px] rounded-2xl bg-[#e2dedb] p-6 md:p-8 flex flex-col justify-end relative overflow-hidden">
                   <div className="absolute top-6 left-6 text-[#333] text-xs tracking-widest flex items-center gap-1.5">
                     <Flower size={14} /> AVANTI
                   </div>
                   <div className="relative z-10 w-2/3">
                     <h4 className="text-[#333] text-xl md:text-2xl font-bold leading-tight mb-4">Bienestar emocional para una vida plena.</h4>
                     <button onClick={openContactModal} className="cursor-pointer hover:bg-[#723bc4] transition-colors bg-[#8a4fff] text-white text-[10px] px-4 py-1.5 rounded-full font-bold uppercase tracking-wider relative z-20">AGENDA TU CITA</button>
                   </div>
                </motion.div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;

// Since we used Flower inside this file without importing it, we should add it.
// I will rewrite to ensure Flower is imported.

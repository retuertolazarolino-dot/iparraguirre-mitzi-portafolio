import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const showcaseCards = [
  {
    id: '01',
    title: 'CUIDARTE TAMBIÉN ES PRODUCTIVO.',
    bgClass: 'bg-gradient-to-br from-[#d8b4e2] to-[#b392c6]',
    textClass: 'text-[#4a2e5d]',
    accent: 'bg-white/20',
  },
  {
    id: '02',
    title: '3 PASOS PARA MEJORAR TU ENFOQUE',
    bgClass: 'bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-[#4c1d95] via-[#1a0b36] to-black',
    textClass: 'text-white',
    titleAccent: 'text-primary',
    accent: 'border border-primary/30',
  },
  {
    id: '03',
    title: 'NUEVA COLECCIÓN DISPONIBLE',
    bgClass: 'bg-gradient-to-br from-[#1c1c21] to-[#0a0a0a]',
    textClass: 'text-white',
    accent: 'border border-white/5',
  },
  {
    id: '04',
    title: 'TU MARCA MERECE SER RECORDADA.',
    bgClass: 'bg-[#e9e3f4]',
    textClass: 'text-black',
    accent: 'bg-[#8A2BE2]/10',
    decor: 'circle'
  },
  {
    id: '05',
    title: 'CONOCE NUESTROS SERVICIOS',
    bgClass: 'bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-[#2a0e4a] via-[#0a0a0a] to-[#050505]',
    textClass: 'text-white',
    accent: 'border border-primary/10',
  },
  {
    id: '06',
    title: 'CLIENTES QUE CONFÍAN EN NOSOTROS',
    bgClass: 'bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-[#3b1263] via-[#0f0f12] to-black',
    textClass: 'text-white',
    accent: 'border border-primary/10',
  },
  {
    id: '07',
    title: 'DETRÁS DE CADA MARCA HAY UNA HISTORIA',
    bgClass: 'bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-[#23053d] via-black to-black',
    textClass: 'text-white',
    accent: 'border border-primary/10',
  },
  {
    id: '08',
    title: 'CREA CONTENIDO QUE CONECTE',
    bgClass: 'bg-[#f4f4f6]',
    textClass: 'text-[#111]',
    accent: 'bg-white',
  }
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="bg-[#050505] overflow-hidden pt-24 pb-12 border-t border-white/5">
      <div className="container mx-auto px-4 md:px-8">
        
        {/* Header Section */}
        <div className="mb-8">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white uppercase tracking-tight mb-2">
            PROYECTOS SELECCIONADOS
          </h2>
          <p className="text-gray-400 font-outfit text-xs md:text-sm font-light">
            Exploraciones y trabajos realizados en diferentes áreas del marketing digital y diseño.
          </p>
        </div>

        <div className="w-full h-[1px] bg-white/5 mb-12"></div>

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
                01.
              </span>
              <h3 className="text-white font-display text-3xl md:text-4xl tracking-wide uppercase mb-6 leading-none">
                SOCIAL MEDIA
              </h3>
              
              <p className="text-gray-400 font-outfit text-xs font-light leading-relaxed mb-16 max-w-xs">
                Creación de contenido visual estratégico para redes sociales que conecta marcas con su audiencia.
              </p>

              <div className="mb-10">
                <h4 className="text-primary font-outfit text-[9px] font-bold tracking-[0.2em] uppercase mb-5">
                  MARCAS CON LAS QUE HE TRABAJADO
                </h4>
                
                {/* Simulated Logos */}
                <div className="flex flex-wrap items-center gap-6 md:gap-8">
                  <span className="text-white font-sans font-bold text-[10px] tracking-widest uppercase">
                    AVANTI <span className="text-[5px] tracking-normal block text-gray-500 mt-[-2px] text-center">CENTRO</span>
                  </span>
                  <span className="text-white font-display text-sm tracking-widest uppercase">
                    TRIAD <span className="text-[5px] font-sans tracking-normal block text-gray-500 mt-[-3px] text-center">AGENCIA</span>
                  </span>
                  <span className="text-white font-serif italic font-medium text-xs">
                    Mandys
                  </span>
                  <span className="text-white font-outfit font-black text-[11px] tracking-wider uppercase">
                    EXELTA <span className="text-[5px] tracking-normal block text-gray-500 mt-[-2px] text-center">GROUP</span>
                  </span>
                </div>
              </div>

              <Link to="/mis-proyectos#social-media" className="group flex items-center justify-center gap-2 border border-primary/50 text-white hover:bg-primary/10 px-8 py-3.5 font-bold transition-all duration-300 uppercase tracking-widest text-[10px] max-w-[180px]">
                VER MÁS
                <ArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" size={14} strokeWidth={1.5} />
              </Link>
            </motion.div>
          </div>

          {/* Right Column - Showcase Cards Grid */}
          <div className="lg:col-span-8 relative">
            {/* Divider line for desktop */}
            <div className="hidden lg:block absolute left-0 top-0 w-[1px] h-full bg-white/5 -ml-4"></div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 lg:gap-4">
              {showcaseCards.map((card, index) => (
                <motion.div
                  key={card.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`relative aspect-square rounded-xl overflow-hidden p-4 flex flex-col justify-between ${card.bgClass} ${card.accent} shadow-xl group cursor-default`}
                >
                  {/* Top Header of Card */}
                  <div className="flex justify-between items-start opacity-40 z-10">
                    <div className="flex items-center gap-1.5">
                      <div className="w-1.5 h-1.5 border border-current rounded-full"></div>
                      <span className={`text-[7px] font-outfit tracking-widest ${card.textClass} uppercase`}>AVANTI</span>
                    </div>
                    <span className={`text-[8px] font-outfit ${card.textClass}`}>{card.id}</span>
                  </div>

                  {/* Geometric Decor if any */}
                  {card.decor === 'circle' && (
                    <div className="absolute -left-12 bottom-0 w-36 h-36 bg-[#8A2BE2] rounded-full mix-blend-multiply opacity-20 z-0"></div>
                  )}

                  {/* Card Title */}
                  <h4 className={`text-[10px] md:text-xs font-display leading-tight z-10 w-4/5 ${card.textClass}`}>
                    {card.titleAccent ? (
                      <>
                        {card.title.split('PARA')[0]}<br/>
                        <span className={card.titleAccent}>PARA {card.title.split('PARA')[1]}</span>
                      </>
                    ) : (
                      card.title
                    )}
                  </h4>

                  {/* Bottom Icon */}
                  <div className="absolute bottom-3 right-3 z-10">
                    <ArrowUpRight size={12} className={`${card.textClass} opacity-40 group-hover:opacity-100 transition-opacity`} strokeWidth={1} />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Portfolio;

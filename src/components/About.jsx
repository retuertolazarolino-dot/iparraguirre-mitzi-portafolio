import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  const tools = [
    { name: 'Canva', icon: 'https://cdn.worldvectorlogo.com/logos/canva-1.svg' },
    { name: 'Google Analytics', icon: 'https://cdn.worldvectorlogo.com/logos/google-analytics-4.svg' },
    { name: 'Meta Ads', icon: 'https://cdn.worldvectorlogo.com/logos/meta-1.svg' },
    { name: 'Google Ads', icon: 'https://cdn.worldvectorlogo.com/logos/google-ads-1.svg' },
    { name: 'Metricool', icon: 'https://cdn.worldvectorlogo.com/logos/metricool-1.svg' },
    { name: 'Asana', icon: 'https://cdn.worldvectorlogo.com/logos/asana-1.svg' },
    { name: 'Google Workspace', icon: 'https://cdn.worldvectorlogo.com/logos/google-workspace-icon.svg' },
    { name: 'Notion', icon: 'https://cdn.worldvectorlogo.com/logos/notion-logo-1.svg', invert: true },
  ];

  return (
    <section id="about" className="section-padding bg-black min-h-screen flex items-center">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">

          {/* Left Column - Image */}
          <div className="lg:col-span-4 relative group flex justify-center lg:justify-start items-center">
            {/* Frame Background */}
            <div className="relative w-[85%] max-w-sm aspect-[3/4] rounded-[2rem] border border-primary/40 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/30 via-transparent to-transparent mt-10 lg:mt-0">
              
              {/* Sparkle Icon */}
              <div className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 text-white">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]">
                  <path d="M12 2v20M2 12h20" stroke="white" strokeWidth="0.5" />
                  <path d="M12 2C12 7.5 7.5 12 2 12C7.5 12 12 16.5 12 22C12 16.5 16.5 12 22 12C16.5 12 12 7.5 12 2Z" fill="white" stroke="none" />
                </svg>
              </div>

              {/* Mitzi Image Overlay */}
              <img
                src="/assets/images/hero.png"
                alt="Mitzi"
                className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[110%] max-w-none h-auto object-cover z-10 drop-shadow-[0_0_30px_rgba(124,58,237,0.2)] pointer-events-none"
                style={{ filter: "drop-shadow(0 0 20px rgba(0,0,0,0.8))" }}
                onError={(e) => { e.target.style.display = 'none'; }}
              />

              {/* Signature */}
              <div className="absolute -bottom-8 -left-8 z-20">
                 <svg width="180" height="80" viewBox="0 0 200 100" fill="none" stroke="#7c3aed" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="drop-shadow-[0_0_8px_rgba(124,58,237,0.8)]">
                    <path d="M20 70 Q 30 20, 45 30 T 60 70 Q 70 45, 75 55 T 85 70 Q 95 40, 105 50 T 115 70 Q 130 50, 170 45" />
                    <path d="M40 45 L 65 40" />
                    <path d="M110 30 L 110 35" strokeWidth="4" />
                 </svg>
              </div>
            </div>
          </div>

          {/* Middle Column - Biography */}
          <div className="lg:col-span-4 flex flex-col justify-center px-4 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-display text-white mb-8 tracking-wide uppercase">
                SOBRE MÍ
              </h2>

              <div className="space-y-6 text-gray-400 font-outfit font-light leading-relaxed text-[13px] md:text-sm">
                <p>
                  Soy estratega digital enfocada en entender cómo las personas toman decisiones en entornos digitales.
                </p>
                <p>
                  Trabajo integrando contenido, análisis y estructura web para transformar interacción <span className="text-primary font-medium">en resultados medibles.</span>
                </p>
              </div>

              <div className="mt-12 relative">
                <div className="text-primary font-display text-7xl leading-none mb-1 select-none pointer-events-none">
                  “
                </div>
                <p className="text-white text-sm md:text-base font-outfit font-light leading-snug">
                  "No es solo crear contenido,<br/> es crear intención."
                </p>
              </div>
            </motion.div>
          </div>

          {/* Right Column - Tools & Education */}
          <div className="lg:col-span-4 flex flex-col justify-center lg:border-l lg:border-white/5 lg:pl-12">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-[10px] font-bold tracking-[0.2em] text-white uppercase mb-8 font-outfit flex gap-1">
                HERRAMIENTAS <span className="text-primary">QUE UTILIZO</span>
              </h3>

              {/* Tools Grid */}
              <div className="grid grid-cols-4 gap-3 mb-12">
                {tools.map((tool) => (
                  <div key={tool.name} className="flex flex-col items-center gap-2 group">
                    <div className="w-full aspect-square bg-[#080808] border border-white/5 rounded-2xl flex items-center justify-center p-3 hover:border-primary/40 transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.5)]">
                      <img
                        src={tool.icon}
                        alt={tool.name}
                        className={`w-full h-full object-contain filter group-hover:scale-110 transition-transform duration-300 ${tool.invert ? 'invert' : ''}`}
                        onError={(e) => { e.target.style.display = 'none'; }}
                      />
                    </div>
                    <span className="text-[8px] text-gray-500 font-outfit text-center truncate w-full">
                      {tool.name}
                    </span>
                  </div>
                ))}
              </div>

              {/* Education Section */}
              <div className="pt-8 border-t border-white/5 relative">
                <h3 className="text-[10px] font-bold tracking-[0.2em] text-primary uppercase mb-5 font-outfit">
                  EDUCACIÓN
                </h3>
                <div className="flex justify-between items-start mb-2">
                  <h4 className="text-white font-bold font-outfit text-xs flex items-center gap-2">
                    <span className="w-1 h-1 bg-primary rounded-full shadow-[0_0_5px_#7c3aed]"></span>
                    Universidad Continental
                  </h4>
                  <span className="text-primary font-bold text-[10px] font-outfit">2019 - 2025</span>
                </div>
                <div className="pl-3 space-y-1">
                  <p className="text-gray-400 text-[10px] font-outfit font-light">Administración y Marketing</p>
                  <p className="text-gray-400 text-[10px] font-outfit font-light">Tercio superior en múltiples ciclos.</p>
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;

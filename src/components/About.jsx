import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Monitor, GraduationCap, Trophy } from 'lucide-react';

const About = () => {
  // Organized in rows as per the reference image
  const skillsGrid = [
    ["ESTRATEGIA DIGITAL", "COMUNICACIÓN", "CONTENIDO"],
    ["COPYWRITING", "STORYTELLING", "UX / UI"],
    ["DISEÑO DIGITAL", "AUDIOVISUAL", "REDES SOCIALES"],
    ["ANÁLISIS DE DATOS", "GESTIÓN DE PROYECTOS"],
    ["TRABAJO EN EQUIPO", "APRENDIZAJE CONTINUO"]
  ];

  const tools = [
    { name: 'Figma', icon: 'https://cdn.simpleicons.org/figma/F24E1E' },
    { name: 'Canva', icon: 'https://cdn.simpleicons.org/canva/00C4CC' },
    { name: 'Illustrator', icon: 'https://cdn.simpleicons.org/adobeillustrator/FF9A00' },
    { name: 'Photoshop', icon: 'https://cdn.simpleicons.org/adobephotoshop/31A8FF' },
    { name: 'CapCut', icon: 'https://www.google.com/s2/favicons?domain=capcut.com&sz=128' },
    { name: 'Premiere Pro', icon: 'https://cdn.simpleicons.org/adobepremierepro/9999FF' },
    { name: 'After Effects', icon: 'https://cdn.simpleicons.org/adobeaftereffects/9999FF' },
    { name: 'Midjourney', icon: 'https://cdn.simpleicons.org/midjourney/FFFFFF' },
    { name: 'Google Analytics', icon: 'https://www.google.com/s2/favicons?domain=analytics.google.com&sz=128' },
    { name: 'Meta Business Suite', icon: 'https://cdn.simpleicons.org/meta/1877F2' },
    { name: 'Notion', icon: 'https://cdn.simpleicons.org/notion/FFFFFF' },
    { name: 'Google Workspace', icon: 'https://www.google.com/s2/favicons?domain=workspace.google.com&sz=128' },
    { name: 'Asana', icon: 'https://cdn.simpleicons.org/asana/F06A6A' },
    { name: 'ChatGPT', icon: 'https://cdn.simpleicons.org/openai/10A37F' },
    { name: 'Metricool', icon: 'https://www.google.com/s2/favicons?domain=metricool.com&sz=128' },
  ];

  return (
    <section id="about" className="bg-dark w-full pb-5 px-3 md:px-4 flex justify-center">
      <div className="w-full max-w-[1800px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-[1.1fr_1.6fr_1.1fr] gap-3 md:gap-4 items-stretch">
          
          {/* Card 1: MIS SKILLS */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-dark-card rounded-3xl p-6 lg:p-8 relative"
          >
            <div className="flex justify-between items-start mb-8">
              <h2 className="text-xl md:text-2xl font-sans font-medium text-[var(--color-text-light)]">MIS SKILLS</h2>
              <Zap size={24} className="text-primary-light/50" />
            </div>
            
            <motion.div 
              className="flex flex-col gap-3"
              variants={{
                hidden: { opacity: 0 },
                show: { opacity: 1, transition: { staggerChildren: 0.1 } }
              }}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              {skillsGrid.map((row, rowIndex) => (
                <motion.div key={rowIndex} className="flex gap-2 lg:gap-3 w-full" variants={{ hidden: { opacity: 0, y: 10 }, show: { opacity: 1, y: 0 } }}>
                  {row.map((skill, colIndex) => (
                    <motion.div 
                      key={colIndex} 
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="bg-primary-light/90 hover:bg-primary-light transition-colors rounded-full py-2.5 flex-1 flex items-center justify-center cursor-default shadow-sm"
                    >
                      <span className="text-[9px] sm:text-[10px] md:text-[11px] font-bold text-dark tracking-wide text-center px-1">
                        {skill}
                      </span>
                    </motion.div>
                  ))}
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Card 2: HERRAMIENTAS */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-dark-card rounded-3xl p-6 lg:p-8 relative"
          >
            <div className="flex justify-between items-start mb-8">
              <h2 className="text-xl md:text-2xl font-sans font-medium text-[var(--color-text-light)] uppercase">HERRAMIENTAS</h2>
              <Monitor size={24} className="text-primary-light/50" />
            </div>
            
            <motion.div 
              className="flex flex-wrap gap-3"
              variants={{
                hidden: { opacity: 0 },
                show: { opacity: 1, transition: { staggerChildren: 0.05, delayChildren: 0.3 } }
              }}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              {tools.map((tool, index) => (
                <motion.div 
                  key={index} 
                  variants={{ hidden: { opacity: 0, scale: 0.8 }, show: { opacity: 1, scale: 1 } }}
                  whileHover={{ scale: 1.05, y: -2 }}
                  className="flex items-center gap-3 bg-[#101114] border border-white/5 rounded-full px-4 py-2 md:py-2.5 hover:border-primary/40 transition-colors cursor-default"
                >
                  <img 
                    src={tool.icon} 
                    alt={tool.name} 
                    className="w-5 h-5 md:w-6 md:h-6 object-contain"
                    onError={(e) => { e.target.style.display = 'none'; }}
                  />
                  <span className="text-xs md:text-[13px] font-medium text-gray-300">{tool.name}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Card 3: FORMACIÓN */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="bg-dark-card rounded-3xl p-6 lg:p-8 relative min-h-[300px] flex flex-col"
          >
            <div className="flex justify-between items-start mb-8">
              <h2 className="text-xl md:text-2xl font-sans font-medium text-[var(--color-text-light)] uppercase">FORMACIÓN</h2>
              <GraduationCap size={24} className="text-primary-light/50" />
            </div>
            
            <div className="space-y-6 flex-1">
              <div className="flex gap-3">
                <span className="text-primary-light/80 mt-1">•</span>
                <div>
                  <h3 className="text-sm md:text-base font-semibold text-[var(--color-text-light)] mb-1">Bachiller en Administración y Marketing</h3>
                  <p className="text-xs md:text-sm text-gray-400 font-light">Universidad Continental</p>
                </div>
              </div>

              <div className="flex gap-3">
                <span className="text-primary-light/80 mt-1">•</span>
                <div>
                  <h3 className="text-sm md:text-base font-semibold text-[var(--color-text-light)] mb-1">Taller de Community Manager<br/>para un Impacto Social</h3>
                  <p className="text-xs md:text-sm text-gray-400 font-light">Huancayo - 2024</p>
                </div>
              </div>
            </div>

            {/* Sparkles and Trophy decoration */}
            <div className="absolute bottom-6 right-6 opacity-80 pointer-events-none">
              <Trophy size={60} className="text-primary-light/40" strokeWidth={1} />
              <div className="absolute -top-4 -left-4 text-primary-light/40 text-lg">✦</div>
              <div className="absolute top-2 -left-8 text-primary-light/40 text-sm">✧</div>
              <div className="absolute -bottom-2 -left-6 text-primary-light/40 text-xs">✦</div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;

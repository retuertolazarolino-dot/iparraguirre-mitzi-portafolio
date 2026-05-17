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
    { name: 'Figma', badge: 'F', bg: '#1E1E1E', color: '#F24E1E' },
    { name: 'Canva', badge: 'C', bg: '#00C4CC', color: '#fff' },
    { name: 'Illustrator', badge: 'Ai', bg: '#330000', color: '#FF9A00' },
    { name: 'Photoshop', badge: 'Ps', bg: '#001E36', color: '#31A8FF' },
    { name: 'CapCut', badge: '✂', bg: '#000', color: '#fff' },
    { name: 'Premiere Pro', badge: 'Pr', bg: '#00005B', color: '#9999FF' },
    { name: 'After Effects', badge: 'Ae', bg: '#00005B', color: '#9999FF' },
    { name: 'Midjourney', badge: '◆', bg: '#000', color: '#fff' },
    { name: 'Google Analytics', badge: '📊', bg: 'transparent', color: '#E37400' },
    { name: 'Meta Business Suite', badge: '∞', bg: '#0082FB', color: '#fff' },
    { name: 'Notion', badge: 'N', bg: '#000', color: '#fff' },
    { name: 'Google Workspace', badge: 'G', bg: '#4285F4', color: '#fff' },
    { name: 'Asana', badge: '⬡', bg: '#F06A6A', color: '#fff' },
    { name: 'ChatGPT', badge: '◎', bg: '#10A37F', color: '#fff' },
    { name: 'Metricool', badge: 'M', bg: '#07C586', color: '#fff' },
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
            
            <div className="flex flex-col gap-3">
              {skillsGrid.map((row, rowIndex) => (
                <div key={rowIndex} className="flex gap-2 lg:gap-3 w-full">
                  {row.map((skill, colIndex) => (
                    <div 
                      key={colIndex} 
                      className="bg-primary-light/90 hover:bg-primary-light transition-colors rounded-full py-2.5 flex-1 flex items-center justify-center"
                    >
                      <span className="text-[9px] sm:text-[10px] md:text-[11px] font-bold text-dark tracking-wide text-center px-1">
                        {skill}
                      </span>
                    </div>
                  ))}
                </div>
              ))}
            </div>
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
            
            <div className="flex flex-wrap gap-3">
              {tools.map((tool, index) => (
                <div key={index} className="flex items-center gap-3 bg-[#101114] border border-white/5 rounded-full px-4 py-2 md:py-2.5 hover:border-primary/40 transition-colors">
                  <div 
                    className="w-5 h-5 md:w-6 md:h-6 flex items-center justify-center rounded text-[10px] md:text-[11px] font-bold shrink-0"
                    style={{ backgroundColor: tool.bg, color: tool.color }}
                  >
                    {tool.badge}
                  </div>
                  <span className="text-xs md:text-[13px] font-medium text-gray-300">{tool.name}</span>
                </div>
              ))}
            </div>
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

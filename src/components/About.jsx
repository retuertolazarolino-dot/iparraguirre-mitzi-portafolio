import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Monitor, GraduationCap, Trophy } from 'lucide-react';

const About = () => {
  const skills = [
    "Marketing Digital",
    "Estrategia de Contenidos",
    "Gestión de Redes Sociales",
    "UX/UI Design",
    "Copywriting",
    "Storytelling",
    "Comunicación Digital",
    "Diseño de Interfaces",
    "Investigación de Usuarios",
    "Analítica Digital",
    "Inteligencia Artificial Aplicada",
    "Gestión de Proyectos"
  ];

  const tools = [
    // Row 1 - Design
    { name: 'Figma', icon: 'https://cdn.simpleicons.org/figma/F24E1E' },
    { name: 'Canva', icon: '/assets/logo/icons8-canva-48 1.svg' },
    { name: 'CapCut', icon: 'https://www.google.com/s2/favicons?domain=capcut.com&sz=128' },
    // Row 2 - Analytics & Ads
    { name: 'Google Analytics', icon: 'https://www.google.com/s2/favicons?domain=analytics.google.com&sz=128' },
    { name: 'Google Ads', icon: 'https://cdn.simpleicons.org/googleads/4285F4' },
    { name: 'Metricool', icon: 'https://www.google.com/s2/favicons?domain=metricool.com&sz=128' },
    // Row 3 - Social & AI
    { name: 'Meta Business Suite', icon: 'https://cdn.simpleicons.org/meta/1877F2' },
    { name: 'ChatGPT', icon: '/assets/logo/icons8-chat-gpt-48 1.svg' },
    { name: 'Claude', icon: 'https://cdn.simpleicons.org/anthropic/D97757' },
    // Row 4 - Productivity
    { name: 'Google Workspace', icon: 'https://www.google.com/s2/favicons?domain=workspace.google.com&sz=128' },
    { name: 'Trello', icon: 'https://cdn.simpleicons.org/trello/0052CC' },
    { name: 'Asana', icon: 'https://cdn.simpleicons.org/asana/F06A6A' },
    // Row 5
    { name: 'Notion', icon: 'https://cdn.simpleicons.org/notion/FFFFFF' },
  ];

  return (
    <section id="about" className="bg-dark w-full pb-5 px-3 md:px-4 flex justify-center">
      <div className="w-full max-w-[1800px] mx-auto">
        {/* Skills wider (1.5fr), Herramientas narrower (1.3fr), Formación compact (0.9fr) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-[1.5fr_1.3fr_0.9fr] gap-3 md:gap-4 items-stretch">

          {/* Card 1: MIS SKILLS */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, margin: "-50px" }}
            className="bg-dark-card rounded-3xl p-6 lg:p-8 relative"
          >
            <div className="flex justify-between items-start mb-8">
              <h2 className="text-xl md:text-2xl font-sans font-medium text-[var(--color-text-light)]">MIS SKILLS</h2>
              <Zap size={24} className="text-primary-light/50" />
            </div>

            <div className="flex flex-wrap gap-2">
              {skills.map((skill, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="bg-primary-light/90 hover:bg-primary-light transition-colors rounded-full px-4 py-2 flex-grow flex items-center justify-center cursor-default shadow-sm"
                >
                  <span className="text-xs md:text-[13px] font-bold text-dark tracking-wide text-center whitespace-nowrap">
                    {skill}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Card 2: HERRAMIENTAS */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            viewport={{ once: true, margin: "-50px" }}
            className="bg-dark-card rounded-3xl p-6 lg:p-8 relative"
          >
            <div className="flex justify-between items-start mb-8">
              <h2 className="text-xl md:text-2xl font-sans font-medium text-[var(--color-text-light)] uppercase">HERRAMIENTAS</h2>
              <Monitor size={24} className="text-primary-light/50" />
            </div>

            <div className="flex flex-wrap gap-2">
              {tools.map((tool, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.03, y: -2 }}
                  className="flex items-center gap-2 bg-[#101114] border border-white/5 rounded-full px-4 py-2 hover:border-primary/40 transition-colors cursor-default flex-grow justify-center"
                >
                  <img
                    src={tool.icon}
                    alt={tool.name}
                    className="w-4 h-4 md:w-5 md:h-5 object-contain shrink-0"
                    onError={(e) => { e.target.style.display = 'none'; }}
                  />
                  <span className="text-xs md:text-[13px] font-medium text-gray-300 whitespace-nowrap">{tool.name}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Card 3: FORMACIÓN */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true, margin: "-50px" }}
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

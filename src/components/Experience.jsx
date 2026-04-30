import React from 'react';
import { motion } from 'framer-motion';

const Experience = () => {
  const experiences = [
    {
      year: '2019',
      role: 'Voluntariado',
      company: 'Ponle Corazón',
      desc: 'Apoyo en atención al cliente y coordinación de campañas sociales.'
    },
    {
      year: '2021 - 2022',
      role: 'Asistente Administrativo',
      company: 'Sandwicheria Mandys',
      desc: 'Atención al cliente, control de inventario y soporte en procesos operativos.'
    },
    {
      year: '2024',
      role: 'Practicante de Marketing',
      company: 'Centro Psicoterapéutico Avanti',
      desc: 'Creación de contenido, gestión de redes sociales y análisis de métricas.'
    },
    {
      year: '2024 - 2025',
      role: 'Asistente de Marketing',
      company: 'Triad Agencia de Marketing',
      desc: 'Apoyo en campañas digitales, planificación estratégica y creación de contenido.'
    },
    {
      year: '2026',
      role: 'Asistente de Marketing',
      company: 'Exelta Group',
      desc: 'Estrategia de contenido, estructura web (UX/UI) y análisis orientado a la conversión.'
    }
  ];

  return (
    <section id="experience" className="section-padding bg-[#020202] overflow-hidden py-24">
      <div className="container mx-auto px-4 md:px-8">
        
        {/* Title */}
        <div className="flex items-center gap-3 mb-6">
          <div className="w-2 h-2 rounded-full bg-primary shadow-[0_0_8px_#7c3aed]"></div>
          <span className="text-white text-xs font-bold tracking-[0.2em] uppercase font-outfit">
            Experiencia
          </span>
        </div>

        <div className="relative mt-8">
          {/* Timeline Horizontal Line (Gradient to transparent at the end) */}
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: '100%' }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            viewport={{ once: true }}
            className="absolute top-[6px] left-0 h-[1px] bg-gradient-to-r from-primary via-primary to-transparent z-0"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6 lg:gap-10 relative z-10">
            {experiences.map((exp, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="relative pt-8"
              >
                {/* Timeline Dot */}
                <div className="absolute top-[2px] left-0 w-2.5 h-2.5 bg-primary rounded-full shadow-[0_0_8px_#7c3aed]" />
                
                <div className="mt-2 pr-2">
                  <span className="text-gray-400 font-outfit text-[10px] tracking-wide block mb-3">
                    {exp.year}
                  </span>
                  <h3 className="text-white font-outfit text-sm font-bold leading-snug mb-1">
                    {exp.role}
                  </h3>
                  <h4 className="text-gray-400 font-outfit text-[11px] font-light tracking-wide mb-4">
                    {exp.company}
                  </h4>
                  <p className="text-gray-500 font-outfit text-[10px] font-light leading-relaxed">
                    {exp.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;

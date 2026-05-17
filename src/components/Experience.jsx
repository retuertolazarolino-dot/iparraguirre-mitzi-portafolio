import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Heart, Sparkles, Flower, Zap, Smile } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      year: '2019',
      role: 'Voluntariado',
      company: 'Ponle Corazón',
      desc: 'Participación en labores de atención al cliente, coordinación de inventario y trabajo en equipo dentro de una campaña social orientada a la recaudación de fondos.',
      icon: Heart
    },
    {
      year: '2021 – 2022',
      role: 'Asistente Administrativo',
      company: 'Sandwicheria Mandys',
      desc: 'Atención al cliente y soporte en operaciones administrativas. Coordinación de inventario, control de pedidos y apoyo en procesos internos.',
      icon: Sparkles
    },
    {
      year: '2024',
      role: 'Practicante de Marketing',
      company: 'Centro Psicoterapéutico Avanti',
      desc: 'Desarrollo y ejecución de actividades relacionadas al marketing digital y ventas. Creación de contenido para redes sociales y participación en planificación de estrategias. Elaboración de reportes y análisis de métricas para optimizar la visibilidad de la marca.',
      icon: Flower
    },
    {
      year: '2024 – 2025',
      role: 'Asistente de Marketing',
      company: 'Triad Agencia de Marketing',
      desc: 'Apoyé en la ejecución de campañas integrales en medios digitales y tradicionales. Colaboré en diagnósticos, planificación de contenidos, guiones creativos, activaciones, grabaciones y elaboración de informes mensuales sobre desempeño en redes sociales.',
      icon: Zap
    },
    {
      year: '2026',
      role: 'Asistente de Marketing Digital & UX/UI',
      company: 'Exelta Group',
      desc: 'Participé en el desarrollo de propuestas digitales orientadas a resultados, estructuración web (UX/UI), creación de contenido alineado al recorrido del usuario y análisis de métricas para mejorar y optimizar el rendimiento de activos digitales.',
      icon: Smile
    }
  ];

  return (
    <section id="experience" className="bg-dark w-full pb-5 px-3 md:px-4 flex justify-center">
      <div className="w-full max-w-[1800px] mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-dark-card rounded-3xl p-6 md:p-8 lg:p-10 w-full"
        >
          {/* Header */}
          <div className="flex items-center gap-3 mb-6">
            <Briefcase size={28} className="text-primary-light/80" strokeWidth={1.5} />
            <h2 className="text-xl md:text-2xl font-sans font-medium text-[var(--color-text-light)] tracking-wide uppercase">
              EXPERIENCIA
            </h2>
          </div>

          {/* Timeline Line */}
          <div className="w-full h-[2px] bg-primary-light/30 rounded-full mb-8 relative">
            {/* The dots on the line for each experience */}
            <div className="absolute top-1/2 -translate-y-1/2 left-0 w-full flex justify-between px-2 md:px-6">
               {experiences.map((_, i) => (
                 <div key={i} className="w-2.5 h-2.5 rounded-full bg-primary-light hidden md:block"></div>
               ))}
            </div>
          </div>

          {/* Experience Grid */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6 md:gap-4 lg:gap-6">
            {experiences.map((exp, index) => {
              const Icon = exp.icon;
              return (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  viewport={{ once: true }}
                  className="flex flex-col h-full"
                >
                  <div className="mb-4">
                    <span className="text-primary-light font-medium text-sm lg:text-[15px] tracking-wide block mb-1">
                      {exp.year}
                    </span>
                    <h3 className="text-[var(--color-text-light)] font-bold text-sm lg:text-[15px] leading-snug mb-1">
                      {exp.role}
                    </h3>
                    {exp.company && (
                      <h4 className="text-gray-300 text-xs lg:text-[13px] font-light tracking-wide">
                        {exp.company}
                      </h4>
                    )}
                  </div>
                  
                  <p className="text-gray-400 text-xs lg:text-[13px] font-light leading-relaxed flex-grow">
                    {exp.desc}
                  </p>

                  <div className="mt-8 flex justify-center text-primary-light/60">
                    <Icon size={32} strokeWidth={1.5} />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;

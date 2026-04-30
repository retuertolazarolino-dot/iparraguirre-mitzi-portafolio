import React from 'react';
import { motion } from 'framer-motion';
import { Play, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
const personalProjects = [
  {
    id: 1,
    title: 'Contenido emocional',
    tagline: 'Engagement orgánico',
    image: 'personal_1.png',
    video: 'https://www.tiktok.com/@avanticp.pe/video/7350847120976547077?is_from_webapp=1&sender_device=pc'
  },
  {
    id: 2,
    title: 'Contenido UGC',
    tagline: 'Producto + storytelling',
    image: 'personal_2.png',
    video: 'https://www.tiktok.com/@avanticp.pe/video/7350847120976547077?is_from_webapp=1&sender_device=pc'
  },
  {
    id: 3,
    title: 'Contenido motivacional',
    tagline: 'Conexión + comunidad',
    image: 'personal_3.png',
    video: 'https://www.youtube.com/watch?v=0XW--qPr2dw&list=RD0XW--qPr2dw&start_radio=1'
  },
  {
    id: 4,
    title: 'Contenido lifestyle',
    tagline: 'Visual + mensaje claro',
    image: 'personal_1.png',
    video: 'personal_video_4.mp4'
  },
  {
    id: 5,
    title: 'Contenido comercial',
    tagline: 'Conversión suave',
    image: 'personal_2.png',
    video: 'personal_video_5.mp4'
  },
  {
    id: 6,
    title: 'Contenido fitness',
    tagline: 'Disciplina + constancia',
    image: 'personal_3.png',
    video: 'personal_video_6.mp4'
  },
];

const getVideoUrl = (video) => {
  if (!video) return 'https://www.w3schools.com/html/mov_bbb.mp4';
  if (video.startsWith('http')) return video;
  return `/assets/videos/${video}`;
};

const PersonalProjects = ({ onOpenVideo }) => {
  return (
    <section id="personal-projects" className="section-padding bg-black overflow-hidden border-t border-white/5">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-display font-bold flex items-center gap-4 mb-6"
            >
              <span className="text-primary">04.</span>
              <span className="text-white uppercase tracking-tight">PROYECTOS PERSONALES</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-gray-400 font-outfit font-light text-sm md:text-base leading-relaxed"
            >
              Exploraciones de contenido, narrativa visual y estrategias digitales orientadas a engagement y conexión real.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <Link
              to="/projects"
              className="flex items-center gap-2 text-primary font-outfit font-bold text-xs tracking-widest uppercase hover:gap-4 transition-all duration-300"
            >
              VER TODOS <ArrowRight size={14} />
            </Link>
          </motion.div>
        </div>

        {/* Horizontal Scroll Container */}
        <div className="flex overflow-x-auto pb-12 gap-6 no-scrollbar snap-x snap-mandatory">
          {personalProjects.slice(0, 5).map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="min-w-[240px] md:min-w-[280px] snap-center group cursor-pointer"
              onClick={() => onOpenVideo(getVideoUrl(project.video))}
            >
              {/* Phone Mockup Container */}
              <div className="relative aspect-[9/16] bg-[#0a0a0a] rounded-[2.5rem] border-[6px] border-[#1a1a1a] overflow-hidden mb-6 shadow-2xl transition-all duration-500 group-hover:border-primary/20 group-hover:shadow-primary/10">
                <img
                  src={`/assets/images/${project.image}`}
                  alt={project.title}
                  className={`w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 ${index >= 3 ? 'filter hue-rotate-15 saturate-125' : ''}`}
                  onError={(e) => { e.target.style.display = 'none'; e.target.parentElement.classList.add('bg-gray-900'); }}
                />

                {/* Play Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/10 transition-colors duration-500">
                  <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center group-hover:scale-110 group-hover:bg-primary group-hover:border-primary transition-all duration-300">
                    <Play size={20} fill="currentColor" className="text-white ml-1" />
                  </div>
                </div>

                {/* Content Overlay Reflection */}
                <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent pointer-events-none" />
              </div>

              {/* Captions */}
              <div className="space-y-1">
                <h4 className="text-white font-outfit font-bold text-sm uppercase tracking-wide">
                  {project.title}
                </h4>
                <p className="text-primary font-outfit font-bold text-[10px] uppercase tracking-widest">
                  {project.tagline}
                </p>
              </div>
            </motion.div>
          ))}
          {/* Spacer to prevent last item from being cut off */}
          <div className="min-w-[20px] md:min-w-[40px] flex-shrink-0" aria-hidden="true" />
        </div>
      </div>

    </section>
  );
};

export default PersonalProjects;

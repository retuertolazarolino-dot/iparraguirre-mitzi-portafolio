import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Play } from 'lucide-react';
import { Link } from 'react-router-dom';

const videoProjects = [
  {
    id: 1,
    title: 'RUTINAS QUE CAMBIAN TU DÍA',
    duration: '0:20',
    image: 'personal_1.png',
    video: 'https://www.tiktok.com/@avanticp.pe/video/7350847120976547077?is_from_webapp=1&sender_device=pc',
    client: 'AVANTI'
  },
  {
    id: 2,
    title: 'DISCIPLINA HOY, RESULTADOS MAÑANA',
    duration: '0:18',
    image: 'personal_2.png',
    video: 'https://www.tiktok.com/@avanticp.pe/video/7350847120976547077?is_from_webapp=1&sender_device=pc',
    client: 'AVANTI'
  },
  {
    id: 3,
    title: 'ESPACIOS QUE INSPIRAN',
    duration: '0:22',
    image: 'personal_3.png',
    video: 'https://www.youtube.com/watch?v=0XW--qPr2dw&list=RD0XW--qPr2dw&start_radio=1',
    client: 'AVANTI'
  },
  {
    id: 4,
    title: 'TU PIEL TU RUTINA TU MOMENTO',
    duration: '0:19',
    image: 'personal_1.png',
    video: 'personal_video_4.mp4',
    client: 'AVANTI'
  }
];

const getVideoUrl = (video) => {
  if (!video) return 'https://www.w3schools.com/html/mov_bbb.mp4';
  if (video.startsWith('http')) return video;
  return `/assets/videos/${video}`;
};

const PersonalProjects = ({ onOpenVideo }) => {
  return (
    <section id="personal-projects" className="bg-[#050505] overflow-hidden py-12 border-t border-white/5">
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
                02.
              </span>
              <h3 className="text-white font-display text-3xl md:text-4xl tracking-wide uppercase mb-6 leading-none">
                EDICIÓN DE VIDEOS
              </h3>
              
              <p className="text-gray-400 font-outfit text-xs md:text-sm font-light leading-relaxed mb-8 max-w-xs">
                Producción, grabación y edición de videos para marcas y redes sociales.
              </p>

              <div className="space-y-3 mb-16">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full border border-primary flex-shrink-0"></div>
                  <span className="text-gray-400 font-outfit text-xs md:text-sm">Videos grabados para marcas</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full border border-primary flex-shrink-0"></div>
                  <span className="text-gray-400 font-outfit text-xs md:text-sm">Edición de contenido audiovisual</span>
                </div>
              </div>

              <Link to="/mis-proyectos#video-editing" className="group flex items-center justify-center gap-2 border border-primary/50 text-white hover:bg-primary/10 px-8 py-3.5 font-bold transition-all duration-300 uppercase tracking-widest text-[10px] max-w-[180px]">
                VER MÁS
                <ArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" size={14} strokeWidth={1.5} />
              </Link>
            </motion.div>
          </div>

          {/* Right Column - Video Cards */}
          <div className="lg:col-span-8 relative">
            {/* Divider line for desktop */}
            <div className="hidden lg:block absolute left-0 top-0 w-[1px] h-full bg-white/5 -ml-4"></div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 lg:gap-4">
              {videoProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative aspect-[9/16] rounded-xl overflow-hidden shadow-xl group cursor-pointer border border-white/5 hover:border-primary/40 transition-colors duration-300"
                  onClick={() => onOpenVideo(getVideoUrl(project.video))}
                >
                  {/* Background Image */}
                  <img
                    src={`/assets/images/${project.image}`}
                    alt={project.title}
                    className="absolute inset-0 w-full h-full object-cover filter brightness-[0.6] group-hover:brightness-[0.4] transition-all duration-500 group-hover:scale-105"
                    onError={(e) => { e.target.style.display = 'none'; e.target.parentElement.classList.add('bg-[#111]'); }}
                  />

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/80"></div>

                  {/* Top Header */}
                  <div className="absolute top-4 left-4 right-4 flex justify-between items-start z-10">
                    <div className="flex items-center gap-1.5 opacity-80">
                      <div className="w-1.5 h-1.5 border border-white rounded-full"></div>
                      <span className="text-[8px] font-outfit tracking-widest text-white uppercase">{project.client}</span>
                    </div>
                  </div>

                  {/* Play Button Center */}
                  <div className="absolute inset-0 flex items-center justify-center z-10">
                    <div className="w-12 h-12 rounded-full bg-[#1a0b36]/80 backdrop-blur-sm border border-primary/30 flex items-center justify-center group-hover:bg-primary transition-colors duration-300 shadow-[0_0_15px_rgba(124,58,237,0.3)]">
                      <Play size={16} fill="white" className="text-white ml-0.5" />
                    </div>
                  </div>

                  {/* Bottom Content */}
                  <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end z-10">
                    <h4 className="text-[11px] md:text-xs font-display text-white leading-tight w-2/3 uppercase drop-shadow-md">
                      {project.title}
                    </h4>
                    <span className="text-[10px] font-outfit text-white/80 font-light drop-shadow-md">
                      {project.duration}
                    </span>
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

export default PersonalProjects;

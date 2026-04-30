import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, Play, Plus } from 'lucide-react';
import { Link } from 'react-router-dom';
import Contact from '../components/Contact';

const getVideoUrl = (video) => {
  if (!video) return 'https://www.w3schools.com/html/mov_bbb.mp4';
  if (video.startsWith('http')) return video;
  return `/assets/videos/${video}`;
};

const personalProjects = [
  { id: 1, title: 'CONTENIDO EMOCIONAL', category: 'UGC / Storytelling', image: 'personal_1.png', video: 'https://www.youtube.com/watch?v=0XW--qPr2dw&list=RD0XW--qPr2dw&start_radio=1s' },
  { id: 2, title: 'CONTENIDO UGC', category: 'Producto / Branding', image: 'personal_2.png', video: '' },
  { id: 3, title: 'CONTENIDO MOTIVACIONAL', category: 'Conexión / Comunidad', image: 'personal_3.png', video: '' },
  { id: 4, title: 'LIFESTYLE CONTENT', category: 'Visual / Engagement', image: 'personal_1.png', video: '' },
  { id: 5, title: 'ESTRATEGIA REELS', category: 'Viral / Growth', image: 'personal_2.png', video: '' },
  { id: 6, title: 'FITNESS JOURNEY', category: 'Disciplina / Inspira', image: 'personal_3.png', video: '' },
  { id: 7, title: 'DAILY VLOGS', category: 'Lifestyle', image: 'personal_1.png', video: '' },
  { id: 8, title: 'BEAUTY TIPS', category: 'Education', image: 'personal_2.png', video: '' },
];

const participatedProjects = [
  { id: 101, title: 'EXELTA GROUP', category: 'B2B / UX UI', image: 'exelta_mockup.png', video: '' },
  { id: 102, title: 'CENTRO AVANTI', category: 'Marketing / Content', image: 'avanti_mockup.png', video: '' },
  { id: 103, title: 'TRIAD AGENCIA', category: 'Strategy / Ads', image: 'triad_mockup.png', video: '' },
  { id: 104, title: 'CLIENTE X', category: 'Social Media', image: 'exelta_mockup.png', video: '' },
  { id: 105, title: 'CLIENTE Y', category: 'Web Design', image: 'avanti_mockup.png', video: '' },
  { id: 106, title: 'CLIENTE Z', category: 'Branding', image: 'triad_mockup.png', video: '' },
  { id: 107, title: 'CLIENTE W', category: 'E-commerce', image: 'exelta_mockup.png', video: '' },
];

const ProjectCard = ({ project, index, onOpenVideo, isPortrait }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.1 }}
    className="group cursor-pointer"
    onClick={() => onOpenVideo(getVideoUrl(project.video))}
  >
    <div className={`relative overflow-hidden rounded-2xl border border-white/5 bg-[#0a0a0a] transition-all duration-500 group-hover:border-primary/30 group-hover:shadow-[0_0_40px_rgba(255,0,0,0.1)] ${isPortrait ? 'aspect-[9/16]' : 'aspect-[4/3]'}`}>
      <img
        src={`/assets/images/${project.image}`}
        alt={project.title}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        onError={(e) => { e.target.style.display = 'none'; e.target.parentElement.classList.add('bg-gray-900'); }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
        <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center scale-0 group-hover:scale-100 transition-transform duration-500">
          <Play size={24} fill="white" className="text-white ml-1" />
        </div>
      </div>
    </div>

    <div className="mt-6 space-y-2">
      <span className="text-primary font-outfit font-bold text-[10px] tracking-[0.2em] uppercase">
        {project.category}
      </span>
      <h3 className="text-white font-outfit font-bold text-xl uppercase tracking-wide group-hover:text-primary transition-colors">
        {project.title}
      </h3>
    </div>
  </motion.div>
);

const ProjectsPage = ({ onOpenVideo }) => {
  const [personalLimit, setPersonalLimit] = useState(4);
  const [participatedLimit, setParticipatedLimit] = useState(4);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-black min-h-screen">
      {/* Header */}
      <section className="pt-32 pb-16 border-b border-white/5">
        <div className="container mx-auto">
          <Link to="/" className="inline-flex items-center gap-2 text-gray-500 hover:text-primary transition-colors mb-12 font-outfit text-xs tracking-widest uppercase">
            <ArrowLeft size={16} /> Volver al Inicio
          </Link>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-6xl md:text-8xl font-display font-bold text-white uppercase leading-none tracking-tight"
          >
            Mis <span className="text-primary">Proyectos</span>
          </motion.h1>
          <p className="text-gray-400 font-outfit font-light mt-6 max-w-2xl leading-relaxed">
            Una recopilación de mi trabajo en creación de contenido personal y mi participación en proyectos comerciales.
          </p>
        </div>
      </section>

      {/* Personal Projects Section */}
      <section className="py-24">
        <div className="container mx-auto">
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white uppercase tracking-wider mb-2">
              Proyectos <span className="text-primary">Personales</span>
            </h2>
            <div className="w-12 h-1 bg-primary" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            <AnimatePresence>
              {personalProjects.slice(0, personalLimit).map((project, index) => (
                <ProjectCard key={project.id} project={project} index={index} onOpenVideo={onOpenVideo} isPortrait={true} />
              ))}
            </AnimatePresence>
          </div>

          {personalLimit < personalProjects.length && (
            <div className="mt-16 text-center">
              <button
                onClick={() => setPersonalLimit(prev => prev + 6)}
                className="group inline-flex items-center gap-3 px-8 py-4 bg-white/5 border border-white/10 text-white font-outfit font-bold text-xs tracking-widest uppercase hover:bg-primary hover:border-primary transition-all duration-500"
              >
                <Plus size={16} className="group-hover:rotate-90 transition-transform duration-500" />
                Ver más proyectos personales
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Participated Projects Section */}
      <section className="py-24 bg-[#050505]">
        <div className="container mx-auto">
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white uppercase tracking-wider mb-2">
              Proyectos en los que <span className="text-primary">Participé</span>
            </h2>
            <div className="w-12 h-1 bg-primary" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            <AnimatePresence>
              {participatedProjects.slice(0, participatedLimit).map((project, index) => (
                <ProjectCard key={project.id} project={project} index={index} onOpenVideo={onOpenVideo} isPortrait={false} />
              ))}
            </AnimatePresence>
          </div>

          {participatedLimit < participatedProjects.length && (
            <div className="mt-16 text-center">
              <button
                onClick={() => setParticipatedLimit(prev => prev + 6)}
                className="group inline-flex items-center gap-3 px-8 py-4 bg-white/5 border border-white/10 text-white font-outfit font-bold text-xs tracking-widest uppercase hover:bg-primary hover:border-primary transition-all duration-500"
              >
                <Plus size={16} className="group-hover:rotate-90 transition-transform duration-500" />
                Ver más proyectos comerciales
              </button>
            </div>
          )}
        </div>
      </section>

      <Contact />
    </div>
  );
};

export default ProjectsPage;

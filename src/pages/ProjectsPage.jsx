import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, Play, Plus } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import Contact from '../components/Contact';

const getVideoUrl = (video) => {
  if (!video) return 'https://www.w3schools.com/html/mov_bbb.mp4';
  if (video.startsWith('http')) return video;
  return `/assets/videos/${video}`;
};

const socialMediaProjects = [
  { id: 1, title: 'Campaña Lanzamiento', category: 'Social Media / Ads', image: 'exelta_mockup.png', video: '' },
  { id: 2, title: 'Contenido Orgánico', category: 'Estrategia / Feed', image: 'avanti_mockup.png', video: '' },
  { id: 3, title: 'Gestión de Crisis', category: 'Community Management', image: 'triad_mockup.png', video: '' },
  { id: 4, title: 'Sorteo Mensual', category: 'Engagement', image: 'exelta_mockup.png', video: '' },
  { id: 5, title: 'Carruseles Educativos', category: 'Valor / Contenido', image: 'avanti_mockup.png', video: '' },
  { id: 6, title: 'Stories Interactivas', category: 'Interacción', image: 'triad_mockup.png', video: '' },
  { id: 7, title: 'Reels Tendencia', category: 'Viral / Growth', image: 'exelta_mockup.png', video: '' },
  { id: 8, title: 'Cobertura Evento', category: 'En vivo', image: 'avanti_mockup.png', video: '' },
];

const videoProjects = [
  { id: 101, title: 'CONTENIDO EMOCIONAL', category: 'UGC / Storytelling', image: 'personal_1.png', video: 'https://www.youtube.com/watch?v=0XW--qPr2dw&list=RD0XW--qPr2dw&start_radio=1s' },
  { id: 102, title: 'CONTENIDO UGC', category: 'Producto / Branding', image: 'personal_2.png', video: '' },
  { id: 103, title: 'CONTENIDO MOTIVACIONAL', category: 'Conexión / Comunidad', image: 'personal_3.png', video: '' },
  { id: 104, title: 'LIFESTYLE CONTENT', category: 'Visual / Engagement', image: 'personal_1.png', video: '' },
  { id: 105, title: 'ESTRATEGIA REELS', category: 'Viral / Growth', image: 'personal_2.png', video: '' },
  { id: 106, title: 'FITNESS JOURNEY', category: 'Disciplina / Inspira', image: 'personal_3.png', video: '' },
  { id: 107, title: 'DAILY VLOGS', category: 'Lifestyle', image: 'personal_1.png', video: '' },
  { id: 108, title: 'BEAUTY TIPS', category: 'Education', image: 'personal_2.png', video: '' },
];

const brandingProjects = [
  { id: 201, title: 'Rebranding Corporativo', category: 'Identidad Visual', image: 'triad_mockup.png', video: '' },
  { id: 202, title: 'Manual de Marca', category: 'Guidelines', image: 'exelta_mockup.png', video: '' },
  { id: 203, title: 'Diseño de Empaque', category: 'Packaging', image: 'avanti_mockup.png', video: '' },
  { id: 204, title: 'Naming y Logotipo', category: 'Creación de Marca', image: 'triad_mockup.png', video: '' },
  { id: 205, title: 'Papelería Institucional', category: 'Aplicaciones', image: 'exelta_mockup.png', video: '' },
  { id: 206, title: 'Merchandising', category: 'BTL', image: 'avanti_mockup.png', video: '' },
  { id: 207, title: 'Identidad Sonora', category: 'Audio Branding', image: 'triad_mockup.png', video: '' },
  { id: 208, title: 'Arquitectura de Marca', category: 'Estrategia', image: 'exelta_mockup.png', video: '' },
];

const webDesignProjects = [
  { id: 301, title: 'Landing Page Producto', category: 'Conversión / UI', image: 'avanti_mockup.png', video: '' },
  { id: 302, title: 'E-commerce B2C', category: 'UX / UI / Ventas', image: 'triad_mockup.png', video: '' },
  { id: 303, title: 'Plataforma Educativa', category: 'LMS / UX', image: 'exelta_mockup.png', video: '' },
  { id: 304, title: 'Rediseño Web Corporativa', category: 'Modernización', image: 'avanti_mockup.png', video: '' },
  { id: 305, title: 'App Móvil MVP', category: 'UI / Mobile', image: 'triad_mockup.png', video: '' },
  { id: 306, title: 'Dashboard Administrativo', category: 'SaaS / UI', image: 'exelta_mockup.png', video: '' },
  { id: 307, title: 'Blog Corporativo', category: 'Content / UI', image: 'avanti_mockup.png', video: '' },
  { id: 308, title: 'Portafolio Creativo', category: 'Personal Branding', image: 'triad_mockup.png', video: '' },
];

const ProjectCard = ({ project, index, onOpenVideo, aspectClass = 'aspect-[4/3]', hasVideo = false }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.1 }}
    className={`group ${hasVideo ? 'cursor-pointer' : ''}`}
    onClick={() => hasVideo && onOpenVideo(getVideoUrl(project.video))}
  >
    <div className={`relative overflow-hidden rounded-2xl border border-white/5 bg-[#0a0a0a] transition-all duration-500 group-hover:border-primary/30 group-hover:shadow-[0_0_40px_rgba(255,0,0,0.1)] ${aspectClass}`}>
      <img
        src={`/assets/images/${project.image}`}
        alt={project.title}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        onError={(e) => { e.target.style.display = 'none'; e.target.parentElement.classList.add('bg-gray-900'); }}
      />
      {hasVideo && (
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
          <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center scale-0 group-hover:scale-100 transition-transform duration-500">
            <Play size={24} fill="white" className="text-white ml-1" />
          </div>
        </div>
      )}
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
  const [socialLimit, setSocialLimit] = useState(6);
  const [videoLimit, setVideoLimit] = useState(6);
  const [brandingLimit, setBrandingLimit] = useState(6);
  const [webLimit, setWebLimit] = useState(6);
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      setTimeout(() => {
        const element = document.getElementById(location.hash.substring(1));
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      window.scrollTo(0, 0);
    }
  }, [location]);

  return (
    <div className="bg-black min-h-screen">
      {/* Header */}
      <section className="pt-32 pb-16 border-b border-white/5">
        <div className="container mx-auto px-4 md:px-8">
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
            Una recopilación de mi trabajo en diferentes áreas de marketing digital, diseño y creación de contenido.
          </p>
        </div>
      </section>

      {/* Social Media Section */}
      <section id="social-media" className="py-24 border-b border-white/5">
        <div className="container mx-auto px-4 md:px-8">
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white uppercase tracking-wider mb-2">
              Social <span className="text-primary">Media</span>
            </h2>
            <div className="w-12 h-1 bg-primary" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence>
              {socialMediaProjects.slice(0, socialLimit).map((project, index) => (
                <ProjectCard key={project.id} project={project} index={index} onOpenVideo={onOpenVideo} aspectClass="aspect-[4/3]" />
              ))}
            </AnimatePresence>
          </div>

          {socialLimit < socialMediaProjects.length && (
            <div className="mt-16 text-center">
              <button
                onClick={() => setSocialLimit(prev => prev + 6)}
                className="group inline-flex items-center gap-3 px-8 py-4 bg-white/5 border border-white/10 text-white font-outfit font-bold text-xs tracking-widest uppercase hover:bg-primary hover:border-primary transition-all duration-500"
              >
                <Plus size={16} className="group-hover:rotate-90 transition-transform duration-500" />
                Ver más proyectos de Social Media
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Edición de Videos Section */}
      <section id="video-editing" className="py-24 bg-[#050505] border-b border-white/5">
        <div className="container mx-auto px-4 md:px-8">
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white uppercase tracking-wider mb-2">
              Edición de <span className="text-primary">Videos</span>
            </h2>
            <div className="w-12 h-1 bg-primary" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            <AnimatePresence>
              {videoProjects.slice(0, videoLimit).map((project, index) => (
                <ProjectCard key={project.id} project={project} index={index} onOpenVideo={onOpenVideo} aspectClass="aspect-[9/16]" hasVideo={true} />
              ))}
            </AnimatePresence>
          </div>

          {videoLimit < videoProjects.length && (
            <div className="mt-16 text-center">
              <button
                onClick={() => setVideoLimit(prev => prev + 6)}
                className="group inline-flex items-center gap-3 px-8 py-4 bg-white/5 border border-white/10 text-white font-outfit font-bold text-xs tracking-widest uppercase hover:bg-primary hover:border-primary transition-all duration-500"
              >
                <Plus size={16} className="group-hover:rotate-90 transition-transform duration-500" />
                Ver más proyectos de Video
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Branding Section */}
      <section id="branding" className="py-24 border-b border-white/5">
        <div className="container mx-auto px-4 md:px-8">
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white uppercase tracking-wider mb-2">
              <span className="text-primary">Branding</span>
            </h2>
            <div className="w-12 h-1 bg-primary" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            <AnimatePresence>
              {brandingProjects.slice(0, brandingLimit).map((project, index) => (
                <ProjectCard key={project.id} project={project} index={index} onOpenVideo={onOpenVideo} aspectClass="aspect-square" />
              ))}
            </AnimatePresence>
          </div>

          {brandingLimit < brandingProjects.length && (
            <div className="mt-16 text-center">
              <button
                onClick={() => setBrandingLimit(prev => prev + 6)}
                className="group inline-flex items-center gap-3 px-8 py-4 bg-white/5 border border-white/10 text-white font-outfit font-bold text-xs tracking-widest uppercase hover:bg-primary hover:border-primary transition-all duration-500"
              >
                <Plus size={16} className="group-hover:rotate-90 transition-transform duration-500" />
                Ver más proyectos de Branding
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Diseño Web Section */}
      <section id="web-design" className="py-24 bg-[#050505]">
        <div className="container mx-auto px-4 md:px-8">
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white uppercase tracking-wider mb-2">
              Diseño <span className="text-primary">Web</span>
            </h2>
            <div className="w-12 h-1 bg-primary" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            <AnimatePresence>
              {webDesignProjects.slice(0, webLimit).map((project, index) => (
                <ProjectCard key={project.id} project={project} index={index} onOpenVideo={onOpenVideo} aspectClass="aspect-[16/9]" />
              ))}
            </AnimatePresence>
          </div>

          {webLimit < webDesignProjects.length && (
            <div className="mt-16 text-center">
              <button
                onClick={() => setWebLimit(prev => prev + 6)}
                className="group inline-flex items-center gap-3 px-8 py-4 bg-white/5 border border-white/10 text-white font-outfit font-bold text-xs tracking-widest uppercase hover:bg-primary hover:border-primary transition-all duration-500"
              >
                <Plus size={16} className="group-hover:rotate-90 transition-transform duration-500" />
                Ver más proyectos Web
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


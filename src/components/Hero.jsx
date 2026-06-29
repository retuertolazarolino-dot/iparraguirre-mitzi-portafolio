import React, { useState, useEffect, useRef, useLayoutEffect } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Heart, Mail, MapPin, Calendar, Phone } from 'lucide-react';

// ─── Constants ───────────────────────────────────────────────────────────────
const bannerTexts = [
  "Estrategia digital & comunicación",
  "Diseño y creación de contenido",
  "Gestión de redes sociales",
  "Análisis de datos y métricas",
];

const COL_1_PROJECTS = [
  '/assets/images/portfolio/marketing-digital-estrategia/SOCIAL_MEDIA_PORTAFOLIO_AVANTICP.webp',
  '/assets/images/portfolio/diseno-contenido/DESIGN POST.webp',
  '/assets/images/portfolio/ux-ui-diseno-web/DISENO_WEB_DON_LALITO.webp'
];

const COL_2_PROJECTS = [
  '/assets/images/portfolio/branding/BRANDING_EMPRESA.webp',
  '/assets/images/portfolio/branding/MARCA_BRANDING.webp',
  '/assets/images/portfolio/marketing-digital-estrategia/SOCIAL_MEDIA_PORTAFOLIO_OKAMI.webp'
];

const COL_3_PROJECTS = [
  '/assets/images/portfolio/diseno-contenido/SOCIAL MEDIA.webp',
  '/assets/images/portfolio/ux-ui-diseno-web/DISENO_WEB_EVERCOAT.webp',
  '/assets/images/portfolio/branding/BRANDING_MARCA.webp'
];

const COL_4_PROJECTS = [
  '/assets/images/portfolio/ux-ui-diseno-web/DISENO_WEB_GRUPO_ROMA.webp',
  '/assets/images/portfolio/branding/BRANDING_EMPRESA.webp',
  '/assets/images/portfolio/diseno-contenido/DESIGN POST.webp'
];

const ORBS = [
  { top: "8%",  left: "4%",  size: 320, color: "rgba(155,81,224,0.20)" },
  { top: "58%", left: "70%", size: 400, color: "rgba(199,125,255,0.13)" },
  { top: "76%", left: "2%",  size: 210, color: "rgba(155,81,224,0.11)" },
];

const getIsDesktop = () => typeof window !== 'undefined' && window.innerWidth >= 1024;

// ─── Components ──────────────────────────────────────────────────────────────
const GlowCard = ({ children, className = '', rounded = 'rounded-3xl' }) => (
  <div className={`relative overflow-hidden bg-dark-card ${rounded} ${className}`}>
    <div
      className="absolute w-[250%] h-[250%] animate-spin pointer-events-none z-0 blur-md"
      style={{
        background: 'conic-gradient(from 0deg,transparent 0%,transparent 30%,rgba(155,81,224,0.1) 50%,rgba(199,125,255,0.4) 80%,rgba(235,200,255,1) 100%)',
        animationDuration: '14s',
        inset: 0,
        position: 'absolute',
        left: '-75%',
        top: '-75%',
      }}
    />
    <div className="absolute inset-[2px] rounded-[1.35rem] bg-[#111115] z-0" />
    <div className="absolute inset-[1px] rounded-[1.35rem] bg-gradient-to-br from-[#9b51e0]/10 via-transparent to-transparent opacity-40 z-0 pointer-events-none" />
    <div className="absolute inset-[6px] rounded-[1.1rem] overflow-hidden z-10">
      {children}
    </div>
  </div>
);

const CarouselColumn = ({ images, speed = 20, direction = "up" }) => {
  return (
    <div className="relative w-full pointer-events-none" style={{ overflow: 'hidden' }}>
      <motion.div
        animate={{ y: direction === "up" ? ["0%", "-50%"] : ["-50%", "0%"] }}
        transition={{ ease: "linear", duration: speed, repeat: Infinity }}
        className="flex flex-col gap-4 w-full"
      >
        {[...images, ...images].map((img, i) => (
          <div key={i} className="w-full aspect-[4/5] rounded-xl overflow-hidden shrink-0 border border-white/10 bg-dark-card">
            <img src={img} alt="project" className="w-full h-full object-cover" />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

const HeroBentoGrid = React.forwardRef(({ currentIndex, imageOpacity, textOpacity, textY }, imageRef) => (
  <div className="w-full max-w-[1800px] mx-auto h-full min-h-[600px] z-10 relative">
    <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.7fr_1.3fr] xl:grid-cols-[1.1fr_1.6fr_1.4fr] gap-3 md:gap-4 items-stretch h-full">

      {/* ── Photo Column ── */}
      <div ref={imageRef} className="h-[400px] sm:h-[450px] lg:h-full lg:min-h-[600px] relative">
        <motion.div style={{ opacity: imageOpacity ?? 1 }} className="w-full h-full">
          <GlowCard className="w-full h-full shadow-lg">
            <img src="/assets/images/mitzi-iparraguirre-foto-casual.webp" alt="Mitzi Iparraguirre"
              className="w-full h-full object-cover object-top" />
          </GlowCard>
        </motion.div>
      </div>

      {/* ── Text Column ── */}
      <motion.div style={{ opacity: textOpacity ?? 1, y: textY ?? 0 }}
        className="bg-dark-card rounded-3xl p-6 lg:p-8 flex flex-col justify-between h-full overflow-hidden shadow-lg border border-white/5">
        <div>
          <div className="flex items-center justify-between mb-8">
            <div className="bg-white/5 border border-white/10 rounded-full px-4 sm:px-5 py-2">
              <span className="text-[9px] sm:text-[11px] font-bold tracking-[0.15em] text-gray-300 font-outfit uppercase">
                Marketing Digital • Contenido • Experiencia Digital
              </span>
            </div>
            <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-primary-light">
              <Heart size={18} className="fill-primary-light/20" />
            </div>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-sans font-bold leading-[1.05] tracking-tight mb-6 break-words w-full">
            <span className="text-[var(--color-text-light)] block">MITZI</span>
            <span className="block bg-gradient-to-r from-[#E2B2F4] to-[#A669D7] bg-clip-text text-transparent">IPARRAGUIRRE</span>
          </h1>
          <div className="h-[32px] md:h-[40px] mb-6 flex items-center overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.p key={currentIndex} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }} transition={{ duration: 0.35 }}
                className="text-xl md:text-2xl font-semibold text-[var(--color-text-light)] m-0">
                {bannerTexts[currentIndex]}
              </motion.p>
            </AnimatePresence>
          </div>
          <div className="space-y-4 text-gray-400 text-sm md:text-base font-outfit font-light leading-relaxed mb-10 max-w-md">
            <p>Creo experiencias digitales que comunican, conectan y generan valor.</p>
            <p>Integro estrategia, contenido y diseño para transformar ideas en soluciones centradas en las personas.</p>
          </div>
        </div>
        <a href="#portfolio" className="group flex items-center gap-3 bg-primary-light text-dark hover:bg-white px-6 py-4 rounded-full font-bold transition-all duration-300 uppercase tracking-widest text-xs w-max">
          Ver Proyectos <ArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" size={16} />
        </a>
      </motion.div>

      {/* ── Contact Column ── */}
      <motion.div style={{ opacity: textOpacity ?? 1, y: textY ?? 0 }}
        className="flex flex-col gap-3 md:gap-4 h-full">
        <a href="https://docs.google.com/document/d/1QR6cfYAIlqs8-x7RGZWAjxMWIPpNsFow/edit?usp=sharing&ouid=117684595889054258712&rtpof=true&sd=true"
          target="_blank" rel="noreferrer"
          className="bg-dark-card rounded-3xl p-5 md:p-6 flex items-center justify-between group hover:bg-white/5 transition-colors flex-[0.4] shadow-lg border border-white/5">
          <div>
            <span className="text-[10px] text-gray-400 font-bold tracking-widest uppercase mb-3 block">Currículum Vitae</span>
            <div className="flex items-center gap-4">
              <div className="text-3xl font-bold font-sans text-[var(--color-text-light)]">CV</div>
              <span className="text-gray-300 font-medium hidden sm:block">Conoce mi trayectoria</span>
            </div>
          </div>
          <div className="w-10 h-10 min-w-10 rounded-full bg-white/5 flex items-center justify-center text-primary-light group-hover:bg-primary-light group-hover:text-dark transition-colors">
            <ArrowUpRight size={18} />
          </div>
        </a>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4 flex-[2]">
          <a href="mailto:jhoselyn.mitzi025@gmail.com" className="bg-dark-card rounded-3xl p-5 flex flex-col justify-center gap-3 hover:bg-white/5 transition-colors h-full shadow-lg border border-white/5">
            <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-primary-light"><Mail size={20} /></div>
            <div><h3 className="text-sm font-semibold text-[var(--color-text-light)]">Email</h3><p className="text-xs text-gray-400 mt-1 truncate">jhoselyn.mitzi025@gmail.com</p></div>
          </a>
          <div className="bg-dark-card rounded-3xl p-5 flex flex-col justify-center gap-3 hover:bg-white/5 transition-colors h-full shadow-lg border border-white/5">
            <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-primary-light"><MapPin size={20} /></div>
            <div><h3 className="text-sm font-semibold text-[var(--color-text-light)]">Ubicación</h3><p className="text-xs text-gray-400 mt-1 truncate">Perú</p></div>
          </div>
          <a href="https://linkedin.com/in/iparraguirre-m" target="_blank" rel="noreferrer" className="bg-dark-card rounded-3xl p-5 flex flex-col justify-center gap-3 hover:bg-white/5 transition-colors h-full shadow-lg border border-white/5">
            <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-primary-light">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>
              </svg>
            </div>
            <div><h3 className="text-sm font-semibold text-[var(--color-text-light)]">LinkedIn</h3><p className="text-[11px] sm:text-xs text-gray-400 mt-1 truncate">linkedin.com/in/iparraguirre-m</p></div>
          </a>
          <a href="https://wa.me/51907459557" target="_blank" rel="noreferrer" className="bg-dark-card rounded-3xl p-5 flex flex-col justify-center gap-3 hover:bg-white/5 transition-colors h-full shadow-lg border border-white/5">
            <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-primary-light"><Phone size={20} /></div>
            <div><h3 className="text-sm font-semibold text-[var(--color-text-light)]">Teléfono</h3><p className="text-xs text-gray-400 mt-1 truncate">+51 907 459 557</p></div>
          </a>
          <div className="bg-dark-card rounded-3xl p-5 flex items-center gap-4 hover:bg-white/5 transition-colors h-full sm:col-span-2 shadow-lg border border-white/5">
            <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-primary-light shrink-0"><Calendar size={24} /></div>
            <div><h3 className="text-sm font-semibold text-[var(--color-text-light)]">Disponibilidad</h3><p className="text-[12px] sm:text-[13px] text-gray-400 mt-0.5 leading-snug">Disponible para oportunidades laborales y proyectos freelance.</p></div>
          </div>
        </div>
      </motion.div>

    </div>
  </div>
));
HeroBentoGrid.displayName = 'HeroBentoGrid';

// ─── Main Hero ───────────────────────────────────────────────────────────────
const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDesktop, setIsDesktop] = useState(getIsDesktop);

  const gridRef = useRef(null);
  const imageRef = useRef(null);
  const [target, setTarget] = useState(null);

  // ── Scroll Tracking ──
  // Track the HeroBentoGrid entering the viewport from the bottom to the top.
  // 0 = grid is at bottom of viewport. 1 = grid is at top of viewport.
  const { scrollYProgress } = useScroll({
    target: gridRef,
    offset: ['start end', 'start 80px'],
  });

  // ── Layout Dimensions ──
  const vwRef = useRef(typeof window !== 'undefined' ? window.innerWidth  : 1440);
  const vhRef = useRef(typeof window !== 'undefined' ? window.innerHeight : 900);

  const SPLASH_H = Math.min(400, vhRef.current * 0.45);
  const SPLASH_W = SPLASH_H * 0.65;
  const splashL  = vwRef.current / 2 - SPLASH_W / 2;
  const splashT  = (vhRef.current - 80 - 160) / 2 + 80 - SPLASH_H / 2;

  // ── Animations mapped to grid scroll progress ──

  // Fixed Mitzi photo moves to the grid target
  const mitziLeft   = useTransform(scrollYProgress, [0, 1], [splashL, target?.left   ?? splashL]);
  const mitziTop    = useTransform(scrollYProgress, [0, 1], [splashT, (target?.top ?? splashT) + 80]);
  const mitziWidth  = useTransform(scrollYProgress, [0, 1], [SPLASH_W, target?.width  ?? SPLASH_W]);
  const mitziHeight = useTransform(scrollYProgress, [0, 1], [SPLASH_H, target?.height ?? SPLASH_H]);
  const mitziRadius = useTransform(scrollYProgress, [0, 1], ['14px', '22px']);

  // Swap fixed photo with grid photo perfectly at the end of animation (progress >= 0.999)
  const floatingPhotoOpacity = useTransform(scrollYProgress, v => v >= 0.999 ? 0 : 1);
  const gridPhotoOpacity     = useTransform(scrollYProgress, v => v >= 0.999 ? 1 : 0);

  // Splash overlay (dark BG, texts) fades out early
  const splashOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  // Project images slide outward and fade
  const projLeftX   = useTransform(scrollYProgress, [0, 0.6], [0, -vwRef.current * 0.2]);
  const projRightX  = useTransform(scrollYProgress, [0, 0.6], [0,  vwRef.current * 0.2]);
  const projOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  // Grid text fades in and slides up slightly
  const gridTextOpacity = useTransform(scrollYProgress, [0.5, 0.9], [0, 1]);
  const gridTextY       = useTransform(scrollYProgress, [0.5, 0.9], [40, 0]);

  // ── Effects ───────────────────────────────────────────────────────────────
  useEffect(() => {
    const check = () => setIsDesktop(window.innerWidth >= 1024);
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  useEffect(() => {
    const id = setInterval(() => setCurrentIndex(p => (p + 1) % bannerTexts.length), 4000);
    return () => clearInterval(id);
  }, []);

  // Measure the target position of the image card relative to the Grid section
  useLayoutEffect(() => {
    const measure = () => {
      if (!imageRef.current || !gridRef.current) return;
      const r  = imageRef.current.getBoundingClientRect();
      const sr = gridRef.current.getBoundingClientRect();
      
      // Since sr.top is the top of the grid section, r.top - sr.top gives 
      // the exact Y coordinate the image will have when the grid section reaches top:0
      setTarget({
        top: r.top - sr.top, 
        left: r.left, 
        width: r.width, 
        height: r.height 
      });
      
      vwRef.current = window.innerWidth;
      vhRef.current = window.innerHeight;
    };
    const raf = requestAnimationFrame(() => setTimeout(measure, 50));
    window.addEventListener('resize', measure);
    return () => { cancelAnimationFrame(raf); window.removeEventListener('resize', measure); };
  }, [isDesktop]);

  // ── Mobile layout (No scroll animation) ─────────────────────────────────
  if (!isDesktop) {
    return (
      <section id="home" className="bg-dark w-full min-h-screen flex flex-col justify-start pt-24 pb-8 px-3">
        {/* Mobile ambient orb */}
        <div className="fixed inset-0 pointer-events-none z-0">
          <div className="absolute top-0 left-1/4 w-72 h-72 rounded-full" style={{ background: 'radial-gradient(circle, rgba(155,81,224,0.12) 0%, transparent 70%)', filter: 'blur(40px)' }} />
        </div>
        <div className="w-full max-w-lg mx-auto flex flex-col gap-4 relative z-10">
          {/* Photo */}
          <motion.div
            className="h-[80vw] max-h-[420px] w-full"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
          >
            <GlowCard className="w-full h-full shadow-lg">
              <img src="/assets/images/mitzi-iparraguirre-foto-casual.webp" alt="Mitzi Iparraguirre"
                className="w-full h-full object-cover object-center" />
            </GlowCard>
          </motion.div>

          {/* Name & description */}
          <motion.div
            className="bg-dark-card rounded-3xl p-6 flex flex-col gap-4 border border-white/5 shadow-lg"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            {/* Badge */}
            <div className="bg-white/5 border border-white/10 rounded-full px-4 py-1.5 self-start">
              <span className="text-[10px] font-bold tracking-[0.15em] text-gray-300 font-outfit uppercase">Estrategia · Diseño · Contenido</span>
            </div>
            <h1 className="text-4xl font-sans font-bold leading-tight">
              <span className="text-white block">MITZI</span>
              <span className="block bg-gradient-to-r from-[#E2B2F4] to-[#A669D7] bg-clip-text text-transparent">IPARRAGUIRRE</span>
            </h1>
            {/* Animated rotating subtitle */}
            <div className="h-6 overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.p
                  key={currentIndex}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="text-base text-gray-400 font-outfit"
                >
                  {bannerTexts[currentIndex]}
                </motion.p>
              </AnimatePresence>
            </div>
            <p className="text-gray-400 font-outfit font-light text-sm leading-relaxed">
              Creo experiencias digitales que comunican, conectan y generan valor.
            </p>
            <a href="#portfolio" className="flex items-center gap-2 bg-primary-light text-dark px-5 py-3 rounded-full font-bold text-xs uppercase tracking-widest w-max">
              Ver Proyectos <ArrowUpRight size={14} />
            </a>
          </motion.div>

          {/* Contact cards row */}
          <motion.div
            className="grid grid-cols-2 gap-3"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <a href="mailto:jhoselyn.mitzi025@gmail.com" className="bg-dark-card rounded-2xl p-4 flex items-center gap-3 border border-white/5 hover:border-primary/30 transition-colors">
              <div className="w-9 h-9 rounded-xl bg-white/5 flex items-center justify-center text-primary-light shrink-0"><Mail size={18} /></div>
              <div><p className="text-xs font-semibold text-white">Email</p><p className="text-[10px] text-gray-500">Contáctame</p></div>
            </a>
            <a href="https://wa.me/51907459557" target="_blank" rel="noreferrer" className="bg-dark-card rounded-2xl p-4 flex items-center gap-3 border border-white/5 hover:border-primary/30 transition-colors">
              <div className="w-9 h-9 rounded-xl bg-white/5 flex items-center justify-center text-primary-light shrink-0"><Phone size={18} /></div>
              <div><p className="text-xs font-semibold text-white">WhatsApp</p><p className="text-[10px] text-gray-500">+51 907 459 557</p></div>
            </a>
            <a href="https://linkedin.com/in/iparraguirre-m" target="_blank" rel="noreferrer" className="bg-dark-card rounded-2xl p-4 flex items-center gap-3 border border-white/5 hover:border-primary/30 transition-colors">
              <div className="w-9 h-9 rounded-xl bg-white/5 flex items-center justify-center text-primary-light shrink-0">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
              </div>
              <div><p className="text-xs font-semibold text-white">LinkedIn</p><p className="text-[10px] text-gray-500">iparraguirre-m</p></div>
            </a>
            <div className="bg-dark-card rounded-2xl p-4 flex items-center gap-3 border border-white/5">
              <div className="w-9 h-9 rounded-xl bg-white/5 flex items-center justify-center text-primary-light shrink-0"><MapPin size={18} /></div>
              <div><p className="text-xs font-semibold text-white">Ubicación</p><p className="text-[10px] text-gray-500">Perú · Disponible</p></div>
            </div>
          </motion.div>
        </div>
      </section>
    );
  }

  // ── Desktop Layout: Normal Document Flow with Fixed Overlay ─────────────
  return (
    <>
      {/* 
        SPACER: This 100vh block pushes the Hero grid down by exactly one viewport height.
        When the user starts scrolling, they are scrolling past this spacer, bringing the Hero grid into view.
      */}
      <div style={{ height: '100vh' }} className="w-full bg-[#0a0a0f]" />

      {/* 
        HERO GRID: Normal document flow. 
        It scrolls up naturally. When it hits top:0, the animation finishes.
      */}
      <section ref={gridRef} id="home" className="relative w-full pt-28 pb-10 px-3 lg:px-4 flex justify-center bg-dark" style={{ scrollMarginTop: 0 }}>
        <HeroBentoGrid
          ref={imageRef}
          currentIndex={currentIndex}
          imageOpacity={gridPhotoOpacity}
          textOpacity={gridTextOpacity}
          textY={gridTextY}
        />
      </section>

      {/* 
        FIXED SPLASH OVERLAY: Stays pinned to the screen and fades out.
      */}
      <motion.div style={{ opacity: splashOpacity }} className="fixed inset-0 z-40 pointer-events-none flex items-center justify-center">
        {/* Dark Background */}
        <div className="absolute inset-0 bg-[#0a0a0f]" />
        
        {/* Ambient Orbs */}
        {ORBS.map((orb, i) => (
          <div key={i} className="absolute rounded-full"
            style={{ top: orb.top, left: orb.left, width: orb.size, height: orb.size,
              background: `radial-gradient(circle, ${orb.color} 0%, transparent 70%)`, filter: 'blur(40px)' }} />
        ))}

        {/* Project Images: Left Pair */}
        <div className="absolute" style={{ left: '4%', top: '50%', transform: 'translateY(-50%)', height: 'min(650px, 80vh)', width: '320px' }}>
          <motion.div style={{ x: projLeftX, opacity: projOpacity, width: '100%', height: '100%' }}>
            <div
              className="grid grid-cols-2 gap-3 w-full h-full"
              style={{ maskImage: 'linear-gradient(to bottom, transparent 0%, black 18%, black 82%, transparent 100%)', WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, black 18%, black 82%, transparent 100%)' }}
            >
               <CarouselColumn images={COL_1_PROJECTS} speed={25} direction="up" />
               <CarouselColumn images={COL_2_PROJECTS} speed={30} direction="down" />
            </div>
          </motion.div>
        </div>

        {/* Project Images: Right Pair */}
        <div className="absolute" style={{ right: '4%', top: '50%', transform: 'translateY(-50%)', height: 'min(650px, 80vh)', width: '320px' }}>
          <motion.div style={{ x: projRightX, opacity: projOpacity, width: '100%', height: '100%' }}>
            <div
              className="grid grid-cols-2 gap-3 w-full h-full"
              style={{ maskImage: 'linear-gradient(to bottom, transparent 0%, black 18%, black 82%, transparent 100%)', WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, black 18%, black 82%, transparent 100%)' }}
            >
               <CarouselColumn images={COL_3_PROJECTS} speed={28} direction="up" />
               <CarouselColumn images={COL_4_PROJECTS} speed={22} direction="down" />
            </div>
          </motion.div>
        </div>

        {/* Splash Texts & Scroll Indicator */}
        <motion.div
          className="absolute inset-x-0 bottom-0 pb-16 flex flex-col items-center select-none"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: 'easeOut', delay: 0.3 }}
        >
          <motion.div
            className="flex items-center gap-3 mb-3"
            initial={{ opacity: 0, scaleX: 0.4 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.5 }}
          >
            <div className="w-8 h-[1px] bg-primary-light" />
            <span className="text-primary-light text-[11px] font-outfit font-semibold tracking-[0.28em] uppercase">Estrategia · Diseño · Contenido</span>
            <div className="w-8 h-[1px] bg-primary-light" />
          </motion.div>
          <motion.h2
            className="text-3xl lg:text-5xl font-sans font-black text-white tracking-tight text-center mb-2"
            style={{ textShadow: '0 0 40px rgba(199,125,255,0.3)' }}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.6 }}
          >
            MITZI IPARRAGUIRRE
          </motion.h2>
          <motion.p
            className="text-base lg:text-lg font-outfit font-light text-white/55 tracking-widest uppercase"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.8 }}
          >
            Marketing Digital <span className="text-primary-light">&</span> Branding
          </motion.p>
          <motion.div
            className="mt-8 flex flex-col items-center gap-1.5"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.2 }}
          >
            <span className="text-white/30 text-[10px] font-outfit uppercase tracking-[0.25em]">Scroll</span>
            <div className="w-[1px] h-8 overflow-hidden">
              <div className="w-full h-full bg-gradient-to-b from-primary-light to-transparent"
                style={{ animation: 'scrollPulse 1.5s ease-in-out infinite', transformOrigin: 'top' }} />
            </div>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* 
        FIXED MITZI PHOTO: 
        Animates from the center of the viewport to exactly where the grid's image placeholder is.
        It vanishes (opacity 0) exactly when it perfectly overlaps the grid image.
      */}
      <motion.div
        className="fixed z-50 pointer-events-none"
        style={{
          top: mitziTop,
          left: mitziLeft,
          width: mitziWidth,
          height: mitziHeight,
          borderRadius: mitziRadius,
          opacity: floatingPhotoOpacity,
          overflow: 'hidden',
          boxShadow: '0 24px 80px rgba(0,0,0,0.6), 0 0 0 1.5px rgba(199,125,255,0.25)',
        }}
      >
        <img src="/assets/images/mitzi-iparraguirre-foto-casual.webp" alt="Mitzi Iparraguirre"
          className="w-full h-full object-cover object-top" />
        <motion.div style={{ opacity: splashOpacity }}
          className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent pointer-events-none" />
      </motion.div>

      <style>{`
        @keyframes scrollPulse {
          0%   { transform: scaleY(0); opacity: 0; }
          40%  { opacity: 1; }
          70%  { opacity: 1; }
          100% { transform: scaleY(1); opacity: 0; }
        }
      `}</style>
    </>
  );
};

export default Hero;

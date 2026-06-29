import { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Sparkles, TrendingUp, PenTool, Film, Monitor, Palette, X, ZoomIn, ExternalLink, Mail } from 'lucide-react';

/* ─────────────────────────────────────────
   IMAGE MODAL
───────────────────────────────────────── */
const ImageModal = ({ src, alt, onClose }) => (
  <AnimatePresence>
    {src && (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 z-[999] flex items-center justify-center bg-black/85 backdrop-blur-sm p-4 md:p-10"
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          transition={{ type: 'spring', stiffness: 300, damping: 28 }}
          onClick={(e) => e.stopPropagation()}
          className="relative max-w-5xl w-full max-h-[90vh] flex flex-col items-center"
        >
          <button
            onClick={onClose}
            className="absolute -top-4 -right-4 z-10 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 flex items-center justify-center text-white transition-colors"
          >
            <X size={18} />
          </button>
          <img
            src={src}
            alt={alt}
            className="max-w-full max-h-[85vh] object-contain rounded-2xl shadow-2xl"
          />
          {alt && (
            <p className="mt-4 text-gray-400 text-sm tracking-wide">{alt}</p>
          )}
        </motion.div>
      </motion.div>
    )}
  </AnimatePresence>
);

/* ─────────────────────────────────────────
   TIKTOK MODAL  — iframe embed mejorado
───────────────────────────────────────── */
const TikTokModal = ({ video, onClose }) => {
  const [iframeError, setIframeError] = useState(false);
  const [iframeLoaded, setIframeLoaded] = useState(false);

  const handleClose = useCallback(() => {
    setIframeError(false);
    setIframeLoaded(false);
    onClose();
  }, [onClose]);

  return (
    <AnimatePresence>
      {video && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={handleClose}
          className="fixed inset-0 z-[999] flex items-center justify-center bg-black/90 backdrop-blur-md p-2 sm:p-4"
        >
          <motion.div
            initial={{ scale: 0.92, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.92, opacity: 0, y: 20 }}
            transition={{ type: 'spring', damping: 24, stiffness: 280 }}
            onClick={(e) => e.stopPropagation()}
            className="relative flex flex-col items-center gap-2 sm:gap-3 w-full max-w-[340px] sm:max-w-[380px]"
          >
            {/* Header del modal */}
            <div className="w-full flex items-center justify-between px-1 gap-2">
              <div className="flex items-center gap-2 min-w-0">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.19 8.19 0 0 0 4.78 1.52V6.76a4.83 4.83 0 0 1-1.01-.07z"/>
                </svg>
                <span className="text-white font-sans font-semibold text-xs sm:text-sm tracking-wide truncate">{video.title}</span>
              </div>
              <div className="flex items-center gap-2">
                <a
                  href={video.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hidden xs:flex items-center gap-1 text-[#9b51e0] hover:text-[#c77dff] transition-colors font-sans font-bold text-[10px] tracking-widest shrink-0"
                  onClick={(e) => e.stopPropagation()}
                >
                  VER EN TIKTOK <ExternalLink size={12} />
                </a>
                <button
                  onClick={handleClose}
                  className="w-8 h-8 bg-white/10 hover:bg-white/20 text-white rounded-full flex items-center justify-center transition-colors border border-white/10"
                >
                  <X size={16} />
                </button>
              </div>
            </div>

            {/* Contenido: iframe o fallback */}
            <div
              className="w-full rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-black flex flex-col items-center justify-center"
              style={{ height: 'min(72vh, 680px)' }}
            >
              {iframeError ? (
                /* Fallback cuando el video no permite embed */
                <div className="flex flex-col items-center justify-center gap-6 p-8 text-center h-full">
                  <div className="w-20 h-20 rounded-2xl bg-[#9b51e0]/15 border border-[#9b51e0]/30 flex items-center justify-center">
                    <svg width="36" height="36" viewBox="0 0 24 24" fill="#9b51e0">
                      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.19 8.19 0 0 0 4.78 1.52V6.76a4.83 4.83 0 0 1-1.01-.07z"/>
                    </svg>
                  </div>
                  <div>
                    <p className="text-white font-sans font-semibold text-base mb-2">{video.title}</p>
                    <p className="text-gray-400 font-outfit text-sm leading-relaxed">
                      Este video no permite reproducirse de manera incrustada. Puedes verlo directamente en TikTok.
                    </p>
                  </div>
                  <a
                    href={video.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-gradient-to-r from-[#9b51e0] to-[#c77dff] hover:opacity-90 text-white px-6 py-3 rounded-full font-sans font-bold text-xs tracking-widest uppercase transition-all duration-300 hover:scale-105 shadow-lg"
                  >
                    ABRIR EN TIKTOK <ExternalLink size={14} />
                  </a>
                </div>
              ) : (
                /* iframe normal */
                <iframe
                  key={video.id}
                  src={`https://www.tiktok.com/embed/v2/${video.id}?autoplay=0`}
                  className="w-full h-full"
                  frameBorder="0"
                  allow="encrypted-media;"
                  allowFullScreen
                  title={`TikTok – ${video.title}`}
                  onLoad={() => setIframeLoaded(true)}
                  onError={() => setIframeError(true)}
                />
              )}
            </div>

            {!iframeError && (
              <p className="text-gray-600 text-[10px] font-outfit text-center">
                Si el video no carga, usa el link “VER EN TIKTOK” de arriba.
              </p>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

/* ─────────────────────────────────────────
   TIKTOK CARD — tarjeta de preview
───────────────────────────────────────── */
const TikTokCard = ({ videoId, url, title, account, onOpen }) => (
  <motion.div
    initial={{ opacity: 0, y: 10 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.4 }}
    viewport={{ once: true }}
    onClick={() => onOpen({ id: videoId, url, title })}
    className="bg-[#0f0f15] rounded-2xl overflow-hidden border border-white/8 shadow-lg flex flex-col cursor-pointer group hover:border-[#9b51e0]/40 transition-all duration-300"
  >
    {/* Preview area */}
    <div className="relative flex-1 min-h-[200px] sm:min-h-[240px] bg-gradient-to-br from-[#1a1030] to-[#0d0d18] flex flex-col items-center justify-center gap-4 sm:gap-5 p-4 sm:p-6">
      {/* Glow de fondo */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[radial-gradient(ellipse_at_center,_rgba(155,81,224,0.15)_0%,_transparent_70%)]" />

      {/* Logo TikTok grande */}
      <div className="relative z-10 flex flex-col items-center gap-4">
        <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-[#9b51e0]/20 group-hover:border-[#9b51e0]/40 transition-all duration-300">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="white" className="opacity-80 group-hover:opacity-100">
            <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.19 8.19 0 0 0 4.78 1.52V6.76a4.83 4.83 0 0 1-1.01-.07z"/>
          </svg>
        </div>

        <div className="text-center">
          <p className="text-white font-sans font-semibold text-base mb-1">{title}</p>
          <p className="text-gray-500 font-outfit text-xs">{account}</p>
        </div>
      </div>

      {/* Botón play */}
      <div className="relative z-10 flex items-center gap-2 bg-[#9b51e0]/90 group-hover:bg-[#9b51e0] px-5 py-2.5 rounded-full transition-all duration-300 group-hover:scale-105 group-hover:shadow-[0_0_20px_rgba(155,81,224,0.5)]">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="white">
          <path d="M5 3l14 9-14 9V3z" />
        </svg>
        <span className="text-white font-sans font-bold text-xs tracking-widest uppercase">Ver Video</span>
      </div>
    </div>

    {/* Footer bar */}
    <div className="px-4 py-3 border-t border-white/5 flex items-center justify-between bg-[#0b0b10]">
      <span className="text-gray-500 font-outfit text-[10px] uppercase tracking-widest">TikTok</span>
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        onClick={(e) => e.stopPropagation()}
        className="text-[#9b51e0] hover:text-[#c77dff] transition-colors flex items-center gap-1 font-sans font-bold text-[10px] tracking-widest"
      >
        ENLACE <ArrowUpRight size={13} />
      </a>
    </div>
  </motion.div>
);

/* ─────────────────────────────────────────
   CLICKABLE IMAGE CARD
───────────────────────────────────────── */
const ImageCard = ({ src, alt, onOpen, delay = 0, link = null }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.97 }}
    whileInView={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.5, delay }}
    viewport={{ once: true }}
    className="relative group rounded-2xl overflow-hidden bg-[#111115] cursor-pointer flex flex-col"
  >
    <div
      className="flex-1 relative overflow-hidden"
      onClick={() => onOpen(src, alt)}
    >
      <img
        src={src}
        alt={alt}
        className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center">
        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center">
          <ZoomIn size={18} className="text-white" />
        </div>
      </div>
    </div>
    {link && (
      <div className="shrink-0 border-t border-white/5 px-4 py-2.5 flex items-center justify-between bg-[#0e0e12]">
        <span className="text-[11px] text-gray-500 truncate">{link.replace(/https?:\/\//, '').replace(/\/$/, '')}</span>
        <a
          href={link}
          target="_blank"
          rel="noreferrer"
          onClick={(e) => e.stopPropagation()}
          className="flex items-center gap-1 text-primary-light hover:text-white text-[11px] font-semibold tracking-wide shrink-0 ml-3 transition-colors"
        >
          Ver sitio <ArrowUpRight size={13} />
        </a>
      </div>
    )}
  </motion.div>
);

/* ─────────────────────────────────────────
   SECTION LABEL
───────────────────────────────────────── */
const SectionLabel = ({ num, title, desc, icon: Icon, color }) => (
  <div className="lg:w-[280px] shrink-0">
    <div className="flex items-start gap-4">
      <div className="w-14 h-14 rounded-2xl flex items-center justify-center shrink-0" style={{ backgroundColor: `${color}22` }}>
        <Icon size={28} strokeWidth={1.5} style={{ color }} />
      </div>
      <div>
        <h3 className="text-white font-sans text-lg md:text-xl font-medium tracking-wide mb-2 uppercase">
          {num}. {title}
        </h3>
        <p className="text-gray-400 font-outfit text-sm font-light leading-relaxed">{desc}</p>
      </div>
    </div>
  </div>
);

/* ─────────────────────────────────────────
   MAIN COMPONENT
───────────────────────────────────────── */
const Portfolio = () => {
  const [modal, setModal] = useState({ src: null, alt: null });
  const openModal = (src, alt) => setModal({ src, alt });
  const closeModal = () => setModal({ src: null, alt: null });

  const [selectedTikTok, setSelectedTikTok] = useState(null);

  // Modal de contacto (duplicado de Contact.jsx para independencia)
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [formData, setFormData] = useState({ name: '', subject: '', message: '' });
  const handleWhatsAppSubmit = (e) => {
    e.preventDefault();
    const text = `Hola Mitzi, soy ${formData.name}. Estoy interesado(a) en: ${formData.subject}.\n\n${formData.message}`;
    window.open(`https://wa.me/51907459557?text=${encodeURIComponent(text)}`, '_blank');
    setIsContactOpen(false);
    setFormData({ name: '', subject: '', message: '' });
  };

  return (
    <section id="portfolio" className="bg-dark w-full pb-5 px-3 md:px-4 flex justify-center">
      <div className="w-full max-w-[1800px] mx-auto">
        <div className="bg-dark-card rounded-3xl p-6 md:p-8 lg:p-10 w-full overflow-hidden">

          {/* Header - apila en móvil, fila en desktop */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-12">
            <div className="flex items-center gap-3">
              <Sparkles size={28} className="text-primary-light shrink-0" strokeWidth={1.5} />
              <div>
                <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-sans font-medium text-[var(--color-text-light)] uppercase tracking-wide mb-1">
                  PROYECTOS SELECCIONADOS
                </h2>
                <p className="text-gray-400 font-outfit text-sm font-light">
                  Exploraciones y trabajos realizados en diferentes áreas del marketing digital y diseño.
                </p>
              </div>
            </div>
            <button
              onClick={() => setIsContactOpen(true)}
              className="group self-start sm:self-auto flex items-center justify-center gap-2 bg-gradient-to-r from-[#9b51e0] to-[#c77dff] hover:opacity-90 text-white rounded-full px-5 py-2.5 sm:px-6 sm:py-3 font-sans font-bold transition-all duration-300 uppercase tracking-widest text-[10px] sm:text-[11px] min-w-max shadow-[0_0_20px_rgba(155,81,224,0.3)] hover:shadow-[0_0_30px_rgba(155,81,224,0.5)]"
            >
              HAGAMOS ALGO JUNTOS
              <ArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" size={15} strokeWidth={2} />
            </button>
          </div>

          <div className="w-full h-[1px] bg-white/5 mb-10" />

          <div className="flex flex-col gap-12">

            {/* ── 01 MARKETING DIGITAL & ESTRATEGIA ── */}
            <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 pb-12 border-b border-white/5">
              <SectionLabel
                num="01" title="Marketing Digital & Estrategia"
                desc="Desarrollo estrategias digitales a partir del análisis de marcas, usuarios y competencia. Planifico contenidos, interpreto métricas y defino acciones orientadas a fortalecer la presencia digital y alcanzar objetivos de negocio."
                icon={TrendingUp} color="#D9ACF2"
              />
              <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-3 lg:gap-4">
                <ImageCard src="/assets/images/portfolio/marketing-digital-estrategia/SOCIAL_MEDIA_PORTAFOLIO_AVANTICP.webp" alt="Avanti CP – Marketing Digital" onOpen={openModal} delay={0} />
                <ImageCard src="/assets/images/portfolio/marketing-digital-estrategia/SOCIAL_MEDIA_PORTAFOLIO_OKAMI.webp" alt="Okami – Marketing Digital" onOpen={openModal} delay={0.1} />
              </div>
            </div>

            {/* ── 02 DISEÑO DE CONTENIDO ── */}
            <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 pb-12 border-b border-white/5">
              <SectionLabel
                num="02" title="Diseño de Contenido"
                desc="Diseño piezas gráficas y material publicitario para campañas, redes sociales y comunicación digital, desarrollando contenido visual alineado con la identidad de marca y los objetivos de cada proyecto."
                icon={PenTool} color="#f472b6"
              />
              <div className="flex-1 flex flex-col gap-6">
                <div>
                  <p className="text-[11px] font-bold tracking-widest uppercase text-gray-500 mb-3">Carruseles / Post</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 lg:gap-4">
                    <ImageCard src="/assets/images/portfolio/diseno-contenido/DESIGN POST.webp" alt="Design Post" onOpen={openModal} delay={0} />
                    <ImageCard src="/assets/images/portfolio/diseno-contenido/SOCIAL MEDIA.webp" alt="Social Media" onOpen={openModal} delay={0.1} />
                  </div>
                </div>
                <div>
                  <p className="text-[11px] font-bold tracking-widest uppercase text-gray-500 mb-3">Piezas Publicitarias</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 lg:gap-4">
                    <ImageCard src="/assets/images/portfolio/diseno-contenido/KADA.webp" alt="KADA – Pieza Publicitaria" onOpen={openModal} delay={0} />
                    <ImageCard src="/assets/images/portfolio/diseno-contenido/TYR.webp" alt="TYR – Pieza Publicitaria" onOpen={openModal} delay={0.1} />
                  </div>
                </div>
              </div>
            </div>

            {/* ── 03 CONTENIDO AUDIOVISUAL ── */}
            <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 pb-12 border-b border-white/5">
              <SectionLabel
                num="03" title="Contenido Audiovisual"
                desc="Produzco y edito contenido audiovisual adaptado a diferentes plataformas digitales, buscando transmitir mensajes de forma dinámica, creativa y alineada con la identidad de cada proyecto."
                icon={Film} color="#9b51e0"
              />
              <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                <TikTokCard
                  title="Avanti CP"
                  account="@avanticp.pe"
                  videoId="7350847120976547077"
                  url="https://www.tiktok.com/@avanticp.pe/video/7350847120976547077"
                  onOpen={setSelectedTikTok}
                />
                <TikTokCard
                  title="Niva"
                  account="@niva.pe"
                  videoId="7598659382116699412"
                  url="https://www.tiktok.com/@niva.pe/video/7598659382116699412"
                  onOpen={setSelectedTikTok}
                />
                <TikTokCard
                  title="Exelta Group"
                  account="@exeltagroup.au"
                  videoId="7599819030463040789"
                  url="https://www.tiktok.com/@exeltagroup.au/video/7599819030463040789"
                  onOpen={setSelectedTikTok}
                />
              </div>
            </div>

            {/* ── 04 UX/UI & DISEÑO WEB ── */}
            <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 pb-12 border-b border-white/5">
              <SectionLabel
                num="04" title="UX/UI & Diseño Web"
                desc="Diseño interfaces digitales con enfoque en experiencia de usuario, estructurando flujos claros e intuitivos. Cada proyecto es una solución visual centrada en las personas y orientada a los objetivos de negocio."
                icon={Monitor} color="#76c8ff"
              />
              <div className="flex-1 grid grid-cols-1 sm:grid-cols-3 gap-3 lg:gap-4">
                <ImageCard src="/assets/images/portfolio/ux-ui-diseno-web/DISENO_WEB_DON_LALITO.webp" alt="Don Lalito Bohorquez" onOpen={openModal} delay={0} link="https://donlalitobohorquez.pe/" />
                <ImageCard src="/assets/images/portfolio/ux-ui-diseno-web/DISENO_WEB_EVERCOAT.webp" alt="Evercoat Group" onOpen={openModal} delay={0.1} link="https://www.evercoatgroup.com.au/" />
                <ImageCard src="/assets/images/portfolio/ux-ui-diseno-web/DISENO_WEB_GRUPO_ROMA.webp" alt="Hotel Grupo Roma" onOpen={openModal} delay={0.2} link="https://hotel.gruporoma.pe/" />
              </div>
            </div>

            {/* ── 05 BRANDING ── */}
            <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
              <SectionLabel
                num="05" title="Branding"
                desc="Desarrollo de identidad visual que traduce el propósito de una marca en elementos gráficos coherentes y funcionales."
                icon={Palette} color="#ff9a9e"
              />
              <div className="flex-1 grid grid-cols-1 sm:grid-cols-3 gap-3 lg:gap-4">
                <ImageCard src="/assets/images/portfolio/branding/BRANDING_EMPRESA.webp" alt="Branding Empresa" onOpen={openModal} delay={0} />
                <ImageCard src="/assets/images/portfolio/branding/BRANDING_MARCA.webp" alt="Branding Marca" onOpen={openModal} delay={0.1} />
                <ImageCard src="/assets/images/portfolio/branding/MARCA_BRANDING.webp" alt="Marca Branding" onOpen={openModal} delay={0.2} />
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Modal de Imagen */}
      <ImageModal src={modal.src} alt={modal.alt} onClose={closeModal} />

      {/* Modal de TikTok */}
      <TikTokModal video={selectedTikTok} onClose={() => setSelectedTikTok(null)} />

      {/* Modal de Contacto */}
      {isContactOpen && (
        <div className="fixed inset-0 z-[1000] flex items-center justify-center px-4 py-8 bg-black/70 backdrop-blur-sm overflow-y-auto">
          <div className="bg-[#1a1a24] border border-white/10 rounded-2xl p-5 sm:p-6 w-full max-w-md relative my-auto">
            <button onClick={() => setIsContactOpen(false)} className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors">
              <X size={20} />
            </button>
            <h3 className="text-xl font-sans font-medium text-white mb-1">Conversemos</h3>
            <p className="text-sm text-gray-400 font-outfit mb-6">Cuéntame un poco sobre tu proyecto y me contactaré contigo a la brevedad.</p>
            <form onSubmit={handleWhatsAppSubmit} className="flex flex-col gap-4">
              <div>
                <label className="block text-xs font-outfit text-gray-400 mb-1">Nombre</label>
                <input
                  type="text" required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-white font-outfit text-sm focus:outline-none focus:border-[#a855f7] transition-colors"
                  placeholder="Tu nombre"
                />
              </div>
              <div>
                <label className="block text-xs font-outfit text-gray-400 mb-1">Servicio de interés</label>
                <select
                  required
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full bg-[#1a1a24] border border-white/10 rounded-lg px-4 py-2.5 text-white font-outfit text-sm focus:outline-none focus:border-[#a855f7] transition-colors"
                >
                  <option value="">Selecciona una opción...</option>
                  <option value="Marketing Digital & Estrategia">Marketing Digital & Estrategia</option>
                  <option value="Diseño de Contenido">Diseño de Contenido</option>
                  <option value="Contenido Audiovisual">Contenido Audiovisual</option>
                  <option value="UX/UI & Diseño Web">UX/UI & Diseño Web</option>
                  <option value="Branding">Branding</option>
                  <option value="Otro">Otro</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-outfit text-gray-400 mb-1">Mensaje breve</label>
                <textarea
                  required rows="3"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-white font-outfit text-sm focus:outline-none focus:border-[#a855f7] transition-colors resize-none"
                  placeholder="¿En qué te puedo ayudar?"
                />
              </div>
              <button
                type="submit"
                className="w-full mt-2 bg-gradient-to-r from-[#9b51e0] to-[#c77dff] hover:opacity-90 text-white py-3 rounded-xl font-sans font-bold text-xs tracking-widest uppercase transition-all duration-300 flex items-center justify-center gap-2"
              >
                ENVIAR A WHATSAPP
                <ArrowUpRight size={16} />
              </button>
            </form>
          </div>
        </div>
      )}
    </section>
  );
};

export default Portfolio;

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [active, setActive] = useState('INICIO');
  const location = useLocation();

  const navLinks = [
    { name: 'INICIO', href: '/#home', id: 'home' },
    { name: 'SOBRE MÍ', href: '/#about', id: 'about' },
    { name: 'EXPERIENCIA', href: '/#experience', id: 'experience' },
    { name: 'PROYECTOS', href: '/#portfolio', id: 'portfolio' },
    { name: 'CONTACTO', href: '/#contact', id: 'contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 3;
      
      for (let i = navLinks.length - 1; i >= 0; i--) {
        const section = document.getElementById(navLinks[i].id);
        if (section && section.offsetTop <= scrollPosition) {
          setActive(navLinks[i].name);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="fixed top-0 w-full z-[100] bg-dark">
      <div className="container mx-auto px-6 md:px-10 lg:px-12">
        <div className="flex items-center justify-between h-20">
          {/* Logo Section */}
          <Link to="/" className="flex items-center gap-2 group cursor-pointer" onClick={() => setIsMobileMenuOpen(false)}>
            <img 
              src="/assets/logo/logo.png" 
              alt="Mitzi Logo" 
              className="h-10 md:h-12 object-contain hidden"
              onLoad={(e) => {
                e.target.classList.remove('hidden');
                if(e.target.nextElementSibling) e.target.nextElementSibling.classList.add('hidden');
              }}
            />
            <div className="flex items-center gap-3">
              <span className="text-4xl md:text-5xl font-display text-primary tracking-tight leading-none">MI</span>
              <div className="flex flex-col justify-center">
                <span className="text-[11px] md:text-xs tracking-[0.2em] text-white font-bold font-outfit leading-none mb-1">
                  MITZI IPARRAGUIRRE
                </span>
                <span className="text-[9px] md:text-[10px] tracking-[0.1em] text-gray-500 font-outfit leading-none">
                  ESTRATEGIA DIGITAL
                </span>
              </div>
            </div>
          </Link>

          {/* Navigation Links - Desktop */}
          <div className="hidden lg:block">
            <div className="flex items-center space-x-10">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  onClick={() => setActive(link.name)}
                  className="relative group py-2"
                >
                  <span className={`text-[11px] font-bold tracking-[0.15em] font-outfit transition-colors duration-300 ${
                    active === link.name ? 'text-primary' : 'text-white hover:text-white/70'
                  }`}>
                    {link.name}
                  </span>
                  {active === link.name && (
                    <motion.div 
                      layoutId="nav-underline"
                      className="absolute -bottom-2 left-0 w-full h-[2px] bg-primary"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              ))}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button 
              onClick={toggleMobileMenu}
              className="text-white hover:text-primary transition-colors focus:outline-none"
            >
              {isMobileMenuOpen ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Sidebar */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="lg:hidden fixed inset-0 bg-black/60 backdrop-blur-sm z-[110]"
            />
            
            {/* Sidebar drawer */}
            <motion.div 
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: "spring", bounce: 0, duration: 0.5 }}
              className="lg:hidden fixed top-0 right-0 w-[300px] h-screen bg-gradient-to-b from-[#1a1126] to-[#0a0a0a] border-l border-white/5 z-[120] flex flex-col shadow-2xl"
            >
              <div className="flex items-center justify-between p-6 border-b border-white/5">
                <span className="text-white font-bold font-outfit tracking-[0.2em] text-xs">MENÚ PRINCIPAL</span>
                <button 
                  onClick={toggleMobileMenu}
                  className="text-gray-400 hover:text-white hover:bg-white/10 transition-all focus:outline-none bg-white/5 p-2 rounded-full"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              
              <div className="px-6 py-10 flex flex-col space-y-4 flex-1 overflow-y-auto">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.1 + index * 0.1 }}
                  >
                    <Link
                      to={link.href}
                      onClick={() => {
                        setActive(link.name);
                        setIsMobileMenuOpen(false);
                      }}
                      className="group flex items-center justify-between p-4 rounded-2xl hover:bg-white/5 transition-all duration-300"
                    >
                      <span className={`text-sm font-bold tracking-[0.15em] font-outfit transition-colors duration-300 ${
                        active === link.name ? 'text-primary' : 'text-gray-300 group-hover:text-white'
                      }`}>
                        {link.name}
                      </span>
                      <motion.span 
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        className="text-primary-light opacity-0 group-hover:opacity-100 transition-opacity"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                      </motion.span>
                    </Link>
                  </motion.div>
                ))}
              </div>
              
              {/* Sidebar Footer Decoration */}
              <div className="p-8 mt-auto border-t border-white/5">
                <div className="text-[10px] text-gray-500 font-outfit tracking-widest uppercase mb-2">Socials</div>
                <div className="flex gap-4">
                  <a href="https://instagram.com/mitziparraguirre" className="text-gray-400 hover:text-primary-light transition-colors">Ig</a>
                  <a href="https://linkedin.com/in/mitziparraguirre" className="text-gray-400 hover:text-primary-light transition-colors">In</a>
                  <a href="https://behance.net/mitziparraguirre" className="text-gray-400 hover:text-primary-light transition-colors">Be</a>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;

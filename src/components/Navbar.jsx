import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [active, setActive] = useState('INICIO');
  const location = useLocation();

  const navLinks = [
    { name: 'INICIO', href: '/#home' },
    { name: 'SOBRE MÍ', href: '/#about' },
    { name: 'EXPERIENCIA', href: '/#experience' },
    { name: 'PROYECTOS', href: '/#portfolio' },
    { name: 'CONTACTO', href: '/#contact' },
  ];

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="fixed top-0 w-full z-[100] bg-black/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
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
                    (location.pathname === link.href || (location.pathname === '/' && link.href.includes('#'))) ? 'text-primary' : 'text-white hover:text-white/70'
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

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="lg:hidden absolute top-20 left-0 w-full bg-black border-b border-white/10"
        >
          <div className="px-6 py-4 flex flex-col space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                onClick={() => {
                  setActive(link.name);
                  setIsMobileMenuOpen(false);
                }}
                className={`text-sm font-bold tracking-[0.15em] font-outfit transition-colors duration-300 ${
                  (location.pathname === link.href || (location.pathname === '/' && link.href.includes('#'))) ? 'text-primary' : 'text-white hover:text-primary'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;

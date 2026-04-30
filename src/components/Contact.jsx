import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, Mail, ArrowUp } from 'lucide-react';

const Contact = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contact" className="bg-black pt-24 pb-12 border-t border-white/5">
      <div className="container mx-auto">
        {/* Contact Section 04 */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 mb-24">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-8 lg:gap-12">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="text-primary font-display text-4xl font-bold"
            >
              04.
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-5xl md:text-6xl font-display text-white leading-[0.9] uppercase tracking-tight max-w-sm"
            >
              ¿Trabajamos <br /> juntos?
            </motion.h2>

            <div className="hidden md:block w-[1px] h-20 bg-white/10 mx-4" />

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-gray-400 font-outfit font-light text-sm md:text-base max-w-xs leading-relaxed"
            >
              Si tienes un proyecto en mente y quieres llevar tu marca al siguiente nivel, <span className="text-primary font-medium">hablemos.</span>
            </motion.p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto">
            <motion.a
              href="https://wa.me/51907459557"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -5 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center justify-center gap-3 bg-primary hover:bg-red-700 text-white px-8 py-4 rounded-md font-outfit font-bold text-xs tracking-widest uppercase transition-all duration-300 w-full sm:w-auto"
            >
              <MessageCircle size={20} />
              Whatsapp
            </motion.a>

            <motion.a
              href="mailto:your@email.com"
              whileHover={{ y: -5 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center justify-center gap-3 border border-white/20 hover:border-white text-white px-8 py-4 rounded-md font-outfit font-bold text-xs tracking-widest uppercase transition-all duration-300 w-full sm:w-auto"
            >
              <Mail size={20} />
              Enviar Email
            </motion.a>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-1">
              <span className="text-3xl font-display text-white">M</span>
              <div className="w-[3px] h-6 bg-primary" />
              <span className="text-3xl font-display text-white">I</span>
            </div>

            <div className="flex flex-col">
              <span className="text-white font-outfit font-bold text-[10px] tracking-[0.2em] uppercase">Mitzi Iparraguirre</span>
              <span className="text-gray-600 font-outfit text-[10px] uppercase mt-1">© 2026 Todos los derechos reservados.</span>
            </div>
          </div>

          <button
            onClick={scrollToTop}
            className="group flex items-center gap-3 text-gray-500 hover:text-white transition-colors"
          >
            <div className="w-10 h-10 border border-white/10 rounded-md flex items-center justify-center group-hover:border-white/30 transition-all">
              <ArrowUp size={16} className="group-hover:-translate-y-1 transition-transform" />
            </div>
            <span className="font-outfit font-bold text-[10px] tracking-widest uppercase">Volver arriba</span>
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Contact;

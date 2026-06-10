import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, ArrowUpRight } from 'lucide-react';
import { useModal } from '../context/ModalContext';

const ContactModal = () => {
  const { isContactModalOpen, closeContactModal } = useModal();
  const [formData, setFormData] = useState({ name: '', project: '', message: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const phoneNumber = "51907459557";
    const text = `Hola Mitzi, soy ${formData.name}.%0A%0AProyecto/Empresa: ${formData.project}%0A%0AMensaje: ${formData.message}`;
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${text}`;
    window.open(whatsappUrl, '_blank');
    closeContactModal();
  };

  return (
    <AnimatePresence>
      {isContactModalOpen && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 sm:p-6">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeContactModal}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          />
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", duration: 0.5, bounce: 0.3 }}
            className="relative w-full max-w-lg bg-dark-card border border-white/10 rounded-3xl overflow-hidden shadow-[0_0_50px_rgba(168,85,247,0.15)]"
          >
            {/* Decorative background glow */}
            <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-primary/20 to-transparent opacity-50 pointer-events-none" />

            <div className="p-6 sm:p-8 relative z-10">
              <button
                onClick={closeContactModal}
                className="absolute top-6 right-6 text-gray-400 hover:text-white transition-colors bg-white/5 hover:bg-white/10 p-2 rounded-full"
              >
                <X size={20} />
              </button>

              <div className="mb-8">
                <h3 className="text-2xl font-display font-bold text-white mb-2">
                  Empecemos algo <span className="text-primary">increíble</span>
                </h3>
                <p className="text-sm text-gray-400 font-outfit">
                  Cuéntame sobre tu proyecto y te responderé lo más pronto posible.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Tu Nombre</label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all font-outfit text-sm"
                    placeholder="Ej. Juan Pérez"
                  />
                </div>
                
                <div>
                  <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Empresa / Proyecto</label>
                  <input
                    type="text"
                    name="project"
                    required
                    value={formData.project}
                    onChange={handleChange}
                    className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all font-outfit text-sm"
                    placeholder="Ej. Mi Marca S.A."
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Mensaje</label>
                  <textarea
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    rows="4"
                    className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all font-outfit text-sm resize-none"
                    placeholder="Cuéntame un poco sobre lo que tienes en mente..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full group flex items-center justify-center gap-2 bg-gradient-to-r from-[#9b51e0] to-[#c77dff] hover:opacity-90 text-white px-6 py-4 rounded-xl font-sans font-bold text-xs tracking-widest uppercase transition-all duration-300 mt-6"
                >
                  Enviar por WhatsApp
                  <Send size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default ContactModal;

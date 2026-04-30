import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

const VideoModal = ({ isOpen, onClose, videoUrl }) => {
  const isTikTok = videoUrl?.includes('tiktok.com');
  const modalClass = `relative w-full ${isTikTok ? 'max-w-sm aspect-[9/16]' : 'max-w-4xl aspect-video'} bg-[#0a0a0a] rounded-2xl overflow-hidden shadow-2xl`;

  const renderVideo = () => {
    if (!videoUrl) return <p className="text-gray-500">No hay video disponible</p>;

    if (videoUrl.includes('youtube.com/watch?v=') || videoUrl.includes('youtu.be/')) {
      let videoId = '';
      try {
        if (videoUrl.includes('youtu.be/')) {
          videoId = videoUrl.split('youtu.be/')[1].split('?')[0];
        } else {
          videoId = new URL(videoUrl).searchParams.get('v');
        }
      } catch (e) {
        // ignore
      }
      return (
        <iframe
          width="100%"
          height="100%"
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="absolute inset-0"
        ></iframe>
      );
    }

    if (videoUrl.includes('tiktok.com')) {
      const match = videoUrl.match(/\/video\/(\d+)/);
      if (match && match[1]) {
        const videoId = match[1];
        return (
          <iframe 
             src={`https://www.tiktok.com/embed/v2/${videoId}`}
             width="100%" 
             height="100%" 
             frameBorder="0" 
             allow="autoplay; encrypted-media" 
             allowFullScreen
             className="absolute inset-0"
          ></iframe>
        );
      }
    }

    return (
      <video 
        src={videoUrl} 
        controls 
        autoPlay 
        className="w-full h-full object-contain absolute inset-0"
      >
        Tu navegador no soporta el reproductor de video.
      </video>
    );
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className={modalClass}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 bg-black/50 hover:bg-white/20 text-white rounded-full transition-colors z-50 border border-white/10"
            >
              <X size={24} />
            </button>
            <div className="w-full h-full flex items-center justify-center relative">
               {renderVideo()}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default VideoModal;

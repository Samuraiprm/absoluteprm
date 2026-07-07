'use client';

import { useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X } from '@phosphor-icons/react';
import { vimeoEmbed } from '@/lib/vimeo';

interface VideoModalProps {
  videoId: string;
  onClose: () => void;
}

export default function VideoModal({ videoId, onClose }: VideoModalProps) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[100] flex items-center justify-center bg-[#012924]/95 backdrop-blur-sm p-4 md:p-12"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-5xl aspect-video rounded-2xl overflow-hidden shadow-2xl"
          onClick={(e) => e.stopPropagation()}
        >
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-black/50 flex items-center justify-center text-white hover:bg-black/70 transition-colors"
            aria-label="Close"
          >
            <X size={20} />
          </button>
          <iframe
            src={vimeoEmbed(videoId, { autoplay: true })}
            className="w-full h-full"
            allow="autoplay; fullscreen; picture-in-picture"
            frameBorder={0}
          />
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

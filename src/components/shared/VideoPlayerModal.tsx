import { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";

interface VideoPlayerModalProps {
  open: boolean;
  onClose: () => void;
  video?: string;
  image: string;
  title: string;
}

const CloseIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5">
    <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export default function VideoPlayerModal({ open, onClose, video, image, title }: VideoPlayerModalProps) {
  useEffect(() => {
    if (!open) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          onClick={onClose}
          className="fixed inset-0 z-[300] bg-black flex items-center justify-center"
        >
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.15 }}
            onClick={onClose}
            aria-label="Close"
            className="absolute top-6 right-6 z-10 w-10 h-10 rounded-full flex items-center justify-center bg-white/10 hover:bg-white/20 text-white border border-white/15 transition-colors"
          >
            <CloseIcon />
          </motion.button>

          <motion.div
            initial={{ scale: 0.94, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.97, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            onClick={(e) => e.stopPropagation()}
            className="w-full h-full flex items-center justify-center"
          >
            {video ? (
              <video
                src={video}
                poster={image}
                controls
                autoPlay
                playsInline
                className="max-w-full max-h-full"
              />
            ) : (
              <img src={image} alt={title} className="max-w-full max-h-full object-contain" />
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

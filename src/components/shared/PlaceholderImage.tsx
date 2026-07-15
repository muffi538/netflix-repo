import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "@/hooks/useInView";
import { cn } from "@/lib/utils";

interface PlaceholderImageProps {
  src: string;
  alt: string;
  className?: string;
  imgClassName?: string;
  label?: string;
  accent?: string;
  priority?: boolean;
  hideIcon?: boolean;
  placeholderBackground?: string;
  onLoad?: () => void;
}

const ImageIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8 opacity-40">
    <rect x="3" y="4" width="18" height="16" rx="2" stroke="currentColor" strokeWidth="1.5" />
    <circle cx="8.5" cy="9.5" r="1.5" stroke="currentColor" strokeWidth="1.5" />
    <path d="M21 15l-5-5-9 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export default function PlaceholderImage({
  src,
  alt,
  className,
  imgClassName,
  label,
  accent = "#e50914",
  priority = false,
  hideIcon = false,
  placeholderBackground,
  onLoad,
}: PlaceholderImageProps) {
  const { ref, inView } = useInView<HTMLDivElement>();
  const [loaded, setLoaded] = useState(false);
  const [failed, setFailed] = useState(false);
  const shouldLoad = priority || inView;

  return (
    <div ref={ref} className={cn("relative overflow-hidden bg-charcoal", className)}>
      {/* Placeholder base layer */}
      <div
        className="absolute inset-0 flex flex-col items-center justify-center gap-2 text-white/30"
        style={{
          background: placeholderBackground ?? `linear-gradient(135deg, #141414 0%, #0a0a0a 60%, ${accent}14 100%)`,
        }}
      >
        {!hideIcon && <ImageIcon />}
        {label && <span className="text-[11px] tracking-widest uppercase text-white/25 px-4 text-center">{label}</span>}
        <div className="absolute inset-0 shimmer-sheen" />
      </div>

      {shouldLoad && !failed && (
        <motion.img
          src={src}
          alt={alt}
          loading={priority ? "eager" : "lazy"}
          onLoad={() => {
            setLoaded(true);
            onLoad?.();
          }}
          onError={() => setFailed(true)}
          initial={{ opacity: 0 }}
          animate={{ opacity: loaded ? 1 : 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className={cn("absolute inset-0 w-full h-full object-cover", imgClassName)}
        />
      )}
    </div>
  );
}

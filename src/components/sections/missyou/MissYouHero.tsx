import { motion } from "framer-motion";
import PlaceholderVideo from "@/components/shared/PlaceholderVideo";
import FloatingParticles from "@/components/shared/FloatingParticles";

export default function MissYouHero({
  image,
  video,
  title,
  subtitle,
}: {
  image: string;
  video: string;
  title: string;
  subtitle: string;
}) {
  return (
    <section className="relative h-screen min-h-[600px] w-full overflow-hidden flex items-center justify-center">
      <div className="absolute inset-0">
        <PlaceholderVideo src={video} poster={image} accent="#e50914" autoPlayMuted className="w-full h-full" />
      </div>
      <div className="absolute inset-0 bg-black/60" />
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black/40 to-black" />
      <FloatingParticles count={40} color="255,255,255" />

      <div className="relative z-10 text-center px-6 max-w-2xl">
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 1.2 }}
          className="inline-block text-xs tracking-[0.4em] uppercase text-ember/80 font-semibold mb-6"
        >
          Final Episode
        </motion.span>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
          className="heading-display text-5xl sm:text-6xl md:text-7xl tracking-wide text-white leading-[1.05]"
          style={{ textShadow: "0 0 70px rgba(229,9,20,0.3)" }}
        >
          {title}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.3, duration: 1.2 }}
          className="text-white/50 text-base md:text-lg mt-6 font-serif italic"
        >
          {subtitle}
        </motion.p>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/30"
      >
        <span className="text-[10px] tracking-[0.3em] uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          className="w-px h-8 bg-gradient-to-b from-white/60 to-transparent"
        />
      </motion.div>
    </section>
  );
}

import { motion } from "framer-motion";
import PlaceholderVideo from "@/components/shared/PlaceholderVideo";

export default function BirthdayHero({
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
    <section className="relative h-[92vh] min-h-[560px] w-full overflow-hidden flex items-end">
      <div className="absolute inset-0">
        <PlaceholderVideo src={video} poster={image} accent="#f5a623" autoPlayMuted className="w-full h-full" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-black/10" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-transparent" />

      <div className="relative z-10 px-6 md:px-16 pb-16 md:pb-24 max-w-3xl">
        <motion.span
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="inline-block text-xs tracking-[0.35em] uppercase text-amber-400 font-semibold mb-4"
        >
          Episode One
        </motion.span>
        <motion.h1
          initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ delay: 0.35, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="heading-display text-6xl sm:text-7xl md:text-8xl tracking-wide text-white"
          style={{ textShadow: "0 0 60px rgba(245,166,35,0.35)" }}
        >
          {title}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.55, duration: 0.6 }}
          className="text-white/70 text-base md:text-lg mt-5 max-w-xl leading-relaxed"
        >
          {subtitle}
        </motion.p>
      </div>
    </section>
  );
}

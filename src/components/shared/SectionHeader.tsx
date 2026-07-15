import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  className?: string;
  align?: "left" | "center";
}

export default function SectionHeader({ eyebrow, title, className, align = "left" }: SectionHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className={cn("mb-10", align === "center" && "text-center", className)}
    >
      {eyebrow && (
        <span className="block text-xs tracking-[0.3em] uppercase text-white/40 mb-3">{eyebrow}</span>
      )}
      <h2 className="heading-display text-4xl md:text-6xl tracking-wide">{title}</h2>
    </motion.div>
  );
}

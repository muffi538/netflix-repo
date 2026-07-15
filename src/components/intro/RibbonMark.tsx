import { motion } from "framer-motion";

const F_PATH = "M0 0 H50 V16 H16 V38 H40 V54 H16 V90 H0 Z";
const CLIP_ID = "ribbon-f-clip";
const GRADIENT_ID = "ribbon-f-gradient";

export default function RibbonMark({ delay = 0.3, className }: { delay?: number; className?: string }) {
  return (
    <div className={className} style={{ perspective: 900 }}>
      <motion.div
        initial={{ rotateY: -55, scaleY: 0.12, opacity: 0 }}
        animate={{ rotateY: 0, scaleY: 1, opacity: 1 }}
        transition={{ delay, duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
        className="h-full"
        style={{ transformStyle: "preserve-3d" }}
      >
        <svg
          viewBox="0 0 50 90"
          className="h-full w-auto"
          style={{ filter: "drop-shadow(0 14px 26px rgba(229,9,20,0.5))" }}
        >
          <defs>
            <linearGradient id={GRADIENT_ID} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#5c0508" />
              <stop offset="35%" stopColor="#c40812" />
              <stop offset="55%" stopColor="#ff5058" />
              <stop offset="75%" stopColor="#c40812" />
              <stop offset="100%" stopColor="#4a0407" />
            </linearGradient>
            <clipPath id={CLIP_ID}>
              <path d={F_PATH} />
            </clipPath>
          </defs>
          <path d={F_PATH} fill={`url(#${GRADIENT_ID})`} />
          <g clipPath={`url(#${CLIP_ID})`}>
            <motion.rect
              y={-20}
              width={26}
              height={130}
              fill="white"
              opacity={0.55}
              transform="skewX(-20)"
              initial={{ x: -60 }}
              animate={{ x: 95 }}
              transition={{ delay: delay + 0.55, duration: 0.55, ease: "easeInOut" }}
            />
          </g>
        </svg>
      </motion.div>
    </div>
  );
}

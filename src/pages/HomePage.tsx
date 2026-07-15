import { useCallback, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import IntroScreen from "@/components/intro/IntroScreen";
import ProfileSelect from "@/components/profiles/ProfileSelect";

const INTRO_KEY = "memoryreel:introShown";

export default function HomePage() {
  const [showIntro, setShowIntro] = useState(() => {
    try {
      return !sessionStorage.getItem(INTRO_KEY);
    } catch {
      return true;
    }
  });

  const handleIntroComplete = useCallback(() => {
    try {
      sessionStorage.setItem(INTRO_KEY, "1");
    } catch {
      // ignore
    }
    setShowIntro(false);
  }, []);

  return (
    <div className="relative bg-black min-h-screen">
      <AnimatePresence mode="wait">
        {showIntro ? (
          <IntroScreen key="intro" onComplete={handleIntroComplete} />
        ) : (
          <motion.div
            key="profiles"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <ProfileSelect />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

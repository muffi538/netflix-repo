import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import type { QuizQuestion } from "@/data/types";

export default function PopQuiz({ questions }: { questions: QuizQuestion[] }) {
  const [index, setIndex] = useState(0);
  const [response, setResponse] = useState<string | null>(null);

  const question = questions[index];
  const isLast = index === questions.length - 1;

  const answer = (yes: boolean) => {
    setResponse(yes ? question.yesResponse : question.noResponse);
  };

  const next = () => {
    setResponse(null);
    setIndex((i) => (i + 1) % questions.length);
  };

  return (
    <div className="max-w-xl mx-auto glass-panel rounded-2xl p-8 md:p-10 text-center">
      <AnimatePresence mode="wait">
        {response === null ? (
          <motion.div
            key={question.id}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.4 }}
          >
            <p className="heading-display text-2xl md:text-3xl tracking-wide text-white mb-8">{question.question}</p>
            <div className="flex justify-center gap-4">
              <motion.button
                whileHover={{ scale: 1.06 }}
                whileTap={{ scale: 0.94 }}
                onClick={() => answer(true)}
                className="px-8 py-3 rounded-full bg-white text-black font-bold text-sm"
              >
                Yes
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.06 }}
                whileTap={{ scale: 0.94 }}
                onClick={() => answer(false)}
                className="px-8 py-3 rounded-full border border-white/35 text-white font-bold text-sm hover:bg-white/10"
              >
                No
              </motion.button>
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="response"
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.92 }}
            transition={{ duration: 0.4, type: "spring", stiffness: 200, damping: 18 }}
          >
            <p className="text-xl md:text-2xl text-white/90 font-serif italic mb-8">{response}</p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={next}
              className="px-7 py-3 rounded-full bg-purple-500 text-white font-bold text-sm"
            >
              {isLast ? "Start Over" : "Next"}
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="flex justify-center gap-1.5 mt-8">
        {questions.map((q, i) => (
          <span
            key={q.id}
            className={`h-1 rounded-full transition-all ${i === index ? "w-6 bg-purple-400" : "w-1.5 bg-white/20"}`}
          />
        ))}
      </div>
    </div>
  );
}

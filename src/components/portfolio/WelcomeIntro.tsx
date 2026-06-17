// Full-screen entrance animation shown on first visit each session.
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

const STORAGE_KEY = "welcome_intro_shown";

export function WelcomeIntro() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const seen = sessionStorage.getItem(STORAGE_KEY);
    if (!seen) {
      setShow(true);
      const t = setTimeout(() => {
        setShow(false);
        sessionStorage.setItem(STORAGE_KEY, "1");
      }, 3200);
      return () => clearTimeout(t);
    }
  }, []);

  const text = "WELCOME TO MY PORTFOLIO";

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          key="welcome"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.7, ease: "easeInOut" } }}
          className="fixed inset-0 z-[100] grid place-items-center bg-background overflow-hidden"
        >
          <div className="absolute inset-0 -z-10 bg-grid opacity-60" />
          <motion.div
            className="absolute w-[40rem] h-[40rem] rounded-full blur-3xl -z-10"
            style={{ background: "radial-gradient(circle, oklch(0.65 0.22 295 / 0.35), transparent 70%)" }}
            initial={{ scale: 0.6, opacity: 0 }}
            animate={{ scale: 1.2, opacity: 1 }}
            transition={{ duration: 1.6, ease: "easeOut" }}
          />

          <div className="relative text-center px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-xs sm:text-sm tracking-[0.4em] text-primary mb-6"
            >
              ✦ HELLO ✦
            </motion.div>

            <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight flex flex-wrap justify-center gap-x-3 gap-y-2">
              {text.split(" ").map((word, wi) => (
                <span key={wi} className="inline-flex overflow-hidden">
                  {word.split("").map((ch, ci) => (
                    <motion.span
                      key={ci}
                      initial={{ y: "100%", opacity: 0 }}
                      animate={{ y: "0%", opacity: 1 }}
                      transition={{
                        duration: 0.6,
                        ease: [0.22, 1, 0.36, 1],
                        delay: 0.3 + wi * 0.15 + ci * 0.04,
                      }}
                      className={wi === 2 || wi === 3 ? "text-gradient-brand" : ""}
                    >
                      {ch}
                    </motion.span>
                  ))}
                </span>
              ))}
            </h1>

            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 1.6, duration: 1.2, ease: "easeInOut" }}
              className="mt-10 h-[2px] w-48 mx-auto bg-gradient-to-r from-transparent via-primary to-transparent origin-left"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

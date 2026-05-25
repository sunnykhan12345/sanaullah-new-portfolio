"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function LoadingScreen() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = window.setTimeout(() => setVisible(false), 650);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {visible ? (
        <motion.div
          className="fixed inset-0 z-[100] grid place-items-center bg-[#05070D]"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.45 }}
        >
          <div className="text-center">
            <motion.div
              className="mx-auto size-14 rounded-2xl border border-blue-400/30 bg-blue-400/10 shadow-glow"
              animate={{ rotate: 360, scale: [1, 1.08, 1] }}
              transition={{ rotate: { duration: 1.2, repeat: Infinity, ease: "linear" }, scale: { duration: 1.2, repeat: Infinity } }}
            />
            <p className="mt-5 text-sm font-medium text-muted-foreground">Loading premium portfolio...</p>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}

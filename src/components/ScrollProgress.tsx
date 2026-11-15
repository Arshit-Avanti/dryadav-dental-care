import React from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

export const ScrollProgress: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 280,
    damping: 35,
    restDelta: 0.0001,
  });

  return (
    <div className="fixed top-0 left-0 right-0 z-[70] pointer-events-none">
      {/* Background track */}
      <div className="h-[2.5px] w-full bg-slate-200/20">
        {/* Dynamic Progress Indicator with Apple-grade fluid spring */}
        <motion.div
          className="h-full bg-gradient-to-r from-cyan-500 via-cyan-400 to-royal-600 origin-left relative shadow-[0_0_10px_rgba(6,182,212,0.5)]"
          style={{ scaleX }}
        >
          {/* Subtle Glowing Head Tip */}
          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-cyan-300 blur-[1px] opacity-80" />
        </motion.div>
      </div>
    </div>
  );
};

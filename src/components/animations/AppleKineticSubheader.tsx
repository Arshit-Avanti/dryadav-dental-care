import React from 'react';
import { motion } from 'framer-motion';

interface AppleKineticSubheaderProps {
  label: string;
  badge?: string;
  className?: string;
  accentColor?: 'cyan' | 'gold' | 'emerald';
}

export const AppleKineticSubheader: React.FC<AppleKineticSubheaderProps> = ({
  label,
  badge = 'VERIFIED PRACTICE',
  className = '',
  accentColor = 'cyan',
}) => {
  const accentDotMap = {
    cyan: 'bg-bright-cyan shadow-[0_0_12px_rgba(53,189,235,0.8)]',
    gold: 'bg-amber-400 shadow-[0_0_12px_rgba(245,158,11,0.8)]',
    emerald: 'bg-emerald-500 shadow-[0_0_12px_rgba(16,185,129,0.8)]',
  };

  const badgeBorderMap = {
    cyan: 'border-sky-200/80 bg-sky-50/60 text-deep-blue',
    gold: 'border-amber-200/80 bg-amber-50/60 text-amber-900',
    emerald: 'border-emerald-200/80 bg-emerald-50/60 text-emerald-800',
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: -12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={`inline-flex items-center gap-3 px-3.5 py-1.5 rounded-full bg-white/90 backdrop-blur-md border border-slate-200/80 shadow-[0_4px_16px_rgba(15,23,42,0.04)] select-none ${className}`}
    >
      <div className="flex items-center gap-2">
        <span className={`w-2 h-2 rounded-full animate-pulse ${accentDotMap[accentColor]}`} />
        <span className={`text-[10px] font-mono uppercase tracking-widest font-extrabold px-1.5 py-0.5 rounded ${badgeBorderMap[accentColor]}`}>
          {badge}
        </span>
      </div>

      <span className="w-px h-3.5 bg-slate-200" />

      <motion.span
        initial={{ letterSpacing: '0.22em', opacity: 0.7 }}
        animate={{ letterSpacing: '0.12em', opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="text-[11px] font-mono uppercase text-slate-700 font-semibold tracking-wider"
      >
        {label}
      </motion.span>
    </motion.div>
  );
};

export default AppleKineticSubheader;

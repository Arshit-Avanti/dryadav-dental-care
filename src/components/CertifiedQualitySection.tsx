import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ShieldCheck, Check } from 'lucide-react';
import { AppleImplantSchematic } from './AppleImplantSchematic';
import { AppleWordReveal } from './animations/AppleWordReveal';
import { soundFX } from '../utils/soundEffects';

interface CertifiedQualitySectionProps {
  onOpenBooking: () => void;
}

export const CertifiedQualitySection: React.FC<CertifiedQualitySectionProps> = ({ onOpenBooking }) => {
  return (
    <section
      id="quality"
      className="relative min-h-[85vh] py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#FAFBFD] via-[#F0F4F9] to-[#FAFBFD] border-t border-slate-200/80 overflow-hidden select-none flex flex-col justify-center scroll-mt-20"
    >
      <div className="max-w-7xl mx-auto w-full relative">
        
        {/* Top-Left Headline (Apple Hardware Engineering Style) */}
        <div className="relative z-20 max-w-xl space-y-2 text-left">
          <span className="text-[11px] font-mono uppercase tracking-widest text-deep-blue font-bold block">
            Clinical Engineering & Bio-Integrity
          </span>
          <h2 className="font-display text-4xl sm:text-6xl lg:text-7xl text-slate-900 tracking-tight leading-[1.05]">
            <span className="font-light text-slate-600 block">
              <AppleWordReveal text="Certified Precision" />
            </span>
            <span className="font-extrabold text-slate-950 block">
              <AppleWordReveal text="Bio-Quality" delay={0.15} />
            </span>
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal pt-1 max-w-md">
            Engineered dental architecture utilizing surgical titanium and monolithic zirconia ceramic for lifetime biological stability.
          </p>
        </div>

        {/* Centerpiece: Apple-Style Exploded Schematic (100% Vector, Zero 3D WebGL) */}
        <div className="relative my-6 sm:my-10 flex items-center justify-center">
          <AppleImplantSchematic />
        </div>

        {/* Bottom Bar: Action Link (Left) and "Official Warranty" Headline (Right) */}
        <div className="relative z-20 pt-6 flex flex-wrap items-end justify-between gap-6 border-t border-slate-200/60">
          
          {/* Bottom-Left Action Link */}
          <button
            onClick={() => {
              soundFX.playClick();
              onOpenBooking();
            }}
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-mono font-bold text-slate-900 hover:text-deep-blue transition-colors uppercase tracking-wider group cursor-pointer"
          >
            <span>↳ VIEW CLINICAL PROTOCOL & BOOK</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1 text-deep-blue" />
          </button>

          {/* Bottom-Right Typography */}
          <div className="text-right space-y-0.5 font-display tracking-tight leading-[1.05]">
            <span className="block text-2xl sm:text-4xl lg:text-5xl font-light text-deep-blue/80">
              Official
            </span>
            <span className="block text-3xl sm:text-5xl lg:text-6xl font-extrabold text-slate-950">
              Warranty
            </span>
          </div>

        </div>

      </div>
    </section>
  );
};

export default CertifiedQualitySection;

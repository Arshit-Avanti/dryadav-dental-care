import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, ChevronDown, CheckCircle2, MessageCircle, ArrowUpRight } from 'lucide-react';
import { getWhatsAppUrl } from '../config/clinicConfig';
import { soundFX } from '../utils/soundEffects';

export const InteractiveRevealCard: React.FC = () => {
  const [isRevealed, setIsRevealed] = useState(false);

  const toggleReveal = () => {
    soundFX.playClick();
    setIsRevealed((prev) => !prev);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="max-w-4xl mx-auto rounded-[32px] sm:rounded-[40px] bg-gradient-to-br from-white via-sky-50/60 to-white border border-sky-200/90 shadow-[0_20px_50px_rgba(8,121,207,0.08)] overflow-hidden text-left"
    >
      {/* 1. INTERACTIVE IMAGE & HEADING TRIGGER SURFACE */}
      <div
        role="button"
        tabIndex={0}
        aria-expanded={isRevealed}
        onClick={toggleReveal}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            toggleReveal();
          }
        }}
        className="group relative cursor-pointer select-none p-6 sm:p-10 transition-all hover:bg-sky-50/40"
      >
        {/* Visual Frame */}
        <div className="relative w-full aspect-[21/9] sm:aspect-[24/9] rounded-2xl sm:rounded-3xl bg-gradient-to-br from-sky-100 via-[#E4F8FF] to-sky-200/70 border border-sky-200 overflow-hidden flex items-center justify-between p-6 sm:p-10 shadow-inner">
          
          {/* Subtle Ambient Graphic Layer */}
          <div className="absolute -right-10 -bottom-10 w-64 h-64 bg-bright-cyan/20 rounded-full blur-2xl group-hover:scale-110 transition-transform duration-500 pointer-events-none" />

          {/* Left Visual Badge & Heading */}
          <div className="relative z-10 max-w-xl space-y-2">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/90 backdrop-blur-md text-[11px] font-mono font-bold text-deep-blue uppercase tracking-wider shadow-2xs border border-sky-200">
              <Sparkles className="w-3.5 h-3.5 text-bright-cyan" />
              <span>Interactive Clinical Showcase</span>
            </span>

            <h3 className="font-caslon-italic italic text-2xl sm:text-3xl lg:text-4xl text-slate-950 font-normal leading-tight group-hover:text-deep-blue transition-colors">
              Painless Biological Root Canal & Crown Restoration
            </h3>

            <p className="font-avenir-light font-light text-xs sm:text-sm text-slate-600">
              [ Tap anywhere on this image to reveal treatment procedure details ]
            </p>
          </div>

          {/* Right Action Chevron Pill */}
          <div className="relative z-10 hidden sm:flex items-center gap-2">
            <span className="text-xs font-mono font-bold text-deep-blue uppercase tracking-wider">
              {isRevealed ? 'Hide Details' : 'Click to Reveal'}
            </span>
            <motion.div
              animate={{ rotate: isRevealed ? 180 : 0 }}
              transition={{ duration: 0.3 }}
              className="w-10 h-10 rounded-full bg-white border border-sky-200 shadow-sm flex items-center justify-center text-deep-blue group-hover:bg-deep-blue group-hover:text-white transition-colors"
            >
              <ChevronDown className="w-5 h-5" />
            </motion.div>
          </div>

        </div>

        {/* Mobile tap indicator */}
        <div className="mt-3 flex sm:hidden items-center justify-between text-xs font-mono font-bold text-deep-blue">
          <span>{isRevealed ? 'Tap to Collapse' : 'Tap to Reveal Text'}</span>
          <ChevronDown
            className={`w-4 h-4 transition-transform ${isRevealed ? 'rotate-180' : ''}`}
          />
        </div>
      </div>

      {/* 2. REVEALED TEXT EXPANSION ACCORDION (Framer Motion Height Animation) */}
      <AnimatePresence initial={false}>
        {isRevealed && (
          <motion.div
            key="revealed-content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden border-t border-sky-100 bg-white"
          >
            <div className="p-6 sm:p-10 space-y-6">
              
              {/* Clinical Description in Avenir Light */}
              <div className="space-y-2">
                <h4 className="font-caslon-italic italic text-xl text-slate-900">
                  Biological Preservation Methodology
                </h4>
                <p className="font-avenir-light font-light text-sm sm:text-base text-slate-700 leading-relaxed">
                  Root Canal Treatment at Dr Yadav Dental Care Point is designed around conservative tissue preservation and gentle local anesthesia. Using precision rotary instruments and hospital-grade sterility, infected nerve tissue is gently removed while leaving the healthy natural root structure intact.
                </p>
              </div>

              {/* Step-by-Step Points */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                <div className="p-4 rounded-2xl bg-sky-50/70 border border-sky-100 space-y-1">
                  <span className="text-[11px] font-mono uppercase text-deep-blue font-bold block">
                    Step 01 • Diagnosis
                  </span>
                  <p className="font-avenir-light font-light text-xs text-slate-600">
                    Gentle vitality evaluation to pinpoint the exact source of tooth discomfort.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-sky-50/70 border border-sky-100 space-y-1">
                  <span className="text-[11px] font-mono uppercase text-deep-blue font-bold block">
                    Step 02 • Cleaning
                  </span>
                  <p className="font-avenir-light font-light text-xs text-slate-600">
                    Class-B sterile canal debridement with gentle medicated irrigation.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-sky-50/70 border border-sky-100 space-y-1">
                  <span className="text-[11px] font-mono uppercase text-deep-blue font-bold block">
                    Step 03 • Crown Seal
                  </span>
                  <p className="font-avenir-light font-light text-xs text-slate-600">
                    Bio-compatible gutta-percha seal followed by an aesthetic porcelain crown.
                  </p>
                </div>
              </div>

              {/* Consultation CTA */}
              <div className="pt-2 flex flex-wrap items-center justify-between gap-4 border-t border-slate-100">
                <p className="font-avenir-light font-light text-xs text-slate-500">
                  Conducted personally by Dr. Jagesh Yadav in DLF Ankur Vihar.
                </p>
                <a
                  href={getWhatsAppUrl('Hello Dr. Jagesh Yadav, I would like to consult about Root Canal Treatment.')}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => soundFX.playClick()}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-vibrant-orange hover:bg-[#E53E04] text-white text-xs font-bold uppercase tracking-wider shadow-sm transition-transform hover:scale-103"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>Consult on WhatsApp</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default InteractiveRevealCard;

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { soundFX } from '../utils/soundEffects';

interface PartnerCard {
  id: string;
  num: string;
  title: string;
  subtitle: string;
}

const CARDS: PartnerCard[] = [
  {
    id: '01',
    num: '01',
    title: 'Experienced Leadership',
    subtitle: 'Comprehensive treatment planning led by Dr. Jagesh Yadav with individual diagnostic evaluations and conservative tooth preservation.',
  },
  {
    id: '02',
    num: '02',
    title: 'Patient-First Approach',
    subtitle: 'Gentle, unhurried consultations with attentive anesthesia management designed for an anxiety-free clinic experience.',
  },
  {
    id: '03',
    num: '03',
    title: 'Modern Equipment',
    subtitle: 'Equipped with electronic apex locators, ultrasonic scalers, and precision handpieces for high clinical accuracy.',
  },
  {
    id: '04',
    num: '04',
    title: 'Strict Sterilization Protocols',
    subtitle: 'Hospital-grade autoclaving and vacuum pouches opened in front of each patient for total hygiene assurance.',
  },
];

export const SmilePartnerSection: React.FC = () => {
  const [activeCardIndex, setActiveCardIndex] = useState(0);

  const handlePrev = () => {
    soundFX.playClick();
    setActiveCardIndex((prev) => (prev > 0 ? prev - 1 : CARDS.length - 1));
  };

  const handleNext = () => {
    soundFX.playClick();
    setActiveCardIndex((prev) => (prev < CARDS.length - 1 ? prev + 1 : 0));
  };

  return (
    <section
      id="about-us"
      className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-[#F3F6FA] border-t border-slate-200/80 overflow-hidden select-none"
    >
      <div className="max-w-7xl mx-auto w-full space-y-12 sm:space-y-16">
        
        {/* Top Header Block (Vimeo Step 18 Style) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-end">
          
          {/* Left: Huge Swiss Headline */}
          <div className="lg:col-span-8 space-y-2">
            <span className="text-[11px] font-mono uppercase tracking-widest text-slate-500 block">
              About Our Practice
            </span>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl text-slate-900 tracking-tight leading-[1.08]">
              <span className="font-light text-slate-600 block">More than a clinic</span>
              <span className="font-extrabold text-slate-950 block">— Your smile partner</span>
            </h2>
          </div>

          {/* Right: Mission Statement */}
          <div className="lg:col-span-4 text-left lg:text-right pb-1">
            <p className="text-xs sm:text-sm text-slate-500 font-normal leading-relaxed max-w-sm ml-auto">
              At Dr. Yadav Dental Care Point, you're not just receiving dental treatment — you're gaining a lifelong partner in oral health and well-being.
            </p>
          </div>

        </div>

        {/* 4 Cards Grid with Giant Watermark Numerals (01, 02, 03, 04) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 items-stretch">
          {CARDS.map((card, idx) => {
            const isSelected = activeCardIndex === idx;

            return (
              <motion.div
                key={card.id}
                onClick={() => {
                  soundFX.playClick();
                  setActiveCardIndex(idx);
                }}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.25 }}
                className={`relative p-6 sm:p-7 rounded-[28px] transition-all duration-300 cursor-pointer overflow-hidden flex flex-col justify-between min-h-[340px] sm:min-h-[380px] ${
                  isSelected
                    ? 'bg-white shadow-[0_16px_40px_rgba(0,0,0,0.06)] border-2 border-white ring-1 ring-slate-200/60'
                    : 'bg-[#E5ECF4]/80 hover:bg-white/80 border border-slate-200/70 shadow-xs'
                }`}
              >
                {/* Card Title & Content */}
                <div className="space-y-3 relative z-10">
                  <h3 className="text-lg sm:text-xl font-display font-bold text-slate-900 leading-snug">
                    {card.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                    {card.subtitle}
                  </p>
                </div>

                {/* Giant Outlined Watermark Numeral (Vimeo Style) */}
                <div className="relative z-0 mt-auto pt-6 flex justify-end">
                  <span
                    className={`font-display text-7xl sm:text-8xl font-light tracking-tighter leading-none select-none transition-colors ${
                      isSelected
                        ? 'text-cyan-800/25 font-normal'
                        : 'text-slate-400/40'
                    }`}
                  >
                    {card.num}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Carousel Arrow Buttons (Vimeo Style) */}
        <div className="flex items-center gap-3 pt-2">
          <button
            onClick={handlePrev}
            className="w-11 h-11 rounded-full border border-slate-300/80 bg-white/80 hover:bg-white text-slate-700 hover:text-slate-900 flex items-center justify-center shadow-xs transition-all focus:outline-none"
            aria-label="Previous card"
          >
            <ArrowLeft className="w-4 h-4" />
          </button>

          <button
            onClick={handleNext}
            className="w-11 h-11 rounded-full border border-slate-300/80 bg-white/80 hover:bg-white text-slate-700 hover:text-slate-900 flex items-center justify-center shadow-xs transition-all focus:outline-none"
            aria-label="Next card"
          >
            <ArrowRight className="w-4 h-4" />
          </button>

          <span className="text-xs font-mono text-slate-400 ml-2">
            0{activeCardIndex + 1} / 0{CARDS.length}
          </span>
        </div>

      </div>
    </section>
  );
};

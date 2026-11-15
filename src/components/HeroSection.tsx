import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, MessageCircle, ShieldCheck, UserCheck, Sparkles, MapPin } from 'lucide-react';
import { AppleWordReveal } from './animations/AppleWordReveal';
import { TypewriterHeading } from './animations/TypewriterHeading';
import { getWhatsAppUrl } from '../config/clinicConfig';
import { soundFX } from '../utils/soundEffects';

interface HeroSectionProps {
  onOpenBooking: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenBooking }) => {
  return (
    <section
      id="hero"
      aria-label="Every Smile Matters - Dr Yadav Dental Care Point"
      className="relative pt-24 sm:pt-28 pb-10 sm:pb-14 px-3 sm:px-6 lg:px-8 select-none scroll-mt-20"
    >
      {/* Outer Curved Container (Apple Minimalist Luxury Surface) */}
      <motion.div
        initial={{ opacity: 0, scale: 0.985 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-7xl mx-auto rounded-[36px] sm:rounded-[48px] bg-gradient-to-b from-[#B9EFFF]/60 via-[#EAF7FD]/40 to-white/75 border border-sky-100/80 shadow-[0_30px_90px_-20px_rgba(8,121,207,0.08)] p-6 sm:p-12 lg:p-16 relative overflow-hidden"
      >
        {/* Soft Radial Ambient Lights & Halos */}
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[850px] h-[450px] luxury-ambient-halo blur-[110px] pointer-events-none" />
        <div className="absolute top-1/2 -right-24 w-[400px] h-[400px] bg-[#B9EFFF]/30 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-0 -left-20 w-[350px] h-[350px] bg-[#B9EFFF]/20 rounded-full blur-[90px] pointer-events-none" />

        <div className="relative z-10 max-w-5xl mx-auto text-center flex flex-col items-center">
          
          {/* 1. CINEMATIC TYPEWRITER HEADLINE IN ADOBE CASLON ITALIC */}
          <div className="w-full text-center pt-2 sm:pt-4 min-h-[90px] sm:min-h-[120px] flex items-center justify-center">
            <TypewriterHeading
              text="Every Smile Matters."
              as="h1"
              speed={55}
              delay={150}
              italic={false}
              className="text-[9.5vw] sm:text-[7.2vw] lg:text-[5.4rem] xl:text-[6.4rem] text-gradient-cyan-blue font-caslon font-normal leading-[0.98] drop-shadow-xs"
            />
          </div>

          {/* 2. CONCISE EDITORIAL SUBHEAD (Avenir Light with Word-by-Word Reveal) */}
          <div className="mt-4 sm:mt-6 max-w-xl mx-auto font-avenir-light font-light">
            <AppleWordReveal
              text="Modern, gentle dental care led by Dr. Jagesh Yadav in DLF Ankur Vihar."
              delay={0.35}
              stagger={0.03}
              wordClassName="font-avenir-light font-light text-slate-700 text-sm sm:text-base lg:text-lg"
            />
          </div>

          {/* 3. DUAL LUXURY ACTION BUTTONS */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="mt-7 sm:mt-9 flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto"
          >
            {/* Primary Orange Appointment CTA with Interactive Micro-Animations */}
            <motion.button
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.96 }}
              onClick={() => {
                soundFX.playClick();
                onOpenBooking();
              }}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-9 py-4 rounded-full bg-vibrant-orange hover:bg-[#E53E04] text-white font-extrabold text-xs sm:text-sm uppercase tracking-wider shadow-[0_12px_35px_rgba(255,75,11,0.32)] transition-all cursor-pointer group"
            >
              <span>BOOK APPOINTMENT</span>
              <ArrowUpRight className="w-4 h-4 stroke-[2.5] transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </motion.button>

            {/* Secondary WhatsApp Direct Connect with Interactive Hover Glow */}
            <motion.a
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.96 }}
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => soundFX.playClick()}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-white/95 hover:bg-white text-slate-800 hover:text-deep-blue font-bold text-xs sm:text-sm tracking-wide border border-slate-200/90 hover:border-sky-300 shadow-[0_4px_16px_rgba(15,23,42,0.05)] transition-all cursor-pointer group"
            >
              <MessageCircle className="w-4 h-4 text-emerald-600 transition-transform duration-200 group-hover:scale-110" />
              <span>WhatsApp Dr. Yadav</span>
              <span className="text-[10px] font-mono text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200/80 font-bold ml-1">
                wa.me
              </span>
            </motion.a>
          </motion.div>

          {/* 4. LIVE CLINICAL AVAILABILITY STATUS WITH RADAR PING */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.55 }}
            className="mt-5 flex flex-wrap items-center justify-center gap-2 sm:gap-4 text-xs text-slate-500 font-avenir-light font-light"
          >
            <div className="flex items-center gap-1.5">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span className="text-slate-800 font-medium">Morning & Evening Consultations</span>
            </div>
            <span className="hidden sm:inline text-slate-300">•</span>
            <div className="flex items-center gap-1">
              <MapPin className="w-3.5 h-3.5 text-deep-blue" />
              <span>Opposite Sunrise Public School, DLF Ankur Vihar</span>
            </div>
          </motion.div>

          {/* 5. SWISS EDITORIAL 3-COLUMN CLINICAL HIGHLIGHT DECK (Adobe Caslon Titles + Avenir Light Paragraphs) */}
          <div className="mt-10 sm:mt-14 w-full grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 text-left">
            {/* Card 1: 100% Sterile Protocol */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.65, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -6, transition: { duration: 0.25 } }}
              className="p-6 rounded-3xl bg-white/90 backdrop-blur-md border border-white shadow-[0_10px_30px_rgba(8,121,207,0.05)] hover:shadow-[0_18px_45px_rgba(8,121,207,0.12)] transition-all group cursor-default"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="font-caslon-italic italic text-3xl sm:text-4xl text-vibrant-orange tracking-tight font-normal">
                  100%
                </span>
                <motion.div
                  whileHover={{ scale: 1.15, rotate: 5 }}
                  className="w-10 h-10 rounded-2xl bg-sky-50 border border-sky-100 flex items-center justify-center text-deep-blue"
                >
                  <ShieldCheck className="w-5 h-5 text-deep-blue" />
                </motion.div>
              </div>
              <h3 className="font-caslon-italic italic text-xl text-slate-900 tracking-tight font-normal mb-1">
                Sterile Protocol
              </h3>
              <p className="font-avenir-light font-light text-xs text-slate-600 leading-relaxed">
                Hospital autoclave sterilization with individually sealed pouches opened chairside.
              </p>
            </motion.div>

            {/* Card 2: 01-on-01 Personal Care */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.72, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -6, transition: { duration: 0.25 } }}
              className="p-6 rounded-3xl bg-white/90 backdrop-blur-md border border-white shadow-[0_10px_30px_rgba(8,121,207,0.05)] hover:shadow-[0_18px_45px_rgba(8,121,207,0.12)] transition-all group cursor-default"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="font-caslon-italic italic text-3xl sm:text-4xl text-vibrant-orange tracking-tight font-normal">
                  01-on-01
                </span>
                <motion.div
                  whileHover={{ scale: 1.15, rotate: -5 }}
                  className="w-10 h-10 rounded-2xl bg-amber-50 border border-amber-100 flex items-center justify-center text-amber-700"
                >
                  <UserCheck className="w-5 h-5 text-amber-600" />
                </motion.div>
              </div>
              <h3 className="font-caslon-italic italic text-xl text-slate-900 tracking-tight font-normal mb-1">
                Direct Doctor Care
              </h3>
              <p className="font-avenir-light font-light text-xs text-slate-600 leading-relaxed">
                Dedicated consultations with Dr. Jagesh Yadav. Unhurried care with zero rotating attendants.
              </p>
            </motion.div>

            {/* Card 3: Modern Precision Dentistry */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -6, transition: { duration: 0.25 } }}
              className="p-6 rounded-3xl bg-white/90 backdrop-blur-md border border-white shadow-[0_10px_30px_rgba(8,121,207,0.05)] hover:shadow-[0_18px_45px_rgba(8,121,207,0.12)] transition-all group cursor-default"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="font-caslon-italic italic text-3xl sm:text-4xl text-deep-blue tracking-tight font-normal">
                  PREMIER
                </span>
                <motion.div
                  whileHover={{ scale: 1.15, rotate: 8 }}
                  className="w-10 h-10 rounded-2xl bg-sky-50 border border-sky-100 flex items-center justify-center text-bright-cyan"
                >
                  <Sparkles className="w-5 h-5 text-deep-blue" />
                </motion.div>
              </div>
              <h3 className="font-caslon-italic italic text-xl text-slate-900 tracking-tight font-normal mb-1">
                Painless Dentistry
              </h3>
              <p className="font-avenir-light font-light text-xs text-slate-600 leading-relaxed">
                Gentle root canals, aesthetic restorations, and preventive hygiene with minimal discomfort.
              </p>
            </motion.div>
          </div>

        </div>

      </motion.div>
    </section>
  );
};

export default HeroSection;

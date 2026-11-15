import React from 'react';
import { motion } from 'framer-motion';
import { Camera, Maximize2, Sparkles, CheckCircle2, ArrowRight } from 'lucide-react';
import { AppleWordReveal } from './animations/AppleWordReveal';
import { AppleScrollWordHighlight } from './animations/AppleScrollWordHighlight';
import { TypewriterHeading } from './animations/TypewriterHeading';
import { CLINIC_CONFIG, getWhatsAppUrl } from '../config/clinicConfig';
import { soundFX } from '../utils/soundEffects';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="relative py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-white select-none scroll-mt-24 sm:scroll-mt-32">
      <div className="max-w-7xl mx-auto w-full space-y-12 sm:space-y-16">
        
        {/* ========================================================= */}
        {/* TOP EDITORIAL HEADER (Typewriter Adobe Caslon + Avenir)   */}
        {/* ========================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
          
          {/* Left Heading: "About" / "Dr Yadav Dental" */}
          <div className="lg:col-span-5 space-y-1 text-left">
            <span className="font-caslon-italic italic text-slate-400 text-2xl sm:text-3xl lg:text-4xl block tracking-tight">
              About
            </span>
            <div className="min-h-[64px] flex items-center">
              <TypewriterHeading
                text="Dr Yadav Dental"
                as="h2"
                speed={55}
                className="text-4xl sm:text-5xl lg:text-6xl text-slate-950 leading-[1.05]"
              />
            </div>
            <p className="text-xs font-mono text-deep-blue uppercase tracking-widest pt-1 font-bold">
              Care Point • DLF Ankur Vihar, Ghaziabad
            </p>
          </div>

          {/* Right Heading: "Our Vision" + Concise Apple Scroll Word Highlight */}
          <div className="lg:col-span-7 space-y-4 text-left">
            <div className="space-y-2">
              <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-vibrant-orange block font-display">
                Our Vision
              </span>
              <AppleScrollWordHighlight
                text="We combine gentle clinical care with transparent communication to create a welcoming, anxiety-free dental experience for patients across DLF Ankur Vihar."
                className="font-avenir-light font-light text-sm sm:text-base text-slate-800 leading-relaxed max-w-xl"
              />
            </div>

            {/* Reference Orange Pagination / Accent Dots with Stagger Bounce */}
            <div className="flex items-center gap-2 pt-1">
              <motion.span
                animate={{ scale: [1, 1.25, 1] }}
                transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                className="w-2.5 h-2.5 rounded-full bg-vibrant-orange"
              />
              <motion.span
                animate={{ scale: [1, 1.25, 1] }}
                transition={{ duration: 2, delay: 0.3, repeat: Infinity, ease: 'easeInOut' }}
                className="w-2 h-2 rounded-full bg-vibrant-orange/50"
              />
              <motion.span
                animate={{ scale: [1, 1.25, 1] }}
                transition={{ duration: 2, delay: 0.6, repeat: Infinity, ease: 'easeInOut' }}
                className="w-2 h-2 rounded-full bg-vibrant-orange/25"
              />
            </div>
          </div>

        </div>

        {/* ========================================================= */}
        {/* ASYMMETRIC PHOTO COLLAGE (Matching Reference Layout)      */}
        {/* ========================================================= */}
        <div className="relative pt-4">
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-5 sm:gap-6 items-stretch">
            
            {/* Left Column of Collage (md:col-span-6) */}
            <div className="md:col-span-6 space-y-5 sm:space-y-6 flex flex-col justify-between">
              
              {/* Slot 1: Clinic Reception & Consultation Lounge (Landscape) */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="group relative rounded-3xl bg-gradient-to-br from-sky-50 via-white to-sky-50 border border-sky-100 shadow-sm p-8 min-h-[240px] sm:min-h-[270px] flex flex-col justify-between overflow-hidden"
              >
                {/* Floating Tag (Matching Reference Pill Tag) */}
                <div className="self-start">
                  <span className="px-3 py-1 rounded-full bg-white/90 backdrop-blur-md border border-sky-200 text-[10px] font-bold uppercase tracking-wider text-deep-blue shadow-2xs">
                    Clinic Reception
                  </span>
                </div>

                {/* Elegant Placeholder Core */}
                <div className="text-center my-auto space-y-2 py-4">
                  <div className="w-12 h-12 rounded-2xl bg-white border border-sky-200 text-deep-blue flex items-center justify-center mx-auto shadow-xs group-hover:scale-105 transition-transform">
                    <Camera className="w-6 h-6 text-bright-cyan" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-800">
                      Welcoming Reception & Patient Lounge
                    </p>
                    <p className="text-[11px] font-mono text-slate-400">
                      [Photo slot: DLF Ankur Vihar clinic interior]
                    </p>
                  </div>
                </div>

                <div className="flex items-center justify-between text-[11px] font-mono text-slate-400 pt-2 border-t border-sky-100/60">
                  <span>Slot 01</span>
                  <span className="text-deep-blue font-semibold">Clean & Hygienic</span>
                </div>
              </motion.div>

              {/* Slot 2: Patient Consultation & Comfort (Portrait/Square) */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="group relative rounded-3xl bg-gradient-to-br from-white via-sky-50/50 to-white border border-sky-100 shadow-sm p-8 min-h-[260px] sm:min-h-[290px] flex flex-col justify-between overflow-hidden"
              >
                {/* Floating Tag */}
                <div className="self-start">
                  <span className="px-3 py-1 rounded-full bg-white/90 backdrop-blur-md border border-orange-200 text-[10px] font-bold uppercase tracking-wider text-vibrant-orange shadow-2xs">
                    Patient Care & Comfort
                  </span>
                </div>

                <div className="text-center my-auto space-y-2 py-4">
                  <div className="w-12 h-12 rounded-2xl bg-white border border-orange-200 text-vibrant-orange flex items-center justify-center mx-auto shadow-xs group-hover:scale-105 transition-transform">
                    <Camera className="w-6 h-6 text-vibrant-orange" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-800">
                      Unhurried Doctor Consultations
                    </p>
                    <p className="text-[11px] font-mono text-slate-400">
                      [Photo slot: Dr. Jagesh Yadav patient interaction]
                    </p>
                  </div>
                </div>

                <div className="flex items-center justify-between text-[11px] font-mono text-slate-400 pt-2 border-t border-sky-100/60">
                  <span>Slot 02</span>
                  <span className="text-vibrant-orange font-semibold">Anxiety-Free</span>
                </div>
              </motion.div>

            </div>

            {/* Right Column of Collage (md:col-span-6) */}
            <div className="md:col-span-6 space-y-5 sm:space-y-6 flex flex-col justify-between">
              
              {/* Slot 3: Dental Treatment Chair & Operatory (Portrait) */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.15 }}
                className="group relative rounded-3xl bg-gradient-to-br from-sky-50/80 via-white to-sky-50/40 border border-sky-100 shadow-sm p-8 min-h-[280px] sm:min-h-[320px] flex flex-col justify-between overflow-hidden"
              >
                {/* Floating Tag */}
                <div className="self-start">
                  <span className="px-3 py-1 rounded-full bg-white/90 backdrop-blur-md border border-sky-200 text-[10px] font-bold uppercase tracking-wider text-deep-blue shadow-2xs">
                    Dental Operatory
                  </span>
                </div>

                <div className="text-center my-auto space-y-2 py-4">
                  <div className="w-12 h-12 rounded-2xl bg-white border border-sky-200 text-deep-blue flex items-center justify-center mx-auto shadow-xs group-hover:scale-105 transition-transform">
                    <Camera className="w-6 h-6 text-deep-blue" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-800">
                      Ergonomic Dental Operatory Suite
                    </p>
                    <p className="text-[11px] font-mono text-slate-400">
                      [Photo slot: Treatment operatory chair & lighting]
                    </p>
                  </div>
                </div>

                <div className="flex items-center justify-between text-[11px] font-mono text-slate-400 pt-2 border-t border-sky-100/60">
                  <span>Slot 03</span>
                  <span className="text-deep-blue font-semibold">Precision Setup</span>
                </div>
              </motion.div>

              {/* Slot 4: Modern Equipment & Hospital Autoclave (Landscape) */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="group relative rounded-3xl bg-gradient-to-br from-white via-sky-50 to-white border border-sky-100 shadow-sm p-8 min-h-[220px] sm:min-h-[240px] flex flex-col justify-between overflow-hidden"
              >
                {/* Floating Tag */}
                <div className="self-start">
                  <span className="px-3 py-1 rounded-full bg-white/90 backdrop-blur-md border border-emerald-200 text-[10px] font-bold uppercase tracking-wider text-emerald-800 shadow-2xs">
                    Sterilization Station
                  </span>
                </div>

                <div className="text-center my-auto space-y-2 py-3">
                  <div className="w-12 h-12 rounded-2xl bg-white border border-emerald-200 text-emerald-700 flex items-center justify-center mx-auto shadow-xs group-hover:scale-105 transition-transform">
                    <Camera className="w-6 h-6 text-emerald-600" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-800">
                      Hospital-Grade Autoclaving & Sealed Pouches
                    </p>
                    <p className="text-[11px] font-mono text-slate-400">
                      [Photo slot: Sterilization protocol equipment]
                    </p>
                  </div>
                </div>

                <div className="flex items-center justify-between text-[11px] font-mono text-slate-400 pt-2 border-t border-sky-100/60">
                  <span>Slot 04</span>
                  <span className="text-emerald-700 font-semibold">100% Sterile</span>
                </div>
              </motion.div>

            </div>

          </div>

          {/* Floating Expand Icon in Corner (Matching Reference Icon) */}
          <div className="absolute right-6 sm:right-10 bottom-4 sm:bottom-6 pointer-events-none">
            <div className="w-11 h-11 rounded-full bg-white border border-sky-200 shadow-md flex items-center justify-center text-slate-700">
              <Maximize2 className="w-4 h-4" />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

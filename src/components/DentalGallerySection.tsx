import React from 'react';
import { motion } from 'framer-motion';
import { Camera, Sparkles, Image as ImageIcon } from 'lucide-react';
import { AppleWordReveal } from './animations/AppleWordReveal';
import { TypewriterHeading } from './animations/TypewriterHeading';
import { CLINIC_CONFIG } from '../config/clinicConfig';

export const DentalGallerySection: React.FC = () => {
  const { gallery } = CLINIC_CONFIG;

  return (
    <section id="gallery" className="relative py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-[#EAF5FA] select-none border-t border-sky-100 scroll-mt-24 sm:scroll-mt-32">
      <div className="max-w-7xl mx-auto w-full space-y-12">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-2">
          <span className="text-xs font-bold uppercase tracking-wider text-vibrant-orange block font-display">
            Practice Environment
          </span>
          <div className="min-h-[64px] flex items-center justify-center">
            <TypewriterHeading
              text="Clinic Spaces & Environment"
              as="h2"
              speed={55}
              className="text-4xl sm:text-5xl lg:text-6xl text-slate-950 leading-[1.05]"
            />
          </div>
          <p className="font-avenir-light font-light text-sm sm:text-base text-slate-600 leading-relaxed max-w-lg mx-auto">
            Hygienic, comfortable treatment facilities in DLF Ankur Vihar.
          </p>
        </div>

        {/* Gallery Grid (6 Dedicated Slots Driven by Central Config) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-2">
          {gallery.map((slot, index) => (
            <motion.div
              key={slot.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.06 }}
              className="group rounded-3xl bg-white border border-sky-100 shadow-[0_4px_20px_rgba(8,121,207,0.04)] hover:shadow-[0_12px_35px_rgba(8,121,207,0.12)] hover:border-bright-cyan transition-all overflow-hidden flex flex-col text-left"
            >
              {/* Image Frame or Elegant Empty Placeholder */}
              <div className="relative aspect-[16/10] bg-gradient-to-br from-sky-50 via-white to-sky-100/50 border-b border-sky-100 flex flex-col items-center justify-center p-6 text-center space-y-3 overflow-hidden">
                
                {slot.imagePath ? (
                  <img
                    src={slot.imagePath}
                    alt={slot.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                ) : (
                  <>
                    {/* Placeholder Icon */}
                    <div className="w-12 h-12 rounded-2xl bg-white border border-sky-200 shadow-2xs text-deep-blue group-hover:scale-105 transition-transform flex items-center justify-center">
                      <Camera className="w-6 h-6 text-bright-cyan" />
                    </div>

                    {/* Placeholder Label */}
                    <div className="space-y-1">
                      <span className="text-xs font-bold text-slate-900 block">
                        {slot.placeholderLabel}
                      </span>
                      <span className="text-[10px] font-mono text-slate-400 block">
                        [Photo slot ready for client upload]
                      </span>
                    </div>

                    {/* Subtle Corner Badge */}
                    <div className="absolute top-3 right-3 px-2.5 py-0.5 rounded-full bg-white/90 backdrop-blur-sm border border-sky-200 text-[10px] font-mono font-bold text-deep-blue">
                      Slot 0{index + 1}
                    </div>
                  </>
                )}

              </div>

              {/* Slot Description & Meta */}
              <div className="p-5 space-y-1.5 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between text-[11px] font-mono text-slate-400 pb-1">
                    <span className="text-deep-blue font-bold tracking-wider uppercase">{slot.category}</span>
                  </div>
                  <h3 className="font-display font-extrabold text-base text-slate-950 group-hover:text-deep-blue transition-colors">
                    {slot.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed pt-1">
                    {slot.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-400 font-mono">
                  <span>DLF Ankur Vihar</span>
                  <span className="text-deep-blue font-bold">Config: {slot.id}</span>
                </div>
              </div>

            </motion.div>
          ))}
        </div>

        {/* Central Configuration Note */}
        <div className="p-4 rounded-2xl bg-white border border-sky-100 max-w-2xl mx-auto text-center space-y-1 text-xs text-slate-600 shadow-2xs">
          <p className="font-bold text-slate-900">
            Central Image Configuration Architecture
          </p>
          <p className="text-[11px] text-slate-500 font-mono">
            Photographs can be uploaded into `public/gallery/` and linked via `src/config/clinicConfig.ts` without modifying layout code.
          </p>
        </div>

      </div>
    </section>
  );
};

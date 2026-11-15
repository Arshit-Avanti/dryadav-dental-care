import React from 'react';
import { motion } from 'framer-motion';
import { Check, Sparkles } from 'lucide-react';
import { AppleWordReveal } from './animations/AppleWordReveal';
import { TypewriterHeading } from './animations/TypewriterHeading';
import { CLINIC_CONFIG, getWhatsAppUrl } from '../config/clinicConfig';

export const WhyChooseUsSection: React.FC = () => {
  const reasons = [
    {
      number: '01',
      title: 'Patient-Focused Care',
      desc: 'Unhurried consultations to understand symptoms and treatment goals.',
      badge: 'Empathetic Approach',
    },
    {
      number: '02',
      title: 'Custom Treatment Plans',
      desc: 'Personalized restoration suited to your clinical situation and budget.',
      badge: 'Tailored Plans',
    },
    {
      number: '03',
      title: 'Clear Explanations',
      desc: 'Honest, step-by-step guidance before any procedure begins.',
      badge: 'Zero Surprises',
    },
    {
      number: '04',
      title: 'Comfortable Setting',
      desc: 'Calm reception and attentive anesthesia management for anxiety-free visits.',
      badge: 'Gentle Care',
    },
    {
      number: '05',
      title: 'Tooth Preservation',
      desc: 'Natural enamel is precious. We preserve and restore whenever viable.',
      badge: 'Conservative Care',
    },
    {
      number: '06',
      title: 'WhatsApp Direct Line',
      desc: 'Instant post-consultation assistance directly on WhatsApp.',
      badge: 'Direct Support',
    },
  ];

  return (
    <section className="relative py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-white select-none border-t border-sky-100 scroll-mt-24 sm:scroll-mt-32">
      <div className="max-w-7xl mx-auto w-full space-y-12">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-2">
          <span className="text-xs font-bold uppercase tracking-wider text-vibrant-orange block font-display">
            Our Commitments
          </span>
          <div className="min-h-[64px] flex items-center justify-center">
            <TypewriterHeading
              text="Why Patients Choose Us"
              as="h2"
              speed={55}
              className="text-4xl sm:text-5xl lg:text-6xl text-slate-950 leading-[1.05]"
            />
          </div>
          <p className="font-avenir-light font-light text-sm sm:text-base text-slate-600 leading-relaxed max-w-lg mx-auto">
            Honest clinical guidance, gentle hands, and dependable care.
          </p>
        </div>

        {/* 6 Clean Editorial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-2">
          {reasons.map((item, index) => (
            <motion.div
              key={item.number}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="p-7 sm:p-8 rounded-3xl bg-gradient-to-b from-[#F6FBFE] to-white border border-sky-100 shadow-[0_4px_20px_rgba(8,121,207,0.04)] hover:shadow-[0_12px_35px_rgba(8,121,207,0.1)] hover:border-bright-cyan transition-all text-left space-y-4 flex flex-col justify-between group cursor-default"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="font-caslon-italic italic text-3xl font-normal text-slate-400 group-hover:text-vibrant-orange transition-colors">
                    {item.number}
                  </span>
                  <span className="text-[10px] font-mono text-deep-blue bg-sky-100/70 px-2.5 py-0.5 rounded-full border border-sky-200 font-bold uppercase">
                    {item.badge}
                  </span>
                </div>

                <h3 className="font-caslon-italic italic text-2xl text-slate-950 font-normal leading-snug">
                  {item.title}
                </h3>

                <p className="font-avenir-light font-light text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>

              <div className="pt-4 border-t border-sky-100/60 mt-4 flex items-center gap-1.5 text-[11px] font-mono text-deep-blue font-bold">
                <Check className="w-3.5 h-3.5 text-bright-cyan" />
                <span>Verified Practice Standard</span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

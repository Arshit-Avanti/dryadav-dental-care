import React from 'react';
import { motion } from 'framer-motion';
import { Star, ExternalLink, ShieldCheck, ArrowUpRight } from 'lucide-react';
import { AppleWordReveal } from './animations/AppleWordReveal';
import { TypewriterHeading } from './animations/TypewriterHeading';
import { CLINIC_CONFIG } from '../config/clinicConfig';

export const PatientReviewsSection: React.FC = () => {
  const { reviews } = CLINIC_CONFIG;

  return (
    <section id="reviews" className="relative py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-[#EAF5FA] select-none border-t border-sky-100 scroll-mt-24 sm:scroll-mt-32">
      <div className="max-w-7xl mx-auto w-full space-y-12">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-2">
          <span className="text-xs font-bold uppercase tracking-wider text-vibrant-orange block font-display">
            Patient Feedback
          </span>
          <div className="min-h-[64px] flex items-center justify-center">
            <TypewriterHeading
              text="Authentic Patient Experiences"
              as="h2"
              speed={55}
              className="text-4xl sm:text-5xl lg:text-6xl text-slate-950 leading-[1.05]"
            />
          </div>
          <p className="font-avenir-light font-light text-sm sm:text-base text-slate-600 leading-relaxed max-w-lg mx-auto">
            Genuine patient trust earned through dependable clinical care.
          </p>
        </div>

        {/* Ethical Transparency Statement Card */}
        <div className="max-w-3xl mx-auto p-6 sm:p-10 rounded-[32px] sm:rounded-[40px] bg-white border border-sky-200/90 shadow-[0_15px_40px_rgba(8,121,207,0.06)] space-y-5 text-center">
          <div className="w-14 h-14 rounded-2xl bg-sky-50 border border-sky-200 text-deep-blue flex items-center justify-center mx-auto shadow-xs">
            <ShieldCheck className="w-7 h-7 text-deep-blue" />
          </div>

          <div className="space-y-2">
            <h3 className="font-display font-extrabold text-2xl text-slate-950">
              Our Commitment to Review Integrity
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-xl mx-auto">
              {reviews.transparencyStatement}
            </p>
          </div>

          {/* Genuine Review Invitation Slots */}
          <div className="pt-3 grid grid-cols-1 sm:grid-cols-2 gap-4 text-left">
            <div className="p-5 rounded-2xl bg-sky-50/60 border border-dashed border-sky-300 space-y-2">
              <div className="flex items-center gap-1 text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <p className="text-xs text-slate-600 italic font-medium">
                "[Verified Google review slot 01 — Will appear here once genuine patient reviews are linked from Google Business Profile]"
              </p>
              <span className="text-[10px] font-mono text-deep-blue font-bold block pt-1">
                Google Business Profile Slot
              </span>
            </div>

            <div className="p-5 rounded-2xl bg-sky-50/60 border border-dashed border-sky-300 space-y-2">
              <div className="flex items-center gap-1 text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <p className="text-xs text-slate-600 italic font-medium">
                "[Verified Google review slot 02 — Will appear here once genuine patient reviews are linked from Google Business Profile]"
              </p>
              <span className="text-[10px] font-mono text-deep-blue font-bold block pt-1">
                Google Business Profile Slot
              </span>
            </div>
          </div>

          {/* Google Review URL Button */}
          {reviews.googleReviewUrl ? (
            <div className="pt-4">
              <a
                href={reviews.googleReviewUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-slate-950 hover:bg-slate-900 text-white font-bold text-xs uppercase tracking-wider shadow-sm transition-all"
              >
                <span>Read Verified Reviews on Google</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          ) : (
            <div className="pt-2 text-xs text-slate-400 font-mono">
              [Google Review URL will activate this button once verified Google profile link is configured]
            </div>
          )}

        </div>

      </div>
    </section>
  );
};

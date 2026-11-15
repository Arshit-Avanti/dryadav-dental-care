import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ShieldAlert, ArrowUpRight, Eye, MessageCircle, Sparkles } from 'lucide-react';
import { TREATMENTS_DATA, TreatmentDetail } from '../data/treatmentsData';
import { TreatmentDetailModal } from './TreatmentDetailModal';
import { AppleWordReveal } from './animations/AppleWordReveal';
import { AppleScrollWordHighlight } from './animations/AppleScrollWordHighlight';
import { TypewriterHeading } from './animations/TypewriterHeading';
import { InteractiveRevealCard } from './InteractiveRevealCard';
import { getTreatmentWhatsAppUrl } from '../config/clinicConfig';
import { soundFX } from '../utils/soundEffects';

export const TreatmentsSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeModalTreatment, setActiveModalTreatment] = useState<TreatmentDetail | null>(null);

  const categories = ['All', 'Endodontics', 'Restorative', 'Oral Surgery', 'Preventive', 'Prosthodontics'];

  const filteredTreatments = selectedCategory === 'All'
    ? TREATMENTS_DATA
    : TREATMENTS_DATA.filter((t) => t.category === selectedCategory);

  const handleOpenModal = (treatment: TreatmentDetail) => {
    soundFX.playClick();
    setActiveModalTreatment(treatment);
  };

  return (
    <section id="treatments" className="relative py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-[#EAF5FA] select-none scroll-mt-24 sm:scroll-mt-32">
      <div className="max-w-7xl mx-auto w-full space-y-12">
        
        {/* ========================================================= */}
        {/* HEADER: Typewriter in Adobe Caslon Italic + Avenir Light  */}
        {/* ========================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-end">
          
          {/* Left Title: "Available" / Typewriter "Treatments & Care" */}
          <div className="lg:col-span-6 space-y-1 text-left">
            <span className="font-caslon-italic italic text-slate-400 text-2xl sm:text-3xl lg:text-4xl block tracking-tight">
              Available
            </span>
            <div className="min-h-[64px] flex items-center">
              <TypewriterHeading
                text="Treatments & Care"
                as="h2"
                speed={50}
                className="text-4xl sm:text-5xl lg:text-6xl text-slate-950 leading-[1.05]"
              />
            </div>
            <p className="text-xs font-mono text-deep-blue uppercase tracking-widest pt-1 font-bold">
              Procedures Led by Dr. Jagesh Yadav
            </p>
          </div>

          {/* Right Narrative in Avenir Light with Scroll Word Highlight */}
          <div className="lg:col-span-6 text-left lg:text-right pb-1">
            <AppleScrollWordHighlight
              text="Personalized dentistry tailored to your comfort and health. From painless root canals to aesthetic restorations, our priority is tooth preservation."
              className="font-avenir-light font-light text-xs sm:text-sm text-slate-700 leading-relaxed max-w-md ml-auto"
            />
          </div>

        </div>

        {/* 1. INTERACTIVE IMAGE CARD WITH HEADING: CLICK TO REVEAL TEXT */}
        <InteractiveRevealCard />

        {/* Clinical Confirmation Disclaimer Banner */}
        <div className="inline-flex items-center gap-2.5 p-3 sm:p-3.5 rounded-2xl bg-white/90 border border-sky-200 text-xs text-slate-700 text-left max-w-2xl mx-auto shadow-2xs font-avenir-light font-light">
          <ShieldAlert className="w-4 h-4 text-vibrant-orange shrink-0" />
          <span>
            <strong className="font-semibold text-slate-900">Clinical Availability Notice:</strong> All treatments listed are candidate offerings tailored by Dr. Jagesh Yadav upon diagnostic assessment.
          </span>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-start sm:justify-center gap-2 pt-1">
          {categories.map((cat) => {
            const isSelected = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => {
                  soundFX.playClick();
                  setSelectedCategory(cat);
                }}
                className={`px-4 sm:px-5 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                  isSelected
                    ? 'bg-slate-950 text-white shadow-sm'
                    : 'bg-white hover:bg-sky-100 text-slate-700 border border-sky-100'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Treatment Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 pt-2">
          {filteredTreatments.map((t, idx) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.04 }}
              onClick={() => handleOpenModal(t)}
              className="group p-6 sm:p-7 rounded-3xl bg-white border border-sky-100 shadow-[0_4px_20px_rgba(8,121,207,0.04)] hover:shadow-[0_12px_35px_rgba(8,121,207,0.12)] hover:border-bright-cyan transition-all flex flex-col justify-between text-left relative overflow-hidden cursor-pointer"
            >
              {/* Subtle Blue Accent Gradient Blob in Background */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-sky-100/60 via-transparent to-transparent rounded-bl-full pointer-events-none" />

              <div className="space-y-4 relative z-10">
                {/* Category & Status */}
                <div className="flex items-center justify-between text-[11px] font-mono">
                  <span className="text-deep-blue font-bold tracking-wider uppercase">{t.category}</span>
                  <span className="text-[10px] bg-sky-50 text-deep-blue px-2 py-0.5 rounded-full border border-sky-200/80 font-bold">
                    {t.shortTag}
                  </span>
                </div>

                {/* Treatment Title in Adobe Caslon Italic */}
                <h3 className="font-caslon-italic italic text-2xl text-slate-950 group-hover:text-deep-blue transition-colors leading-tight font-normal">
                  {t.name}
                </h3>

                {/* Short Description in Avenir Light */}
                <p className="font-avenir-light font-light text-xs text-slate-600 leading-relaxed">
                  {t.shortDesc}
                </p>

                {/* Clinical Indication Preview */}
                <div className="space-y-1 pt-1">
                  <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block font-bold">
                    Common Indications
                  </span>
                  <p className="font-avenir-light font-light text-[11px] text-slate-600 line-clamp-2">
                    {t.indications.slice(0, 2).join(' • ')}
                  </p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-6 border-t border-slate-100 mt-5 flex items-center justify-between gap-2 relative z-10">
                <span className="text-xs font-bold text-slate-900 group-hover:text-vibrant-orange flex items-center gap-1.5 transition-colors">
                  <Eye className="w-4 h-4 text-bright-cyan" />
                  <span>Click to View Details</span>
                </span>
                <a
                  href={getTreatmentWhatsAppUrl(t.name)}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => {
                    e.stopPropagation();
                    soundFX.playClick();
                  }}
                  className="p-2.5 rounded-full bg-sky-50 hover:bg-vibrant-orange text-deep-blue hover:text-white border border-sky-200 transition-all shadow-2xs hover:scale-105"
                  title={`Enquire on WhatsApp about ${t.name}`}
                  aria-label={`Enquire on WhatsApp about ${t.name}`}
                >
                  <MessageCircle className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Modal Dialog for Deep Treatment Information */}
        <TreatmentDetailModal
          treatment={activeModalTreatment}
          onClose={() => setActiveModalTreatment(null)}
        />

      </div>
    </section>
  );
};

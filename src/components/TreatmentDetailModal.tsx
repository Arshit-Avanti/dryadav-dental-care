import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle2, MessageCircle, AlertCircle, Clock, Sparkles } from 'lucide-react';
import { TreatmentDetail } from '../data/treatmentsData';
import { getTreatmentWhatsAppUrl } from '../config/clinicConfig';
import { soundFX } from '../utils/soundEffects';

interface TreatmentDetailModalProps {
  treatment: TreatmentDetail | null;
  onClose: () => void;
}

export const TreatmentDetailModal: React.FC<TreatmentDetailModalProps> = ({ treatment, onClose }) => {
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    if (treatment) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [treatment, onClose]);

  if (!treatment) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-slate-950/60 backdrop-blur-sm"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 16 }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
          className="relative w-full max-w-2xl bg-[#FAFBF9] rounded-3xl border border-slate-200/90 shadow-2xl overflow-hidden z-10 my-8 text-left"
        >
          {/* Header */}
          <div className="p-6 sm:p-8 bg-white border-b border-slate-200/80 flex items-start justify-between gap-4">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-50 border border-teal-200/70 text-[11px] font-mono font-medium text-teal-800">
                <span>{treatment.category}</span>
                <span>•</span>
                <span>{treatment.shortTag}</span>
              </div>
              <h3 id="treatment-detail-modal-title" className="text-2xl sm:text-3xl font-display font-extrabold text-slate-950 tracking-tight">
                {treatment.name}
              </h3>
              <p className="text-xs text-amber-800 bg-amber-50/80 px-2.5 py-1 rounded-md border border-amber-200/60 inline-block font-mono">
                {treatment.status}
              </p>
            </div>

            <button
              onClick={() => {
                soundFX.playClick();
                onClose();
              }}
              className="w-10 h-10 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 hover:text-slate-900 flex items-center justify-center transition-colors cursor-pointer shrink-0"
              aria-label="Close dialog"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Modal Body */}
          <div className="p-6 sm:p-8 space-y-6 max-h-[70vh] overflow-y-auto">
            
            {/* Overview */}
            <div className="space-y-2">
              <h4 className="text-xs font-mono uppercase tracking-wider text-slate-500 font-semibold">
                Clinical Overview
              </h4>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                {treatment.fullDesc}
              </p>
            </div>

            {/* When is this indicated? */}
            <div className="space-y-3">
              <h4 className="text-xs font-mono uppercase tracking-wider text-slate-500 font-semibold">
                Common Symptoms & Indications
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {treatment.indications.map((ind, i) => (
                  <div key={i} className="flex items-start gap-2 text-xs text-slate-600 bg-white p-3 rounded-xl border border-slate-200/70">
                    <CheckCircle2 className="w-3.5 h-3.5 text-teal-600 mt-0.5 shrink-0" />
                    <span>{ind}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* What to expect during your appointment */}
            <div className="space-y-3">
              <h4 className="text-xs font-mono uppercase tracking-wider text-slate-500 font-semibold">
                What to Expect During Your Visit
              </h4>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-600">
                {treatment.whatToExpect.map((step, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <span className="w-5 h-5 rounded-full bg-slate-200 text-slate-700 flex items-center justify-center text-[10px] font-bold shrink-0 mt-0.5">
                      {i + 1}
                    </span>
                    <span>{step}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Patient Aftercare & Tips */}
            <div className="p-4 rounded-2xl bg-teal-50/60 border border-teal-200/60 space-y-2">
              <div className="flex items-center gap-1.5 text-teal-900 font-semibold text-xs">
                <Sparkles className="w-3.5 h-3.5 text-teal-600" />
                <span>Patient Aftercare & Advice</span>
              </div>
              <ul className="space-y-1.5 text-xs text-teal-950">
                {treatment.patientTips.map((tip, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-teal-600 mt-1.5 shrink-0" />
                    <span>{tip}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Duration Note */}
            <div className="flex items-center gap-2 text-xs text-slate-500 font-mono pt-1">
              <Clock className="w-4 h-4 text-slate-400" />
              <span>Estimated Duration: {treatment.estimatedDuration}</span>
            </div>

          </div>

          {/* Modal Footer with Direct WhatsApp CTA */}
          <div className="p-6 bg-white border-t border-slate-200/80 flex flex-col sm:flex-row items-center justify-between gap-4">
            <span className="text-xs text-slate-500">
              Direct question about this treatment?
            </span>

            <a
              href={getTreatmentWhatsAppUrl(treatment.name)}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => soundFX.playClick()}
              className="w-full sm:w-auto px-6 py-3 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs sm:text-sm shadow-md flex items-center justify-center gap-2 transition-transform hover:scale-102"
            >
              <MessageCircle className="w-4 h-4 fill-white text-emerald-600" />
              <span>Consult on WhatsApp for {treatment.name}</span>
            </a>
          </div>

        </motion.div>

      </div>
    </AnimatePresence>
  );
};

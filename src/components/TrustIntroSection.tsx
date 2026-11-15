import React from 'react';
import { motion } from 'framer-motion';
import { HeartHandshake, ShieldCheck, Stethoscope, Clock, CheckCircle, MessageSquare } from 'lucide-react';
import { CLINIC_CONFIG, getWhatsAppUrl } from '../config/clinicConfig';

export const TrustIntroSection: React.FC = () => {
  return (
    <section className="relative py-20 sm:py-24 px-4 sm:px-6 lg:px-8 bg-white border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto w-full space-y-12">
        
        {/* Header Block */}
        <div className="max-w-3xl mx-auto text-center space-y-3">
          <span className="text-[11px] font-mono uppercase tracking-widest text-teal-700 bg-teal-50 px-3 py-1 rounded-full border border-teal-200/60 inline-block">
            Patient-Focused Dental Care
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-slate-950 tracking-tight">
            A Thoughtful, Compassionate Dental Experience
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            At Dr Yadav Dental Care Point, we understand that dental appointments can cause apprehension. That is why our clinical philosophy is built around gentle techniques, empathetic listening, and honest treatment recommendations.
          </p>
        </div>

        {/* 4 Core Trust Pillars (Factual & Verified Only — No Fabricated Stats) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-4">
          
          {/* Pillar 1 */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="p-6 rounded-2xl bg-[#FAFBF9] border border-slate-200/90 shadow-2xs hover:shadow-md transition-shadow space-y-3 text-left"
          >
            <div className="w-10 h-10 rounded-xl bg-teal-50 border border-teal-200/80 flex items-center justify-center text-teal-700">
              <HeartHandshake className="w-5 h-5" />
            </div>
            <h3 className="font-display font-bold text-base text-slate-900">
              Patient Comfort First
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              We take the time to listen to your dental concerns, alleviate anxiety, and pace each treatment session according to your comfort.
            </p>
          </motion.div>

          {/* Pillar 2 */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="p-6 rounded-2xl bg-[#FAFBF9] border border-slate-200/90 shadow-2xs hover:shadow-md transition-shadow space-y-3 text-left"
          >
            <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-200/80 flex items-center justify-center text-blue-700">
              <Stethoscope className="w-5 h-5" />
            </div>
            <h3 className="font-display font-bold text-base text-slate-900">
              Conservative Preservation
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Whenever clinically viable, our priority is preserving your natural tooth structure using modern restorative and endodontic protocols.
            </p>
          </motion.div>

          {/* Pillar 3 */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="p-6 rounded-2xl bg-[#FAFBF9] border border-slate-200/90 shadow-2xs hover:shadow-md transition-shadow space-y-3 text-left"
          >
            <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-200/80 flex items-center justify-center text-emerald-700">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="font-display font-bold text-base text-slate-900">
              Strict Sterilization
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Patient safety is paramount. All reusable clinical instruments undergo multi-stage autoclaving and sterile packaging before every visit.
            </p>
          </motion.div>

          {/* Pillar 4 */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="p-6 rounded-2xl bg-[#FAFBF9] border border-slate-200/90 shadow-2xs hover:shadow-md transition-shadow space-y-3 text-left"
          >
            <div className="w-10 h-10 rounded-xl bg-cyan-50 border border-cyan-200/80 flex items-center justify-center text-cyan-700">
              <MessageSquare className="w-5 h-5" />
            </div>
            <h3 className="font-display font-bold text-base text-slate-900">
              Transparent Communication
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Dr. Jagesh Yadav explains diagnosis, procedure steps, and aftercare clearly so you feel completely informed and empowered in your care.
            </p>
          </motion.div>

        </div>

      </div>
    </section>
  );
};

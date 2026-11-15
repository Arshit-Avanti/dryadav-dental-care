import React from 'react';
import { motion } from 'framer-motion';
import { User, Award, ShieldCheck, Stethoscope, Sparkles, MessageCircle, AlertCircle, ArrowUpRight } from 'lucide-react';
import { AppleWordReveal } from './animations/AppleWordReveal';
import { TypewriterHeading } from './animations/TypewriterHeading';
import { CLINIC_CONFIG, getWhatsAppUrl } from '../config/clinicConfig';
import { soundFX } from '../utils/soundEffects';

export const DoctorProfileSection: React.FC = () => {
  const { doctor } = CLINIC_CONFIG;

  return (
    <section id="doctor" className="relative py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-white select-none border-t border-sky-100 scroll-mt-24 sm:scroll-mt-32">
      <div className="max-w-7xl mx-auto w-full space-y-12">
        
        {/* Section Header (Typewriter in Adobe Caslon Italic) */}
        <div className="max-w-3xl mx-auto text-center space-y-2">
          <span className="text-xs font-bold uppercase tracking-wider text-vibrant-orange block font-display">
            Lead Dental Practitioner
          </span>
          <div className="min-h-[64px] flex items-center justify-center">
            <TypewriterHeading
              text="Meet Dr. Jagesh Yadav"
              as="h2"
              speed={55}
              className="text-4xl sm:text-5xl lg:text-6xl text-slate-950 leading-[1.05]"
            />
          </div>
          <p className="font-avenir-light font-light text-sm sm:text-base text-slate-600 leading-relaxed max-w-xl mx-auto">
            Gentle dental care and honest clinical communication in DLF Ankur Vihar.
          </p>
        </div>

        {/* Doctor Spotlight Card (Luxury White & Sky Blue Border) */}
        <div className="max-w-5xl mx-auto bg-gradient-to-b from-white to-[#F6FBFE] rounded-[32px] sm:rounded-[40px] border border-sky-200/90 shadow-[0_20px_50px_rgba(8,121,207,0.06)] overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 items-stretch">
            
            {/* Left Column: Dedicated Large Portrait Image Slot (col-span-5) */}
            <div className="lg:col-span-5 bg-gradient-to-b from-sky-50/90 via-sky-100/50 to-white p-8 sm:p-12 flex flex-col justify-between items-center text-center relative border-b lg:border-b-0 lg:border-r border-sky-100">
              
              {/* Doctor Portrait Placeholder Container */}
              <div className="w-full max-w-[280px] aspect-[4/5] rounded-3xl bg-white border-2 border-dashed border-sky-300 shadow-sm flex flex-col items-center justify-center p-6 text-center space-y-3 relative group">
                <div className="w-16 h-16 rounded-2xl bg-sky-50 border border-sky-200 text-deep-blue flex items-center justify-center shadow-xs">
                  <User className="w-8 h-8" />
                </div>
                <div className="space-y-1">
                  <p className="text-base font-bold text-slate-900">
                    {doctor.name}
                  </p>
                  <p className="text-xs text-deep-blue font-bold tracking-wide">
                    {doctor.role}
                  </p>
                </div>
                <div className="p-2.5 rounded-xl bg-sky-50 border border-sky-200/80 w-full text-[11px] text-slate-600 font-mono">
                  <span className="font-bold text-deep-blue block">[Dedicated Portrait Slot]</span>
                  <span className="text-[10px] text-slate-400">Ready for doctor photography</span>
                </div>
              </div>

              {/* Direct WhatsApp Doctor Link */}
              <div className="pt-6 w-full max-w-[280px]">
                <a
                  href={getWhatsAppUrl(`Hello Dr. Jagesh Yadav, I would like to consult with you regarding dental care at Dr Yadav Dental Care Point.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => soundFX.playClick()}
                  className="w-full py-3.5 px-5 rounded-full bg-vibrant-orange hover:bg-[#E53E04] text-white font-extrabold text-xs uppercase tracking-wider shadow-md flex items-center justify-center gap-2 transition-transform hover:scale-102"
                >
                  <MessageCircle className="w-4 h-4 fill-white" />
                  <span>Consult with Dr. Yadav</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>

            </div>

            {/* Right Column: Complete Professional Profile Information (col-span-7) */}
            <div className="lg:col-span-7 p-8 sm:p-10 space-y-6 text-left flex flex-col justify-between">
              
              {/* Profile Header */}
              <div className="space-y-2 border-b border-sky-100 pb-5">
                <div className="flex flex-wrap items-center gap-2.5">
                  <h3 className="text-2xl sm:text-3xl font-caslon-italic italic text-slate-950 font-normal">
                    {doctor.name}
                  </h3>
                  <span className="text-xs font-mono font-bold bg-sky-100 text-deep-blue px-3 py-1 rounded-full border border-sky-200">
                    {doctor.qualifications.degrees}*
                  </span>
                </div>
                <p className="text-xs text-slate-500 font-mono">
                  {doctor.role} • DLF Ankur Vihar, Loni, Ghaziabad
                </p>

                {/* Qualification Confirmation Note */}
                <div className="text-[11px] text-slate-700 bg-sky-50 p-3 rounded-xl border border-sky-200 flex items-start gap-2">
                  <AlertCircle className="w-4 h-4 text-vibrant-orange mt-0.5 shrink-0" />
                  <span>
                    *{doctor.qualifications.note}
                  </span>
                </div>
              </div>

              {/* Doctor Biography */}
              <div className="space-y-3 text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                {doctor.biography.map((p, idx) => (
                  <p key={idx}>{p}</p>
                ))}
              </div>

              {/* Clinical Philosophy Quote */}
              <div className="p-4 sm:p-5 rounded-2xl bg-white border border-sky-100 shadow-2xs space-y-1">
                <span className="text-[10px] font-mono text-vibrant-orange uppercase tracking-wider block font-bold">
                  Clinical Practice Creed
                </span>
                <p className="text-xs sm:text-sm text-slate-800 italic font-semibold">
                  "{doctor.philosophy}"
                </p>
              </div>

              {/* Areas of Clinical Focus */}
              <div className="space-y-2 pt-1">
                <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 block font-bold">
                  Areas of Focus
                </span>
                <div className="flex flex-wrap gap-2">
                  {doctor.expertiseAreas.map((area, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 rounded-full bg-white border border-sky-200 text-xs text-slate-800 font-semibold shadow-2xs"
                    >
                      {area}
                    </span>
                  ))}
                </div>
              </div>

              {/* Registration & Memberships Status */}
              <div className="pt-4 border-t border-sky-100 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-500 font-mono">
                <div>
                  <span className="text-slate-400 block text-[10px]">Dental Registration</span>
                  <span className="text-slate-800 font-bold">Verified in clinic records</span>
                </div>
                <div>
                  <span className="text-slate-400 block text-[10px]">Clinic Base</span>
                  <span className="text-slate-800 font-bold">DLF Ankur Vihar, Ghaziabad</span>
                </div>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

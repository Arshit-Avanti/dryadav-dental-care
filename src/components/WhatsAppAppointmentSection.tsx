import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, ArrowUpRight, ShieldCheck, Clock, CheckCircle2, Phone, Calendar } from 'lucide-react';
import { AppleWordReveal } from './animations/AppleWordReveal';
import { TypewriterHeading } from './animations/TypewriterHeading';
import { CLINIC_CONFIG, getWhatsAppUrl } from '../config/clinicConfig';
import { soundFX } from '../utils/soundEffects';

export const WhatsAppAppointmentSection: React.FC = () => {
  const [selectedReason, setSelectedReason] = useState<string>('General Dental Checkup');
  const [patientName, setPatientName] = useState<string>('');
  const [preferredDate, setPreferredDate] = useState<string>('');

  const consultationReasons = [
    'General Dental Checkup',
    'Toothache / Immediate Pain Relief',
    'Root Canal Treatment (RCT)',
    'Teeth Cleaning & Scaling',
    'Cavity Filling Restoration',
    'Dental Crown / Tooth Replacement',
    'Wisdom Tooth Discomfort',
  ];

  const handleCustomWhatsAppBooking = () => {
    soundFX.playClick();
    let msg = `Hello Dr. Yadav Dental Care Point, I would like to book a dental consultation.`;
    if (patientName.trim()) {
      msg += ` Name: ${patientName.trim()}.`;
    }
    if (selectedReason) {
      msg += ` Treatment inquiry: ${selectedReason}.`;
    }
    if (preferredDate) {
      msg += ` Preferred Date: ${preferredDate}.`;
    }
    const url = getWhatsAppUrl(msg);
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="appointment" className="relative py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-white select-none border-t border-sky-100 scroll-mt-24 sm:scroll-mt-32">
      <div className="max-w-5xl mx-auto w-full space-y-12 text-center">
        
        {/* Section Header */}
        <div className="space-y-2 max-w-2xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-wider text-vibrant-orange block font-display">
            Direct Booking
          </span>
          <div className="min-h-[64px] flex items-center justify-center">
            <TypewriterHeading
              text="Let's Take Care of Your Smile"
              as="h2"
              speed={55}
              className="text-4xl sm:text-5xl lg:text-6xl text-slate-950 leading-[1.05]"
            />
          </div>
          <p className="font-avenir-light font-light text-sm sm:text-base text-slate-600 leading-relaxed max-w-md mx-auto">
            Direct WhatsApp consultation without waiting in line.
          </p>
        </div>

        {/* Interactive Booking Module Card */}
        <div className="bg-gradient-to-br from-sky-50/70 via-white to-sky-50/50 rounded-[32px] sm:rounded-[40px] border border-sky-200 shadow-[0_20px_50px_rgba(8,121,207,0.08)] overflow-hidden text-left p-6 sm:p-10 lg:p-12 space-y-8">
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            
            {/* Left: Quick Form Details */}
            <div className="space-y-5">
              <div className="space-y-1">
                <h3 className="font-display font-extrabold text-2xl text-slate-950">
                  Plan Your Consultation
                </h3>
                <p className="text-xs text-slate-500">
                  Select your treatment reason and preferred slot to send via WhatsApp.
                </p>
              </div>

              {/* Patient Name */}
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-700 block">
                  Your Name (Optional)
                </label>
                <input
                  type="text"
                  placeholder="e.g. Rahul Sharma"
                  value={patientName}
                  onChange={(e) => setPatientName(e.target.value)}
                  className="w-full px-4 py-3 rounded-2xl border border-sky-200 text-sm focus:outline-none focus:ring-2 focus:ring-deep-blue bg-white shadow-2xs"
                />
              </div>

              {/* Consultation Reason */}
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-700 block">
                  Treatment / Inquiry Reason
                </label>
                <select
                  value={selectedReason}
                  onChange={(e) => setSelectedReason(e.target.value)}
                  className="w-full px-4 py-3 rounded-2xl border border-sky-200 text-sm focus:outline-none focus:ring-2 focus:ring-deep-blue bg-white shadow-2xs text-slate-900 font-medium"
                >
                  {consultationReasons.map((reason) => (
                    <option key={reason} value={reason}>
                      {reason}
                    </option>
                  ))}
                </select>
              </div>

              {/* Preferred Date */}
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-700 block">
                  Preferred Date (Optional)
                </label>
                <input
                  type="date"
                  value={preferredDate}
                  onChange={(e) => setPreferredDate(e.target.value)}
                  className="w-full px-4 py-3 rounded-2xl border border-sky-200 text-sm focus:outline-none focus:ring-2 focus:ring-deep-blue bg-white shadow-2xs text-slate-900 font-medium"
                >
                </input>
              </div>

              {/* Orange + Emerald WhatsApp Action Button */}
              <button
                onClick={handleCustomWhatsAppBooking}
                className="w-full py-4 px-6 rounded-full bg-vibrant-orange hover:bg-[#E53E04] text-white font-extrabold text-xs sm:text-sm uppercase tracking-wider shadow-[0_10px_30px_rgba(255,75,11,0.35)] flex items-center justify-center gap-2.5 transition-all hover:scale-102 cursor-pointer"
              >
                <MessageCircle className="w-5 h-5 fill-white" />
                <span>Open WhatsApp ({CLINIC_CONFIG.contact.whatsappNumberFormatted})</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>

              <p className="text-[11px] text-slate-400 text-center font-mono">
                You will be redirected to WhatsApp to review and send your message.
              </p>
            </div>

            {/* Right: 3 Simple Steps */}
            <div className="bg-white rounded-3xl border border-sky-100 p-6 sm:p-8 space-y-6 shadow-xs">
              <div className="space-y-1">
                <span className="text-[10px] font-mono uppercase tracking-wider text-deep-blue font-bold block">
                  Direct Clinic Access
                </span>
                <h4 className="font-display font-extrabold text-xl text-slate-950">
                  3 Simple Steps
                </h4>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-3.5">
                  <span className="w-7 h-7 rounded-full bg-sky-100 text-deep-blue font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                    1
                  </span>
                  <div>
                    <p className="text-xs font-bold text-slate-900">Send WhatsApp Message</p>
                    <p className="text-[11px] text-slate-600 leading-relaxed">
                      Tap the button to open our official WhatsApp chat with your inquiry.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <span className="w-7 h-7 rounded-full bg-sky-100 text-deep-blue font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                    2
                  </span>
                  <div>
                    <p className="text-xs font-bold text-slate-900">Confirm Available Slot</p>
                    <p className="text-[11px] text-slate-600 leading-relaxed">
                      Dr. Yadav's team confirms available consultation timings and answers questions.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <span className="w-7 h-7 rounded-full bg-sky-100 text-deep-blue font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                    3
                  </span>
                  <div>
                    <p className="text-xs font-bold text-slate-900">Visit Clinic in DLF Ankur Vihar</p>
                    <p className="text-[11px] text-slate-600 leading-relaxed">
                      Arrive for your unhurried consultation and gentle dental care.
                    </p>
                  </div>
                </div>
              </div>

              {/* Direct Call Alternative */}
              <div className="p-4 rounded-2xl bg-sky-50 border border-sky-100 flex items-center justify-between text-xs text-slate-700">
                <span className="font-medium">Direct Phone Line:</span>
                <a
                  href={`tel:+${CLINIC_CONFIG.contact.whatsappNumber}`}
                  className="font-bold text-deep-blue hover:text-vibrant-orange flex items-center gap-1"
                >
                  <Phone className="w-3.5 h-3.5 text-deep-blue" />
                  <span>{CLINIC_CONFIG.contact.whatsappNumberFormatted}</span>
                </a>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

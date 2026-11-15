import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Phone, MessageCircle, Sparkles, MapPin } from 'lucide-react';
import { CLINIC_CONFIG, getWhatsAppUrl } from '../config/clinicConfig';
import { soundFX } from '../utils/soundEffects';

interface MobileFloatingHUDProps {
  onOpenBooking?: () => void;
}

export const MobileFloatingHUD: React.FC<MobileFloatingHUDProps> = () => {
  const { contact } = CLINIC_CONFIG;

  return (
    <motion.aside
      aria-label="Quick Mobile Actions"
      initial={{ y: 60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: 'spring', damping: 20, stiffness: 260, delay: 0.3 }}
      className="fixed bottom-3 inset-x-3 z-40 sm:hidden pb-[max(env(safe-area-inset-bottom),0.25rem)]"
    >
      <div className="p-2.5 rounded-3xl bg-white/95 border border-sky-200 backdrop-blur-2xl shadow-[0_12px_35px_-4px_rgba(8,121,207,0.18)] space-y-1.5">
        
        {/* Practice Label */}
        <div className="flex items-center justify-between px-2 text-[10px] font-mono text-slate-500">
          <div className="flex items-center gap-1.5 text-deep-blue font-bold">
            <span className="w-1.5 h-1.5 rounded-full bg-bright-cyan animate-pulse" />
            <span>Dr Yadav Dental Care Point</span>
          </div>
          <div className="flex items-center gap-1 text-slate-400">
            <MapPin className="w-2.5 h-2.5 text-deep-blue" />
            <span>DLF Ankur Vihar</span>
          </div>
        </div>

        {/* 2 Primary Mobile Action Buttons */}
        <div className="flex items-center justify-between gap-2">
          
          {/* Direct Phone Call */}
          <motion.a
            whileTap={{ scale: 0.94 }}
            href={`tel:+${contact.whatsappNumber}`}
            onClick={() => soundFX.playClick()}
            className="flex-1 py-3 px-2 rounded-2xl bg-sky-50 hover:bg-sky-100 border border-sky-100 text-slate-800 flex items-center justify-center gap-1.5 transition-colors shadow-2xs cursor-pointer"
          >
            <Phone className="w-3.5 h-3.5 text-deep-blue" />
            <span className="text-xs font-bold tracking-tight">Call Clinic</span>
          </motion.a>

          {/* WhatsApp Direct Appointment in Reference Vibrant Orange */}
          <motion.a
            whileTap={{ scale: 0.94 }}
            href={getWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => soundFX.playClick()}
            className="flex-[1.5] py-3 px-3 rounded-2xl bg-vibrant-orange hover:bg-[#E53E04] text-white font-bold flex items-center justify-center gap-2 shadow-md shadow-orange-600/30 transition-all cursor-pointer uppercase text-xs tracking-wider"
          >
            <MessageCircle className="w-4 h-4 fill-white text-vibrant-orange" />
            <span>WhatsApp Consult</span>
          </motion.a>

        </div>

      </div>
    </motion.aside>
  );
};

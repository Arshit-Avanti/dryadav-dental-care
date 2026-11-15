import React from 'react';
import { MessageCircle, MapPin, Heart, Shield, ArrowUp, ArrowRight } from 'lucide-react';
import { CLINIC_CONFIG, getWhatsAppUrl } from '../config/clinicConfig';
import { TREATMENTS_DATA } from '../data/treatmentsData';
import { soundFX } from '../utils/soundEffects';

interface FooterProps {
  onOpenBooking?: (serviceName?: string) => void;
}

export const Footer: React.FC<FooterProps> = () => {
  const scrollToTop = () => {
    soundFX.playClick();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (id: string) => {
    soundFX.playClick();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="relative bg-[#151B24] text-slate-300 pt-20 pb-28 sm:pb-16 px-4 sm:px-6 lg:px-8 border-t border-slate-800 selection:bg-[#35BDEB]/30 selection:text-white">
      <div className="max-w-7xl mx-auto w-full space-y-16">
        
        {/* Top Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 text-left">
          
          {/* Column 1: Brand & Overview (col-span-4) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-700/80 flex items-center justify-center text-bright-cyan">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-5 h-5 text-bright-cyan"
                >
                  <path d="M12 2C8.5 2 6 4.5 6 8.5C6 13.5 8 18 9.5 21.5C10.2 23 11 23 12 21.5C13 23 13.8 23 14.5 21.5C16 18 18 13.5 18 8.5C18 4.5 15.5 2 12 2Z" />
                </svg>
              </div>
              <div>
                <h3 className="font-display font-bold text-white text-lg">
                  {CLINIC_CONFIG.clinicName}
                </h3>
                <p className="text-[11px] font-mono text-sky-300/80 uppercase tracking-widest">
                  DLF Ankur Vihar, Ghaziabad
                </p>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-sm">
              Providing patient-focused, gentle restorative and preventive dental care. Led by Dr. Jagesh Yadav with a commitment to unhurried consultations and transparent treatment planning.
            </p>

            <div className="pt-2">
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => soundFX.playClick()}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-vibrant-orange hover:bg-[#E53E04] text-white font-bold text-xs uppercase tracking-wider shadow-md shadow-orange-950/40 transition-all cursor-pointer"
              >
                <MessageCircle className="w-4 h-4 fill-white text-vibrant-orange" />
                <span>WhatsApp Appointment</span>
              </a>
            </div>
          </div>

          {/* Column 2: Navigation Links (col-span-2) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-100 font-bold">
              Explore
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={() => scrollToSection('hero')}
                  className="text-slate-400 hover:text-bright-cyan transition-colors cursor-pointer"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('about')}
                  className="text-slate-400 hover:text-bright-cyan transition-colors cursor-pointer"
                >
                  About the Clinic
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('treatments')}
                  className="text-slate-400 hover:text-bright-cyan transition-colors cursor-pointer"
                >
                  Available Treatments
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('doctor')}
                  className="text-slate-400 hover:text-bright-cyan transition-colors cursor-pointer"
                >
                  Dr. Jagesh Yadav
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('gallery')}
                  className="text-slate-400 hover:text-bright-cyan transition-colors cursor-pointer"
                >
                  Clinic Gallery
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('reviews')}
                  className="text-slate-400 hover:text-bright-cyan transition-colors cursor-pointer"
                >
                  Patient Transparency
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="text-slate-400 hover:text-bright-cyan transition-colors cursor-pointer"
                >
                  Location & Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Candidate Services (col-span-3) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-100 font-bold">
              Dental Treatments
            </h4>
            <ul className="space-y-2 text-xs">
              {TREATMENTS_DATA.slice(0, 6).map((t) => (
                <li key={t.id}>
                  <button
                    onClick={() => scrollToSection('treatments')}
                    className="text-slate-400 hover:text-bright-cyan transition-colors text-left cursor-pointer"
                  >
                    {t.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Location & WhatsApp Direct (col-span-3) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-100 font-bold">
              Practice Location
            </h4>
            <div className="space-y-2 text-xs text-slate-400">
              <p className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-bright-cyan mt-0.5 shrink-0" />
                <span>
                  DLF Ankur Vihar, Loni, Ghaziabad, Uttar Pradesh 201102, India
                </span>
              </p>
              <p className="text-[11px] font-mono text-slate-500">
                Landmark: Opposite Sunrise Public School, MM Road
              </p>
            </div>

            <div className="pt-2 space-y-1">
              <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 block font-bold">
                Direct WhatsApp Contact
              </span>
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => soundFX.playClick()}
                className="text-xs font-bold text-bright-cyan hover:text-vibrant-orange block font-mono transition-colors"
              >
                {CLINIC_CONFIG.contact.whatsappNumberFormatted}
              </a>
            </div>
          </div>

        </div>

        {/* Disclaimer on Clinical Directory Listing */}
        <div className="pt-6 border-t border-slate-800 text-[11px] text-slate-400 font-mono leading-relaxed text-left">
          <p>
            *Clinical Disclaimer: Information on this website describes candidate clinical services and qualifications (including BDS degree noted from directory records) subject to ongoing direct confirmation with Dr. Jagesh Yadav. No medical or dental outcome is unconditionally guaranteed. Consult directly with the clinic for specific diagnosis.
          </p>
        </div>

        {/* Bottom Copyright & Agency Credits */}
        <div className="pt-6 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            © {new Date().getFullYear()} {CLINIC_CONFIG.clinicName}. All rights reserved.
          </div>

          <div className="flex items-center gap-4">
            <span className="text-[11px] text-slate-400 font-mono">
              {CLINIC_CONFIG.agencyCredit}
            </span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-xl bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors cursor-pointer flex items-center gap-1.5 text-xs border border-slate-700/60"
              title="Back to top"
            >
              <ArrowUp className="w-3.5 h-3.5" />
              <span>Top</span>
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};

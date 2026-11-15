import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Navigation, Clock, MessageCircle, Phone, ExternalLink } from 'lucide-react';
import { AppleWordReveal } from './animations/AppleWordReveal';
import { TypewriterHeading } from './animations/TypewriterHeading';
import { CLINIC_CONFIG, getWhatsAppUrl } from '../config/clinicConfig';
import { soundFX } from '../utils/soundEffects';

export const LocationContactSection: React.FC = () => {
  const { location, timings, contact } = CLINIC_CONFIG;

  return (
    <section id="contact" className="relative py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-white select-none border-t border-sky-100 scroll-mt-24 sm:scroll-mt-32">
      <div className="max-w-7xl mx-auto w-full space-y-12">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-2">
          <span className="text-xs font-bold uppercase tracking-wider text-vibrant-orange block font-display">
            Visit & Contact
          </span>
          <div className="min-h-[64px] flex items-center justify-center">
            <TypewriterHeading
              text="Clinic Location & Hours"
              as="h2"
              speed={55}
              className="text-4xl sm:text-5xl lg:text-6xl text-slate-950 leading-[1.05]"
            />
          </div>
          <p className="font-avenir-light font-light text-sm sm:text-base text-slate-600 leading-relaxed max-w-md mx-auto">
            DLF Ankur Vihar, Loni, Ghaziabad.
          </p>
        </div>

        {/* Location & Map Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start max-w-6xl mx-auto">
          
          {/* Left Column: Clinic Contact Details (col-span-5) */}
          <div className="lg:col-span-5 space-y-6 text-left">
            
            {/* Physical Location Card */}
            <div className="p-7 rounded-3xl bg-gradient-to-b from-[#F6FBFE] to-white border border-sky-100 shadow-sm space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-2xl bg-sky-100 text-deep-blue flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-display font-extrabold text-lg text-slate-950">
                    Clinic Address
                  </h3>
                  <p className="text-xs text-deep-blue font-bold font-mono">
                    {location.area}, {location.city}
                  </p>
                </div>
              </div>

              <div className="space-y-2 text-xs sm:text-sm text-slate-700">
                <p className="font-medium">
                  {location.fullAddressPlaceholder}
                </p>
                <div className="flex items-center gap-1.5 text-xs text-slate-500">
                  <span className="font-bold text-slate-800">Landmark:</span>
                  <span>{location.landmark}</span>
                </div>
              </div>

              {/* Verified Direction Link */}
              <div className="pt-2">
                <a
                  href={location.googleMapsDirectionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => soundFX.playClick()}
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-slate-950 hover:bg-slate-900 text-white text-xs font-bold uppercase tracking-wider shadow-sm transition-transform hover:scale-102"
                >
                  <Navigation className="w-4 h-4 text-bright-cyan" />
                  <span>Get GPS Directions on Google Maps</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </a>
              </div>
            </div>

            {/* Timings Information Card */}
            <div className="p-7 rounded-3xl bg-gradient-to-b from-[#F6FBFE] to-white border border-sky-100 shadow-sm space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-2xl bg-sky-100 text-deep-blue flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-display font-extrabold text-lg text-slate-950">
                    Consultation Hours
                  </h3>
                  <p className="text-xs text-slate-500 font-mono">
                    Subject to clinic confirmation
                  </p>
                </div>
              </div>

              <div className="space-y-2.5 text-xs text-slate-700">
                {timings.schedule.map((s, idx) => (
                  <div key={idx} className="flex items-center justify-between pb-1.5 border-b border-sky-50 last:border-0 last:pb-0">
                    <span className="font-bold text-slate-800">{s.days}</span>
                    <span className="text-deep-blue font-mono text-[11px] font-medium">{s.hours}</span>
                  </div>
                ))}
              </div>

              <p className="text-[11px] text-slate-400 font-mono italic">
                *Please message us on WhatsApp prior to visiting to confirm slot availability.
              </p>
            </div>

            {/* Direct Connect Quick Box */}
            <div className="p-5 rounded-2xl bg-sky-50 border border-sky-200 flex items-center justify-between gap-4">
              <div className="space-y-0.5">
                <span className="text-xs font-bold text-slate-950 block">Primary Contact</span>
                <span className="text-xs text-deep-blue font-mono font-bold">{contact.whatsappNumberFormatted}</span>
              </div>
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2.5 rounded-full bg-vibrant-orange hover:bg-[#E53E04] text-white font-bold text-xs uppercase tracking-wider flex items-center gap-1.5 shadow-sm"
              >
                <MessageCircle className="w-3.5 h-3.5 fill-white" />
                <span>WhatsApp</span>
              </a>
            </div>

          </div>

          {/* Right Column: Google Maps Link / Embed Placeholder Card (col-span-7) */}
          <div className="lg:col-span-7 h-full flex flex-col justify-between space-y-4">
            
            <div className="w-full aspect-[4/3] sm:aspect-[16/11] rounded-[32px] sm:rounded-[40px] bg-gradient-to-br from-sky-50 via-white to-sky-100/50 border border-sky-200 overflow-hidden shadow-sm relative flex flex-col items-center justify-center p-8 text-center space-y-4">
              <div className="w-16 h-16 rounded-2xl bg-white border border-sky-200 text-deep-blue flex items-center justify-center shadow-xs">
                <MapPin className="w-8 h-8 text-deep-blue" />
              </div>

              <div className="space-y-2 max-w-md">
                <h3 className="font-display font-extrabold text-2xl text-slate-950">
                  Google Maps Location
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Interactive location coordinates for Dr Yadav Dental Care Point. Once the exact iframe coordinates are verified, the live map will render directly in this container.
                </p>
                <div className="p-3 rounded-2xl bg-white border border-sky-100 text-[11px] font-mono text-slate-700 font-medium">
                  <span>DLF Ankur Vihar, Loni, Ghaziabad, Uttar Pradesh, India</span>
                </div>
              </div>

              {/* External Maps Action */}
              <div className="pt-2">
                <a
                  href={location.googleMapsDirectionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3.5 rounded-full bg-slate-950 hover:bg-slate-900 text-white font-bold text-xs uppercase tracking-wider shadow-sm flex items-center gap-2 transition-transform hover:scale-102"
                >
                  <Navigation className="w-4 h-4 text-bright-cyan" />
                  <span>Open in Google Maps Application</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </a>
              </div>

              <div className="absolute bottom-3 right-5 text-[10px] font-mono text-slate-400 font-bold">
                Region: Ghaziabad (UP)
              </div>
            </div>

            {/* Landmark Clarity Note */}
            <div className="p-4 rounded-2xl bg-sky-50/80 border border-sky-200 text-xs text-slate-600 text-left">
              <strong>Locality Note:</strong> The clinic is situated on MM Road, opposite Sunrise Public School, easily accessible from Loni Border, Sonia Vihar, and Bhajanpura corridors.
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

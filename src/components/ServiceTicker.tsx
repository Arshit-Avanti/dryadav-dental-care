import React from 'react';

const TICKER_SERVICES = [
  'Root Canal Treatment',
  'Tooth-Colored Fillings',
  'Dental Crowns & Bridges',
  'Gentle Extractions',
  'Scaling & Polishing',
  'Wisdom Tooth Care',
  'Family Dental Care',
  'Preventive Dentistry',
  'Dr Yadav Dental Care Point',
];

export const ServiceTicker: React.FC = () => {
  return (
    <div
      aria-label="Dental Services Ticker"
      className="w-full bg-[#B9EFFF] py-4 sm:py-5 overflow-hidden border-y border-sky-200/80 select-none relative"
    >
      <div className="flex w-max animate-marquee pause-hover items-center">
        {/* First track */}
        <div className="flex items-center gap-6 sm:gap-10 shrink-0 pr-6 sm:pr-10">
          {TICKER_SERVICES.map((service, index) => (
            <div key={`track1-${index}`} className="flex items-center gap-6 sm:gap-10">
              <span className="font-caslon-italic italic text-xl sm:text-2xl md:text-3xl text-slate-900 tracking-wide font-normal">
                {service}
              </span>
              <span className="text-deep-blue text-xl sm:text-2xl font-light">
                +
              </span>
            </div>
          ))}
        </div>

        {/* Second identical track for seamless infinite marquee loop */}
        <div className="flex items-center gap-6 sm:gap-10 shrink-0 pr-6 sm:pr-10" aria-hidden="true">
          {TICKER_SERVICES.map((service, index) => (
            <div key={`track2-${index}`} className="flex items-center gap-6 sm:gap-10">
              <span className="font-caslon-italic italic text-xl sm:text-2xl md:text-3xl text-slate-900 tracking-wide font-normal">
                {service}
              </span>
              <span className="text-deep-blue text-xl sm:text-2xl font-light">
                +
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

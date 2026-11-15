import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Shield, Sparkles, Check, Cpu, Layers } from 'lucide-react';
import { soundFX } from '../utils/soundEffects';

interface PartSpec {
  id: 'all' | 'crown' | 'abutment' | 'fixture';
  title: string;
  subtitle: string;
  material: string;
  spec: string;
  description: string;
  color: string;
}

const PARTS: PartSpec[] = [
  {
    id: 'crown',
    title: 'Ceramic Enamel Crown',
    subtitle: 'Aesthetic Restoration',
    material: 'Monolithic Zirconia / E-max Ceramic',
    spec: 'VITA 3D-Master Shade Match',
    description: 'High-translucency ceramic mimicking natural dental enamel with superior fracture toughness and zero gingival staining.',
    color: '#35BDEB',
  },
  {
    id: 'abutment',
    title: 'Precision CNC Abutment',
    subtitle: 'Internal Hex Connector',
    material: 'Medical Grade 5 Titanium (Ti-6Al-4V)',
    spec: '35 Ncm Controlled Torque',
    description: 'Precision engineered anatomical collar preserving the natural biological width and eliminating micro-gap bacterial leakage.',
    color: '#0879CF',
  },
  {
    id: 'fixture',
    title: 'Biocompatible Fixture Root',
    subtitle: 'Osteointegrated Implant Screw',
    material: 'CP Grade 4 Titanium (99.2% Pure)',
    spec: 'SLA Sandblasted & Acid-Etched Surface',
    description: 'Micro-threaded helical architecture promoting rapid bone apposition and long-term alveolar bone height preservation.',
    color: '#10B981',
  },
];

export const AppleImplantSchematic: React.FC = () => {
  const [activePart, setActivePart] = useState<'all' | 'crown' | 'abutment' | 'fixture'>('all');

  const selectedSpec = activePart === 'all' ? null : PARTS.find(p => p.id === activePart);

  return (
    <div className="w-full max-w-4xl mx-auto flex flex-col items-center select-none py-6">
      
      {/* 1. Apple-Style Pill Segmented Control */}
      <div className="flex items-center gap-1.5 p-1 rounded-full bg-slate-100 border border-slate-200/80 mb-8 shadow-inner">
        <button
          onClick={() => {
            soundFX.playClick();
            setActivePart('all');
          }}
          className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
            activePart === 'all'
              ? 'bg-slate-950 text-white shadow-sm'
              : 'text-slate-600 hover:text-slate-900'
          }`}
        >
          Exploded Overview
        </button>
        {PARTS.map(part => (
          <button
            key={part.id}
            onClick={() => {
              soundFX.playClick();
              setActivePart(part.id);
            }}
            className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
              activePart === part.id
                ? 'bg-white text-slate-950 shadow-sm border border-slate-200'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            {part.title.split(' ')[0]}
          </button>
        ))}
      </div>

      {/* 2. Technical Blueprint Diagram (100% Vector SVG) */}
      <div className="relative w-full max-w-[580px] h-[440px] sm:h-[480px] flex items-center justify-center">
        
        {/* Ambient Precision Radial Glow */}
        <div className="absolute inset-0 bg-radial from-sky-200/40 via-transparent to-transparent rounded-full blur-2xl pointer-events-none" />

        <svg
          viewBox="0 0 500 500"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full drop-shadow-[0_15px_30px_rgba(8,121,207,0.12)]"
        >
          <defs>
            <linearGradient id="crownGrad" x1="250" y1="50" x2="250" y2="170" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#FFFFFF" />
              <stop offset="70%" stopColor="#F0F8FF" />
              <stop offset="100%" stopColor="#D9EEF9" />
            </linearGradient>

            <linearGradient id="abutmentGrad" x1="250" y1="190" x2="250" y2="280" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#E2E8F0" />
              <stop offset="50%" stopColor="#94A3B8" />
              <stop offset="100%" stopColor="#64748B" />
            </linearGradient>

            <linearGradient id="titaniumScrewGrad" x1="250" y1="300" x2="250" y2="460" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#CBD5E1" />
              <stop offset="50%" stopColor="#64748B" />
              <stop offset="100%" stopColor="#334155" />
            </linearGradient>
          </defs>

          {/* Central Alignment Axis Line */}
          <line
            x1="250"
            y1="40"
            x2="250"
            y2="470"
            stroke="#35BDEB"
            strokeWidth="1.5"
            strokeDasharray="4 4"
            opacity="0.4"
          />

          {/* ============================================================== */}
          {/* PART 1: CROWN (Y: 50 -> 160)                                   */}
          {/* ============================================================== */}
          <g
            onClick={() => setActivePart('crown')}
            className="cursor-pointer transition-transform duration-300 hover:scale-[1.02]"
            opacity={activePart === 'all' || activePart === 'crown' ? 1 : 0.25}
          >
            {/* Crown Main Body */}
            <path
              d="
                M 190 75
                C 190 55 220 50 250 50
                C 280 50 310 55 310 75
                C 318 105 312 145 290 162
                C 275 170 225 170 210 162
                C 188 145 182 105 190 75
                Z
              "
              fill="url(#crownGrad)"
              stroke={activePart === 'crown' ? '#35BDEB' : '#BFDBFE'}
              strokeWidth={activePart === 'crown' ? 3.5 : 2}
            />

            {/* Occlusal Cusp Contours */}
            <path d="M 220 62 C 235 70 265 70 280 62" stroke="#BAE6FD" strokeWidth="2" strokeLinecap="round" />
            <path d="M 250 70 C 250 85 248 100 245 115" stroke="#BAE6FD" strokeWidth="2" strokeLinecap="round" />

            {/* Specular Highlight Sheen */}
            <path
              d="M 205 75 C 200 95 198 125 204 140 C 206 142 210 140 210 135 C 205 120 206 95 212 80 C 213 74 207 72 205 75 Z"
              fill="#FFFFFF"
              opacity="0.8"
            />
          </g>

          {/* Crown Connection Guide Callout */}
          <line x1="315" y1="110" x2="385" y2="110" stroke="#35BDEB" strokeWidth="1.2" opacity="0.6" />
          <circle cx="385" cy="110" r="3" fill="#35BDEB" />
          <text x="395" y="114" fill="#0879CF" fontSize="11" fontFamily="Outfit, sans-serif" fontWeight="700">
            01. CERAMIC CROWN
          </text>

          {/* ============================================================== */}
          {/* PART 2: ABUTMENT (Y: 190 -> 275)                               */}
          {/* ============================================================== */}
          <g
            onClick={() => setActivePart('abutment')}
            className="cursor-pointer transition-transform duration-300 hover:scale-[1.02]"
            opacity={activePart === 'all' || activePart === 'abutment' ? 1 : 0.25}
          >
            {/* Abutment Collar */}
            <path
              d="
                M 225 195
                L 275 195
                L 268 230
                L 260 255
                L 240 255
                L 232 230
                Z
              "
              fill="url(#abutmentGrad)"
              stroke={activePart === 'abutment' ? '#0879CF' : '#94A3B8'}
              strokeWidth={activePart === 'abutment' ? 3.5 : 2}
            />

            {/* Internal Hex Drive */}
            <polygon
              points="245,210 255,210 260,218 255,226 245,226 240,218"
              fill="#475569"
              stroke="#E2E8F0"
              strokeWidth="1"
            />
          </g>

          <line x1="185" y1="225" x2="115" y2="225" stroke="#0879CF" strokeWidth="1.2" opacity="0.6" />
          <circle cx="115" cy="225" r="3" fill="#0879CF" />
          <text x="105" y="229" fill="#0879CF" fontSize="11" fontFamily="Outfit, sans-serif" fontWeight="700" textAnchor="end">
            02. CNC ABUTMENT
          </text>

          {/* ============================================================== */}
          {/* PART 3: TITANIUM SCREW / FIXTURE ROOT (Y: 295 -> 460)           */}
          {/* ============================================================== */}
          <g
            onClick={() => setActivePart('fixture')}
            className="cursor-pointer transition-transform duration-300 hover:scale-[1.02]"
            opacity={activePart === 'all' || activePart === 'fixture' ? 1 : 0.25}
          >
            {/* Fixture Tapered Body */}
            <path
              d="
                M 235 295
                L 265 295
                L 260 425
                C 257 445 254 455 250 455
                C 246 455 243 445 240 425
                Z
              "
              fill="url(#titaniumScrewGrad)"
              stroke={activePart === 'fixture' ? '#10B981' : '#64748B'}
              strokeWidth={activePart === 'fixture' ? 3.5 : 2}
            />

            {/* Precision Micro-Threads */}
            {[315, 332, 349, 366, 383, 400, 417].map((ty, idx) => {
              const widthMod = 28 - idx * 1.8;
              return (
                <path
                  key={ty}
                  d={`M ${250 - widthMod} ${ty} L ${250 + widthMod} ${ty - 4}`}
                  stroke="#E2E8F0"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  opacity="0.9"
                />
              );
            })}
          </g>

          <line x1="315" y1="375" x2="385" y2="375" stroke="#10B981" strokeWidth="1.2" opacity="0.6" />
          <circle cx="385" cy="375" r="3" fill="#10B981" />
          <text x="395" y="379" fill="#10B981" fontSize="11" fontFamily="Outfit, sans-serif" fontWeight="700">
            03. TITANIUM ROOT
          </text>
        </svg>

      </div>

      {/* 3. Detailed Technical Spec Card (Appears on click / selection) */}
      <div className="w-full max-w-lg mt-4 min-h-[120px]">
        <AnimatePresence mode="wait">
          {selectedSpec ? (
            <motion.div
              key={selectedSpec.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25 }}
              className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-2 text-left"
            >
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-wider font-bold" style={{ color: selectedSpec.color }}>
                    {selectedSpec.subtitle}
                  </span>
                  <h4 className="font-display font-extrabold text-base text-slate-900">
                    {selectedSpec.title}
                  </h4>
                </div>
                <span className="px-2.5 py-1 rounded-full text-[11px] font-mono font-bold bg-slate-50 border border-slate-200 text-slate-700">
                  {selectedSpec.spec}
                </span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed font-normal">
                {selectedSpec.description}
              </p>
              <div className="text-[11px] font-mono text-slate-400 pt-1 border-t border-slate-100 flex items-center justify-between">
                <span>Material: <strong>{selectedSpec.material}</strong></span>
                <span className="text-emerald-700 font-semibold flex items-center gap-1">
                  <Check className="w-3.5 h-3.5" /> 100% Bio-Integrated
                </span>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="all-overview"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="p-4 rounded-2xl bg-white/70 border border-slate-200/80 text-center text-xs text-slate-500 font-medium"
            >
              Tap on <strong>Crown</strong>, <strong>Abutment</strong>, or <strong>Titanium Root</strong> above to inspect micro-engineered clinical specifications.
            </motion.div>
          )}
        </AnimatePresence>
      </div>

    </div>
  );
};

export default AppleImplantSchematic;

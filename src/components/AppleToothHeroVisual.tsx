import React, { useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

export const AppleToothHeroVisual: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);

  // Apple-style interactive tilt physics on mouse move
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 220 };
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [6, -6]), springConfig);
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-6, 6]), springConfig);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
    setIsHovered(false);
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      className="relative w-full max-w-[500px] h-[390px] sm:h-[460px] lg:h-[530px] flex items-center justify-center select-none perspective-[1200px]"
    >
      {/* 1. Ambient Apple Studio Backlighting */}
      <div className="absolute inset-0 bg-radial from-[#35BDEB]/35 via-[#0879CF]/15 to-transparent rounded-full blur-3xl pointer-events-none scale-110" />

      {/* 2. Interactive Floating Stage */}
      <motion.div
        style={{ rotateX, rotateY }}
        animate={{
          y: isHovered ? -4 : [-5, 5, -5],
        }}
        transition={{
          y: {
            duration: 4.5,
            repeat: Infinity,
            ease: 'easeInOut',
          },
        }}
        className="relative w-full h-full flex items-center justify-center transform-gpu"
      >
        <svg
          viewBox="0 0 500 520"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full drop-shadow-[0_25px_45px_rgba(8,121,207,0.20)]"
        >
          <defs>
            {/* Tooth Enamel Gloss & Highlights */}
            <linearGradient id="enamelBody" x1="250" y1="80" x2="250" y2="455" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#FFFFFF" />
              <stop offset="45%" stopColor="#FAFCFE" />
              <stop offset="80%" stopColor="#EDF7FC" />
              <stop offset="100%" stopColor="#DBEFF8" />
            </linearGradient>

            <linearGradient id="enamelSheen" x1="170" y1="100" x2="270" y2="300" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.95" />
              <stop offset="50%" stopColor="#FFFFFF" stopOpacity="0.35" />
              <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
            </linearGradient>

            <radialGradient id="occlusalGlow" cx="0.5" cy="0.25" r="0.5">
              <stop offset="0%" stopColor="#FFFFFF" stopOpacity="1" />
              <stop offset="60%" stopColor="#F4FAFD" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#D8EEF8" stopOpacity="0.6" />
            </radialGradient>

            {/* Electric Blue Liquid Splash Gradients */}
            <linearGradient id="splashDeepBlue" x1="120" y1="100" x2="380" y2="440" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#35BDEB" />
              <stop offset="45%" stopColor="#0879CF" />
              <stop offset="100%" stopColor="#024D8A" />
            </linearGradient>

            <linearGradient id="splashCyanHighlight" x1="80" y1="120" x2="420" y2="300" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#B9EFFF" />
              <stop offset="50%" stopColor="#35BDEB" />
              <stop offset="100%" stopColor="#0879CF" stopOpacity="0.75" />
            </linearGradient>

            <radialGradient id="dropletGlow" cx="0.3" cy="0.3" r="0.7">
              <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.95" />
              <stop offset="40%" stopColor="#35BDEB" stopOpacity="0.85" />
              <stop offset="100%" stopColor="#0879CF" stopOpacity="0.95" />
            </radialGradient>

            {/* Filter for Porcelain Soft Shadow */}
            <filter id="softShadow" x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow dx="0" dy="16" stdDeviation="15" floodColor="#0879CF" floodOpacity="0.18" />
            </filter>
          </defs>

          {/* ================================================================= */}
          {/* BACK LAYER: DYNAMIC BLUE FLUID SPLASH WINGS (Exact Reference Flow) */}
          {/* ================================================================= */}
          <g className="splash-wings">
            {/* Left Giant Splash Wing */}
            <path
              d="M 215 290 C 145 270 85 240 55 170 C 35 125 45 70 80 50 C 105 35 128 70 138 120 C 148 170 185 245 220 268 Z"
              fill="url(#splashDeepBlue)"
              opacity="0.95"
            />
            {/* Left Secondary Upward Jet Tendrils */}
            <path
              d="M 175 225 C 135 180 100 120 104 70 C 106 55 120 54 128 68 C 142 95 160 160 188 210 Z"
              fill="url(#splashCyanHighlight)"
            />
            <path
              d="M 198 250 C 160 210 125 155 135 110 C 138 95 150 96 155 112 C 166 148 185 212 210 240 Z"
              fill="url(#splashDeepBlue)"
            />
            <path
              d="M 145 130 C 120 90 95 55 85 35 C 80 25 90 20 98 28 C 115 45 135 88 155 125 Z"
              fill="url(#splashCyanHighlight)"
            />

            {/* Right Giant Splash Wing */}
            <path
              d="M 285 290 C 355 270 415 240 445 170 C 465 125 455 70 420 50 C 395 35 372 70 362 120 C 352 170 315 245 280 268 Z"
              fill="url(#splashDeepBlue)"
              opacity="0.95"
            />
            {/* Right Secondary Upward Jet Tendrils */}
            <path
              d="M 325 225 C 365 180 400 120 396 70 C 394 55 380 54 372 68 C 358 95 340 160 312 210 Z"
              fill="url(#splashCyanHighlight)"
            />
            <path
              d="M 302 250 C 340 210 375 155 365 110 C 362 95 350 96 345 112 C 334 148 315 212 290 240 Z"
              fill="url(#splashDeepBlue)"
            />
            <path
              d="M 355 130 C 380 90 405 55 415 35 C 420 25 410 20 402 28 C 385 45 365 88 345 125 Z"
              fill="url(#splashCyanHighlight)"
            />

            {/* Central Fluid Splash Swirl hugging the cervix */}
            <path
              d="M 155 265 C 135 315 175 368 250 372 C 325 368 365 315 345 265 C 328 325 296 348 250 350 C 204 348 172 325 155 265 Z"
              fill="url(#splashDeepBlue)"
            />
          </g>

          {/* ================================================================= */}
          {/* CENTER LAYER: ULTRA-GLOSSY WHITE PORCELAIN MOLAR TOOTH             */}
          {/* ================================================================= */}
          <g filter="url(#softShadow)">
            {/* Main Anatomical Molar Crown + Dual Roots */}
            <path
              d="
                M 170 148
                C 165 118 185 96 215 96
                C 230 96 242 108 250 114
                C 258 108 270 96 285 96
                C 315 96 335 118 330 148
                C 340 192 334 238 318 272
                C 308 296 300 328 295 368
                C 290 405 284 442 274 458
                C 268 466 258 466 254 458
                C 246 436 248 382 250 348
                C 252 382 254 436 246 458
                C 242 466 232 466 226 458
                C 216 442 210 405 205 368
                C 200 328 192 296 182 272
                C 166 238 160 192 170 148
                Z
              "
              fill="url(#enamelBody)"
              stroke="#D2ECF8"
              strokeWidth="2.5"
            />

            {/* Crown Occlusal Surface Shading & 4 Rounded Cusps */}
            <path
              d="M 215 104 C 230 116 244 122 250 122 C 256 122 270 116 285 104"
              stroke="#C3E4F4"
              strokeWidth="3.5"
              strokeLinecap="round"
              fill="none"
              opacity="0.85"
            />
            <path
              d="M 250 122 C 250 144 247 166 242 188"
              stroke="#D2EBF8"
              strokeWidth="2.5"
              strokeLinecap="round"
              fill="none"
              opacity="0.7"
            />

            {/* Specular Liquid Highlights (Apple-Grade Ceramic Sheen) */}
            {/* Top-Left Cusp Specular Dome */}
            <ellipse cx="215" cy="115" rx="20" ry="10" fill="#FFFFFF" opacity="0.9" transform="rotate(-12 215 115)" />
            {/* Top-Right Cusp Specular Dome */}
            <ellipse cx="285" cy="115" rx="18" ry="9" fill="#FFFFFF" opacity="0.8" transform="rotate(12 285 115)" />

            {/* Left Vertical Enamel Barrel Highlight */}
            <path
              d="
                M 188 140
                C 182 165 180 205 186 240
                C 188 248 196 246 196 238
                C 190 205 192 170 198 148
                C 200 138 190 134 188 140
                Z
              "
              fill="url(#enamelSheen)"
            />

            {/* Right Subtle Rim Highlight */}
            <path
              d="
                M 312 140
                C 318 165 320 205 314 240
                C 312 248 304 246 304 238
                C 310 205 308 170 302 148
                C 300 138 310 134 312 140
                Z
              "
              fill="#FFFFFF"
              opacity="0.5"
            />

            {/* Anatomical Bifurcation Cleft Line */}
            <path
              d="M 250 342 C 252 368 253 400 250 430"
              stroke="#B5DEEF"
              strokeWidth="3.5"
              strokeLinecap="round"
              fill="none"
              opacity="0.75"
            />
          </g>

          {/* ================================================================= */}
          {/* FOREGROUND LAYER: AIRBORNE LIQUID DROPLETS (Floating in 3D Space) */}
          {/* ================================================================= */}
          <g className="floating-droplets">
            {/* Left Flurry */}
            <circle cx="65" cy="170" r="14" fill="url(#dropletGlow)" />
            <circle cx="105" cy="85" r="10" fill="url(#dropletGlow)" />
            <circle cx="135" cy="50" r="8" fill="url(#dropletGlow)" />
            <circle cx="50" cy="118" r="11" fill="url(#dropletGlow)" />
            <circle cx="90" cy="235" r="13" fill="url(#dropletGlow)" />
            <circle cx="150" cy="285" r="8" fill="url(#dropletGlow)" />

            {/* Right Flurry */}
            <circle cx="435" cy="170" r="14" fill="url(#dropletGlow)" />
            <circle cx="395" cy="85" r="10" fill="url(#dropletGlow)" />
            <circle cx="365" cy="50" r="8" fill="url(#dropletGlow)" />
            <circle cx="450" cy="118" r="11" fill="url(#dropletGlow)" />
            <circle cx="410" cy="235" r="13" fill="url(#dropletGlow)" />
            <circle cx="350" cy="285" r="8" fill="url(#dropletGlow)" />

            {/* Apex Air Droplets */}
            <circle cx="210" cy="38" r="7" fill="url(#dropletGlow)" />
            <circle cx="290" cy="38" r="7" fill="url(#dropletGlow)" />
            <circle cx="250" cy="22" r="8" fill="url(#dropletGlow)" />
          </g>
        </svg>
      </motion.div>
    </div>
  );
};

export default AppleToothHeroVisual;

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight, MessageCircle, MapPin, Sparkles } from 'lucide-react';
import { CLINIC_CONFIG, getWhatsAppUrl, WHATSAPP_NUMBER } from '../config/clinicConfig';
import { soundFX } from '../utils/soundEffects';

interface NavbarProps {
  onOpenBookingModal?: () => void;
  onOpenBooking?: () => void;
}

interface NavItem {
  label: string;
  href: string;
  sectionId: string;
}

const NAV_LINKS: NavItem[] = [
  { label: 'HOME', href: '#hero', sectionId: 'hero' },
  { label: 'ABOUT', href: '#about', sectionId: 'about' },
  { label: 'OUR TREATMENTS', href: '#treatments', sectionId: 'treatments' },
  { label: 'OUR DOCTOR', href: '#doctor', sectionId: 'doctor' },
  { label: 'GALLERY', href: '#gallery', sectionId: 'gallery' },
  { label: 'CONTACT US', href: '#contact', sectionId: 'contact' },
];

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('hero');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const scrollPosition = window.scrollY + 220;
      for (let i = NAV_LINKS.length - 1; i >= 0; i--) {
        const item = NAV_LINKS[i];
        const el = document.getElementById(item.sectionId);
        if (el && scrollPosition >= el.offsetTop) {
          setActiveSection(item.sectionId);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    soundFX.playClick();
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-[0_4px_20px_-4px_rgba(15,23,42,0.06)] py-3 border-b border-sky-100'
          : 'bg-white py-4 sm:py-5 border-b border-slate-100/80'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">
          
          {/* Clinic Brand & Wordmark (Matching Reference Minimalist DENTA CARE Style) */}
          <a
            href="#hero"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('#hero');
            }}
            className="flex items-center gap-2.5 group focus:outline-none"
          >
            <div className="flex items-center gap-2">
              <span className="font-extrabold text-slate-950 text-lg sm:text-xl tracking-tight uppercase">
                DR YADAV
              </span>
              <span className="font-light text-deep-blue text-lg sm:text-xl tracking-tight uppercase">
                DENTAL
              </span>
            </div>
            <span className="hidden md:inline-block text-[9px] font-mono tracking-widest uppercase text-slate-400 bg-sky-50 px-2 py-0.5 rounded border border-sky-200/60">
              Care Point
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <nav
            aria-label="Main Navigation"
            className="hidden lg:flex items-center gap-6 xl:gap-8"
          >
            {NAV_LINKS.map((link) => {
              const isActive = activeSection === link.sectionId;
              return (
                <button
                  key={link.sectionId}
                  onClick={() => handleNavClick(link.href)}
                  className={`text-[11px] xl:text-xs font-bold tracking-wider transition-colors relative py-1 cursor-pointer ${
                    isActive
                      ? 'text-vibrant-orange font-extrabold'
                      : 'text-slate-600 hover:text-slate-950'
                  }`}
                >
                  <span>{link.label}</span>
                  {isActive && (
                    <motion.span
                      layoutId="navDot"
                      className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-vibrant-orange"
                    />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Right Action Hub: Orange Pill Appointment CTA (Matching Reference Button) */}
          <div className="flex items-center gap-3">
            
            {/* Primary Orange CTA */}
            <button
              onClick={() => {
                soundFX.playClick();
                if (onOpenBooking) onOpenBooking();
              }}
              className="inline-flex items-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 rounded-full bg-vibrant-orange hover:bg-[#E53E04] text-white font-bold text-xs uppercase tracking-wider shadow-[0_4px_16px_rgba(255,75,11,0.28)] transition-all hover:scale-102 hover:shadow-[0_6px_22px_rgba(255,75,11,0.36)] cursor-pointer"
            >
              <span>BOOK APPOINTMENT</span>
              <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
            </button>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => {
                soundFX.playClick();
                setIsMobileMenuOpen(!isMobileMenuOpen);
              }}
              className="w-10 h-10 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-800 flex lg:hidden items-center justify-center transition-colors cursor-pointer"
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden bg-white/98 backdrop-blur-2xl border-b border-sky-100 shadow-xl overflow-hidden"
          >
            <div className="max-w-7xl mx-auto px-4 py-5 space-y-3">
              <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                <div className="flex items-center gap-2 text-xs text-slate-600">
                  <MapPin className="w-3.5 h-3.5 text-deep-blue" />
                  <span>DLF Ankur Vihar, Loni, Ghaziabad</span>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-1">
                {NAV_LINKS.map((link) => (
                  <button
                    key={link.sectionId}
                    onClick={() => handleNavClick(link.href)}
                    className="flex items-center justify-between py-2.5 px-3 rounded-xl hover:bg-sky-50 text-left text-xs font-bold tracking-wider text-slate-800 hover:text-vibrant-orange transition-colors cursor-pointer"
                  >
                    <span>{link.label}</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-slate-400" />
                  </button>
                ))}
              </div>

              <div className="pt-3 border-t border-slate-100 flex flex-col gap-2">
                <a
                  href={getWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 px-4 rounded-full bg-emerald-600 text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-sm"
                >
                  <MessageCircle className="w-4 h-4 fill-white" />
                  <span>WhatsApp Direct Consult</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

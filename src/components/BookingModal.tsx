import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';
import {
  X,
  Sparkles,
  User,
  Phone,
  FileText,
  CheckCircle2,
  MessageSquare,
  ShieldCheck,
  ArrowRight,
  ChevronLeft,
  Calendar,
  Clock,
  Zap,
  Copy,
  Check,
  AlertCircle
} from 'lucide-react';
import { soundFX } from '../utils/soundEffects';
import { CLINIC_CONFIG, getWhatsAppUrl, WHATSAPP_NUMBER } from '../config/clinicConfig';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialService?: string;
}

const SERVICES_LIST = [
  'Root Canal Treatment (RCT)',
  'Tooth-Colored Dental Fillings',
  'Gentle Tooth Extraction',
  'Wisdom Tooth Care & Extraction',
  'Surgical Extraction & Socket Care',
  'Scaling & Ultrasonic Polishing',
  'Dental Crowns & Fixed Bridges',
  'Impacted Tooth Consultation',
  'General Dental Checkup & Consultation',
];

const TIME_SLOTS = [
  { id: '10:00 AM – 11:30 AM', period: 'Morning' },
  { id: '11:30 AM – 01:00 PM', period: 'Morning' },
  { id: '01:00 PM – 02:30 PM', period: 'Afternoon' },
  { id: '05:00 PM – 06:30 PM', period: 'Evening' },
  { id: '06:30 PM – 08:00 PM', period: 'Prime Evening' },
  { id: '08:00 PM – 09:00 PM', period: 'Night' },
];

const URGENCY_OPTIONS = [
  { id: 'urgent', label: 'Urgent / Pain Relief', desc: 'Immediate slot needed', icon: Zap, color: 'text-amber-600 bg-amber-50 border-amber-300' },
  { id: 'routine', label: 'Routine Visit / Checkup', desc: 'Standard appointment', icon: Calendar, color: 'text-cyan-700 bg-cyan-50 border-cyan-300' },
  { id: 'aesthetic', label: 'Smile / Aesthetic Care', desc: 'Planned cosmetic procedure', icon: Sparkles, color: 'text-royal-700 bg-royal-50 border-royal-300' },
];

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  initialService,
}) => {
  const [step, setStep] = useState<1 | 2>(1);
  const [formData, setFormData] = useState({
    service: initialService || SERVICES_LIST[0],
    date: new Date().toISOString().split('T')[0],
    timeSlot: TIME_SLOTS[0].id,
    urgency: 'routine',
    name: '',
    phone: '',
    notes: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [copiedSummary, setCopiedSummary] = useState(false);
  const [validationError, setValidationError] = useState<string | null>(null);

  // Update initial service when opened with a specific service
  useEffect(() => {
    if (initialService) {
      setFormData((prev) => ({ ...prev, service: initialService }));
    }
  }, [initialService]);

  // Handle ESC key to close modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        handleReset();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  const triggerConfetti = () => {
    soundFX.playChime();
    confetti({
      particleCount: 100,
      spread: 80,
      origin: { y: 0.6 },
      colors: ['#06B6D4', '#2563EB', '#10B981', '#F59E0B'],
    });
  };

  const handleNextStep = (e: React.FormEvent) => {
    e.preventDefault();
    setValidationError(null);

    if (step === 1) {
      soundFX.playClick();
      setStep(2);
    } else if (step === 2) {
      if (!formData.name.trim()) {
        setValidationError('Please enter your full name.');
        return;
      }
      const cleanPhone = formData.phone.replace(/[^0-9+]/g, '');
      if (!cleanPhone || cleanPhone.length < 10) {
        setValidationError('Please enter a valid 10-digit mobile / WhatsApp number.');
        return;
      }

      soundFX.playClick();
      setIsSubmitted(true);
      triggerConfetti();
    }
  };

  const handleReset = () => {
    setStep(1);
    setIsSubmitted(false);
    setValidationError(null);
    onClose();
  };

  const getUrgencyLabel = () => {
    const found = URGENCY_OPTIONS.find((u) => u.id === formData.urgency);
    return found ? found.label : 'Routine Consultation';
  };

  const getFormattedDateDisplay = (dateString: string) => {
    try {
      const d = new Date(dateString);
      return d.toLocaleDateString('en-US', {
        weekday: 'short',
        month: 'short',
        day: 'numeric',
        year: 'numeric',
      });
    } catch {
      return dateString;
    }
  };

  const getWhatsAppBookingLink = () => {
    const message =
      `🦷 *APPOINTMENT BOOKING REQUEST*\n` +
      `━━━━━━━━━━━━━━━━━━━━━━━━━\n` +
      `👤 *Patient Name:* ${formData.name}\n` +
      `📞 *Mobile:* ${formData.phone}\n` +
      `🏥 *Clinic:* Dr. Yadav Dental Care Point (DLF Ankur Vihar)\n` +
      `🦷 *Procedure:* ${formData.service}\n` +
      `📅 *Preferred Date:* ${getFormattedDateDisplay(formData.date)}\n` +
      `⏰ *Preferred Time:* ${formData.timeSlot}\n` +
      `⚡ *Type:* ${getUrgencyLabel()}\n` +
      (formData.notes ? `📝 *Symptoms/Notes:* ${formData.notes}\n` : '') +
      `━━━━━━━━━━━━━━━━━━━━━━━━━\n` +
      `Kindly confirm my appointment slot. Thank you!`;

    return getWhatsAppUrl(message);
  };

  const handleCopySummary = () => {
    soundFX.playClick();
    const summaryText =
      `Appointment Request for Dr. Yadav Dental Care Point\n` +
      `Patient: ${formData.name} (${formData.phone})\n` +
      `Procedure: ${formData.service}\n` +
      `Date: ${getFormattedDateDisplay(formData.date)} at ${formData.timeSlot}\n` +
      `Address: Opposite Sunrise Public School, 18 MM Road, DLF Ankur Vihar, Ghaziabad.`;
    navigator.clipboard.writeText(summaryText);
    setCopiedSummary(true);
    setTimeout(() => setCopiedSummary(false), 2500);
  };

  const setDatePreset = (daysFromToday: number) => {
    soundFX.playClick();
    const d = new Date();
    d.setDate(d.getDate() + daysFromToday);
    setFormData({ ...formData, date: d.toISOString().split('T')[0] });
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Frosted Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={handleReset}
          className="fixed inset-0 bg-slate-900/60 backdrop-blur-md transition-opacity"
        />

        {/* Modal Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: 'spring', damping: 26, stiffness: 320 }}
          className="relative w-full max-w-lg bg-white p-6 sm:p-8 rounded-3xl border border-slate-200/90 shadow-2xl z-10 my-8 overflow-hidden"
        >
          {/* Close Button */}
          <button
            onClick={handleReset}
            className="absolute top-5 right-5 p-2 rounded-2xl bg-slate-100 hover:bg-slate-200 text-slate-500 hover:text-slate-900 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          {!isSubmitted ? (
            <form onSubmit={handleNextStep} className="space-y-6">
              
              {/* Header */}
              <div className="space-y-1 pr-8">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-100 text-cyan-900 text-[11px] font-bold uppercase tracking-wider font-mono">
                  <Sparkles className="w-3.5 h-3.5 text-cyan-700" />
                  <span>Instant Clinical Booking</span>
                </div>
                <h3 className="text-2xl font-display font-extrabold text-slate-900 tracking-tight">
                  {step === 1 ? 'Procedure & Schedule' : 'Patient Contact & Details'}
                </h3>
                <p className="text-xs text-slate-500 font-medium">
                  Dr. Yadav Dental Care Point • DLF Ankur Vihar, Ghaziabad
                </p>
              </div>

              {/* Progress Indicator */}
              <div className="flex items-center gap-2 pt-1">
                <div className="flex-1 h-1.5 rounded-full bg-cyan-600" />
                <div className={`flex-1 h-1.5 rounded-full transition-colors ${step >= 2 ? 'bg-cyan-600' : 'bg-slate-200'}`} />
              </div>

              {/* Validation Alert */}
              {validationError && (
                <motion.div
                  initial={{ opacity: 0, y: -5 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-3 rounded-2xl bg-rose-50 border border-rose-200 text-rose-800 text-xs flex items-center gap-2"
                >
                  <AlertCircle className="w-4 h-4 text-rose-600 shrink-0" />
                  <span>{validationError}</span>
                </motion.div>
              )}

              {/* STEP 1: Procedure, Date, Time */}
              {step === 1 && (
                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="space-y-4"
                >
                  {/* Service Selection */}
                  <div className="space-y-1.5">
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider font-mono">
                      Select Dental Treatment:
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full p-3 rounded-2xl bg-slate-50 border border-slate-300 text-slate-900 text-xs sm:text-sm font-semibold focus:border-cyan-600 focus:outline-none focus:ring-2 focus:ring-cyan-600/20"
                    >
                      {SERVICES_LIST.map((srv) => (
                        <option key={srv} value={srv}>
                          {srv}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Preferred Date with Quick Presets */}
                  <div className="space-y-1.5">
                    <div className="flex items-center justify-between">
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider font-mono">
                        Preferred Date:
                      </label>
                      <div className="flex items-center gap-1">
                        <button
                          type="button"
                          onClick={() => setDatePreset(0)}
                          className="px-2 py-0.5 rounded-lg text-[10px] font-bold bg-slate-100 hover:bg-cyan-100 text-slate-700 hover:text-cyan-800 transition-colors"
                        >
                          Today
                        </button>
                        <button
                          type="button"
                          onClick={() => setDatePreset(1)}
                          className="px-2 py-0.5 rounded-lg text-[10px] font-bold bg-slate-100 hover:bg-cyan-100 text-slate-700 hover:text-cyan-800 transition-colors"
                        >
                          Tomorrow
                        </button>
                      </div>
                    </div>
                    <div className="relative">
                      <Calendar className="absolute left-3.5 top-3.5 w-4 h-4 text-slate-400" />
                      <input
                        type="date"
                        value={formData.date}
                        min={new Date().toISOString().split('T')[0]}
                        onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                        className="w-full pl-10 pr-3 py-2.5 rounded-2xl bg-slate-50 border border-slate-300 text-slate-900 text-xs sm:text-sm font-semibold focus:border-cyan-600 focus:outline-none focus:ring-2 focus:ring-cyan-600/20"
                      />
                    </div>
                  </div>

                  {/* Time Slot Grid */}
                  <div className="space-y-1.5">
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider font-mono">
                      Select Preferred Slot:
                    </label>
                    <div className="grid grid-cols-2 gap-2">
                      {TIME_SLOTS.map((slot) => {
                        const isSelected = formData.timeSlot === slot.id;
                        return (
                          <button
                            key={slot.id}
                            type="button"
                            onClick={() => {
                              soundFX.playClick();
                              setFormData({ ...formData, timeSlot: slot.id });
                            }}
                            className={`p-2.5 rounded-2xl text-left border transition-all text-xs flex flex-col justify-between ${
                              isSelected
                                ? 'bg-cyan-50 border-2 border-cyan-600 text-cyan-950 font-bold shadow-xs'
                                : 'bg-slate-50 hover:bg-slate-100 border-slate-200 text-slate-700'
                            }`}
                          >
                            <span className="font-mono text-[11px]">{slot.id}</span>
                            <span className="text-[10px] opacity-75 font-medium mt-0.5">{slot.period}</span>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Sterile Package Assurance */}
                  <div className="p-3 rounded-2xl bg-emerald-50 border border-emerald-200 flex items-center gap-2.5 text-xs text-emerald-900 font-medium">
                    <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Includes 100% individual sealed sterile instrument pouches.</span>
                  </div>

                  {/* CTA Step 1 */}
                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-2xl bg-gradient-to-r from-cyan-600 to-royal-600 hover:from-cyan-500 hover:to-royal-500 text-white font-bold text-sm shadow-md flex items-center justify-center gap-2 hover:shadow-lg transition-all"
                  >
                    <span>Continue to Patient Details</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </motion.div>
              )}

              {/* STEP 2: Patient Name, Phone, Urgency, Notes */}
              {step === 2 && (
                <motion.div
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="space-y-4"
                >
                  {/* Full Name */}
                  <div className="space-y-1.5">
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider font-mono">
                      Patient Full Name *
                    </label>
                    <div className="relative">
                      <User className="absolute left-3.5 top-3.5 w-4 h-4 text-slate-400" />
                      <input
                        type="text"
                        required
                        placeholder="e.g. Rahul Sharma"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full pl-10 pr-3 py-2.5 rounded-2xl bg-slate-50 border border-slate-300 text-slate-900 text-xs sm:text-sm placeholder-slate-400 focus:border-cyan-600 focus:outline-none focus:ring-2 focus:ring-cyan-600/20"
                      />
                    </div>
                  </div>

                  {/* Mobile / WhatsApp Number */}
                  <div className="space-y-1.5">
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider font-mono">
                      Mobile / WhatsApp Number *
                    </label>
                    <div className="relative">
                      <Phone className="absolute left-3.5 top-3.5 w-4 h-4 text-slate-400" />
                      <input
                        type="tel"
                        required
                        placeholder="+91 98765 43210"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full pl-10 pr-3 py-2.5 rounded-2xl bg-slate-50 border border-slate-300 text-slate-900 text-xs sm:text-sm placeholder-slate-400 focus:border-cyan-600 focus:outline-none focus:ring-2 focus:ring-cyan-600/20"
                      />
                    </div>
                  </div>

                  {/* Urgency Selector */}
                  <div className="space-y-1.5">
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider font-mono">
                      Visit Priority:
                    </label>
                    <div className="grid grid-cols-3 gap-2">
                      {URGENCY_OPTIONS.map((opt) => {
                        const isSelected = formData.urgency === opt.id;
                        const Icon = opt.icon;
                        return (
                          <button
                            key={opt.id}
                            type="button"
                            onClick={() => {
                              soundFX.playClick();
                              setFormData({ ...formData, urgency: opt.id });
                            }}
                            className={`p-2.5 rounded-2xl text-center border transition-all text-xs flex flex-col items-center gap-1 ${
                              isSelected
                                ? `${opt.color} font-bold shadow-xs border-2`
                                : 'bg-slate-50 hover:bg-slate-100 border-slate-200 text-slate-600'
                            }`}
                          >
                            <Icon className="w-4 h-4" />
                            <span className="text-[11px] leading-tight">{opt.label}</span>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Notes / Symptoms */}
                  <div className="space-y-1.5">
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider font-mono">
                      Symptoms or Questions (Optional):
                    </label>
                    <div className="relative">
                      <FileText className="absolute left-3.5 top-3.5 w-4 h-4 text-slate-400" />
                      <textarea
                        rows={2}
                        placeholder="Describe tooth pain, sensitivity, or preference..."
                        value={formData.notes}
                        onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                        className="w-full pl-10 pr-3 py-2.5 rounded-2xl bg-slate-50 border border-slate-300 text-slate-900 text-xs sm:text-sm placeholder-slate-400 focus:border-cyan-600 focus:outline-none focus:ring-2 focus:ring-cyan-600/20"
                      />
                    </div>
                  </div>

                  {/* Summary Bar */}
                  <div className="p-3 rounded-2xl bg-slate-100/80 border border-slate-200 text-xs text-slate-800 flex items-center justify-between font-mono">
                    <span className="font-semibold truncate max-w-[200px]">{formData.service}</span>
                    <span className="text-cyan-800 font-bold shrink-0">{getFormattedDateDisplay(formData.date)}</span>
                  </div>

                  {/* Navigation Buttons */}
                  <div className="grid grid-cols-2 gap-3 pt-1">
                    <button
                      type="button"
                      onClick={() => {
                        soundFX.playClick();
                        setStep(1);
                      }}
                      className="py-3 px-4 rounded-2xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs flex items-center justify-center gap-1.5 transition-colors"
                    >
                      <ChevronLeft className="w-4 h-4" />
                      <span>Back</span>
                    </button>

                    <button
                      type="submit"
                      className="py-3 px-4 rounded-2xl bg-gradient-to-r from-cyan-600 to-royal-600 hover:from-cyan-500 hover:to-royal-500 text-white font-bold text-xs sm:text-sm shadow-md flex items-center justify-center gap-2 hover:shadow-lg transition-all"
                    >
                      <Sparkles className="w-4 h-4" />
                      <span>Review & Confirm</span>
                    </button>
                  </div>
                </motion.div>
              )}

            </form>
          ) : (
            /* STEP 3 / SUCCESS CONFIRMATION */
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center space-y-5 py-2"
            >
              {/* Success Badge */}
              <div className="w-16 h-16 rounded-3xl bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-md">
                <CheckCircle2 className="w-9 h-9" />
              </div>

              <div className="space-y-1.5">
                <h3 className="text-2xl font-display font-extrabold text-slate-900 tracking-tight">
                  Appointment Request Ready!
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 max-w-sm mx-auto">
                  Thank you, <strong className="text-slate-900 font-bold">{formData.name}</strong>! Click below to send your structured booking request directly to Dr. Jagesh Yadav on WhatsApp.
                </p>
              </div>

              {/* Structured Summary Card */}
              <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 text-left space-y-2 text-xs font-mono">
                <div className="flex justify-between pb-1.5 border-b border-slate-200">
                  <span className="text-slate-500 font-normal">Procedure:</span>
                  <span className="font-bold text-slate-900">{formData.service}</span>
                </div>
                <div className="flex justify-between pb-1.5 border-b border-slate-200">
                  <span className="text-slate-500 font-normal">Date & Time:</span>
                  <span className="font-bold text-cyan-800">{getFormattedDateDisplay(formData.date)} • {formData.timeSlot}</span>
                </div>
                <div className="flex justify-between pb-1.5 border-b border-slate-200">
                  <span className="text-slate-500 font-normal">Patient & Phone:</span>
                  <span className="font-bold text-slate-900">{formData.name} ({formData.phone})</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500 font-normal">Clinic Location:</span>
                  <span className="font-bold text-slate-900">DLF Ankur Vihar, Ghaziabad</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-2.5 pt-1">
                <a
                  href={getWhatsAppBookingLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => soundFX.playClick()}
                  className="w-full py-3.5 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm shadow-md flex items-center justify-center gap-2 transition-all"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Send Confirmation via WhatsApp</span>
                </a>

                <div className="grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={handleCopySummary}
                    className="py-2.5 px-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold flex items-center justify-center gap-1.5 transition-colors"
                  >
                    {copiedSummary ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-600" />
                        <span>Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Copy Summary</span>
                      </>
                    )}
                  </button>

                  <a
                    href={`tel:+${WHATSAPP_NUMBER}`}
                    onClick={() => soundFX.playClick()}
                    className="py-2.5 px-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold flex items-center justify-center gap-1.5 transition-colors"
                  >
                    <Phone className="w-3.5 h-3.5 text-cyan-600" />
                    <span>Call Reception</span>
                  </a>
                </div>
              </div>

              {/* Reset / Close CTA */}
              <button
                type="button"
                onClick={handleReset}
                className="text-xs text-slate-500 hover:text-slate-800 hover:underline pt-2"
              >
                Close & Return to Website
              </button>
            </motion.div>
          )}

        </motion.div>
      </div>
    </AnimatePresence>
  );
};

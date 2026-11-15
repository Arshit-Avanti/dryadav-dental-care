/**
 * Dr Yadav Dental Care Point - Central Clinic Configuration
 * 
 * Source of truth for clinic information, doctor profile, WhatsApp routing,
 * location coordinates, gallery image slots, and review settings.
 * 
 * IMPORTANT DATA INTEGRITY GUIDELINES:
 * - Only verified clinic data is presented as confirmed.
 * - Missing or pending items are explicitly flagged for client confirmation.
 * - WhatsApp URL is generated from one single WHATSAPP_NUMBER source.
 */

export interface DoctorProfileConfig {
  name: string;
  salutation: string;
  role: string;
  qualifications: {
    degrees: string;
    status: 'confirmed' | 'pending_confirmation';
    note?: string;
  };
  registration: {
    details: string;
    status: 'confirmed' | 'pending_confirmation';
  };
  experience: {
    text: string;
    status: 'confirmed' | 'pending_confirmation';
  };
  expertiseAreas: string[];
  introduction: string;
  biography: string[];
  philosophy: string;
  memberships: string[];
  portraitImage: string | null;
  portraitPlaceholderLabel: string;
}

export interface GallerySlot {
  id: string;
  title: string;
  category: string;
  description: string;
  imagePath: string | null; // null represents empty, ready-for-upload placeholder
  placeholderLabel: string;
  aspectRatio: 'landscape' | 'portrait' | 'square';
}

export interface ClinicConfig {
  clinicName: string;
  shortName: string;
  brandTagline: string;
  heroHeadline: string;
  heroSubheadline: string;
  agencyCredit: string;
  
  contact: {
    whatsappNumber: string; // Central phone number in international format without '+'
    whatsappNumberFormatted: string;
    whatsappDefaultMessage: string;
    phoneAlternative?: string;
    emailPlaceholder: string;
    status: 'client_active' | 'pending_confirmation';
  };
  
  location: {
    area: string;
    city: string;
    state: string;
    country: string;
    fullAddressPlaceholder: string;
    addressStatus: 'confirmed' | 'pending_confirmation';
    landmark: string;
    googleMapsEmbedUrl: string | null;
    googleMapsDirectionsUrl: string;
  };
  
  timings: {
    summary: string;
    status: 'pending_confirmation' | 'confirmed';
    schedule: {
      days: string;
      hours: string;
    }[];
  };
  
  doctor: DoctorProfileConfig;
  gallery: GallerySlot[];
  
  reviews: {
    allowGenuineSubmission: boolean;
    googleReviewUrl: string | null;
    transparencyStatement: string;
  };
}

export const CLINIC_CONFIG: ClinicConfig = {
  clinicName: "Dr Yadav Dental Care Point",
  shortName: "Dr. Yadav Dental",
  brandTagline: "Your Smile Deserves Exceptional Care",
  heroHeadline: "Your Smile Deserves Exceptional Care.",
  heroSubheadline: "Experience modern, patient-first dental care in DLF Ankur Vihar. We combine gentle techniques, unhurried consultations, and transparent communication for your family's oral health.",
  agencyCredit: "Crafted by JustSmile Agency",

  contact: {
    whatsappNumber: "917065577070",
    whatsappNumberFormatted: "+91 70655 77070",
    whatsappDefaultMessage: "Hello, I would like to enquire about a dental appointment at Dr Yadav Dental Care Point.",
    emailPlaceholder: "dryadavdental@gmail.com",
    status: "client_active",
  },

  location: {
    area: "DLF Ankur Vihar, Loni",
    city: "Ghaziabad",
    state: "Uttar Pradesh",
    country: "India",
    fullAddressPlaceholder: "Opposite Sunrise Public School, 18, MM Road, DLF Ankur Vihar, Loni, Ghaziabad, Uttar Pradesh 201102 [Exact street address to be confirmed by clinic]",
    addressStatus: "pending_confirmation",
    landmark: "Opposite Sunrise Public School, MM Road",
    googleMapsEmbedUrl: null, // Ready for verified iframe embed
    googleMapsDirectionsUrl: "https://www.google.com/maps/search/?api=1&query=Dr+Yadav+Dental+Care+Point+DLF+Ankur+Vihar+Ghaziabad",
  },

  timings: {
    summary: "Clinic consultation hours to be confirmed by the clinic",
    status: "pending_confirmation",
    schedule: [
      { days: "Monday", hours: "Morning & Evening Slots (To be confirmed)" },
      { days: "Tuesday – Saturday", hours: "Regular Practice Hours (To be confirmed)" },
      { days: "Sunday", hours: "Morning Consultations (To be confirmed)" },
    ],
  },

  doctor: {
    name: "Dr. Jagesh Yadav",
    salutation: "Dr.",
    role: "Lead Dental Practitioner",
    qualifications: {
      degrees: "BDS",
      status: "pending_confirmation",
      note: "External directory listing noted BDS; currently pending official clinic verification.",
    },
    registration: {
      details: "Dental Council Registration details pending clinic verification",
      status: "pending_confirmation",
    },
    experience: {
      text: "Comprehensive clinical dental practice in DLF Ankur Vihar, Ghaziabad",
      status: "pending_confirmation",
    },
    expertiseAreas: [
      "Root Canal Treatment (RCT)",
      "Aesthetic Restorations & Fillings",
      "Gentle Tooth Extractions",
      "Scaling & Periodontal Care",
      "Dental Crowns & Fixed Bridges",
      "Preventive & Family Dentistry",
    ],
    introduction: "Dedicated to providing compassionate, patient-friendly dental consultations with an emphasis on gentle techniques and transparent clinical communication.",
    biography: [
      "Dr. Jagesh Yadav leads Dr Yadav Dental Care Point with a core belief that visiting the dentist should be an anxiety-free, reassuring experience for patients of all ages.",
      "Serving the DLF Ankur Vihar and Loni community in Ghaziabad, Dr. Yadav emphasizes clear diagnostic explanations before initiating any procedure, ensuring each patient fully understands their treatment choices.",
      "Our practice focuses on preserving natural tooth structure whenever clinically viable, utilizing modern restorative protocols and gentle anesthesia management to ensure patient comfort.",
    ],
    philosophy: "Every patient deserves unhurried listening, compassionate treatment, and honest clinical recommendations tailored specifically to their long-term oral well-being.",
    memberships: [
      "Indian Dental Association (IDA) — Pending confirmation",
    ],
    portraitImage: null, // Ready for client photo upload
    portraitPlaceholderLabel: "Dr. Jagesh Yadav — Portrait Photograph Slot",
  },

  gallery: [
    {
      id: "exterior",
      title: "Clinic Exterior & Entry",
      category: "Premises",
      description: "Front signage and accessible street entrance in DLF Ankur Vihar.",
      imagePath: null,
      placeholderLabel: "Clinic Exterior Photograph",
      aspectRatio: "landscape",
    },
    {
      id: "reception",
      title: "Reception & Waiting Lounge",
      category: "Patient Comfort",
      description: "Clean, welcoming, and relaxed waiting area for patients and families.",
      imagePath: null,
      placeholderLabel: "Reception Area Photograph",
      aspectRatio: "landscape",
    },
    {
      id: "treatment-operatory",
      title: "Dental Operatory & Consultation Suite",
      category: "Clinical Environment",
      description: "Modern dental chair with ergonomic patient positioning and clinical lighting.",
      imagePath: null,
      placeholderLabel: "Operatory Room Photograph",
      aspectRatio: "landscape",
    },
    {
      id: "equipment",
      title: "Advanced Dental Instruments & Technology",
      category: "Sterilization & Precision",
      description: "Hospital-grade autoclaves, apex locators, and ultrasonic scaling systems.",
      imagePath: null,
      placeholderLabel: "Equipment & Technology Photograph",
      aspectRatio: "landscape",
    },
    {
      id: "doctor-portrait",
      title: "Dr. Jagesh Yadav In Practice",
      category: "Doctor Profile",
      description: "Professional portrait of Dr. Jagesh Yadav at Dr Yadav Dental Care Point.",
      imagePath: null,
      placeholderLabel: "Doctor Portrait Photograph",
      aspectRatio: "portrait",
    },
    {
      id: "sterilization",
      title: "Clinical Hygiene & Sterilization Station",
      category: "Patient Safety",
      description: "Strict multi-stage instrument sterilization and patient hygiene protocols.",
      imagePath: null,
      placeholderLabel: "Sterilization Station Photograph",
      aspectRatio: "landscape",
    },
  ],

  reviews: {
    allowGenuineSubmission: true,
    googleReviewUrl: null, // Add verified Google review link once available
    transparencyStatement: "At Dr Yadav Dental Care Point, we value authentic patient feedback. We do not generate synthetic ratings or staged reviews. Real reviews will be linked directly to our verified Google Business Profile as they are received.",
  },
};

/**
 * CENTRAL WHATSAPP INTEGRATION CONSTANTS
 * Mandated by Master Project Prompt:
 * - Stored in one central location
 * - Used across all appointment triggers
 * - Pre-filled appointment message support
 * - Explicit verification status
 */
export const WHATSAPP_NUMBER: string = CLINIC_CONFIG.contact.whatsappNumber;

export const WHATSAPP_CONFIG = {
  number: WHATSAPP_NUMBER,
  formatted: CLINIC_CONFIG.contact.whatsappNumberFormatted,
  isConfirmedByClinic: false, // Flag: set true once verified by Dr. Jagesh Yadav
  statusNote: "External directory reference (+91 70655 77070). Final verification pending clinic confirmation.",
  defaultMessage: CLINIC_CONFIG.contact.whatsappDefaultMessage,
};

/**
 * Helper to construct the official WhatsApp click-to-chat URL
 * @param customMessage Optional specific message (e.g. for a specific treatment)
 */
export function getWhatsAppUrl(customMessage?: string): string {
  const message = customMessage || WHATSAPP_CONFIG.defaultMessage;
  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
}

/**
 * Helper to construct a WhatsApp appointment query for a specific treatment
 */
export function getTreatmentWhatsAppUrl(treatmentName: string): string {
  const message = `Hello Dr. Yadav Dental Care Point, I would like to enquire about consultation for "${treatmentName}". Please let me know available appointment times.`;
  return getWhatsAppUrl(message);
}

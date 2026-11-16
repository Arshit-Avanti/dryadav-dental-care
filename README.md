# Dr Yadav Dental Care Point — Website Source Code

Production-ready, luxury dental clinic website for **Dr Yadav Dental Care Point** located in DLF Ankur Vihar, Loni, Ghaziabad.

Developed with modern design principles (Apple-style minimalism, luxury editorial aesthetics), responsive mobile-first architecture, WhatsApp direct booking integrations, and micro-interactions.

---

## 🛠️ Tech Stack

- **Framework:** [React 18](https://react.dev/) + [Vite](https://vitejs.dev/)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/) + PostCSS
- **Animations:** [Framer Motion](https://www.framer.com/motion/) (Typewriter effect, Apple-style word reveal, scroll illumination)
- **Icons:** [Lucide React](https://lucide.dev/)
- **Fonts:** Hybrid Typography (Upright Adobe Caslon for titles, Adobe Caslon Italic for treatment names & subheadings, Avenir Light for body copy)

---

## 🚀 Quick Start

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Local Development Server
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

### 3. Production Build
```bash
npm run build
```
Creates an optimized production bundle in the `dist/` directory.

### 4. Preview Production Build
```bash
npm run preview
```

---

## 📁 Project Structure

```
├── public/                 # Static assets, icons, robots.txt, sitemap.xml
├── src/
│   ├── assets/             # Static graphics and images
│   ├── components/         # React UI Components
│   │   ├── animations/     # Reusable Framer Motion animation primitives
│   │   │   ├── AppleKineticSubheader.tsx
│   │   │   ├── AppleScrollWordHighlight.tsx
│   │   │   ├── AppleShimmerText.tsx
│   │   │   ├── AppleWordReveal.tsx
│   │   │   └── TypewriterHeading.tsx
│   │   ├── AboutSection.tsx
│   │   ├── BookingModal.tsx
│   │   ├── DentalGallerySection.tsx
│   │   ├── DoctorProfileSection.tsx
│   │   ├── Footer.tsx
│   │   ├── HeroSection.tsx
│   │   ├── InteractiveRevealCard.tsx
│   │   ├── LocationContactSection.tsx
│   │   ├── MobileFloatingHUD.tsx
│   │   ├── Navbar.tsx
│   │   ├── PatientReviewsSection.tsx
│   │   ├── ScrollProgress.tsx
│   │   ├── ServiceTicker.tsx
│   │   ├── TreatmentDetailModal.tsx
│   │   ├── TreatmentsSection.tsx
│   │   ├── WhatsAppAppointmentSection.tsx
│   │   └── WhyChooseUsSection.tsx
│   ├── config/             # Clinic configuration (WhatsApp number, address, timings)
│   │   └── clinicConfig.ts
│   ├── data/               # Clinical treatment details and indications
│   │   └── treatmentsData.ts
│   ├── types/              # TypeScript interfaces
│   ├── utils/              # Sound effects, timing calculators
│   ├── App.tsx             # Root layout and section composition
│   ├── index.css           # Global typography classes and Tailwind layers
│   └── main.tsx            # Application entry point
├── index.html              # HTML template with Google Fonts preconnections
├── tailwind.config.js      # Custom theme colors and typography definitions
└── vite.config.ts          # Vite configuration
```

---

## ⚙️ Clinic Configuration

All clinic details (Doctor Name, Location, WhatsApp contact number, and working hours) are centralized in:
`src/config/clinicConfig.ts`

To update the WhatsApp phone number or clinic timings, edit `CLINIC_CONFIG` in that file.

---

## 📄 License & Attribution

Designed and developed for Dr Yadav Dental Care Point. All rights reserved.

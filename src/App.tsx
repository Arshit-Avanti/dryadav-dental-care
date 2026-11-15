import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { ScrollProgress } from './components/ScrollProgress';
import { HeroSection } from './components/HeroSection';
import { ServiceTicker } from './components/ServiceTicker';
import { AboutSection } from './components/AboutSection';
import { TreatmentsSection } from './components/TreatmentsSection';
import { DoctorProfileSection } from './components/DoctorProfileSection';
import { DentalGallerySection } from './components/DentalGallerySection';
import { WhyChooseUsSection } from './components/WhyChooseUsSection';
import { PatientReviewsSection } from './components/PatientReviewsSection';
import { WhatsAppAppointmentSection } from './components/WhatsAppAppointmentSection';
import { LocationContactSection } from './components/LocationContactSection';
import { Footer } from './components/Footer';
import { MobileFloatingHUD } from './components/MobileFloatingHUD';
import { BookingModal } from './components/BookingModal';

export function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedServiceForBooking, setSelectedServiceForBooking] = useState<string | undefined>(undefined);

  const handleOpenBooking = (serviceName?: string) => {
    setSelectedServiceForBooking(serviceName);
    setIsBookingOpen(true);
  };

  const handleCloseBooking = () => {
    setIsBookingOpen(false);
    setSelectedServiceForBooking(undefined);
  };

  return (
    <div className="min-h-screen bg-[#EAF5FA] text-slate-900 font-sans selection:bg-cyan-500/20 selection:text-cyan-900 relative overflow-x-hidden">
      {/* Top Precision Scroll Progress Bar */}
      <ScrollProgress />

      {/* Minimalist Swiss & Luxury Navbar */}
      <Navbar onOpenBooking={() => handleOpenBooking()} />

      {/* Main Narrative Flow Aligned Exactly with the Reference Design */}
      <main>
        {/* 1. Hero Showcase: Condensed 'EVERY SMILE MATTERS', 3D Tooth & Blue Splash, Orange CTA */}
        <HeroSection onOpenBooking={() => handleOpenBooking()} />

        {/* 2. Service Ticker: Continuous Light-Blue Scrolling Services Marquee */}
        <ServiceTicker />

        {/* 3. About Section: 'About Dr Yadav Dental' + 'Our Vision' + Asymmetric Photo Collage */}
        <AboutSection />

        {/* 4. Treatments Section: 'Available Treatments' + Blue Accent Surfaces & Modals */}
        <TreatmentsSection />

        {/* 5. Doctor Profile: Exclusively Dr. Jagesh Yadav (Dedicated Portrait Slot, Ethical Verification) */}
        <DoctorProfileSection />

        {/* 7. Dedicated Dental Gallery (6 Empty Editable Slots with Upload Indicators) */}
        <DentalGallerySection />

        {/* 8. Why Choose Us: 6 Verified Clinical Commitments */}
        <WhyChooseUsSection />

        {/* 9. Patient Reviews: Ethical Transparency Hub (Zero Fabricated Reviews, Google Reviews Ready) */}
        <PatientReviewsSection />

        {/* 10. WhatsApp Appointment Section: 'Let's Take Care of Your Smile' */}
        <WhatsAppAppointmentSection />

        {/* 11. Location & Contact: DLF Ankur Vihar, Loni, Ghaziabad (Map launcher, verified details) */}
        <LocationContactSection />
      </main>

      {/* Luxury Agency Footer */}
      <Footer onOpenBooking={handleOpenBooking} />

      {/* Persistent Mobile Glass HUD Dock */}
      <MobileFloatingHUD onOpenBooking={() => handleOpenBooking()} />

      {/* Interactive 2-Step WhatsApp Consultation Modal */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={handleCloseBooking}
        initialService={selectedServiceForBooking}
      />
    </div>
  );
}

export default App;

import React from 'react';
import { LanguageProvider, useLanguage } from './context/LanguageContext';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { InstructorsSection } from './components/InstructorsSection';
import { CurriculumSection } from './components/CurriculumSection';
import { TargetAudienceSection } from './components/TargetAudienceSection';
import { AboutSection } from './components/AboutSection';
import { PricingSection } from './components/PricingSection';
import { FaqSection } from './components/FaqSection';
import { FinalCtaSection } from './components/FinalCtaSection';
import { Footer } from './components/Footer';

function MainApp() {
  const { lang } = useLanguage();

  const handleOpenWhatsapp = () => {
    const targetPhone = "6281224485146"; // Official WhatsApp Admisi
    
    const textMessageEn = `Hello Admin Sinaptik & ITB Professional Education,

I am interested in registering/consulting regarding the Executive Professional Education Program: Intelligent Business Process Automation (Cohort September 2026).

Please provide registration info, detailed syllabus, and corporate invoice/tax invoice details. Thank you.`;

    const textMessageId = `Halo Admin Sinaptik & ITB Professional Education,

Saya tertarik mendaftar/berkonsultasi mengenai Program Professional Education: Intelligent Business Process Automation (Cohort September 2026).

Mohon informasi pendaftaran, rincian silabus, dan penawaran invoice/faktur pajak instansi. Terima kasih.`;

    const textMessage = lang === 'en' ? textMessageEn : textMessageId;
    const encodedText = encodeURIComponent(textMessage);
    const waUrl = `https://wa.me/${targetPhone}?text=${encodedText}`;

    window.open(waUrl, '_blank');
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-[#0F172A] font-sans relative">
      {/* Sticky Header Navbar */}
      <Navbar onOpenWhatsapp={handleOpenWhatsapp} />

      {/* Main Page Layout */}
      <main>
        {/* 1. Hero Section */}
        <HeroSection onOpenWhatsapp={handleOpenWhatsapp} />

        {/* 2. Instructors Section */}
        <InstructorsSection />

        {/* 3. Curriculum Section */}
        <CurriculumSection onOpenWhatsapp={handleOpenWhatsapp} />

        {/* 4. Target Audience Section */}
        <TargetAudienceSection />

        {/* 5. About Program Section */}
        <AboutSection />

        {/* 6. Pricing & Investment Section */}
        <PricingSection onOpenWhatsapp={handleOpenWhatsapp} />

        {/* 7. FAQ Section */}
        <FaqSection onOpenWhatsapp={handleOpenWhatsapp} />

        {/* 8. Final CTA Section */}
        <FinalCtaSection onOpenWhatsapp={handleOpenWhatsapp} />
      </main>

      {/* Footer */}
      <Footer onOpenWhatsapp={handleOpenWhatsapp} />
    </div>
  );
}

export function App() {
  return (
    <LanguageProvider>
      <MainApp />
    </LanguageProvider>
  );
}

export default App;

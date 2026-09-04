import React, { useState } from 'react';
import { PhoneCall, ArrowRight, Menu, X, Globe } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const Navbar = ({ onOpenWhatsapp }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { lang, toggleLanguage, t } = useLanguage();

  return (
    <header className="sticky top-0 z-50 transition-all duration-300 glass-panel border-b border-slate-200 shadow-xs">
      {/* Top Notice Banner */}
      <div className="bg-gradient-to-r from-[#001744] via-[#00205B] to-[#007FAA] text-white py-1.5 px-4 text-[11px] sm:text-xs font-semibold text-center flex items-center justify-center gap-2 flex-wrap">
        <span className="bg-emerald-500/20 text-emerald-300 px-2 py-0.5 rounded text-[10px] uppercase font-bold tracking-wider border border-emerald-500/30">
          {t.banner.tag}
        </span>
        <span className="truncate max-w-full">
          {t.banner.text}
        </span>
        <button 
          onClick={onOpenWhatsapp}
          className="underline hover:text-emerald-300 font-bold ml-1 cursor-pointer transition-colors whitespace-nowrap"
        >
          {t.banner.cta}
        </button>
      </div>

      {/* Main Navbar Container (Aligned with max-w-7xl of Landing Page Sections) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20 gap-4 sm:gap-6">
          
          {/* Co-Branded Logo Area: Sinaptik | ITB Directorate (Aligned with Hero H1 Title) */}
          <div className="flex items-center gap-3 sm:gap-4 shrink-0">
            {/* 1. Sinaptik Logo */}
            <a href="#" className="flex items-center group shrink-0">
              <img 
                src="/images/logo_sinaptik.png" 
                alt="SINAPTIK" 
                className="h-7 sm:h-8 w-auto object-contain group-hover:scale-105 transition-transform"
              />
            </a>

            {/* Vertical Separator */}
            <div className="h-7 sm:h-8 w-px bg-slate-300 shrink-0" />

            {/* 2. ITB Directorate Logo Asset */}
            <div className="flex items-center shrink-0">
              <img 
                src="/images/logo_itb_directorate_darktext.png" 
                alt="Direktorat Pendidikan Profesional Berkelanjutan ITB" 
                className="h-7 sm:h-8 md:h-9 w-auto object-contain"
              />
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-4 xl:gap-6 text-xs sm:text-sm font-semibold text-slate-700 whitespace-nowrap">
            <a href="#hero" className="hover:text-[#00205B] transition-colors py-1">{t.nav.program}</a>
            <a href="#instructors" className="hover:text-[#00205B] transition-colors py-1">{t.nav.instructors}</a>
            <a href="#curriculum" className="hover:text-[#00205B] transition-colors py-1">{t.nav.curriculum}</a>
            <a href="#audience" className="hover:text-[#00205B] transition-colors py-1">{t.nav.audience}</a>
            <a href="#about" className="hover:text-[#00205B] transition-colors py-1">{t.nav.about}</a>
            <a href="#pricing" className="hover:text-[#00205B] transition-colors py-1">{t.nav.pricing}</a>
            <a href="#faq" className="hover:text-[#00205B] transition-colors py-1">{t.nav.faq}</a>
          </nav>

          {/* Action Area: Language Switcher + Full WhatsApp Button */}
          <div className="hidden sm:flex items-center gap-3 shrink-0">
            {/* Language Switcher Toggle */}
            <div className="flex items-center p-0.5 rounded-lg bg-slate-100 border border-slate-200 text-xs font-bold shrink-0">
              <button
                onClick={() => toggleLanguage()}
                className={`px-2.5 py-1 rounded-md text-[11px] font-bold transition-all cursor-pointer ${
                  lang === 'en'
                    ? 'bg-[#00205B] text-white shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
                title="Switch to English"
              >
                EN
              </button>
              <button
                onClick={() => toggleLanguage()}
                className={`px-2.5 py-1 rounded-md text-[11px] font-bold transition-all cursor-pointer ${
                  lang === 'id'
                    ? 'bg-[#00205B] text-white shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
                title="Switch to Bahasa Indonesia"
              >
                ID
              </button>
            </div>

            {/* Full WhatsApp CTA Button */}
            <button
              onClick={onOpenWhatsapp}
              className="bg-[#00205B] hover:bg-blue-900 text-white font-bold text-xs uppercase tracking-wider px-4 sm:px-5 py-2.5 rounded-xl transition-all duration-200 shadow-md hover:shadow-lg flex items-center gap-2 cursor-pointer whitespace-nowrap"
            >
              <PhoneCall className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
              <span>{t.nav.cta}</span>
              <ArrowRight className="w-3.5 h-3.5 shrink-0" />
            </button>
          </div>

          {/* Mobile Navigation Controls */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={() => toggleLanguage()}
              className="flex items-center gap-1 px-2 py-1 rounded-md bg-slate-100 border border-slate-200 text-xs font-bold text-[#00205B]"
            >
              <Globe className="w-3.5 h-3.5" />
              <span>{lang === 'en' ? 'EN' : 'ID'}</span>
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-700 hover:bg-slate-100"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-200 bg-white px-4 pt-3 pb-6 space-y-4">
          <div className="flex items-center justify-between py-2 border-b border-slate-100">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
              Language / Bahasa:
            </span>
            <div className="flex items-center p-0.5 rounded-lg bg-slate-100 border border-slate-200 text-xs font-bold">
              <button
                onClick={() => { toggleLanguage(); }}
                className={`px-3 py-1 rounded-md ${
                  lang === 'en' ? 'bg-[#00205B] text-white' : 'text-slate-600'
                }`}
              >
                English (EN)
              </button>
              <button
                onClick={() => { toggleLanguage(); }}
                className={`px-3 py-1 rounded-md ${
                  lang === 'id' ? 'bg-[#00205B] text-white' : 'text-slate-600'
                }`}
              >
                Indonesia (ID)
              </button>
            </div>
          </div>

          <div className="flex flex-col space-y-3 font-medium text-slate-700 text-sm">
            <a href="#hero" onClick={() => setMobileMenuOpen(false)} className="py-1">{t.nav.program}</a>
            <a href="#instructors" onClick={() => setMobileMenuOpen(false)} className="py-1">{t.nav.instructors}</a>
            <a href="#curriculum" onClick={() => setMobileMenuOpen(false)} className="py-1">{t.nav.curriculum}</a>
            <a href="#audience" onClick={() => setMobileMenuOpen(false)} className="py-1">{t.nav.audience}</a>
            <a href="#about" onClick={() => setMobileMenuOpen(false)} className="py-1">{t.nav.about}</a>
            <a href="#pricing" onClick={() => setMobileMenuOpen(false)} className="py-1">{t.nav.pricing}</a>
            <a href="#faq" onClick={() => setMobileMenuOpen(false)} className="py-1">{t.nav.faq}</a>
          </div>

          <div className="pt-2">
            <button
              onClick={() => { onOpenWhatsapp(); setMobileMenuOpen(false); }}
              className="w-full bg-[#00205B] text-white font-bold text-sm py-3.5 rounded-xl shadow-md text-center flex items-center justify-center gap-2"
            >
              <PhoneCall className="w-4 h-4 text-emerald-400" />
              <span>{t.nav.cta} (0812-2448-5146)</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

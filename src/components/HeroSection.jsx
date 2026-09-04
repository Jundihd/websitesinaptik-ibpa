import React from 'react';
import { 
  ShieldCheck, 
  ArrowRight, 
  CheckCircle2, 
  Building, 
  Clock, 
  Award,
  Calendar,
  PhoneCall,
  BookOpen
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const HeroSection = ({ onOpenWhatsapp }) => {
  const { t, programData } = useLanguage();
  const highlights = programData.heroHighlights || [];

  return (
    <section id="hero" className="relative py-6 sm:py-8 lg:py-10 border-b border-slate-200 lg:min-h-[calc(100vh-80px)] flex flex-col justify-center overflow-hidden">
      
      {/* Background Ambient Glows */}
      <div className="absolute top-0 right-0 w-[550px] h-[550px] bg-[#007FAA]/10 rounded-full blur-3xl pointer-events-none -translate-y-1/4 translate-x-1/4" />
      <div className="absolute bottom-0 left-0 w-[450px] h-[450px] bg-[#49BCED]/15 rounded-full blur-3xl pointer-events-none translate-y-1/4 -translate-x-1/4" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        
        {/* Single-Frame Hero Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          
          {/* Left Column: Copywriting formatted exactly as Image 1 */}
          <div className="lg:col-span-7 space-y-4">
            
            {/* Headline (H1) */}
            <h1 className="text-3xl sm:text-4xl lg:text-[44px] xl:text-[48px] font-extrabold text-[#0F172A] tracking-tight leading-[1.15]">
              {t.hero.title}
            </h1>

            {/* Subhead text below headline */}
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl font-normal">
              {t.hero.subhead}
            </p>

            {/* Program Title Highlight Box */}
            <div className="space-y-1 pt-1">
              <div className="text-lg sm:text-xl font-extrabold text-[#007FAA] tracking-tight">
                {t.hero.programTagTitle}
              </div>
              <div className="text-sm sm:text-base font-semibold text-[#005F80]">
                {t.hero.programTagSub}
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal pt-1 max-w-xl">
                {t.hero.shortDesc}
              </p>
            </div>

            {/* Specs Bar */}
            <div className="grid grid-cols-3 gap-3 pt-3 pb-3 border-y border-slate-200">
              <div className="space-y-0.5">
                <div className="text-[9px] uppercase tracking-widest text-slate-400 font-bold flex items-center gap-1">
                  <Calendar className="w-3 h-3 text-[#007FAA]" />
                  <span>{t.hero.startDateLabel}</span>
                </div>
                <div className="text-xs sm:text-sm font-extrabold text-slate-900">
                  {t.hero.startDateVal}
                </div>
                <div className="text-[10px] text-emerald-600 font-semibold">
                  {t.hero.earlyBirdNote}
                </div>
              </div>

              <div className="space-y-0.5">
                <div className="text-[9px] uppercase tracking-widest text-slate-400 font-bold flex items-center gap-1">
                  <Clock className="w-3 h-3 text-[#007FAA]" />
                  <span>{t.hero.formatLabel}</span>
                </div>
                <div className="text-xs sm:text-sm font-extrabold text-slate-900">
                  {t.hero.formatVal}
                </div>
                <div className="text-[10px] text-slate-500">
                  {t.hero.formatSub}
                </div>
              </div>

              <div className="space-y-0.5">
                <div className="text-[9px] uppercase tracking-widest text-slate-400 font-bold flex items-center gap-1">
                  <Award className="w-3 h-3 text-[#007FAA]" />
                  <span>{t.hero.instructorLabel}</span>
                </div>
                <div className="text-xs sm:text-sm font-extrabold text-slate-900">
                  {t.hero.instructorVal}
                </div>
                <div className="text-[10px] text-slate-500">
                  {t.hero.instructorSub}
                </div>
              </div>
            </div>

            {/* Feature Highlights */}
            <div className="space-y-1.5 pt-0.5">
              <div className="text-[11px] font-bold uppercase tracking-wider text-slate-500">
                {t.hero.highlightsTitle}
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                {highlights.slice(0, 4).map((item, idx) => (
                  <div key={idx} className="flex items-start gap-1.5 text-xs text-slate-700">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                    <span className="line-clamp-2">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Buttons (Primary "Lihat Program" & Secondary "Silabus") - Placed at Bottom */}
            <div className="pt-3 flex flex-wrap items-center gap-3">
              <button
                onClick={onOpenWhatsapp}
                className="bg-[#007FAA] hover:bg-[#005F80] text-white text-xs sm:text-sm font-bold tracking-wider px-6 py-3 rounded-xl transition-all duration-200 uppercase flex items-center gap-2 shadow-md hover:shadow-lg cursor-pointer"
              >
                <span>{t.hero.ctaPrimary}</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href="#curriculum"
                className="border border-slate-300 text-slate-800 text-xs sm:text-sm font-bold tracking-wider px-6 py-3 rounded-xl hover:bg-slate-100 transition-all duration-200 uppercase cursor-pointer flex items-center gap-2 shadow-2xs"
              >
                <BookOpen className="w-3.5 h-3.5 text-[#007FAA]" />
                <span>{t.hero.ctaSyllabus}</span>
              </a>
            </div>

          </div>

          {/* Right Column: High-Res Executive Training & Seminar Photo Graphic */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              <div className="absolute -inset-2 bg-gradient-to-r from-[#00205B] via-[#007FAA] to-[#49BCED] rounded-3xl blur-xl opacity-25 pointer-events-none" />

              <div className="relative rounded-2xl overflow-hidden bg-slate-900 border border-slate-200 shadow-2xl">
                
                {/* Photo of Professor / Instructor Teaching Seminar */}
                <div className="relative aspect-[4/3] sm:aspect-[14/11] bg-slate-950 overflow-hidden">
                  <img 
                    src="/images/hero_executive_training.jpg" 
                    alt="Executive Masterclass Seminar & Training ITB x Sinaptik" 
                    className="w-full h-full object-cover filter contrast-105 hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
                  
                  {/* Clean Cohort Badge */}
                  <div className="absolute top-3 left-3 bg-slate-900/90 backdrop-blur-md text-white px-3 py-1 rounded-lg border border-white/20 text-xs font-bold flex items-center gap-2 shadow-md">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                    <span>Cohort September 2026</span>
                  </div>
                </div>

                {/* Organizer Credential Info */}
                <div className="p-4 sm:p-5 bg-slate-900 text-white space-y-3">
                  <div className="flex items-center justify-between border-b border-white/10 pb-2.5">
                    <div>
                      <div className="text-[10px] text-slate-400 font-semibold uppercase tracking-wider">{t.hero.cardOrganizerLabel}</div>
                      <div className="text-xs sm:text-sm font-extrabold text-white mt-0.5">{t.hero.cardOrganizerVal}</div>
                    </div>
                    <span className="text-[10px] text-[#49BCED] font-bold bg-[#007FAA]/20 px-2 py-0.5 rounded border border-[#007FAA]/40">
                      {t.hero.cardBadgeRadya}
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-2.5 text-xs">
                    <div className="p-2.5 rounded-xl bg-white/5 border border-white/10">
                      <div className="text-slate-400 font-medium text-[10px]">{t.hero.cardRankTitle}</div>
                      <div className="text-white font-bold text-xs sm:text-sm mt-0.5">{t.hero.cardRankVal}</div>
                      <div className="text-[9px] text-slate-400">{t.hero.cardRankSub}</div>
                    </div>

                    <div className="p-2.5 rounded-xl bg-white/5 border border-white/10">
                      <div className="text-slate-400 font-medium text-[10px]">{t.hero.cardTrackTitle}</div>
                      <div className="text-white font-bold text-xs sm:text-sm mt-0.5">{t.hero.cardTrackVal}</div>
                      <div className="text-[9px] text-slate-400">{t.hero.cardTrackSub}</div>
                    </div>
                  </div>

                  <div className="pt-0.5 flex items-center justify-between text-[11px] text-slate-300">
                    <span className="flex items-center gap-1.5">
                      <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                      {t.hero.cardCertText}
                    </span>
                    <span className="text-slate-400 text-[10px]">{t.hero.cardCredTag}</span>
                  </div>
                </div>

              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

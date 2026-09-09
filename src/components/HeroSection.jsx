import React from 'react';
import { 
  ShieldCheck, 
  ArrowRight, 
  Clock, 
  Award,
  Calendar,
  BookOpen
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const HeroSection = ({ onOpenWhatsapp }) => {
  const { t } = useLanguage();

  return (
    <section id="hero" className="relative py-5 sm:py-6 lg:py-8 border-b border-slate-200 flex flex-col justify-center overflow-hidden">
      
      {/* Background Ambient Glows */}
      <div className="absolute top-0 right-0 w-[550px] h-[550px] bg-[#007FAA]/10 rounded-full blur-3xl pointer-events-none -translate-y-1/4 translate-x-1/4" />
      <div className="absolute bottom-0 left-0 w-[450px] h-[450px] bg-[#49BCED]/15 rounded-full blur-3xl pointer-events-none translate-y-1/4 -translate-x-1/4" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        
        {/* Single-Frame Hero Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
          
          {/* Left Column: Copywriting formatted exactly as Image 1 */}
          <div className="lg:col-span-7 space-y-3">
            
            {/* Headline (H1) */}
            <h1 className="text-[28px] sm:text-4xl lg:text-[36px] xl:text-[40px] font-extrabold text-[#0F172A] tracking-tight leading-[1.15]">
              {t.hero.title}
            </h1>

            {/* Subhead text below headline */}
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl font-normal">
              {t.hero.subhead}
            </p>

            {/* Program Title Highlight Box */}
            <div className="space-y-0.5">
              <div className="text-base sm:text-lg font-extrabold text-[#007FAA] tracking-tight">
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
            <div className="grid grid-cols-3 gap-3 pt-2.5 pb-2.5 border-y border-slate-200">
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

            {/* Buttons (Primary "Lihat Program" & Secondary "Silabus") - Placed at Bottom */}
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <button
                onClick={onOpenWhatsapp}
                className="bg-[#007FAA] hover:bg-[#005F80] text-white text-xs sm:text-sm font-bold tracking-wider px-5 py-2.5 rounded-xl transition-all duration-200 uppercase flex items-center gap-2 shadow-md hover:shadow-lg cursor-pointer"
              >
                <span>{t.hero.ctaPrimary}</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href="#curriculum"
                className="border border-slate-300 text-slate-800 text-xs sm:text-sm font-bold tracking-wider px-5 py-2.5 rounded-xl hover:bg-slate-100 transition-all duration-200 uppercase cursor-pointer flex items-center gap-2 shadow-2xs"
              >
                <BookOpen className="w-3.5 h-3.5 text-[#007FAA]" />
                <span>{t.hero.ctaSyllabus}</span>
              </a>
            </div>

          </div>

          {/* Right Column: High-Res Executive Training & Seminar Photo Graphic */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto w-full max-w-md lg:max-w-[420px]">
              
              <div className="absolute -inset-2 bg-gradient-to-r from-[#00205B] via-[#007FAA] to-[#49BCED] rounded-3xl blur-xl opacity-25 pointer-events-none" />

              <div className="relative rounded-2xl overflow-hidden bg-slate-900 border border-slate-200 shadow-2xl">
                
                {/* Photo of Professor / Instructor Teaching Seminar */}
                <div className="relative aspect-[16/10] bg-slate-950 overflow-hidden">
                  <img 
                    src="/images/hero_executive_training.jpg" 
                    alt="Executive Masterclass Seminar & Training ITB x Sinaptik" 
                    className="w-full h-full object-cover filter contrast-105 hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
                </div>

                {/* Organizer Credential Info */}
                <div className="p-3.5 sm:p-4 bg-slate-900 text-white space-y-2.5">
                  <div className="flex items-center justify-between border-b border-white/10 pb-2">
                    <div>
                      <div className="text-[10px] text-slate-400 font-semibold uppercase tracking-wider">{t.hero.cardOrganizerLabel}</div>
                      <div className="text-xs sm:text-sm font-extrabold text-white mt-0.5">{t.hero.cardOrganizerVal}</div>
                    </div>
                    <span className="text-[10px] text-[#49BCED] font-bold bg-[#007FAA]/20 px-2 py-0.5 rounded border border-[#007FAA]/40">
                      {t.hero.cardBadgeRadya}
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-2 text-xs">
                    <div className="p-2 rounded-xl bg-white/5 border border-white/10">
                      <div className="text-slate-400 font-medium text-[10px]">{t.hero.cardRankTitle}</div>
                      <div className="text-white font-bold text-xs sm:text-sm mt-0.5">{t.hero.cardRankVal}</div>
                      <div className="text-[9px] text-slate-400">{t.hero.cardRankSub}</div>
                    </div>

                    <div className="p-2 rounded-xl bg-white/5 border border-white/10">
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

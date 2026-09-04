import React, { useState } from 'react';
import { BookOpen, Video, MapPin, Award, ChevronDown, Cpu, Download, Sparkles } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const CurriculumSection = ({ onOpenWhatsapp }) => {
  // Default to all closed (null) as shown in reference image
  const [openPhase, setOpenPhase] = useState(null);
  const { t, programData } = useLanguage();
  const curriculumPhases = programData.curriculumPhases || [];

  return (
    <section id="curriculum" className="py-20 bg-slate-50/60 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#00205B]/10 text-[#00205B] text-xs font-bold uppercase tracking-wider">
            <BookOpen className="w-4 h-4 text-[#007FAA]" />
            <span>{t.curriculum.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            {t.curriculum.title}
          </h2>
          <p className="text-base text-slate-600 leading-relaxed">
            {t.curriculum.description}
          </p>
        </div>

        {/* Quick Specs Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10 bg-white p-5 rounded-2xl border border-slate-200 shadow-xs">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#00205B]/10 text-[#00205B] flex items-center justify-center shrink-0">
              <Video className="w-5 h-5" />
            </div>
            <div>
              <div className="text-sm font-bold text-slate-900">{t.curriculum.specsOnline}</div>
              <div className="text-xs text-slate-500">{t.curriculum.specsOnlineSub}</div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-600 flex items-center justify-center shrink-0">
              <MapPin className="w-5 h-5" />
            </div>
            <div>
              <div className="text-sm font-bold text-slate-900">{t.curriculum.specsOffline}</div>
              <div className="text-xs text-slate-500">{t.curriculum.specsOfflineSub}</div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-blue-500/10 text-blue-600 flex items-center justify-center shrink-0">
              <Cpu className="w-5 h-5" />
            </div>
            <div>
              <div className="text-sm font-bold text-slate-900">{t.curriculum.specsLab}</div>
              <div className="text-xs text-slate-500">{t.curriculum.specsLabSub}</div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-600 flex items-center justify-center shrink-0">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <div className="text-sm font-bold text-slate-900">{t.curriculum.specsCert}</div>
              <div className="text-xs text-slate-500">{t.curriculum.specsCertSub}</div>
            </div>
          </div>
        </div>

        {/* Single Unified 3-Phase Container Card (Exact Match to User Reference Screenshot) */}
        <div className="rounded-3xl border border-slate-200/90 shadow-xl bg-white overflow-hidden divide-y divide-slate-100">
          {curriculumPhases.map((phaseData, idx) => {
            const isOpen = openPhase === idx;

            // Distinct blue shades matching reference screenshot
            const sidebarColors = [
              'bg-[#1B365D]', // Phase 1: Deep Navy Blue
              'bg-[#0066CC]', // Phase 2: Vibrant Blue
              'bg-[#0052CC]'  // Phase 3: Royal Blue
            ];

            return (
              <div
                key={idx}
                className={`flex flex-col md:flex-row transition-all duration-200 ${
                  isOpen ? 'bg-slate-50/50' : 'bg-white'
                }`}
              >
                {/* Left Sidebar Block */}
                <div
                  className={`${sidebarColors[idx % sidebarColors.length]} text-white p-6 md:p-8 md:w-80 shrink-0 flex flex-col justify-between`}
                >
                  <div className="space-y-2">
                    <div className="text-[11px] font-black uppercase tracking-widest text-white/80">
                      {phaseData.phase}
                    </div>

                    <h3 className="text-lg sm:text-xl font-extrabold tracking-tight text-white leading-snug">
                      {phaseData.title}
                    </h3>
                  </div>

                  <div className="pt-4 mt-3 border-t border-white/20 flex items-center justify-between text-xs font-semibold text-white/90">
                    <span>{phaseData.weeks} ({phaseData.sessionRange})</span>
                    <span className="text-[10px] font-bold uppercase tracking-wider bg-white/20 px-2 py-0.5 rounded text-white">
                      {phaseData.formatType === 'onsite' ? 'Onsite ITB' : 'Online'}
                    </span>
                  </div>
                </div>

                {/* Right Interactive Teaser Row */}
                <div className="flex-1 p-6 md:p-8 flex flex-col justify-between">
                  <button
                    onClick={() => setOpenPhase(isOpen ? null : idx)}
                    className="w-full text-left flex items-center justify-between gap-6 cursor-pointer focus:outline-none group"
                  >
                    <p className="text-sm sm:text-base text-slate-700 font-normal leading-relaxed pr-2">
                      {phaseData.teaser}
                    </p>

                    <div className={`w-8 h-8 rounded-full flex items-center justify-center bg-slate-100 group-hover:bg-slate-200 text-slate-700 shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 bg-[#00205B]/10 text-[#00205B]' : ''
                    }`}>
                      <ChevronDown className="w-5 h-5" />
                    </div>
                  </button>

                  {/* Expandable "What you'll learn:" content */}
                  {isOpen && (
                    <div className="mt-6 pt-6 border-t border-slate-200 animate-fade-in space-y-4">
                      <div className="text-xs font-extrabold uppercase tracking-wider text-slate-900 flex items-center gap-2">
                        <Sparkles className="w-4 h-4 text-emerald-600" />
                        <span>{t.curriculum.keyTopics || "Yang akan Anda pelajari (Highlights):"}</span>
                      </div>

                      <ul className="space-y-3">
                        {phaseData.learnItems.map((item, itemIdx) => (
                          <li key={itemIdx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-600 leading-relaxed">
                            <span className="w-2 h-2 rounded-full bg-[#00205B] mt-2 shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* WhatsApp Syllabus Request CTA Box */}
        <div className="mt-12 p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-[#001744] via-[#00205B] to-[#003F55] text-white border border-slate-800 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-bold uppercase tracking-wider border border-emerald-500/30">
              <Download className="w-3.5 h-3.5" />
              <span>{t.curriculum.brochureTag}</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight">
              {t.curriculum.brochureTitle}
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 max-w-xl">
              {t.curriculum.brochureSub}
            </p>
          </div>

          <button
            onClick={onOpenWhatsapp}
            className="bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-bold text-xs uppercase tracking-wider px-7 py-4 rounded-2xl transition-all duration-200 shadow-lg hover:shadow-xl flex items-center gap-2.5 shrink-0 cursor-pointer"
          >
            <Download className="w-4 h-4" />
            <span>{t.curriculum.brochureCta}</span>
          </button>
        </div>

      </div>
    </section>
  );
};

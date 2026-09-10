import React, { useState } from 'react';
import { Video, MapPin, Award, ChevronDown, Cpu, Download, Layers, CheckCircle2 } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const CurriculumSection = ({ onOpenWhatsapp }) => {
  // Default to all closed (null) as shown in reference image
  const [openPhase, setOpenPhase] = useState(null);
  const { t, programData, lang } = useLanguage();
  const curriculumPhases = programData.curriculumPhases || [];

  return (
    <section id="curriculum" className="py-20 bg-slate-50/60 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-12 space-y-3">
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

        {/* Daftar Minggu — kartu horizontal panjang per minggu, sekali expand */}
        <div className="space-y-4">
          {curriculumPhases.map((phaseData, idx) => {
            const isOpen = openPhase === idx;

            // Gradasi menyambung dari atas (Minggu 1) ke bawah (Minggu 3)
            const headerBg = [
              'bg-gradient-to-r from-[#0E223F] via-[#1B365D] to-[#2A4E7A]',
              'bg-gradient-to-r from-[#1B365D] via-[#00479B] to-[#0052CC]',
              'bg-gradient-to-r from-[#0052CC] via-[#0063B8] to-[#007FAA]',
            ][idx % 3];

            return (
              <div
                key={idx}
                className={`rounded-2xl overflow-hidden transition-all duration-200 border ${
                  isOpen ? 'border-[#00205B]/40 shadow-lg' : 'border-slate-200 hover:border-slate-300 shadow-xs'
                }`}
              >
                <button
                  onClick={() => setOpenPhase(isOpen ? null : idx)}
                  className={`w-full flex items-center gap-3 sm:gap-4 p-4 sm:p-5 text-left cursor-pointer focus:outline-none ${headerBg}`}
                >
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 flex-wrap text-[11px] font-bold uppercase tracking-wider">
                      <span className="bg-white/15 text-white px-2 py-0.5 rounded border border-white/20">
                        {phaseData.weeks} ({phaseData.sessionRange})
                      </span>
                      <span className="text-white/70">• {phaseData.format}</span>
                    </div>
                    <div className="text-base sm:text-lg font-extrabold text-white tracking-tight mt-1 leading-snug">
                      {phaseData.title}
                    </div>
                  </div>
                  <div className="flex items-center shrink-0">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-all duration-200 bg-white/15 text-white ${
                      isOpen ? 'rotate-180' : ''
                    }`}>
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </div>
                </button>

                {isOpen && (
                  <div className={`px-4 sm:px-5 pb-5 pt-4 border-t border-white/20 space-y-4 ${headerBg}`}>
                    <p className="text-xs sm:text-sm text-white/90 leading-relaxed font-semibold">
                      {phaseData.teaser}
                    </p>

                    {/* Jumlah sesi & metode */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div className="flex items-center gap-3 p-3 rounded-xl bg-white/10 border border-white/20">
                        <div className="w-9 h-9 rounded-lg bg-white/15 text-white flex items-center justify-center shrink-0">
                          <Layers className="w-5 h-5" />
                        </div>
                        <div>
                          <div className="text-[10px] font-extrabold uppercase tracking-wider text-white/70">
                            {lang === 'en' ? 'Sessions' : 'Jumlah Sesi'}
                          </div>
                          <div className="text-sm font-extrabold text-white">{phaseData.sessionRange}</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-3 p-3 rounded-xl bg-white/10 border border-white/20">
                        <div className="w-9 h-9 rounded-lg bg-white/15 text-white flex items-center justify-center shrink-0">
                          {phaseData.formatType === 'onsite' ? <MapPin className="w-5 h-5" /> : <Video className="w-5 h-5" />}
                        </div>
                        <div>
                          <div className="text-[10px] font-extrabold uppercase tracking-wider text-white/70">
                            {lang === 'en' ? 'Learning Method' : 'Metode Belajar'}
                          </div>
                          <div className="text-sm font-extrabold text-white">{phaseData.format}</div>
                        </div>
                      </div>
                    </div>

                    <div className="text-[11px] font-extrabold uppercase tracking-wider text-white">
                      {t.curriculum.keyTopics}
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {phaseData.learnItems.map((item, itemIdx) => (
                        <span
                          key={itemIdx}
                          className="inline-flex items-center gap-1.5 text-xs font-semibold text-white bg-white/10 border border-white/20 rounded-lg px-2.5 py-1.5"
                        >
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-300 shrink-0" />
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* WhatsApp Syllabus Request CTA Box */}
        <div className="mt-12 p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-[#001744] via-[#00205B] to-[#003F55] text-white border border-slate-800 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
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

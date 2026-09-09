import React, { useState } from 'react';
import { Video, MapPin, Award, ChevronDown, Cpu, Download, Layers, CheckCircle2 } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const CurriculumSection = ({ onOpenWhatsapp }) => {
  // Default to all closed (null) as shown in reference image
  const [openPhase, setOpenPhase] = useState(null);
  const [openSession, setOpenSession] = useState(null);
  const { t, programData, lang } = useLanguage();
  const curriculumPhases = programData.curriculumPhases || [];
  const curriculum = programData.curriculum || [];
  // Minggu 1 = Sesi 1-3, Minggu 2 = Sesi 4-6, Minggu 3 = Sesi 7-8
  const weekRanges = [[1, 3], [4, 6], [7, 8]];

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
                {/* Left Sidebar Block — per Minggu */}
                <div
                  className={`${sidebarColors[idx % sidebarColors.length]} text-white p-6 md:p-8 md:w-80 shrink-0 flex flex-col justify-center`}
                >
                  <div className="space-y-2">
                    <div className="text-[11px] font-black uppercase tracking-widest text-white/80">
                      {phaseData.weeks}
                    </div>

                    <h3 className="text-lg sm:text-xl font-extrabold tracking-tight text-white leading-snug">
                      {phaseData.title}
                    </h3>
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

                  {/* Expandable detail: ringkasan sesi + daftar kartu sesi */}
                  {isOpen && (() => {
                    const [rangeStart, rangeEnd] = weekRanges[idx] || [0, 0];
                    const weekSessions = curriculum.filter(
                      (s) => s.sessionNum >= rangeStart && s.sessionNum <= rangeEnd
                    );
                    return (
                    <div className="mt-6 pt-6 border-t border-slate-200 animate-fade-in space-y-4">
                      {/* Sesi & Metode */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-50 border border-slate-200">
                          <div className="w-9 h-9 rounded-lg bg-[#00205B]/10 text-[#00205B] flex items-center justify-center shrink-0">
                            <Layers className="w-5 h-5" />
                          </div>
                          <div>
                            <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                              {lang === 'en' ? 'Sessions' : 'Jumlah Sesi'}
                            </div>
                            <div className="text-sm font-bold text-slate-900">{phaseData.sessionRange}</div>
                          </div>
                        </div>
                        <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-50 border border-slate-200">
                          <div className="w-9 h-9 rounded-lg bg-emerald-500/10 text-emerald-600 flex items-center justify-center shrink-0">
                            {phaseData.formatType === 'onsite' ? <MapPin className="w-5 h-5" /> : <Video className="w-5 h-5" />}
                          </div>
                          <div>
                            <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                              {lang === 'en' ? 'Learning Method' : 'Metode Belajar'}
                            </div>
                            <div className="text-sm font-bold text-slate-900">{phaseData.format}</div>
                          </div>
                        </div>
                      </div>

                      {/* Daftar kartu sesi dalam minggu ini */}
                      <div className="space-y-3">
                        {weekSessions.map((session) => {
                          const sessionOpen = openSession === session.sessionNum;
                          return (
                            <div
                              key={session.sessionNum}
                              className={`rounded-2xl border bg-white overflow-hidden transition-all duration-200 ${
                                sessionOpen ? 'border-[#00205B] shadow-md' : 'border-slate-200 hover:border-slate-300'
                              }`}
                            >
                              <button
                                onClick={() => setOpenSession(sessionOpen ? null : session.sessionNum)}
                                className="w-full flex items-center gap-3 sm:gap-4 p-4 sm:p-5 text-left cursor-pointer focus:outline-none"
                              >
                                <div className={`w-12 h-12 rounded-xl flex items-center justify-center font-extrabold text-base shrink-0 transition-colors ${
                                  sessionOpen ? 'bg-[#00205B] text-white' : 'bg-slate-100 text-slate-900'
                                }`}>
                                  {String(session.sessionNum).padStart(2, '0')}
                                </div>
                                <div className="flex-1 min-w-0">
                                  <div className="flex items-center gap-2 flex-wrap text-[11px] font-bold uppercase tracking-wider">
                                    <span className="bg-slate-100 text-slate-700 px-2 py-0.5 rounded">
                                      {t.curriculum.sessionNumPrefix} {session.sessionNum} ({session.type})
                                    </span>
                                    <span className="text-slate-400">• {session.category}</span>
                                  </div>
                                  <div className="text-base sm:text-lg font-extrabold text-slate-900 tracking-tight mt-1 leading-snug">
                                    {session.title}
                                  </div>
                                </div>
                                <div className="flex items-center gap-2 shrink-0">
                                  <span className="hidden sm:block text-xs text-slate-400 font-medium whitespace-nowrap">
                                    {sessionOpen ? t.curriculum.hideDetail : t.curriculum.viewDetail}
                                  </span>
                                  <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-all duration-200 ${
                                    sessionOpen ? 'rotate-180 bg-[#00205B]/10 text-[#00205B]' : 'bg-slate-100 text-slate-600'
                                  }`}>
                                    <ChevronDown className="w-4 h-4" />
                                  </div>
                                </div>
                              </button>

                              {sessionOpen && (
                                <div className="px-4 sm:px-5 pb-5 pt-4 border-t border-slate-100 bg-slate-50/60 space-y-3">
                                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                                    {session.summary}
                                  </p>
                                  <div className="text-[11px] font-extrabold uppercase tracking-wider text-slate-500">
                                    {t.curriculum.keyTopics}
                                  </div>
                                  <div className="flex flex-wrap gap-2">
                                    {session.topics.map((topic, topicIdx) => (
                                      <span
                                        key={topicIdx}
                                        className="inline-flex items-center gap-1.5 text-xs text-slate-700 bg-white border border-slate-200 rounded-lg px-2.5 py-1.5"
                                      >
                                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                                        {topic}
                                      </span>
                                    ))}
                                  </div>
                                </div>
                              )}
                            </div>
                          );
                        })}
                      </div>
                    </div>
                    );
                  })()}
                </div>
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

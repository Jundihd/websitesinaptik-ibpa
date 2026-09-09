import React from 'react';
import { CheckCircle2, UserCheck } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const TargetAudienceSection = () => {
  const { t, programData } = useLanguage();
  const targetAudience = programData.targetAudience || [];
  const prerequisites = programData.prerequisites || [];

  return (
    <section id="audience" className="py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-14 space-y-3">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            {t.targetAudience.title}
          </h2>
          <p className="text-base text-slate-600">
            {t.targetAudience.description}
          </p>
        </div>

        {/* 4 Audience Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {targetAudience.map((persona) => (
            <div
              key={persona.id}
              className="bg-slate-50 hover:bg-white rounded-3xl p-6 border border-slate-200 hover:border-[#007FAA] hover:shadow-xl transition-all duration-300 flex flex-col justify-between group relative overflow-hidden"
            >
              <div className="space-y-4">
                <div className="inline-flex items-center gap-1.5 text-[10px] font-extrabold uppercase tracking-wider text-[#007FAA] bg-[#007FAA]/10 px-3 py-1 rounded-md border border-[#007FAA]/10">
                  {persona.tag}
                </div>

                <h3 className="text-lg font-bold text-slate-900 tracking-tight group-hover:text-[#007FAA] transition-colors leading-snug">
                  {persona.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                  {persona.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Prerequisites */}
        <div className="p-8 rounded-3xl bg-[#003F55] text-white border border-slate-800 shadow-2xl space-y-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#49BCED]/20 text-[#49BCED] flex items-center justify-center font-bold">
              <UserCheck className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white">{t.targetAudience.prereqTitle}</h3>
              <p className="text-xs text-slate-300">{t.targetAudience.prereqSub}</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-stretch">
            {prerequisites.map((req, idx) => (
              <div key={idx} className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-1 h-full">
                <div className="text-xs font-bold text-[#49BCED] uppercase tracking-wider flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  <span>{req.title}</span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {req.detail}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

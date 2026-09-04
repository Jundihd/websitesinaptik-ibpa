import React from 'react';
import { Video, MapPin, Cpu, Award, ShieldCheck } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const AboutSection = () => {
  const { t, programData } = useLanguage();
  const rawPillars = programData.pillars || [];
  const icons = [Video, MapPin, Cpu, Award];

  const pillars = rawPillars.map((item, idx) => ({
    ...item,
    icon: icons[idx % icons.length]
  }));

  return (
    <section id="about" className="py-20 bg-white border-b border-slate-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Description */}
          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#007FAA]/10 text-[#007FAA] text-xs font-bold uppercase tracking-wider">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>{t.about.badge}</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight">
                {t.about.title}
              </h2>
            </div>

            <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-medium">
              {t.about.leadText}
            </p>

            <p className="text-base text-slate-600 leading-relaxed font-normal">
              {t.about.description}
            </p>
          </div>

          {/* Right 4 Pillars Cards */}
          <div className="lg:col-span-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {pillars.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div
                    key={idx}
                    className="p-6 rounded-2xl bg-slate-50 border border-slate-200 hover:border-[#007FAA]/40 hover:bg-white hover:shadow-md transition-all duration-200 space-y-3 group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-[#007FAA]/10 text-[#007FAA] group-hover:bg-[#007FAA] group-hover:text-white transition-colors duration-200 flex items-center justify-center shrink-0">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div className="text-lg font-bold text-slate-900 tracking-tight">
                      {item.title}
                    </div>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {item.detail}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

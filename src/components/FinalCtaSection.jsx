import React from 'react';
import { PhoneCall, ShieldCheck, ArrowRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const FinalCtaSection = ({ onOpenWhatsapp }) => {
  const { t } = useLanguage();

  return (
    <section className="relative bg-gradient-to-br from-[#003F55] via-[#005F80] to-[#001744] text-white py-20 md:py-28 overflow-hidden">
      
      {/* Glow Effects */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#007FAA]/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#49BCED]/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-8">
        
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 text-[#49BCED] text-xs font-bold uppercase tracking-wider border border-white/15">
          <ShieldCheck className="w-4 h-4 text-emerald-400" />
          <span>{t.ctaBanner.badge}</span>
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight max-w-4xl mx-auto">
          {t.ctaBanner.title}
        </h2>

        <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
          {t.ctaBanner.description}
        </p>

        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={onOpenWhatsapp}
            className="w-full sm:w-auto bg-[#49BCED] hover:bg-cyan-300 text-slate-950 font-extrabold text-sm sm:text-base tracking-wider px-9 py-4 rounded-xl transition-all shadow-xl flex items-center justify-center gap-3 cursor-pointer uppercase"
          >
            <PhoneCall className="w-5 h-5" />
            <span>{t.ctaBanner.btnMain}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="pt-2 text-xs text-slate-400 flex items-center justify-center gap-4 flex-wrap">
          <span>{t.ctaBanner.subNote}</span>
        </div>

      </div>
    </section>
  );
};

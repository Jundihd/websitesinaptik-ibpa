import React from 'react';
import { Sparkles, CheckCircle2, ArrowRight, PhoneCall, Globe, Users } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const PricingSection = ({ onOpenWhatsapp }) => {
  const { t, programData, lang } = useLanguage();
  const pricingData = programData.pricing || {};

  const individualFeatures = pricingData.individualFeatures || [];
  const groupFeatures = pricingData.groupFeatures || [];

  return (
    <section id="pricing" className="py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#007FAA]/10 text-[#007FAA] text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{t.pricing.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            {t.pricing.title}
          </h2>
          <p className="text-base text-slate-600">
            {t.pricing.description}
          </p>
        </div>

        {/* 2 Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch mb-12">
          
          {/* Individual Early Bird */}
          <div className="bg-white rounded-3xl p-7 sm:p-9 border border-slate-200 shadow-sm hover:shadow-md transition-all flex flex-col justify-between relative">
            <div className="space-y-5">
              <div className="flex items-center justify-between flex-wrap gap-2">
                <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-slate-700 bg-slate-100 px-3 py-1 rounded-md">
                  {t.pricing.earlyBirdTag}
                </span>
                <span className="text-xs font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2.5 py-1 rounded-md">
                  {t.pricing.earlyBirdDeadline}
                </span>
              </div>

              <div>
                <div className="flex items-center gap-2 text-sm text-slate-400 font-medium">
                  <span>{t.pricing.normalPriceLabel}</span>
                  <span className="line-through">{lang === 'en' ? 'IDR 10,999,999' : 'Rp 10.999.999'}</span>
                </div>
                <div className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-1">
                  {lang === 'en' ? 'IDR 9,999,999' : 'Rp 9.999.999'}
                </div>
                <div className="text-xs font-semibold text-emerald-600 mt-1">
                  {t.pricing.earlyBirdSave}
                </div>
              </div>

              <hr className="border-slate-100" />

              <div className="space-y-3">
                <div className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  {t.pricing.featuresLabel}
                </div>
                <ul className="space-y-2.5">
                  {individualFeatures.map((feat, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 leading-snug">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-slate-100">
              <button
                onClick={onOpenWhatsapp}
                className="w-full bg-slate-900 hover:bg-[#007FAA] text-white font-semibold text-sm sm:text-base py-3.5 rounded-xl transition-all flex items-center justify-center gap-2 cursor-pointer shadow-xs group"
              >
                <span>{t.pricing.btnEarlyBird}</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* Special Group Price */}
          <div className="bg-gradient-to-b from-[#003F55] to-[#005F80] text-white rounded-3xl p-7 sm:p-9 border-2 border-[#007FAA] shadow-xl flex flex-col justify-between relative overflow-hidden">
            
            <div className="absolute top-0 right-0 bg-[#49BCED] text-slate-950 font-extrabold text-[11px] uppercase tracking-wider px-4 py-1.5 rounded-bl-xl shadow-xs">
              {t.pricing.groupTag}
            </div>

            <div className="space-y-5 pt-1">
              <div className="flex items-center gap-2 flex-wrap">
                <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-blue-200 bg-white/10 px-3 py-1 rounded-md border border-white/10">
                  <Users className="w-3.5 h-3.5 text-[#49BCED]" />
                  Special Group Price
                </span>
                <span className="text-xs font-bold text-[#49BCED] bg-[#007FAA]/30 px-2.5 py-1 rounded-md border border-[#007FAA]/40">
                  {t.pricing.groupSaveHeader}
                </span>
              </div>

              <div>
                <div className="flex items-center gap-2 text-sm text-slate-300 font-medium">
                  <span>{t.pricing.normalPriceLabel}</span>
                  <span className="line-through">{lang === 'en' ? 'IDR 10,999,999' : 'Rp 10.999.999'}</span>
                </div>
                <div className="flex items-baseline gap-2 mt-1">
                  <div className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                    {lang === 'en' ? 'IDR 8,999,999' : 'Rp 8.999.999'}
                  </div>
                  <span className="text-sm font-medium text-slate-300">{t.pricing.perPerson}</span>
                </div>
                <div className="text-xs font-semibold text-[#49BCED] mt-1">
                  {t.pricing.groupMinNote}
                </div>
              </div>

              <hr className="border-white/10" />

              <div className="space-y-3">
                <div className="text-xs font-bold uppercase tracking-wider text-slate-300">
                  {t.pricing.groupFeaturesLabel}
                </div>
                <ul className="space-y-2.5">
                  {groupFeatures.map((feat, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-100 leading-snug">
                      <CheckCircle2 className="w-4 h-4 text-[#49BCED] shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-white/10">
              <button
                onClick={onOpenWhatsapp}
                className="w-full bg-[#49BCED] hover:bg-cyan-300 text-slate-950 font-bold text-sm sm:text-base py-3.5 rounded-xl transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md group"
              >
                <span>{t.pricing.btnGroup}</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

        </div>

        {/* Contact Admisi Banner */}
        <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xs">
          <div className="space-y-1 text-center md:text-left">
            <span className="text-xs font-bold uppercase tracking-wider text-[#007FAA] bg-[#007FAA]/10 px-2.5 py-0.5 rounded-md">
              {t.pricing.contactTag}
            </span>
            <h3 className="text-lg font-bold text-slate-900">
              {t.pricing.contactTitle}
            </h3>
            <p className="text-xs text-slate-500">
              {t.pricing.contactSub}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={onOpenWhatsapp}
              className="inline-flex items-center gap-2 bg-[#007FAA] hover:bg-[#005F80] text-white text-xs sm:text-sm font-bold px-5 py-3 rounded-xl transition-colors shadow-xs cursor-pointer"
            >
              <PhoneCall className="w-4 h-4 text-[#49BCED]" />
              <span>{t.pricing.waBtn}</span>
            </button>

            <a
              href="https://sinaptik.id"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs sm:text-sm font-semibold px-4 py-3 rounded-xl transition-colors border border-slate-200"
            >
              <Globe className="w-4 h-4 text-slate-600" />
              <span>sinaptik.id</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};

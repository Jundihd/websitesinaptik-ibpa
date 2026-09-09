import React, { useState } from 'react';
import { ChevronDown, PhoneCall } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const FaqSection = ({ onOpenWhatsapp }) => {
  const [openIndex, setOpenIndex] = useState(0);
  const { t, programData } = useLanguage();
  const faqs = programData.faqs || [];

  return (
    <section id="faq" className="py-20 bg-white border-b border-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            {t.faq.title}
          </h2>
          <p className="text-sm text-slate-600">
            {t.faq.description}
          </p>
        </div>

        {/* FAQ Accordion List - Card Styled (Matches Reference Screenshot) */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div 
                key={idx} 
                className={`rounded-2xl bg-white p-5 sm:p-6 transition-all duration-200 border ${
                  isOpen 
                    ? 'border-slate-900 shadow-md ring-1 ring-slate-900/5' 
                    : 'border-slate-200/90 hover:border-slate-300 shadow-xs'
                }`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full text-left flex justify-between items-center gap-4 focus:outline-none group cursor-pointer"
                >
                  <span className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-[#00205B] transition-colors leading-snug">
                    {faq.question}
                  </span>
                  <span className={`w-8 h-8 rounded-full flex items-center justify-center bg-slate-100 group-hover:bg-slate-200 text-slate-600 shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180 bg-[#00205B]/10 text-[#00205B]' : ''}`}>
                    <ChevronDown className="w-4 h-4" />
                  </span>
                </button>

                {isOpen && (
                  <div className="mt-4 pt-4 border-t border-slate-100 text-sm text-slate-600 leading-relaxed font-normal animate-fade-in">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Ask Question Support Box */}
        <div className="mt-12 text-center p-8 rounded-3xl bg-slate-50 border border-slate-200 space-y-4">
          <h3 className="text-lg font-bold text-slate-900">
            {t.faq.contactLead}
          </h3>
          <button
            onClick={onOpenWhatsapp}
            className="inline-flex items-center gap-2 bg-[#007FAA] hover:bg-[#005F80] text-white font-bold text-xs uppercase tracking-wider px-6 py-3 rounded-xl transition-colors cursor-pointer shadow-sm"
          >
            <PhoneCall className="w-4 h-4 text-[#49BCED]" />
            <span>{t.faq.contactBtn}</span>
          </button>
        </div>

      </div>
    </section>
  );
};

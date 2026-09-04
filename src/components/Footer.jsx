import React from 'react';
import { ShieldCheck, PhoneCall, Globe, MapPin, Building } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const Footer = ({ onOpenWhatsapp }) => {
  const { t } = useLanguage();

  return (
    <footer className="bg-slate-950 text-white pt-16 pb-12 border-t border-white/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3 sm:gap-4 shrink-0">
              {/* 1. Sinaptik Logo */}
              <a href="#" className="flex items-center group shrink-0">
                <img 
                  src="/images/logo_sinaptik.png" 
                  alt="SINAPTIK" 
                  className="h-7 sm:h-8 w-auto object-contain brightness-0 invert group-hover:scale-105 transition-transform"
                />
              </a>

              {/* Vertical Separator */}
              <div className="h-7 sm:h-8 w-px bg-slate-700 shrink-0" />

              {/* 2. ITB Directorate Logo Asset */}
              <div className="flex items-center shrink-0">
                <img 
                  src="/images/logo_itb_directorate.png" 
                  alt="Direktorat Pendidikan Profesional Berkelanjutan ITB" 
                  className="h-7 sm:h-8 md:h-9 w-auto object-contain"
                />
              </div>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              {t.footer.description}
            </p>

            <div className="flex items-center gap-3 text-xs text-slate-300 pt-2 flex-wrap">
              <span className="flex items-center gap-1.5 bg-white/5 px-3 py-1.5 rounded-lg border border-white/10">
                <ShieldCheck className="w-4 h-4 text-[#49BCED]" />
                {t.footer.certTag}
              </span>
              <span className="flex items-center gap-1.5 bg-white/5 px-3 py-1.5 rounded-lg border border-white/10">
                <Building className="w-4 h-4 text-emerald-400" />
                {t.footer.ecoTag}
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-3">
            <div className="text-xs font-extrabold uppercase tracking-wider text-slate-300">
              {t.footer.navTitle}
            </div>
            <ul className="space-y-2 text-xs text-slate-400">
              <li><a href="#hero" className="hover:text-white transition-colors">{t.nav.program}</a></li>
              <li><a href="#instructors" className="hover:text-white transition-colors">{t.nav.instructors}</a></li>
              <li><a href="#curriculum" className="hover:text-white transition-colors">{t.nav.curriculum}</a></li>
              <li><a href="#audience" className="hover:text-white transition-colors">{t.nav.audience}</a></li>
              <li><a href="#pricing" className="hover:text-white transition-colors">{t.nav.pricing}</a></li>
              <li><a href="#faq" className="hover:text-white transition-colors">{t.nav.faq}</a></li>
            </ul>
          </div>

          {/* Contact & Location */}
          <div className="md:col-span-4 space-y-3">
            <div className="text-xs font-extrabold uppercase tracking-wider text-slate-300">
              {t.footer.contactTitle}
            </div>
            
            <div className="space-y-2 text-xs text-slate-400">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#49BCED] shrink-0 mt-0.5" />
                <span>{t.footer.contactLocation}</span>
              </div>
              <div className="flex items-center gap-2">
                <PhoneCall className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>{t.footer.contactWa}</span>
              </div>
              <div className="flex items-center gap-2">
                <Globe className="w-4 h-4 text-amber-400 shrink-0" />
                <span>{t.footer.contactSite}</span>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={onOpenWhatsapp}
                className="bg-[#007FAA] hover:bg-[#005F80] text-white font-bold text-xs uppercase tracking-wider px-5 py-2.5 rounded-xl transition-colors cursor-pointer shadow-md border border-white/20"
              >
                {t.footer.btnContact}
              </button>
            </div>
          </div>

        </div>

        {/* Legal Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <div>
            © {new Date().getFullYear()} {t.footer.legalCopyright}
          </div>
          <div className="flex items-center gap-4 flex-wrap">
            <span>{t.footer.legalPrivacy}</span>
            <span>•</span>
            <span>{t.footer.legalTerms}</span>
            <span>•</span>
            <span>{t.footer.legalDept}</span>
          </div>
        </div>

      </div>
    </footer>
  );
};

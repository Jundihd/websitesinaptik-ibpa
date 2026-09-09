import React from 'react';
import { Users, CheckCircle2, ExternalLink, GraduationCap, Building2 } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const InstructorsSection = () => {
  const { t, programData } = useLanguage();
  const instructors = programData.instructors || [];

  return (
    <section id="instructors" className="py-20 bg-[#003F55] text-white border-b border-white/10 relative overflow-hidden">
      
      {/* Ambient Background Glows */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#007FAA]/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#49BCED]/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 text-[#49BCED] text-xs font-bold uppercase tracking-wider border border-white/10">
            <Users className="w-4 h-4 text-emerald-400" />
            <span>{t.instructors.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
            {t.instructors.title}
          </h2>
          <p className="text-base text-slate-300 leading-relaxed">
            {t.instructors.description}
          </p>
        </div>

        {/* 2 Instructors Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
          {instructors.map((mentor) => (
            <div
              key={mentor.id}
              className="bg-white/5 backdrop-blur-xl rounded-3xl p-7 sm:p-9 border border-white/15 hover:border-white/30 transition-all duration-300 flex flex-col justify-between group shadow-2xl relative overflow-hidden"
            >
              {/* Top Gradient Accent Bar */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#49BCED] via-[#007FAA] to-emerald-400" />

              <div className="space-y-6">
                
                {/* Profile Header */}
                <div className="flex flex-col sm:flex-row gap-6 items-start">
                  
                  {/* Photo Frame */}
                  <div className="w-32 h-40 sm:w-36 sm:h-44 rounded-2xl overflow-hidden shrink-0 relative border-2 border-white/20 bg-slate-950 shadow-md">
                    <img 
                      src={mentor.image} 
                      alt={mentor.name} 
                      className="w-full h-full object-cover filter contrast-105 group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
                  </div>

                  <div className="space-y-2 min-w-0">
                    
                    {/* Affiliation Badge */}
                    <div className="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-md bg-[#007FAA]/30 text-[#49BCED] border border-[#007FAA]/50">
                      {mentor.id === 'dody' ? <GraduationCap className="w-3.5 h-3.5" /> : <Building2 className="w-3.5 h-3.5" />}
                      <span>{mentor.affiliation}</span>
                    </div>

                    <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight leading-tight">
                      {mentor.name}
                    </h3>

                    <p className="text-sm text-[#49BCED] font-semibold">
                      {mentor.role}
                    </p>

                    <div className="pt-2">
                      <a
                        href={mentor.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-[#0077B5] hover:bg-[#005E93] text-white text-xs font-bold px-3.5 py-1.5 rounded-lg transition-colors cursor-pointer shadow-xs"
                      >
                        <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                          <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.25V10.9H6.46M7.86 6.75a1.4 1.4 0 1 0 0 2.8 1.4 1.4 0 0 0 0-2.8Z"/>
                        </svg>
                        <span>{t.instructors.linkedIn}</span>
                        <ExternalLink className="w-3 h-3 ml-0.5" />
                      </a>
                    </div>

                  </div>
                </div>

                {/* Bio */}
                <div className="space-y-3 pt-2">
                  <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-normal">
                    {mentor.bio}
                  </p>
                </div>

                {/* Credentials */}
                <div className="space-y-2 pt-2 border-t border-white/10">
                  <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                    {t.instructors.credentialsHeader}
                  </div>
                  <ul className="space-y-1.5">
                    {mentor.credentials.map((cred, i) => (
                      <li key={i} className="flex items-center gap-2 text-xs text-slate-200">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                        <span>{cred}</span>
                      </li>
                    ))}
                  </ul>
                </div>

              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

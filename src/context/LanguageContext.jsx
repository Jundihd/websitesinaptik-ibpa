import React, { createContext, useContext, useState } from 'react';
import { translations, programDataEn, programDataId } from '../data/translations';

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [lang, setLang] = useState('id'); // Default to Indonesian

  const t = translations[lang] || translations.id;
  const programData = lang === 'en' ? programDataEn : programDataId;

  const toggleLanguage = () => {
    setLang((prev) => (prev === 'en' ? 'id' : 'en'));
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, toggleLanguage, t, programData }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

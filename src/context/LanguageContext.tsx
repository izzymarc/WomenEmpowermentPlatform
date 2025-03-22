import React, { createContext, useContext, useState, ReactNode } from 'react';

type LanguageContextType = {
  currentLanguage: string;
  setLanguage: (lang: string) => void;
};

const LanguageContext = createContext<LanguageContextType>({
  currentLanguage: 'en',
  setLanguage: () => {},
});

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [currentLanguage, setCurrentLanguage] = useState(
    localStorage.getItem('preferredLang') || 'en'
  );

  const setLanguage = (langCode: string) => {
    setCurrentLanguage(langCode);
    localStorage.setItem('preferredLang', langCode);
  };

  return (
    <LanguageContext.Provider value={{ currentLanguage, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export const useLanguage = () => useContext(LanguageContext);

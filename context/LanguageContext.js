// context/LanguageContext.js
import { createContext, useContext, useState } from 'react';

export const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  // Keep track of the current language (en / es). Default: English.
  const [lang, setLang] = useState('en');

  // Toggle between English/Spanish
  const toggleLang = () => {
    setLang((prev) => (prev === 'en' ? 'es' : 'en'));
  };

  return (
    <LanguageContext.Provider value={{ lang, toggleLang }}>
      {children}
    </LanguageContext.Provider>
  );
}

// Hook to easily get current language and toggler
export function useLanguage() {
  return useContext(LanguageContext);
}

import { createContext, useState } from "react";

export const LanguageContext = createContext();

const translations = {
  it: {
    hello: "Ciao",
    contact: "Contatti",
  },
  en: {
    hello: "Hello",
    contact: "Contact",
  },
};

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState("it");

  const t = key => translations[lang][key];

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}
import React, { createContext, useState } from "react";

const LanguageContext = createContext();

function LanguageProvider(props) {
  const [language, setLanguage] = useState("french");

  const changeLanguage = (evt) => {
    setLanguage(evt.target.value);
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage: changeLanguage }}>
      {props.children}
    </LanguageContext.Provider>
  );
}

export { LanguageContext, LanguageProvider };

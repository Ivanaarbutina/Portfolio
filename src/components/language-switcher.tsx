import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const [selectedLanguage, setSelectedLanguage] = useState(
    localStorage.getItem("selectedLanguage") || "en"
  );

  useEffect(() => {
    // Postavite jezik iz localStorage kada se komponenta montira
    const storedLanguage = localStorage.getItem("selectedLanguage");
    if (storedLanguage) {
      i18n.changeLanguage(storedLanguage);
    }
  }, [i18n]);

  const changeLanguage = (lang: string) => {
    // Sačuvaj izabrani jezik u localStorage
    localStorage.setItem("selectedLanguage", lang);
    setSelectedLanguage(lang);
    i18n.changeLanguage(lang);
    window.location.reload(); // Osveži stranicu nakon promene jezika
  };

  return (
    <div className="translation">
      <select
        className="language-switcher"
        onChange={(e) => changeLanguage(e.target.value)}
        value={selectedLanguage}
      >
        <option className="language-switcher__option" value="en">
          EN
        </option>
        <option className="language-switcher__option" value="hr">
          HR
        </option>
      </select>
    </div>
  );
};

export default LanguageSwitcher;

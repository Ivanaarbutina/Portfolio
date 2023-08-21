import { useTranslation } from "react-i18next";

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
  };
  return (
    <div className="translation">
      <select
        className="language-switcher"
        onChange={(e) => changeLanguage(e.target.value)}
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

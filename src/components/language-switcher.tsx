import { useTranslation } from "react-i18next";

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
  };
  return (
    <div>
      <select onChange={(e) => changeLanguage(e.target.value)}>
        <option value="en">EN</option>
        <option value="hr">HR</option>
      </select>
    </div>
  );
};

export default LanguageSwitcher;

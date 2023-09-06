import Footer from "../../components/footer";
import Header from "../../components/header";

import About from "../about/about";
import Contact from "./contact";
import Intro from "./intro";
import Projects from "./projects";
import Skills from "./skills";
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

const Home = () => {
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
    window.location.reload();
  };
  return (
    <div className="home">
      <Header>
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
      </Header>
      <div id="home">
        <Intro />
      </div>
      <div id="skills">
        <Skills />
        <About />
      </div>
      <div id="work">
        <Projects />
      </div>
      <div id="contact">
        <Contact />
      </div>
      <div>
        {/* <div className="home__language">
          <LanguageSwitcher />
        </div> */}
        <div id="footer">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Home;

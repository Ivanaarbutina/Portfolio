import { Link, NavLink } from "react-router-dom";
import Waves from "./waves";
import Code from "./../assets/code_5568944.png";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "./language-switcher";

type LinkType = {
  label: string;
  path: string;
};
const headerLinks: LinkType[] = [
  {
    path: "/",
    label: "home",
  },
  {
    path: "/about",
    label: "about",
  },
  {
    path: "/work",
    label: "work",
  },
  {
    path: "/contact",
    label: "contact",
  },
];
const Header = () => {
  const [showHeaderSection, setShowHeaderSection] = useState(false);

  const { t } = useTranslation();
  const toggleNavMenu = () => {
    setShowHeaderSection(!showHeaderSection);
  };

  const closeNavMenu = () => {
    setShowHeaderSection(false);
  };
  return (
    <header className="header">
      <div className="inner-header ">
        <Link to={"/"} className="header__box">
          <img className="header__logo" src={Code} alt="Header logo" />
          <span className="header__name">Ivana Arbutina</span>
        </Link>
        <section
          className={`inner-header-section ${showHeaderSection ? "block" : ""}`}
        >
          <nav className={`nav-menu ${showHeaderSection ? "show" : ""}`}>
            {headerLinks.map((link: LinkType) => {
              return (
                <NavLink
                  className={"header__nav__link"}
                  key={link.path}
                  to={link.path}
                  onClick={closeNavMenu}
                >
                  {t(link.label)}
                </NavLink>
              );
            })}
          </nav>

          <div className={`language ${showHeaderSection ? "set" : ""}`}>
            <LanguageSwitcher />
          </div>
        </section>
        <div
          className={`hamburger ${showHeaderSection ? "active" : ""}`}
          onClick={toggleNavMenu}
        >
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
      </div>
      <Waves />
    </header>
  );
};

export default Header;

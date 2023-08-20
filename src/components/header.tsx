import { Link, NavLink } from "react-router-dom";
import Waves from "./waves";
import Code from "./../assets/code_5568944.png";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "./language-switcher";

const Header = () => {
  const [showNavMenu, setShowNavMenu] = useState(false);

  type LinkType = {
    label: string;
    path: string;
  };
  const { t } = useTranslation();
  const headerLinks: LinkType[] = [
    {
      path: "/",
      label: t("home"),
    },
    {
      path: "/about",
      label: t("about"),
    },
    {
      path: "/work",
      label: t("work"),
    },
    {
      path: "/contact",
      label: t("contact"),
    },
  ];
  const toggleNavMenu = () => {
    setShowNavMenu(!showNavMenu);
  };

  const closeNavMenu = () => {
    setShowNavMenu(false);
  };
  return (
    <header className="header">
      <div className="inner-header ">
        <Link to={"/"} className="header__box">
          <img className="header__logo" src={Code} alt="Header logo" />
          <span className="header__name">Ivana</span>
        </Link>
        <nav className={`nav-menu ${showNavMenu ? "show" : ""}`}>
          {headerLinks.map((link: LinkType) => {
            return (
              <NavLink
                className={"header__nav__link"}
                key={link.path}
                to={link.path}
                onClick={closeNavMenu}
              >
                {link.label}
              </NavLink>
            );
          })}
        </nav>
        <div className="hamburger" onClick={toggleNavMenu}>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
      </div>
      <LanguageSwitcher />
      <Waves />
    </header>
  );
};

export default Header;

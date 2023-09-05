import { Link } from "react-router-dom";
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
    path: "#skills",
    label: "about",
  },
  {
    path: "#work",
    label: "work",
  },
  {
    path: "#contact",
    label: "contact",
  },
];
const Header = () => {
  const [showHeaderSection, setShowHeaderSection] = useState(false);

  // Smooth scrolling navigation
  const scrollToHref = function (e: React.MouseEvent<HTMLElement, MouseEvent>) {
    e.preventDefault();
    const href = e.currentTarget.getAttribute("href");
    if (href) {
      const target = document.querySelector(href) as HTMLElement | null;
      if (target) {
        window.scrollTo({
          top: target.offsetTop,
          behavior: "smooth",
        });
      }
    }
  };
  const scrollToContact = function (
    e: React.MouseEvent<HTMLElement, MouseEvent>
  ) {
    e.preventDefault();
    const contact = document.getElementById("contact") as HTMLElement | null;

    if (contact) {
      window.scrollTo({
        top: contact.offsetTop,
        behavior: "smooth",
      });
    }
  };

  const { t } = useTranslation();
  const toggleNavMenu = () => {
    setShowHeaderSection(!showHeaderSection);
  };

  const closeNavMenu = () => {
    setShowHeaderSection(false);
  };
  return (
    <header className="header" id="header">
      <div className="inner-header ">
        <div>
          <Link
            to="#contact"
            className="header__box"
            onClick={(e) => {
              scrollToContact(e);
            }}
          >
            <img className="header__logo" src={Code} alt="Header logo" />
            <span className="header__name">Ivana Arbutina</span>
          </Link>
        </div>
        <section
          className={`inner-header-section ${showHeaderSection ? "block" : ""}`}
        >
          <nav className={`nav-menu ${showHeaderSection ? "show" : ""}`}>
            {headerLinks.map((link: LinkType) => {
              return (
                <a
                  className={"header__nav__link"}
                  key={link.path}
                  href={link.path}
                  onClick={(e) => {
                    scrollToHref(e); // Poziv scrollToHref funkcije kada korisnik klikne na link
                    closeNavMenu(); // Zatvaranje menija nakon klika na link
                  }}
                >
                  {t(link.label)}
                </a>
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

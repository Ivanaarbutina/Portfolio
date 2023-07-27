import { NavLink } from "react-router-dom";
import Waves from "./waves";
import Code from "./../assets/code_5568944.png";

type LinkType = {
  label: string;
  path: string;
};
const headerLinks: LinkType[] = [
  {
    path: "/",
    label: "Home",
  },
  {
    path: "/about",
    label: "About",
  },
  {
    path: "/work",
    label: "Work",
  },
  {
    path: "/contact",
    label: "Contact",
  },
];
const Header = () => {
  return (
    <div>
      <div className="header">
        <div className="inner-header flex">
          <div className="header__box">
            <img className="header__logo" src={Code} alt="Header logo" />
            <span className="header__name">Ivana</span>
          </div>
          <nav className="nav">
            {headerLinks.map((link: LinkType) => {
              return (
                <NavLink
                  className={"header__nav__link"}
                  key={link.path}
                  to={link.path}
                >
                  {link.label}
                </NavLink>
              );
            })}
          </nav>
        </div>
        <Waves />
      </div>
    </div>
  );
};

export default Header;

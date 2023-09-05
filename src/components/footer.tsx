import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <div className="footer">
      <div className="footer__links">
        <div>
          {t("footer-link1")}{" "}
          <Link
            className="footer__link"
            to="https://icons8.com/illustrations/author/zD2oqC8lLBBA"
            target="_blank"
          >
            {" "}
            Icons 8{" "}
          </Link>
        </div>
        <div>
          &{" "}
          <Link
            className="footer__link"
            to="https://icons8.com/illustrations/author/CkHJmwURlxnt"
            target="_blank"
          >
            {" "}
            Olha Khomich{" "}
          </Link>
        </div>
        <div>
          {t("footer-link2")}{" "}
          <Link
            className="footer__link"
            to="https://icons8.com/illustrations"
            target="_blank"
          >
            Ouch!
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;

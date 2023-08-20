import { Link } from "react-router-dom";
import mail from "./../assets/mail.png";
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
      <div>
        <Link className="footer__mail" to="mailto:ivana.arbutina2@gmail.com">
          <img src={mail} />
        </Link>
      </div>
    </div>
  );
};

export default Footer;

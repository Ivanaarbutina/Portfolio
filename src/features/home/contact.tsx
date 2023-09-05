import Container from "../../components/container";
import mail from "./../../assets/mail.png";
import location from "./../../assets/casual-life-3d-close-up-of-pink-location-marker.png";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";
import up from "./../../assets/icons8-up-48.png";

const Contact = () => {
  const [animationExecuted, setAnimationExecuted] = useState(false);

  const { t } = useTranslation();
  function scrollToHeader() {
    const headerElement = document.getElementById("header");
    if (headerElement) {
      window.scrollTo({
        top: headerElement.offsetTop,
        behavior: "smooth",
      });
    }
  }

  const { ref, inView } = useInView({
    threshold: 0,
  });
  useEffect(() => {
    if (inView && !animationExecuted) {
      const contactTitle = document.querySelector(".contact__title");
      if (contactTitle) {
        contactTitle.classList.add("visible");
      }

      setAnimationExecuted(true);
    }
  }, [inView, animationExecuted]);

  return (
    <Container size="lg">
      <div className="contact__wrapper">
        <h3
          className={`contact__title slide-in ${
            animationExecuted ? "visible" : ""
          }`}
          ref={ref}
        >
          {t("contact-title")}
        </h3>
        <p className="contact__desc">{t("contact-desc")}</p>
        <div className="contact">
          <div className="contact__mail">
            <Link to="mailto:ivana.arbutina2@gmail.com">
              <img src={mail} alt="Mail icon" />
              {t("contact-mail")}
            </Link>
          </div>
          <div className="contact__location">
            <Link to="https://goo.gl/maps/CoDEeQaqBuapGg2F7" target="_blank">
              <img src={location} alt="Location icon" />
              Beli Manastir, {t("contact-location")}
            </Link>
          </div>
        </div>
      </div>
      <div>
        <Link to="#" className="footer__up" onClick={scrollToHeader}>
          <img src={up} alt="arrow" />
        </Link>
      </div>
    </Container>
  );
};

export default Contact;

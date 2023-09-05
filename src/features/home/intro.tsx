import Container from "../../components/container";
import profilImg from "./../../assets/profile-pic.jpg";
import LnIcon from "./../../assets/linkedin_1384072.png";
import GitIcon from "./../../assets/github_4926624.png";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";

const Intro = () => {
  const [animationExecuted, setAnimationExecuted] = useState(false);
  const { t } = useTranslation();

  const { inView, ref } = useInView({
    threshold: 0.5,
  });
  useEffect(() => {
    if (inView && !animationExecuted) {
      const nameElement = document.querySelector(".home__intro");
      const descElement = document.querySelector(".home__description__text");
      const imgElement = document.querySelector(".home__info__img");

      if (nameElement) {
        nameElement.classList.add("visible-intro");
      }
      if (descElement) {
        descElement.classList.add("visible-intro2");
      }
      if (imgElement) {
        imgElement.classList.add("visible-intro3");
      }

      setAnimationExecuted(true);
    }
  }, [inView, animationExecuted]);

  return (
    <Container size="lg">
      <div className="home__info">
        <div>
          <h1
            className={`home__intro left-in ${
              animationExecuted ? "visible-intro" : ""
            }`}
            ref={ref}
          >
            {t("intro")} <br></br>
            <span className="home__description__name">
              {t("intro-2")} Ivana !
            </span>{" "}
          </h1>
          <div className="home__description">
            <p
              className={`home__description__text slide-in ${
                animationExecuted ? "visible-intro2" : ""
              }`}
              ref={ref}
            >
              {t("intro-desc-1")} <span>junior front-end developer</span>{" "}
              {t("intro-desc")}
            </p>
          </div>
          <Link
            to="https://www.linkedin.com/in/ivana-arbutina-340660285/"
            target="_blank"
          >
            <img className="home__icon" src={LnIcon} alt="Linkedin icon" />
          </Link>
          <Link to="https://github.com/Ivanaarbutina" target="_blank">
            <img className="home__icon" src={GitIcon} alt="GitHub icon" />
          </Link>
        </div>
        <img
          className={`home__info__img right-in ${
            animationExecuted ? "visible-intro3" : ""
          }`}
          ref={ref}
          src={profilImg}
          alt="Profile image"
        />
      </div>
    </Container>
  );
};

export default Intro;

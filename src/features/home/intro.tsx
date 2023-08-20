import Container from "../../components/container";
import profilImg from "./../../assets/profile-pic.jpg";
import LnIcon from "./../../assets/linkedin_1384072.png";
import GitIcon from "./../../assets/github_4926624.png";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Intro = () => {
  const { t } = useTranslation();
  return (
    <Container size="lg">
      <div className="home__info">
        <div>
          <h1>
            Front-End<br></br> Developer
          </h1>
          <div className="home__description">
            <p className="home__description__text">
              {t("intro")}{" "}
              <span className="home__description__name">Ivana Arbutina</span>.{" "}
              {t("intro-desc")}
            </p>
            <p className="home__description__text">{t("intro-second-desc")}</p>
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
        <img className="home__info__img" src={profilImg} alt="Profile image" />
      </div>
    </Container>
  );
};

export default Intro;

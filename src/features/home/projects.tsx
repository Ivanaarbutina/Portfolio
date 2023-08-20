import Container from "../../components/container";
import work from "./../../assets/work.png";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import ProjectBox from "./projects-box";

const Projects = () => {
  const { t } = useTranslation();
  return (
    <Container size="lg">
      <div className="home__projects__wrapper">
        <header className="home__projects">
          <div className="home__box">
            <h3 className="home__projects__title">{t("projects-title")}</h3>
            <p className="home__projects__desc">{t("projects-desc")}</p>
            <p className="home__projects__desc">
              {t("projects-desc-2")}
              <Link className="home__projects__work" target="_blank" to="work">
                {" "}
                ' {t("projects-link")} '{" "}
              </Link>
              {t("projects-desc-3")}
            </p>
          </div>
          <div>
            <img
              className="home__projects__img"
              src={work}
              alt="Project icon"
            />
          </div>
        </header>
        <ProjectBox />
      </div>
    </Container>
  );
};

export default Projects;

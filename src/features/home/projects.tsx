import Container from "../../components/container";
import work from "./../../assets/work.png";
import { useTranslation } from "react-i18next";
import Work from "../work/work";

const Projects = () => {
  const { t } = useTranslation();
  return (
    <Container size="lg">
      <div className="home__projects__wrapper">
        <header className="home__projects">
          <div className="home__box">
            <h3 className="home__projects__title">{t("projects-title")}</h3>
            <p className="home__projects__desc">{t("projects-desc")}</p>
          </div>
          <div>
            <img
              className="home__projects__img"
              src={work}
              alt="Project icon"
            />
          </div>
        </header>
        <Work />
      </div>
    </Container>
  );
};

export default Projects;

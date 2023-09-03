import Container from "../../components/container";
import work from "./../../assets/work.png";
import { useTranslation } from "react-i18next";
import { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import WorkList from "../work/work-list";

const Projects = () => {
  const [animationExecuted, setAnimationExecuted] = useState(false);
  const { t } = useTranslation();

  const { inView, ref } = useInView({
    threshold: 0.2,
  });
  useEffect(() => {
    if (inView && !animationExecuted) {
      // Pokrenite animaciju za sve navedene elemente

      const projectTitle = document.querySelector(".home__projects__title");
      const projectDesc = document.querySelector(".home__projects__desc");
      const projectImg = document.querySelector(".home__projects__img");
      if (projectTitle) {
        projectTitle.classList.add("visible-intro");
      }
      if (projectDesc) {
        projectDesc.classList.add("visible-intro2");
      }
      if (projectImg) {
        projectImg.classList.add("visible-intro3");
      }

      // Postavite stanje da označite da je animacija izvršena
      setAnimationExecuted(true);
    }
  }, [inView, animationExecuted]);

  return (
    <Container size="lg">
      <div className="home__projects__wrapper">
        <header className="home__projects">
          <h3
            className={`home__projects__title left-in ${
              animationExecuted ? "visible-intro" : ""
            }`}
            ref={ref}
          >
            {t("projects-title")}
          </h3>
          <div className="home__projects__box">
            <p
              className={`home__projects__desc slide-in ${
                animationExecuted ? "visible-intro2" : ""
              }`}
              ref={ref}
            >
              {t("projects-desc")}
            </p>
            <img
              className={`home__projects__img left-in ${
                animationExecuted ? "visible-intro3" : ""
              }`}
              ref={ref}
              src={work}
              alt="Project icon"
            />
          </div>
        </header>
        <section className="work__projects">
          <WorkList />
        </section>
      </div>
    </Container>
  );
};

export default Projects;

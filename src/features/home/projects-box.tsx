import { useTranslation } from "react-i18next";
import react from "./../../assets/react.svg";
import typeSc from "./../../assets/typescript_5968381.png";
import sass from "./../../assets/sass_919831.png";
import europe from "./../../assets/europe-pic.png";
import searchApp from "./../../assets/search-app.png";
import todo from "./../../assets/planer1.png";
import chatApp from "./../../assets/chat1.png";
import { Link } from "react-router-dom";

const ProjectBox = () => {
  const { t } = useTranslation();
  type ProjectType = {
    name: string;
    link: string;
    desc: string;
    img: string;
    reactIcon: string;
    typeScIcon: string;
    sassIcon: string;
  };

  const projects: ProjectType[] = [
    {
      name: t("projects-music"),
      link: "/search-app",
      desc: t("projects-music-desc"),
      img: searchApp,
      reactIcon: react,
      typeScIcon: typeSc,
      sassIcon: sass,
    },
    {
      name: t("projects-todo"),
      link: "/to-do-list",
      desc: t("projects-todo-desc"),
      img: todo,
      reactIcon: react,
      typeScIcon: typeSc,
      sassIcon: sass,
    },
    {
      name: t("projects-chat"),
      link: "https://ivanaarbutina.github.io/algebra-seminarski/",
      desc: t("projects-chat-desc"),
      img: chatApp,
      reactIcon: react,
      typeScIcon: typeSc,
      sassIcon: sass,
    },
    {
      name: t("projects-europe"),
      link: "/europe",
      desc: t("projects-europe-desc"),
      img: europe,
      reactIcon: react,
      typeScIcon: typeSc,
      sassIcon: sass,
    },
  ];
  return (
    <section className="home__projects__main">
      {projects.map((project: ProjectType) => {
        return (
          <div key={project.name} className="project__box">
            <img src={project.img} className="project__box__img" />
            <div className="project__box__layer">
              <Link
                to={project.link}
                target="_blank"
                className="project__box__link"
              >
                <h2>{project.name}</h2>
                <p>{project.desc}</p>
              </Link>
            </div>
            <div>
              <img src={project.reactIcon} className="project__box__icon" />
              <img src={project.typeScIcon} className="project__box__icon" />
              <img src={project.sassIcon} className="project__box__icon" />
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default ProjectBox;

import searchApp from "./../../assets/search-app.png";
import todo from "./../../assets/planer1.png";
import chatApp from "./../../assets/chat1.png";
import Container from "../../components/container";
import work from "./../../assets/work.png";
import europe from "./../../assets/europe-pic.png";
import { Link } from "react-router-dom";
import react from "./../../assets/react.svg";
import typeSc from "./../../assets/typescript_5968381.png";
import sass from "./../../assets/sass_919831.png";

type ProjectType = {
  name: string;
  link: string;
  img: string;
  reactIcon: string;
  typeScIcon: string;
  sassIcon: string;
};

const projects: ProjectType[] = [
  {
    name: "Music search App",
    link: "/search-app",
    img: searchApp,
    reactIcon: react,
    typeScIcon: typeSc,
    sassIcon: sass,
  },
  {
    name: "To do App",
    link: "/to-do-list",
    img: todo,
    reactIcon: react,
    typeScIcon: typeSc,
    sassIcon: sass,
  },
  {
    name: "Chat App",
    link: "https://ivanaarbutina.github.io/algebra-seminarski/",
    img: chatApp,
    reactIcon: react,
    typeScIcon: typeSc,
    sassIcon: sass,
  },
  {
    name: "Europe",
    link: "/europe",
    img: europe,
    reactIcon: react,
    typeScIcon: typeSc,
    sassIcon: sass,
  },
];

const Projects = () => {
  return (
    <Container size="lg">
      <div className="home__projects__wrapper">
        <header className="home__projects">
          <div className="home">
            <h3 className="home__projects__title">My recent projects</h3>
            <p className="home__projects__desc">
              These applications represent diverse examples of projects I have
              developed using React and TypeScript, as well as integrating
              external APIs for communication with other services. Each of these
              applications has its unique focus and functionalities, but they
              all share common characteristics such as clean user interfaces,
              responsive design, and fast and efficient performance.
            </p>
            <p className="home__projects__desc">
              For detailed insights into each project, you can explore the
              <Link className="home__projects__work" target="_blank" to="work">
                {" "}
                ' Work '{" "}
              </Link>
              section, where you will find comprehensive descriptions and
              showcases of the applications.
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
        <section className="home__projects__main">
          {projects.map((project: ProjectType) => {
            return (
              <div key={project.name} className="project__box">
                <img src={project.img} className="project__box__img" />
                <Link
                  to={project.link}
                  target="_blank"
                  className="project__box__link"
                >
                  {project.name}
                </Link>
                <div>
                  <img src={project.reactIcon} className="project__box__icon" />
                  <img
                    src={project.typeScIcon}
                    className="project__box__icon"
                  />
                  <img src={project.sassIcon} className="project__box__icon" />
                </div>
              </div>
            );
          })}
        </section>
      </div>
    </Container>
  );
};

export default Projects;

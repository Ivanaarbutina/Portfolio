import searchApp from "./../../assets/search-app.png";
import todo from "./../../assets/planer1.png";
import chatApp from "./../../assets/chat1.png";
import Container from "../../components/container";
import work from "./../../assets/work.png";
import europe from "./../../assets/europe-pic.png";
import { Link } from "react-router-dom";

type ProjectType = {
  name: string;
  link: string;
  img: string;
};

const projects: ProjectType[] = [
  {
    name: "Music search App",
    link: "/search-app",
    img: searchApp,
  },
  {
    name: "To do App",
    link: "/to-do-list",
    img: todo,
  },
  {
    name: "Chat App",
    link: "https://ivanaarbutina.github.io/algebra-seminarski/",
    img: chatApp,
  },
  {
    name: "Europe",
    link: "/europe",
    img: europe,
  },
];

const Projects = () => {
  return (
    <Container size="lg">
      <div className="home__projects__wrapper">
        <header className="home__projects">
          <Link className="home__projects__title" to="work">
            My recent projects
          </Link>
          <img className="home__project__img" src={work} alt="Project icon" />
        </header>
        <section className="home__projects__main">
          {projects.map((project: ProjectType) => {
            return (
              <div key={project.name} className="project__box">
                <img src={project.img} className="project__box__img" />
                <Link to={project.link} className="project__box__link">
                  {project.name}
                </Link>
              </div>
            );
          })}
        </section>
      </div>
    </Container>
  );
};

export default Projects;

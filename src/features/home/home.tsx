import Header from "../../components/header";
import About from "../about/about";
import Contact from "./contact";
import Intro from "./intro";
import Projects from "./projects";
import Skills from "./skills";

const Home = () => {
  return (
    <div className="home">
      <Header />
      <div id="home">
        <Intro />
      </div>
      <div id="skills">
        <Skills />
        <About />
      </div>
      <div id="work">
        <Projects />
      </div>
      <div id="contact">
        <Contact />
      </div>
    </div>
  );
};

export default Home;

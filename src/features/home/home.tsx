import Intro from "./intro";
import Projects from "./projects";
import Skills from "./skills";

const Home = () => {
  return (
    <div className="home">
      <Intro />
      <Skills />
      <Projects />
    </div>
  );
};

export default Home;

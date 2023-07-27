import Container from "../../components/container";
import WorkList from "./work-list";
import work from "./../../assets/3d-casual-life-laptop-and-charts-1.png";

const Work = () => {
  return (
    <Container size="lg">
      <section className="work__projects">
        <img className="work__project__img" src={work} />
        <h2>Projects</h2>
        <WorkList />
      </section>
    </Container>
  );
};

export default Work;

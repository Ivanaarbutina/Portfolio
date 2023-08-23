import Container from "../../components/container";
import WorkList from "./work-list";

const Work = () => {
  return (
    <Container size="lg">
      <section className="work__projects">
        <WorkList />
      </section>
    </Container>
  );
};

export default Work;

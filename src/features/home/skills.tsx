import Container from "../../components/container";
import TextSlider from "../../components/text-slider";
import { iconsList } from "./data/icon";

const Skills = () => {
  return (
    <Container size="lg">
      <TextSlider />
      <div className="skills">
        {iconsList.map((icon, index) => {
          return <img key={index} src={icon.img} className="skills__icon" />;
        })}
      </div>
    </Container>
  );
};

export default Skills;

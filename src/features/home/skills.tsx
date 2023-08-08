import Container from "../../components/container";
import TextSlider from "../../components/text-slider";
import { iconsList } from "./data/icon";

const Skills = () => {
  return (
    <Container size="lg">
      <TextSlider />
      <div className="skills">
        {iconsList.map((icon) => {
          return (
            <div key={icon.name} className="skills__box">
              <img src={icon.img} className="skills__icon" />
              <span>{icon.name}</span>
            </div>
          );
        })}
      </div>
    </Container>
  );
};

export default Skills;

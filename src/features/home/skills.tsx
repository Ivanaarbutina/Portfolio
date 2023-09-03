import Container from "../../components/container";
import TextSlider from "../../components/text-slider";
import { iconsList } from "./data/icon";
import { motion } from "framer-motion";

const Skills = () => {
  return (
    <Container size="lg">
      <TextSlider />
      <motion.div className="skills">
        {iconsList.map((icon) => {
          return (
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 1 }}
              key={icon.name}
              className="skills__box"
            >
              <img src={icon.img} className="skills__icon" />
              <span>{icon.name}</span>
            </motion.div>
          );
        })}
      </motion.div>
    </Container>
  );
};

export default Skills;

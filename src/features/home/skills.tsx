import { useInView } from "react-intersection-observer";
import Container from "../../components/container";
import { iconsList } from "./data/icon";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

const Skills = () => {
  const [animationExecuted, setAnimationExecuted] = useState(false);
  const { t } = useTranslation();

  const { inView, ref } = useInView({ threshold: 0.5 });
  useEffect(() => {
    const animateElements = async () => {
      if (inView && !animationExecuted) {
        const iconElements = document.querySelectorAll(".skills__box");

        for (let index = 0; index < iconElements.length; index++) {
          const iconElement = iconElements[index];

          await new Promise<void>((resolve) => {
            setTimeout(() => {
              iconElement.classList.add("visible-intro5");
              resolve();
            }, 90 * index);
          });
        }
        setAnimationExecuted(true);
      }
    };

    animateElements();
  }, [inView, animationExecuted]);
  return (
    <Container size="lg">
      <h3 className="skills__title">{t("skills")}</h3>
      <div className="skills">
        {iconsList.map((icon) => {
          return (
            <div
              key={icon.name}
              className={`skills__box top-in ${
                animationExecuted ? "visible-intro5" : ""
              }`}
              ref={ref}
            >
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

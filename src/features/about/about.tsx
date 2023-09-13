import Container from "../../components/container";
import { aboutlist } from "./about-list";
import aboutIcon from "../../assets/casual-life-3d-three-quarter-view-of-young-woman-working-on-laptop.png";
import { useTranslation } from "react-i18next";
import doneIcon from "./../../assets/3d-casual-life-check-mark-in-box-blue.png";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

const About = () => {
  const [animationExecuted, setAnimationExecuted] = useState(false);
  const { t } = useTranslation();

  const { inView, ref } = useInView({ threshold: 0.01 });
  useEffect(() => {
    const animateElements = async () => {
      if (inView && !animationExecuted) {
        const listElements = document.querySelectorAll(".about__list");

        for (let index = 0; index < listElements.length; index++) {
          const listElement = listElements[index];

          await new Promise<void>((resolve) => {
            setTimeout(() => {
              listElement.classList.add("visible-intro4");
              resolve();
            }, 30 * index);
          });
        }
        setAnimationExecuted(true);
      }
    };

    animateElements();
  }, [inView, animationExecuted]);

  return (
    <Container size="lg">
      <div className="about">
        <img className="about__img" src={aboutIcon} alt="Woman with laptop" />
        <div>
          <h3 className="about__title">{t("skills-title")}</h3>
          <section>
            {aboutlist.map((section, index) => {
              return (
                <div
                  key={index}
                  className={`about__list right-in ${
                    animationExecuted ? "visible-intro4" : ""
                  }`}
                  ref={ref}
                >
                  <img src={doneIcon} alt="Done icon" />
                  <h3 className="about__list__desc">{t(section.titleKey)}</h3>
                </div>
              );
            })}
          </section>
        </div>
      </div>
    </Container>
  );
};

export default About;

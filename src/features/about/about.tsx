import Container from "../../components/container";
import { aboutlist } from "./about-list";
import aboutIcon from "../../assets/casual-life-3d-three-quarter-view-of-young-woman-working-on-laptop.png";
import { useTranslation } from "react-i18next";
import doneIcon from "./../../assets/3d-casual-life-check-mark-in-box-blue.png";
const About = () => {
  const { t } = useTranslation();
  return (
    <Container size="lg">
      <div className="about">
        <img className="about__img" src={aboutIcon} alt="Woman with laptop" />
        <div>
          <h3 className="about__title">{t("skills-title")}</h3>
          <section>
            {aboutlist.map((section, index) => {
              return (
                <div className="about__list" key={index}>
                  <img src={doneIcon} />
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

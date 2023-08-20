import Container from "../../components/container";
import { aboutlist } from "./about-list";
import aboutIcon from "../../assets/casual-life-3d-three-quarter-view-of-young-woman-working-on-laptop.png";
import { useTranslation } from "react-i18next";
const About = () => {
  const { t } = useTranslation();
  return (
    <Container size="lg">
      <div className="about">
        <img className="about__img" src={aboutIcon} alt="Woman with laptop" />
        <h3 className="about__title">{t("skills-title")}</h3>
        <section>
          {aboutlist.map((section, index) => {
            return (
              <ul className="about__list" key={index}>
                <li className="about__list__desc">
                  <h3 className="about__list__desc">{t(section.titleKey)}</h3>
                  {t(section.descKey)}
                </li>
              </ul>
            );
          })}
        </section>
      </div>
    </Container>
  );
};

export default About;

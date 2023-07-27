import Container from "../../components/container";
import { aboutlist } from "./about-list";
import aboutIcon from "../../assets/casual-life-3d-three-quarter-view-of-young-woman-working-on-laptop.png";

const About = () => {
  return (
    <Container size="lg">
      <div className="about">
        <img className="about__img" src={aboutIcon} alt="Woman with laptop" />
        <h3 className="about__title">
          Key aspects of my web development journey:
        </h3>
        <section>
          {aboutlist.map((section, index) => {
            return (
              <ul className="about__list" key={index}>
                <li className="about__list__desc">
                  <h3 className="about__list__desc">{section.title}</h3>
                  {section.desc}
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

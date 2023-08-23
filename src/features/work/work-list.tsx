import { works } from "./data/work-data";
import Button from "../../components/button";
import GitHub from "../../assets/icons/github";
import { useTranslation } from "react-i18next";

const WorkList = () => {
  const { t } = useTranslation();
  return (
    <div>
      <div className="work__wrapper">
        {works.map((work) => {
          const { path, gitHub, img, nameKey } = work;
          return (
            <div key={nameKey} className="work">
              <img className="work__img" src={img} alt="Project image" />
              <div className="work__section">
                <p className="work__name">{t(work.nameKey)}</p>
                <p className="work__desc">{t(work.descriptKey)}</p>
                <div>
                  <img src={work.reactIcon} className="work__icon" />
                  <img src={work.typeScIcon} className="work__icon" />
                  <img src={work.sassIcon} className="work__icon" />
                </div>
              </div>
              <div className="work__link">
                <a href={path} target="_blank">
                  <Button color="blue" text={t("project-button")}></Button>
                </a>
                <a href={gitHub} target="_blank" className="work__github">
                  Code
                  <GitHub />
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default WorkList;

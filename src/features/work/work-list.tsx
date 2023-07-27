import { works } from "./data/work-data";
import Button from "../../components/button";
import GitHub from "../../assets/icons/github";

const WorkList = () => {
  return (
    <div>
      <div className="work__wrapper">
        {works.map((work, index) => {
          const { path, descript, gitHub, img, name } = work;
          return (
            <div key={index} className="work">
              <img className="work__img" src={img} alt="Project image" />
              <div className="work__section">
                <p className="work__name">{name}</p>
                <p className="work__desc">{descript}</p>
              </div>
              <div className="work__link">
                <a href={path} target="_blank">
                  <Button color="blue" text="View project"></Button>
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

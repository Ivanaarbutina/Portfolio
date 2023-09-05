import { Link } from "react-router-dom";
import Rocket from "./../assets/icons/icons8-code-91.png";

const ProjectHeader = () => {
  return (
    <div className="project__header">
      <Link to="/">
        <img src={Rocket} />
      </Link>
      <Link to="/" className="project__header__link">
        Home
      </Link>
    </div>
  );
};

export default ProjectHeader;

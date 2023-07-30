import { Link } from "react-router-dom";
import mail from "./../assets/mail.png";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__links">
        <div>
          Illustration by{" "}
          <Link
            className="footer__link"
            to="https://icons8.com/illustrations/author/zD2oqC8lLBBA"
            target="_blank"
          >
            {" "}
            Icons 8{" "}
          </Link>
        </div>
        <div>
          and by{" "}
          <Link
            className="footer__link"
            to="https://icons8.com/illustrations/author/CkHJmwURlxnt"
            target="_blank"
          >
            {" "}
            Olha Khomich{" "}
          </Link>
        </div>
        <div>
          from{" "}
          <Link
            className="footer__link"
            to="https://icons8.com/illustrations"
            target="_blank"
          >
            Ouch!
          </Link>
        </div>
      </div>
      <div>
        <Link className="footer__mail" to="mailto:ivana.arbutina2@gmail.com">
          <img src={mail} />
        </Link>
      </div>
    </div>
  );
};

export default Footer;

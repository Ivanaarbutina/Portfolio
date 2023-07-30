import Container from "../../components/container";
import mail from "./../../assets/mail.png";
import location from "./../../assets/casual-life-3d-close-up-of-pink-location-marker.png";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <Container size="lg">
      <div className="contact__wrapper">
        <h2>Contact</h2>
        <h3 className="contact__title">Let's work together!</h3>
        <p className="contact__desc">
          Please reach out, I would love to hear more about you,<br></br> your
          project and how can I help!
        </p>
        <div className="contact">
          <div className="contact__mail">
            <Link to="mailto:ivana.arbutina2@gmail.com">
              <img src={mail} alt="Mail icon" />
              Send me an email
            </Link>
          </div>
          <div className="contact__location">
            <Link to="https://goo.gl/maps/CoDEeQaqBuapGg2F7" target="_blank">
              <img src={location} alt="Location icon" />
              Beli Manastir, Croatia
            </Link>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Contact;

import { BsFacebook } from "react-icons/bs";
import logo from "../../assets/logo.jpeg";
import { FiMail, FiPhoneCall } from "react-icons/fi";
import { GrInstagram, GrLocation } from "react-icons/gr";
import { IoLogoWhatsapp } from "react-icons/io";
import "../Footer/Footer.scss";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <h2>Get In Touch</h2>
        <div className="footerData">
          <div className="logo">
            <img src={logo} />
          </div>

          <div className="Info">
            <div className="call">
              <FiPhoneCall className="icon" />
              <p>9412534953</p>
            </div>

            <div className="mail">
              <FiMail className="icon" />
              <p>vikassethiclasses2@gmail.com</p>
            </div>

            <div className="address">
              <GrLocation className="icon" />
              <p>41 Rahul Vihar dayalbagh agra</p>
            </div>
          </div>

          <div className="social">
            <h4>Social Media:</h4>
            <div className="socialIcons">
              <BsFacebook className="icon" />
              <IoLogoWhatsapp className="icon" />
              <GrInstagram className="icon" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;

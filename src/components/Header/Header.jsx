import logo from "../../assets/logo.jpeg";
import "../Header/Header.scss";
import { BiLogoGmail, BiSolidPhoneCall } from "react-icons/bi";
const Header = () => {
  return (
    <>
      <section className="headerSection">
        <div className="headerDiv">
          <img src={logo} />
        </div>

        <div className="headerContent">
          <h2>Sethi Classes</h2>
          <h3>WHERE SUCCESS IS A MUST</h3>
        </div>

        <div className="headerDetails">
          <div className="mailInfo">
            <span className="mailIcon">
              <BiLogoGmail className="icon" />
            </span>
            <p className="mailId">:vikassethiclasses2@gmail.com</p>
          </div>
          <div className="callInfo">
            <span className="callIcon">
              <BiSolidPhoneCall className="icon" />
            </span>
            <p className="callNumber">:9897403799</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Header;

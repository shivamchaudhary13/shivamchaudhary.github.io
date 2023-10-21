import video1 from "../../assets/video1.mp4";
import "../Main-about-us/Mainabout.scss";

const Mainabout = () => {
  return (
    <>
      <div className="headline">
        <h3>About Us</h3>
      </div>
      <section className="sections">
        <div className="leftSection">
          <video src={video1} type="video/mp4" autoPlay loop muted></video>
        </div>
        <div className="rightSection">
          <h3>Welcome To Sethi Classes</h3>
          <p>
            " INSTITUTE OF TRAINING AND EDUCATION (AIITE)" is established on
            this day, 21 October 2013. To accomplish the mission and vision of
            Father Mr. Rambali & Mother Mrs. Shobhavati Devi, by "" (Founder and
            Chairman).AII India Institute of Training and Education is AN ISO
            9001: 2015 certified Organization Regd. By Govt. of NCT, Delhi
            (INDIA).
          </p>
        </div>
      </section>
    </>
  );
};

export default Mainabout;

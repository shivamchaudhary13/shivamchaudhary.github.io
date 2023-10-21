import "../Aboutcourses/Aboutcourses.scss";
import { BsBookFill } from "react-icons/bs";
import { BsFillHeartPulseFill } from "react-icons/bs";
import { MdEngineering } from "react-icons/md";
const Aboutcourses = () => {
  return (
    <>
      <div className="Adcards">
        <div className="foundation">
          <div className="foundationContent">
            <BsBookFill className="icon" />
            <h3>Foundation</h3>
            <p>
              Foundation courses help students to build a strong academic base
              in subjects like mathematics, science, and language arts. This
              foundation is essential for success in higher-level courses.
            </p>
          </div>
        </div>

        <div className="medical">
          <div className="medicalContent">
            <BsFillHeartPulseFill className="icon" />
            <h3>Medical</h3>
            <p>
              Best medical entrance exam coaching in Agra to successfully crack
              national level medical entrance exams in first attempt.
            </p>
          </div>
        </div>

        <div className="iitjee">
          <div className="iitjeeContent">
            <MdEngineering className="icon" />
            <h3>IIT-JEE</h3>
            <p>
              Join Agra’s Top IITJEE Coaching Institute for JEE Main (AIEEE) JEE
              Advanced & other Engineering Entrance Exams in India
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Aboutcourses;

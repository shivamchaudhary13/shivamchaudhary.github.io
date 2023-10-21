import avatar from "../../assets/avatar.jpg";
import member1 from "../../assets/founder.png";
import '../Team/Team.scss';
const Team = () => {
  return (
    <>
      <div className="team">
        <h3>Our Team</h3>
        <div className="teamMembers">
          <div>
            <img src={member1} />
            <p>Owner</p>
            <span>Physics Expert</span>
          </div>
          <div>
            <img src={avatar} />
          </div>
          <div>
            <img src={avatar} />
          </div>
          <div>
            <img src={avatar} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Team;
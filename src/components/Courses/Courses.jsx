import "../Courses/Courses.scss";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import img1 from "../../assets/prefoundation.webp";
import img2 from "../../assets/foundation.webp";
import img3 from "../../assets/crash.webp";
import img4 from "../../assets/test.webp";

const Courses = () => {
  return (
    <>
      <div className="CourseHeader">
        <h3>Courses</h3>
      </div>

      <div className="courseList">
        <Card className="prefoundation" style={{width: '18rem'}}>
          <Card.Img className="img" variant="top" src={img1} />
          <Card.Body>
            <Card.Title>Pre-Foundation Courses</Card.Title>
            <Card.Text>
            Four year course for IIT-JEE / MEDICAL for Class VIII to IX moving Students
            </Card.Text>
            <Button variant="primary">Register</Button>
          </Card.Body>
        </Card>

        <Card className="foundation" style={{width: '18rem'}}>
          <Card.Img className="img" variant="top" src={img2} />
          <Card.Body>
            <Card.Title>Foundation Courses</Card.Title>
            <Card.Text>
            Two year course for IIT-JEE / Medical for class X to XI Moving Students
            </Card.Text>
            <Button variant="primary">Register</Button>
          </Card.Body>
        </Card>

        <Card className="crash" style={{width: '18rem'}}>
          <Card.Img className="img" variant="top" src={img3} />
          <Card.Body>
            <Card.Title>Crash Courses</Card.Title>
            <Card.Text>
            Short term course for IIT-JEE / MEDICAL for class XII Appearing / Pass students
            </Card.Text>
            <Button variant="primary">Register</Button>
          </Card.Body>
        </Card>

        <Card className="test" style={{width: '18rem'}}>
          <Card.Img className="img" variant="top" src={img4} />
          <Card.Body>
            <Card.Title>Test Series</Card.Title>
            <Card.Text>
            Test Series for every courses are available here.Topic-wise test Series are also available.
            </Card.Text>
            <Button variant="primary">Register</Button>
          </Card.Body>
        </Card>
      </div>
    </>
  );
};

export default Courses;

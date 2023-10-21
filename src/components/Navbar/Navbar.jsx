import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "../Navbar/Navbar.scss";

function NavBar() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary navbar">
      <Container className="container">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link className="navLink" href="#home">
              Home
            </Nav.Link>
            <Nav.Link className="navLink" href="#link">
              About Us
            </Nav.Link>
            <Nav.Link className="navLink" href="#link">
              Admission
            </Nav.Link>
            <Nav.Link className="navLink" href="#link">
              Courses
            </Nav.Link>
            <NavDropdown
              className="navLink"
              title="Gallery"
              id="basic-nav-dropdown"
            >
              <NavDropdown.Item href="#action/3.1">
                Photo Gallery
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Video Gallery
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link className="navLink" href="#link">
              Contact Us
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;

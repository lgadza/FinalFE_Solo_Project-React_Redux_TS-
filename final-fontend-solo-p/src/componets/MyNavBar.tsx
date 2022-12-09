import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

const MyNavBar = () => {
  return (
    <Navbar bg="dark" variant="dark" className="MyNav">
      <Container fluid>
        <Link to="/">
          <Navbar.Brand href="#home">Space Louis</Navbar.Brand>
        </Link>
        <Nav className="me-auto mr-5 pr-5">
          <Link to="/">Home</Link>
          <Link className="mx-4" to="/features">
            Features
          </Link>
          <Link to="/price">Pricing</Link>
        </Nav>
      </Container>
    </Navbar>
  );
};
export default MyNavBar;

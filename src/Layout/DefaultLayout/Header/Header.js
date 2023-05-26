import Container from "react-bootstrap/Container";
import { Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import { authSelector } from "~/config/selectors";
import UnLogin from "./component/UnLogin/UnLogin";
import LoggedIn from "./component/LoggedIn";
import Manager from "./component/Manager";
import routesConfig from "~/config/routes";

function Header() {
  const authData = useSelector(authSelector);
  const isLoggedIn = authData.isLoggedIn;

  return (
    <>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand to="/" as={Link}>
            K-Lancer
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link to={routesConfig.allJob} as={Link}>
                Tìm việc làm
              </Nav.Link>
            </Nav>
            {isLoggedIn ? <LoggedIn></LoggedIn> : <UnLogin></UnLogin>}
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {isLoggedIn ? <Manager></Manager> : null}
    </>
  );
}

export default Header;

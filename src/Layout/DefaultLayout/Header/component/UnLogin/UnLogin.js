import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import routesConfig from "~/config/routes";

function UnLogin() {
  return (
    <Nav>
      <Nav.Link eventKey={1} to={routesConfig.register} as={Link}>
        Đăng kí
      </Nav.Link>
      <Nav.Link eventKey={2} to={routesConfig.login} as={Link}>
        Đăng nhập
      </Nav.Link>{" "}
      <Nav.Link to={routesConfig.postJob} as={Link}>
        Đăng dự án
      </Nav.Link>
    </Nav>
  );
}

export default UnLogin;

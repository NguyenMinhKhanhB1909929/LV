import { Navbar, Container, Nav, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

import routesConfig from "~/config/routes";

function Manager() {
  return (
    <Navbar expand="lg" variant="dark" style={{ backgroundColor: "#464646" }}>
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link
              to={routesConfig.managerClient}
              as={Link}
              style={{ color: "" }}
            >
              Quản lí cho khách hàng
            </Nav.Link>
            <Nav.Link to={routesConfig.managerFreelancer} as={Link}>
              Quản lí cho freelance
            </Nav.Link>
            <Nav.Link to={routesConfig.chart} as={Link}>
              Thống kê doanh thu
            </Nav.Link>
          </Nav>
          <Nav>
            <Button
              variant="success"
              size="lg"
              to={routesConfig.postJob}
              as={Link}
              style={{ backgroundColor: "#2db964" }}
            >
              Đăng dự án
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Manager;

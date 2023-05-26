import { Col, Button, Row, Container, Card, Form } from "react-bootstrap";
import { useState } from "react";
import { Link } from "react-router-dom";

import { handleRegister } from "~/service";

function Register() {
  const [RegisterForm, setRegisterForm] = useState({
    email: "",
    password: "",
  });

  const { email, password } = RegisterForm;

  const onChangeRegisterForm = (event) =>
    setRegisterForm({
      ...RegisterForm,
      [event.target.name]: event.target.value,
    });

  const onSubmitLogin = async (e) => {
    e.preventDefault();
    const results = await handleRegister(RegisterForm);
    console.log(results);
  };

  return (
    <Container>
      <Row className="vh-100 d-flex justify-content-center align-items-center">
        <Col md={8} lg={6} xs={12}>
          <div className="border border-3 border-primary"></div>
          <Card className="shadow">
            <Card.Body>
              <div className="mb-3 mt-md-4">
                <h2 className="fw-bold mb-2 text-uppercase ">K-Lancer</h2>
                <p className=" mb-5 text-danger">
                  Vui lòng nhập email và mật khẩu!
                </p>
                <div className="mb-3">
                  <Form onSubmit={onSubmitLogin}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Label className="text-center">
                        Địa chỉ email:
                      </Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Vui lòng nhập email"
                        name="email"
                        value={email}
                        onChange={onChangeRegisterForm}
                      />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                      <Form.Label>Mật khẩu:</Form.Label>
                      <Form.Control
                        type="password"
                        placeholder="Mật khẩu"
                        name="password"
                        value={password}
                        onChange={onChangeRegisterForm}
                      />
                    </Form.Group>
                    <Form.Group
                      className="mb-3"
                      controlId="formBasicRePassword"
                    >
                      <Form.Label>Nhập lại Mật khẩu:</Form.Label>
                      <Form.Control
                        type="password"
                        placeholder="Mật khẩu"
                        name="rePassword"
                        value={password}
                        onChange={onChangeRegisterForm}
                      />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                      <p className="small">
                        <a className="text-primary" href="#!">
                          Quên mật khẩu?
                        </a>
                      </p>
                    </Form.Group>
                    <div className="d-grid">
                      <Button variant="primary" type="submit">
                        Đăng Kí
                      </Button>
                    </div>
                  </Form>
                  <div className="mt-3">
                    <p className="mb-0  text-center">
                      Bạn đã có tài khoản K-lancer?{" "}
                      <Link to="/login" className="text-primary fw-bold">
                        Đăng nhập
                      </Link>
                    </p>
                  </div>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Register;

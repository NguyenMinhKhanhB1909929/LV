import { useState } from "react";
import { Col, Button, Row, Container, Card, Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import { handleLogin } from "~/service";
import { userLoginSuccess, userLoginFail } from "~/store/actions";

function Login() {
  const navigate = useNavigate();
  const [loginForm, setLoginForm] = useState({
    email: "",
    password: "",
  });
  const [errMessage, setErrMessage] = useState("");

  const dispatch = useDispatch();

  const { email, password } = loginForm;

  const onChangeLoginForm = (event) =>
    setLoginForm({ ...loginForm, [event.target.name]: event.target.value });

  const onSubmitLogin = async (e) => {
    e.preventDefault();

    try {
      const result = await handleLogin(loginForm);
      if (!result.success) {
        setErrMessage(result.message);
        dispatch(userLoginFail());
      } else {
        dispatch(userLoginSuccess(result.accessToken));
        localStorage.setItem("TOKEN", result.accessToken);

        navigate(-1);
      }
    } catch (error) {}
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
                <p className=" mb-5 text-danger">{errMessage}</p>
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
                        onChange={onChangeLoginForm}
                      />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                      <Form.Label>Mật khẩu</Form.Label>
                      <Form.Control
                        type="password"
                        placeholder="Mật khẩu"
                        name="password"
                        value={password}
                        onChange={onChangeLoginForm}
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
                        Đăng nhập
                      </Button>
                    </div>
                  </Form>
                  <div className="mt-3">
                    <p className="mb-0  text-center">
                      Bạn chưa có tài khoản K-lancer?{" "}
                      <Link to="/register" className="text-primary fw-bold">
                        Đăng kí
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

// const mapDispatchToProps = (dispatch) => {
//   return {
//     userLoginSuccess: (token) => dispatch(actions.userLoginSuccess(token)),
//   };
// };

export default // connect(mapDispatchToProps)
Login;

import { Button, Col, Form, Row } from "react-bootstrap";

function ChangePassword() {
  return (
    <div>
      <div
        className="d-flex justify-content-center text-dark"
        style={{ fontSize: 26 }}
      >
        Đổi mật khẩu
      </div>
      <Form>
        <Form.Group as={Row} className="my-4">
          <Form.Label htmlFor="a" column sm="2">
            Mật khẩu cũ:
          </Form.Label>
          <Col sm="10">
            <Form.Control
              type="text"
              id="a"
              name="name"
              // value={name}
              // onChange={handleChangeJobInfo}
            />
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="my-4">
          <Form.Label htmlFor="a" column sm="2">
            Mật khẩu mới:
          </Form.Label>
          <Col sm="10">
            <Form.Control
              type="text"
              id="a"
              name="name"
              // value={name}
              // onChange={handleChangeJobInfo}
            />
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="my-4">
          <Form.Label htmlFor="a" column sm="2">
            Nhập lại mật khẩu:
          </Form.Label>
          <Col sm="10">
            <Form.Control
              type="text"
              id="a"
              name="name"
              // value={name}
              // onChange={handleChangeJobInfo}
            />
          </Col>
        </Form.Group>
        <div className="d-flex justify-content-center">
          <Button>Thay đổi</Button>
        </div>
      </Form>
    </div>
  );
}

export default ChangePassword;

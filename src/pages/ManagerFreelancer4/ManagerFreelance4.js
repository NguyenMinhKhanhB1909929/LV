import {
  Button,
  Container,
  ListGroup,
  Modal,
  Table,
  Form,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import styles from "./managerFreelancer4.module.scss";

import { useEffect, useState } from "react";

import NavManagerFreelancer from "~/components/NavManagerFreelancer/NavManagerFreelancer";
import { handleGetMyEvaluate } from "~/service/evaluateService";
import { Pagination } from "antd";

function ManagerFreeLancer4() {
  const [current, setCurrent] = useState(1);
  const [show, setShow] = useState(false);
  const handleShow = async (id) => {
    setShow(true);
  };
  const handleClose = () => {
    setShow(false);
  };

  const handleView = () => {
    console.log(123);
  };
  const onChangePage = (page) => {
    console.log(page);
    setCurrent(page);
  };
  const [myEvaluate, setMyEvaluate] = useState([]);

  const fetchData = async () => {
    const result = await handleGetMyEvaluate();
    if (result.success) {
      setMyEvaluate(result.evaluate);
    }
  };
  console.log(myEvaluate);
  useEffect(() => fetchData, []);
  if (!myEvaluate) return <div>...Loading</div>;
  return (
    <Container>
      <NavManagerFreelancer></NavManagerFreelancer>
      <div className="border" style={{ height: "600px", width: "100%" }}>
        <Table striped bordered hover className="text-center">
          <thead>
            <tr>
              <th>Tên việc </th>
              <th>Khách hàng</th>
              <th>Mức độ hài lòng</th>
              <th>Hành động</th>
            </tr>
          </thead>
          <tbody>
            {myEvaluate.map((ev, i) => {
              return (
                <tr key={i}>
                  <td> {ev.job.name}</td>
                  <td>{ev.freelancer.email}</td>
                  <td>
                    <div style={{ fontSize: "20px" }}>
                      {[...Array(ev.rating)].map((star, index) => {
                        return (
                          <button
                            type="button"
                            key={index}
                            style={{
                              backgroundColor: "transparent",
                              border: "none",
                              outline: "none",
                              cursor: "pointer",
                              color: "#fed455",
                            }}
                          >
                            <span className="star">&#9733;</span>
                          </button>
                        );
                      })}
                    </div>
                  </td>
                  <td>
                    <div className="d-flex justify-content-center">
                      <Button
                        style={{
                          backgroundColor: "rgb(45, 185, 100)",
                          border: "none",
                        }}
                        onClick={handleShow}
                      >
                        Xem chi tiết
                      </Button>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </div>
      <div className="d-flex justify-content-center my-5">
        <Pagination defaultCurrent={1} total={50} onChange={onChangePage} />
      </div>
      <Modal show={show} onHide={handleClose}>
        <Form>
          <Modal.Header closeButton>
            <Modal.Title>Đánh giá</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Công việc:</Form.Label>
              <Form.Control
                type="text"
                disabled
                value={myEvaluate[0]?.job.name}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Công việc:</Form.Label>
              <Form.Control
                type="text"
                disabled
                value={myEvaluate[0]?.freelancer.email}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Mức độ hài lòng:</Form.Label>
              <div className={styles["star-rating"]}>
                {[...Array(myEvaluate[0]?.rating)].map((star, index) => {
                  index += 1;
                  return (
                    <button
                      type="button"
                      key={index}
                      className={styles.on}
                      styles={{ height: "50px", width: "50px" }}
                    >
                      <span className="star">&#9733;</span>
                    </button>
                  );
                })}
              </div>
            </Form.Group>

            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Nội dung đánh giá:</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                value={myEvaluate[0]?.evaluate}
                disabled
                // value={formRating.evaluate}
                // onChange={(e) =>
                //   setFormRating({ ...formRating, evaluate: e.target.value })
                // }
              />
            </Form.Group>
          </Modal.Body>
        </Form>
      </Modal>
    </Container>
  );
}

export default ManagerFreeLancer4;

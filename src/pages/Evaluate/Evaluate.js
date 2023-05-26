import { useEffect, useState } from "react";
import { Button, Container, Modal, Table, Form } from "react-bootstrap";
import NavManagerClient from "~/components/NavManagerClient/NavManagerClient";
import { handleGetJobFinal } from "~/service";
import styles from "./Evaluate.module.scss";
import { handleCreateEvaluate } from "~/service/evaluateService";
import { Pagination } from "antd";
import { notification } from "antd";

function Evaluate() {
  const [api, contextHolder] = notification.useNotification();
  const [validated, setValidated] = useState(false);
  const openNotificationWithIcon = (type) => {
    setTimeout(() => {
      if (type == "success") {
        api[type]({
          message: "Đánh giá thành công",
        });
      } else {
        api[type]({
          message: "Đánh giá Thất bại",
        });
      }
    }, 1000);
  };
  const [current, setCurrent] = useState(1);
  const [jobFinal, setJobFinal] = useState([]);
  const [show, setShow] = useState(false);
  const [hover, setHover] = useState(0);
  const [jobShow, setJobShow] = useState();
  const [formRating, setFormRating] = useState({
    rating: 0,
    evaluate: "",
    job: "",
    client: "",
    freelancer: "",
  });

  const onChangePage = (page) => {
    console.log(page);
    setCurrent(page);
  };
  const handleClose = () => {
    setShow(false);
    setFormRating({ ...formRating, rating: 0, evaluate: "" });
    setHover(0);
  };

  const handleShow = async (id) => {
    const jobIsShow = await jobFinal.find((js) => js._id == id);

    setJobShow(jobIsShow);
    setShow(true);
    if (!!jobIsShow) {
      setFormRating({
        ...formRating,
        job: id,
        freelancer: jobIsShow.freelancer._id,
        client: jobIsShow.user._id,
      });
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;

    if (form.checkValidity() !== false) {
      const result = await handleCreateEvaluate(formRating);
      if (result.success) {
        openNotificationWithIcon("success");
        handleClose();
      }
    } else {
      openNotificationWithIcon("error");
    }

    setValidated(true);
    // e.preventDefault();
    // const response = await handleCreateEvaluate(formRating);
    // console.log(response);
    // handleClose();
  };

  const fetchData = async () => {
    const result = await handleGetJobFinal();
    setJobFinal(result.job);
  };
  useEffect(() => {
    fetchData();
  }, []);
  if (!jobFinal) return <div>...Loading</div>;
  return (
    <Container>
      {contextHolder}
      <NavManagerClient></NavManagerClient>
      <hr />
      <div className="border" style={{ height: "500px", width: "100%" }}>
        <Table striped bordered hover className="text-center">
          <thead>
            <tr>
              <th>Tên việc </th>
              <th>Tên Freelancer</th>
              <th>Trạng thái</th>
              <th>Hành động</th>
            </tr>
          </thead>
          <tbody>
            {!!jobFinal.length &&
              jobFinal.map((j) => (
                <tr key={j._id}>
                  <td>{j.name}</td>
                  <td>{j.freelancer?.email}</td>
                  <td>Chưa Đánh giá</td>
                  <td
                    onClick={() => handleShow(j._id)}
                    style={{ cursor: "pointer" }}
                  >
                    <Button
                      size="sm"
                      style={{
                        backgroundColor: "rgb(45, 185, 100)",
                        border: "none",
                      }}
                    >
                      Đánh giá
                    </Button>
                  </td>
                </tr>
              ))}
          </tbody>
        </Table>
        <div className="d-flex justify-content-center my-5">
          <Pagination defaultCurrent={1} total={50} onChange={onChangePage} />
        </div>
        <Modal show={show} onHide={handleClose}>
          <Form onSubmit={handleSubmit}>
            <Modal.Header closeButton>
              <Modal.Title>Đánh giá Freelancer</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Công việc:</Form.Label>
                <Form.Control type="text" value={jobShow?.name} disabled />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Freelancer:</Form.Label>
                <Form.Control
                  type="text"
                  value={jobShow?.freelancer.email}
                  disabled
                />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Mức độ hài lòng:</Form.Label>

                <div className={styles["star-rating"]}>
                  {[...Array(5)].map((star, index) => {
                    index += 1;
                    return (
                      <button
                        type="button"
                        key={index}
                        className={
                          index <= (hover || formRating.rating)
                            ? styles.on
                            : styles.off
                        }
                        onClick={() =>
                          setFormRating({ ...formRating, rating: index })
                        }
                        onMouseEnter={() => setHover(index)}
                        onMouseLeave={() => setHover(formRating.rating)}
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
                  value={formRating.evaluate}
                  onChange={(e) =>
                    setFormRating({ ...formRating, evaluate: e.target.value })
                  }
                />
              </Form.Group>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Hủy
              </Button>
              <Button variant="primary" type="submit">
                Đánh giá
              </Button>
            </Modal.Footer>
          </Form>
        </Modal>
      </div>
    </Container>
  );
}

export default Evaluate;

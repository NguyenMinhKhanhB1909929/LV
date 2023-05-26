import { useEffect, useState } from "react";
import {
  Col,
  Container,
  Row,
  Form,
  Button,
  ButtonGroup,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import NavManagerClient from "~/components/NavManagerClient/NavManagerClient";
import {
  handleFinalJob,
  handleGetJobAssign,
  handlePostAssignJob,
} from "~/service";
import { notification } from "antd";

function AssignJob() {
  const [api, contextHolder] = notification.useNotification();
  const [validated, setValidated] = useState(false);
  const openNotificationWithIcon = (type) => {
    setTimeout(() => {
      if (type == "success") {
        api[type]({
          message: "Giao việc làm thành công",
        });
      } else {
        api[type]({
          message: "Giao việc làm Thất bại",
        });
      }
    }, 1000);
  };
  const [assignForm, setAssignForm] = useState({
    content: "",
    id: "",
  });
  const [jobAssign, setJobAssign] = useState([]);
  const [final, setFinal] = useState(false);
  const [chooseJob, setChooseJob] = useState();
  const [jobChoose, setJobChoose] = useState([]);

  const hanleChangeContent = (e) => {
    setAssignForm({ ...assignForm, content: e.target.value });
  };
  const handleChooseJob = (e) => {
    setChooseJob(e.target.value);
    let job = jobAssign.filter((j) => j._id == e.target.value);
    setJobChoose(job);
    setAssignForm({ ...assignForm, id: e.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;

    if (form.checkValidity() !== false) {
      const result = await handlePostAssignJob(assignForm);
      if (result.success) {
        openNotificationWithIcon("success");
      }
    } else {
      openNotificationWithIcon("error");
    }

    setValidated(true);
    // e.preventDefault();
    // console.log(assignForm);
    // const result = await handlePostAssignJob(assignForm);
    // console.log(result);
  };

  const handleChooseFinalJob = async () => {
    try {
      const result = await handleFinalJob(chooseJob);
      setFinal(true);
    } catch (error) {
      console.log("LÔI");
    }
  };

  const fetchData = async () => {
    const result = await handleGetJobAssign();
    console.log(result);
    setJobAssign(result.job);
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <Container>
      {contextHolder}
      <NavManagerClient></NavManagerClient>

      <div>
        <hr />
        <Row className="my-5">
          <Col lg="4">
            <h3>Danh sách công việc</h3>

            <Form.Group>
              <Form.Select defaultValue={"DEFAULT"} onChange={handleChooseJob}>
                <option value="DEFAULT" disabled>
                  - Chọn công việc muốn giao -
                </option>
                {jobAssign.map((j) => (
                  <option key={j._id} value={j._id}>
                    {j.name}
                  </option>
                ))}
              </Form.Select>
            </Form.Group>
            <p>
              {jobChoose[0]?.freelancer.email
                ? "Freelancer:" + jobChoose[0]?.freelancer.email
                : null}
            </p>
            {!final ? (
              <div>
                <h3>DỰ ÁN ĐÃ HOÀN THÀNH ?</h3>
                <Button onClick={handleChooseFinalJob}>
                  Xác nhận kết thúc dự án
                </Button>
              </div>
            ) : (
              <div>
                <h3>DỰ ÁN ĐÃ HOÀN THÀNH</h3>
                <Link to="/managerClient/4">
                  <Button>Đánh giá Freelancer</Button>
                </Link>
              </div>
            )}
          </Col>
          <Col lg="8">
            <form onSubmit={handleSubmit}>
              <textarea
                name=""
                id=""
                cols="114"
                rows="14"
                value={assignForm.content}
                onChange={hanleChangeContent}
              ></textarea>
              <div className="d-flex justify-content-center">
                <Button type="submit">Giao việc</Button>
              </div>
            </form>
            <div></div>
          </Col>
        </Row>
      </div>
    </Container>
  );
}

export default AssignJob;

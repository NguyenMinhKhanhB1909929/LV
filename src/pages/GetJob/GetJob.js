import { useEffect, useState } from "react";
import { Button, Col, Container, Row, Form } from "react-bootstrap";

import NavManagerFreelancer from "~/components/NavManagerFreelancer/NavManagerFreelancer";
import {
  handleFinalJob,
  handleGetAssignJob,
  handleGetJobAssign,
  handleGetJobAssign1,
} from "~/service";

function GetJob() {
  const [jobAssign, setJobAssign] = useState([]);
  const [final, setFinal] = useState(false);
  const [chooseJob, setChooseJob] = useState();
  const [jobChoose, setJobChoose] = useState([]);
  const [contentAssign, setContentAssign] = useState("");
  const [id, setId] = useState("");

  const handleChooseJob = (e) => {
    setChooseJob(e.target.value);
    let job = jobAssign.filter((j) => j._id == e.target.value);
    setJobChoose(job);
    setId(e.target.value);
  };
  const fetchData = async () => {
    const result = await handleGetJobAssign1();
    console.log(result);
    setJobAssign(result.job);
  };
  const fetchAssignJob = async (id) => {
    const result = await handleGetAssignJob(id);
    setContentAssign(result.assignJob?.[0]?.content);
  };
  useEffect(() => {
    fetchData();
  }, []);
  useEffect(() => {
    if (!!id) fetchAssignJob(id);
  }, [id]);
  return (
    <Container>
      <NavManagerFreelancer></NavManagerFreelancer>
      <div>
        <hr />
        <Row>
          <Col lg="4">
            <h3>Danh sách công việc</h3>

            <Form.Group>
              <Form.Select defaultValue={"DEFAULT"} onChange={handleChooseJob}>
                <option value="DEFAULT" disabled>
                  - Chọn công việc đã nhận -
                </option>
                {jobAssign.map((j) => (
                  <option key={j._id} value={j._id}>
                    {j.name}
                  </option>
                ))}
              </Form.Select>
            </Form.Group>
            <p>
              {jobChoose?.[0]?.user.email
                ? "Nhà tuyển dụng:" + jobChoose?.[0]?.user.email
                : null}
            </p>
          </Col>
          <Col lg="8">
            <div className="border">
              <pre
                style={{
                  whiteSpace: "pre-wrap",
                  width: "100%",
                  fontFamily: "var(--bs-body-font-family)",
                }}
              >
                {contentAssign}
              </pre>
            </div>
          </Col>
        </Row>
      </div>
    </Container>
  );
}

export default GetJob;

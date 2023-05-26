import {
  Container,
  Row,
  Col,
  Card,
  ListGroup,
  Button,
  Form,
  Pagination,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

import { jobSelector } from "~/config/selectors";
import Jobs from "~/Layout/DefaultLayout/Jobs";
import { handleGetJob } from "~/service";
import { getJobSuccess } from "~/store/actions/jobAction";
import routesConfig from "~/config/routes";

function PartTimeJob() {
  const dispatch = useDispatch();
  const jobData = useSelector(jobSelector).jobList;

  const fetchData = async () => {
    if (jobData.length === 0) {
      try {
        const result = await handleGetJob();
        if (result.success) {
          dispatch(getJobSuccess(result.jobs));
        }
      } catch (error) {
        console.log(error);
      }
    }
  };

  useEffect(() => fetchData, []);

  return (
    <Container>
      <Row className="my-5">
        <Col lg="4">
          <Card className="mb-4">
            <Card.Header>Lĩnh vực</Card.Header>
            <Card.Body>
              <span>Tất cả</span>
              <br />
              <span>Bán hàng & kinh doanh</span>
              <br />
              <span>IT và lập trình</span>
              <br />
              <span>Đào tạo và khóa học</span>
              <br />
            </Card.Body>
          </Card>
          <Card className="mb-4">
            <Card.Header>Dịch vụ</Card.Header>
            <Card.Body>
              <Form.Check type="radio" label="Tất cả" />
            </Card.Body>
          </Card>
          <Card className="mb-4">
            <Card.Header>Trạng thái</Card.Header>
            <Card.Body>
              <Form.Check type="radio" label="Tất cả" name="1" defaultChecked />
              <Form.Check type="radio" label="Đang nhận hồ sơ" name="1" />
              <Form.Check type="radio" label="Đã giao việc" name="1" />
            </Card.Body>
          </Card>
          <Card className="mb-4">
            <Card.Header>Hình thức làm việc</Card.Header>
            <Card.Body>
              <Form.Check type="radio" label="Tất cả" name="2" defaultChecked />
              <Form.Check type="radio" label="Trả theo dự án" name="2" />
              <Form.Check type="radio" label="Trả theo giờ" name="2" />
              <Form.Check type="radio" label="Trả theo tháng" name="2" />
            </Card.Body>
          </Card>
          <Card className="mb-4">
            <Card.Header>Lĩnh vực</Card.Header>
            <Card.Body>
              <Card.Text>
                <span>Tất cả</span>
                <br />
                <span>Tất cả</span>
                <br />
                <span>Tất cả</span>
                <br />
                <span>Tất cả</span>
                <br />
              </Card.Text>
            </Card.Body>
          </Card>
          <Card className="mb-4">
            <Card.Header>Lĩnh vực</Card.Header>
            <Card.Body>
              <Card.Text>
                <span>Tất cả</span>
                <br />
                <span>Tất cả</span>
                <br />
                <span>Tất cả</span>
                <br />
                <span>Tất cả</span>
                <br />
              </Card.Text>
            </Card.Body>
          </Card>
          <Card className="my-4">
            <Card.Header>Lĩnh vực</Card.Header>
            <Card.Body>
              <Card.Text>
                <span>Tất cả</span>
                <br />
                <span>Tất cả</span>
                <br />
                <span>Tất cả</span>
                <br />
                <span>Tất cả</span>
                <br />
              </Card.Text>
            </Card.Body>
          </Card>
          <Card className="my-4">
            <Card.Header>Lĩnh vực</Card.Header>
            <Card.Body>
              <Card.Text>
                <span>Tất cả</span>
                <br />
                <span>Bán hàng & kinh doanh</span>
                <br />
                <span>IT và lập trình</span>
                <br />
                <span>Đào tạo và khóa học</span>
                <br />
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <div>
            <ListGroup horizontal defaultActiveKey="1">
              <ListGroup.Item
                style={{ width: "25%" }}
                action
                href="/1"
                to={"/allJob"}
                as={Link}
              >
                Tất cả công việc
              </ListGroup.Item>
              <ListGroup.Item
                action
                href="2"
                to={routesConfig.PartTimeJob}
                as={Link}
                style={{ width: "25%" }}
              >
                Việc bán thời gian
              </ListGroup.Item>
              <ListGroup.Item
                action
                href="3"
                to={"/allJob3"}
                as={Link}
                style={{ width: "25%" }}
              >
                Việc toàn thời gian
              </ListGroup.Item>
              <ListGroup.Item
                action
                href="4"
                to={"/allJob4"}
                as={Link}
                style={{ width: "25%" }}
              >
                Việc làm yêu thích
              </ListGroup.Item>
            </ListGroup>
            <div className="p-4 border">
              <Form className="d-flex">
                <Form.Control
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                />
                <Button variant="outline-success">Search</Button>
              </Form>
            </div>
            <div>
              <Jobs jobList={jobData}></Jobs>
            </div>
            <div className="p-3 border d-flex justify-content-center">
              <Pagination>
                <Pagination.First />
                <Pagination.Prev />
                <Pagination.Item>{1}</Pagination.Item>
                <Pagination.Ellipsis />

                <Pagination.Item>{10}</Pagination.Item>
                <Pagination.Item>{11}</Pagination.Item>
                <Pagination.Item active>{12}</Pagination.Item>
                <Pagination.Item>{13}</Pagination.Item>
                <Pagination.Item disabled>{14}</Pagination.Item>

                <Pagination.Ellipsis />
                <Pagination.Item>{20}</Pagination.Item>
                <Pagination.Next />
                <Pagination.Last />
              </Pagination>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default PartTimeJob;

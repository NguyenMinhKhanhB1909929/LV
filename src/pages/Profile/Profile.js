import {
  Container,
  Row,
  Col,
  Card,
  Image,
  Button,
  ListGroup,
} from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faPhone,
  faStar,
  faIdCard,
  faLocationDot,
  faCheck,
  faUser,
  faChevronRight,
  faChevronLeft,
} from "@fortawesome/free-solid-svg-icons";
import ProgressBar from "react-bootstrap/ProgressBar";
import { useDispatch, useSelector } from "react-redux";
import { handleGetUser } from "~/service";
import { userGetSuccess } from "~/store/actions";
import { useEffect } from "react";
import { authSelector } from "~/config/selectors";

function Profile() {
  const dispatch = useDispatch();
  const handleGetUserInfo = async () => {
    try {
      const result = await handleGetUser();
      if (result.success) {
        dispatch(userGetSuccess(result.user));
      }
    } catch (error) {}
  };

  useEffect(() => handleGetUserInfo, []);
  const auth = useSelector(authSelector);
  const user = auth.user;
  if (!user) return <div>Loading...</div>;
  return (
    <Container>
      <Row className="mt-5">
        <Col lg="8">
          <div className="d-flex align-items-center">
            <Image
              roundedCircle
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSntUO2-Reaoe2CDt3ewzBkpUv7PhNSmMIlUTI6via&s"
              style={{ height: "150px", width: "150px" }}
              className="me-4"
            ></Image>
            <div className="my-2">
              <div className="d-flex align-items-center">
                <span style={{ fontSize: "26px", fontWeight: "bold" }}>
                  {user.fullName}
                </span>
                <FontAwesomeIcon icon={faPhone} size="lg" className="mx-3" />
                <FontAwesomeIcon icon={faIdCard} size="lg" className="mx-3" />
                <Button
                  style={{
                    backgroundColor: "rgb(45, 185, 100)",
                    border: "none",
                  }}
                >
                  Cập nhật thông tin liên lạc
                </Button>
              </div>
              <div className="my-2">
                <span className="text-secondary">{user.title}</span>
              </div>
              <div>
                <FontAwesomeIcon
                  icon={faLocationDot}
                  size="lg"
                  className="me-2"
                />
                <span>{user.city}</span>
              </div>
              <div className="my-2">
                <Button variant="outline-success" className="mx-1" size="sm">
                  Design
                </Button>
                <Button variant="outline-success" className="mx-1" size="sm">
                  Thiết kế logo
                </Button>
                <Button variant="outline-success" className="mx-1" size="sm">
                  Tester
                </Button>
              </div>
            </div>
          </div>
          <div className="mb-4">
            <h4>Giới thiệu</h4>
            <span>{user.introduce}</span>
          </div>
          <div className="mb-4">
            <h4>Dịch vụ</h4>
            <span>Danh sách các dịch vụ được freelancer cung cấp:</span>
            <div className="text-success">
              <FontAwesomeIcon icon={faCheck} className="me-1" />
              <span> Dựng website bán hàng</span>
            </div>
            <div className="text-success">
              <FontAwesomeIcon icon={faCheck} className="me-1" />
              <span> Chuyển Template thành Website</span>
            </div>
            <div className="text-success">
              <FontAwesomeIcon icon={faCheck} className="me-1" />
              <span> Thiết kế banner quảng cáo</span>
            </div>
            <Button className="mt-3" variant="secondary">
              Thêm dịch vụ
            </Button>
          </div>
          <div>Hồ sơ năng lực</div>
          <div>
            <Row>
              <Col lg="4">
                <Card>
                  <Card.Img
                    variant="top"
                    src="https://vapa.vn/wp-content/uploads/2022/12/anh-3d-thien-nhien-002.jpg"
                  />
                  <Card.Body>
                    <Card.Text>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col lg="4">
                <Card>
                  <Card.Img
                    variant="top"
                    src="https://vapa.vn/wp-content/uploads/2022/12/anh-3d-thien-nhien-002.jpg"
                  />
                  <Card.Body>
                    <Card.Text>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col lg="4">
                <Card>
                  <Card.Img
                    variant="top"
                    src="https://vapa.vn/wp-content/uploads/2022/12/anh-3d-thien-nhien-002.jpg"
                  />
                  <Card.Body>
                    <Card.Text>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </div>
          <div>
            <ListGroup className="my-5">
              <ListGroup.Item variant="secondary">
                Tất cả công việc của Khánh
              </ListGroup.Item>
              <ListGroup.Item>
                <div>
                  <h4>Đang làm</h4>
                  <div className="d-flex align-items-center">
                    <div className="me-auto">
                      <h5>Thiết kế website du lịch</h5>
                      <Button variant="outline-secondary">Việc dự án</Button>
                    </div>
                    <span>5.500.000 VNĐ</span>
                  </div>
                </div>
              </ListGroup.Item>
              <ListGroup.Item>
                <div>
                  <div className="d-flex justify-content-between">
                    <h4>Đã hoàn thành</h4>
                    <div>
                      <Button className="mx-2" disabled>
                        <FontAwesomeIcon icon={faChevronLeft} />
                      </Button>
                      <Button>
                        <FontAwesomeIcon icon={faChevronRight} />
                      </Button>
                    </div>
                  </div>
                  <div className="d-flex align-items-center">
                    <div className="me-auto">
                      <h5>Thiết kế website du lịch</h5>
                      <Button variant="outline-secondary">Việc dự án</Button>
                    </div>
                    <span>5.500.000 VNĐ</span>
                  </div>
                  <Container>
                    <Row className=" mt-2" style={{ backgroundColor: "#ccc" }}>
                      <Col lg="8" className=" my-2">
                        <span>
                          Bận nhận việc Bận nhận việc Bận nhận việc Bận nhận
                          việc Bận nhận việc Bận nhận việc Bận nhận việc Bận
                          nhận việc
                        </span>
                        <div className="mt-1">
                          <FontAwesomeIcon icon={faUser} />
                          <span className="mx-2"> Nguyễn Minh Khánh</span>
                        </div>
                      </Col>
                      <Col className="text-end">
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                      </Col>
                    </Row>
                  </Container>
                </div>
              </ListGroup.Item>
              <ListGroup.Item>
                <div>
                  <div className="d-flex justify-content-between">
                    <h4>Đã hủy</h4>
                    <div>
                      <Button className="mx-2" disabled>
                        <FontAwesomeIcon icon={faChevronLeft} />
                      </Button>
                      <Button>
                        <FontAwesomeIcon icon={faChevronRight} />
                      </Button>
                    </div>
                  </div>
                  <div className="d-flex align-items-center">
                    <div className="me-auto">
                      <h5>Thiết kế website du lịch</h5>
                      <Button variant="outline-secondary">Việc dự án</Button>
                    </div>
                    <span>5.500.000 VNĐ</span>
                  </div>
                  <Container>
                    <Row className="mt-2" style={{ backgroundColor: "#ccc" }}>
                      <Col lg="8" className=" my-2">
                        <span>
                          Bận nhận việc Bận nhận việc Bận nhận việc Bận nhận
                          việc Bận nhận việc Bận nhận việc Bận nhận việc Bận
                          nhận việc
                        </span>
                        <div className="mt-1">
                          <FontAwesomeIcon icon={faUser} />
                          <span className="mx-2"> Nguyễn Minh Khánh</span>
                        </div>
                      </Col>
                      <Col className="text-end">
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                      </Col>
                    </Row>
                  </Container>
                </div>
              </ListGroup.Item>
            </ListGroup>
          </div>
        </Col>
        <Col lg="4">
          <Card>
            <Card.Header>Thông tin liên hệ</Card.Header>
            <Card.Body className="pb-4">
              <Card.Text>
                <FontAwesomeIcon icon={faEnvelope} />
                <span className="mx-2">{user.email}</span>
              </Card.Text>
              <Card.Text>
                <FontAwesomeIcon icon={faPhone} />
                <span className="mx-2">{user.phone}</span>
              </Card.Text>
            </Card.Body>
          </Card>
          <Card className="my-4">
            <Card.Header>Tóm lược</Card.Header>
            <Card.Body className="pb-4">
              <div className="d-flex">
                <div className="me-auto">
                  <span className="mx-2">5.0</span>
                  <FontAwesomeIcon icon={faStar} style={{ color: "yellow" }} />
                  <FontAwesomeIcon icon={faStar} style={{ color: "yellow" }} />
                  <FontAwesomeIcon icon={faStar} style={{ color: "yellow" }} />
                  <FontAwesomeIcon icon={faStar} style={{ color: "yellow" }} />
                  <FontAwesomeIcon icon={faStar} style={{ color: "yellow" }} />
                </div>
                <span>3 Đánh giá</span>
              </div>
              <div className="d-flex">
                <span className="me-auto">Đã kiếm được</span>
                <span>0 VNĐ</span>
              </div>
              <div>
                <span className="me-auto">Hoàn thành việc</span>
                <ProgressBar variant="success" now={100} label={"100%"} />
              </div>
              <div>
                <span className="me-auto">Được thuê lại</span>
                {true ? (
                  <ProgressBar variant="secondary" now={100} label={"0%"} />
                ) : (
                  <ProgressBar variant="success" now={50} label={"50%"} />
                )}
              </div>
            </Card.Body>
          </Card>
          <Card>
            <Card.Header>Làm việc</Card.Header>
            <Card.Body className="pb-4">
              <Card.Text>Mới đi làm (Dưới 2 năm kinh nghiệm)</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Profile;

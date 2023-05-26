import {
  Container,
  Row,
  Col,
  Image,
  Form,
  Button,
  ListGroup,
} from "react-bootstrap";

import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

import { handleGetJobById } from "~/service";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { authSelector, jobSelector, offerSelector } from "~/config/selectors";
import { getJobByIdSuccess } from "~/store/actions/jobAction";
import { handleCreateOffer, handleGetOfferByJob } from "~/service/offerService";
import routesConfig from "~/config/routes";
import UserApply from "~/components/UserApply";
import { getOfferByJobSuccess } from "~/store/actions/offerAction";
import { notification } from "antd";
function JobApply() {
  const [validated, setValidated] = useState(false);

  const auth = useSelector(authSelector);
  const user = auth.user;
  const { id } = useParams();
  const jobData = useSelector(jobSelector).job[0];
  const offerData = useSelector(offerSelector).offer;
  const authData = useSelector(authSelector);
  const isLoggedIn = authData.isLoggedIn;
  const dispatch = useDispatch();
  const [api, contextHolder] = notification.useNotification();
  const openNotificationWithIcon = (type) => {
    setTimeout(() => {
      if (type == "success") {
        api[type]({
          message: "Chào giá thành công",
        });
      } else {
        api[type]({
          message: "Chào giá Thất bại",
        });
      }
    }, 1000);
  };

  const [offerForm, setOfferForm] = useState({
    fee: "",
    time: "",
    experience: "",
    plan: "",
    job: id,
  });

  const { fee, time, experience, plan } = offerForm;

  const handleChangeOfferForm = (e) => {
    setOfferForm({ ...offerForm, [e.target.name]: e.target.value });
  };

  const fetchData = async () => {
    const result = await handleGetJobById(id);

    if (result.success) {
      dispatch(getJobByIdSuccess(result.job));
    }
  };

  const fetchOffer = async () => {
    const result = await handleGetOfferByJob(id);

    if (result.success) {
      dispatch(getOfferByJobSuccess(result.offer));
    }
  };

  useEffect(() => {
    fetchData();
    fetchOffer();
  }, []);

  const handleSubmitForm = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() !== false) {
      const result = await handleCreateOffer(offerForm);
      if (result.success) {
        openNotificationWithIcon("success");
      }
    } else {
      openNotificationWithIcon("error");
    }

    setValidated(true);
  };

  return (
    <Container>
      {contextHolder}
      <ListGroup horizontal defaultActiveKey="2" className="mt-3">
        <ListGroup.Item
          style={{ width: "25%" }}
          action
          href="1"
          // to={"/allJob"}
          as={Link}
        >
          <div>
            <span className="border p-1 rounded-circle me-2">1</span>
            <span>Đăng việc</span>
          </div>
        </ListGroup.Item>
        <ListGroup.Item
          action
          href="2"
          // to={"/allJob2"}
          as={Link}
          style={{ width: "25%" }}
        >
          <div>
            <span className="border p-1 rounded-circle me-2">2</span>
            <span>Nhận hồ sơ</span>
          </div>
        </ListGroup.Item>
        <ListGroup.Item
          action
          href="3"
          // to={"/allJob3"}
          as={Link}
          style={{ width: "25%" }}
        >
          <div>
            <span className="border p-1 rounded-circle me-2">3</span>
            <span>Giao việc</span>
          </div>
        </ListGroup.Item>
        <ListGroup.Item
          action
          href="4"
          // to={"/allJob4"}
          as={Link}
          style={{ width: "25%" }}
        >
          <div>
            <span className="border p-1 rounded-circle me-2">4</span>
            <span>Đánh giá</span>
          </div>
        </ListGroup.Item>
      </ListGroup>
      <Row className="my-5">
        <Col lg="8">
          <div>
            <h1>{jobData.name}</h1>
            <div>
              <span>Dịch vụ cần thuê:{jobData.category}</span>
            </div>
            <div className=" p-2 my-3">
              <pre
                style={{
                  whiteSpace: "pre-wrap",
                  width: "100%",
                  fontFamily: "var(--bs-body-font-family)",
                }}
              >
                {jobData.details}
              </pre>
            </div>
            <div>
              <span>
                Kỹ năng:{" "}
                {jobData.skill?.map((sk, i) => (
                  <Button className="m-2" key={i}>
                    {sk}
                  </Button>
                ))}
              </span>
            </div>
          </div>
        </Col>
        <Col lg="4">
          <div className="border">
            <h3>Thông tin dự án</h3>
            <Row className="p-3">
              <Col>
                <h6>ID dự án</h6>
                <h6>Ngày đăng</h6>
                <h6>Chỉ còn</h6>
                <h6>Ngân sách</h6>

                <h6> Địa điểm</h6>
                <h6>Hình thức làm việc</h6>
                <h6>Hình thức trả lương</h6>
              </Col>
              <Col>
                <h6>66421</h6>
                <h6>22/03/2023, 11:14</h6>
                <h6>6 ngày 7 giờ</h6>
                <h6>
                  {jobData.payFrom}đ - {jobData.payTo}đ
                </h6>
                <h6>{jobData.location}</h6>
                <h6>{jobData.pattern}</h6>
                <h6>{jobData.methodPay}</h6>
              </Col>
            </Row>
            <div className="p-3">
              <div className="d-flex">
                <Image
                  src="https://img.thuthuattinhoc.vn/uploads/2019/01/13/hinh-anh-girl-xinh-dep-tu-nhien_104525368.jpg"
                  style={{ height: "120px", width: "120px" }}
                  className="me-4"
                ></Image>
                <h5>{jobData.user?.email}</h5>
              </div>
              <Row className="p-3">
                <Col>
                  <h6>Đến từ</h6>
                  <h6>Tham gia</h6>
                  <h6>Đã đăng</h6>
                </Col>
                <Col>
                  <h6>Quang Ninh</h6>
                  <h6>04/09/2021</h6>
                  <h6>2 việc</h6>
                </Col>
              </Row>
            </div>
          </div>
        </Col>
      </Row>
      <div className="border p-3">
        <h3>Thông tin chào giá</h3>
        {isLoggedIn ? (
          <Form onSubmit={handleSubmitForm} noValidate validated={validated}>
            <Row className="my-5">
              <Col lg="4">
                <h5>ĐỀ XUẤT CHI PHÍ*</h5>
                <Form.Group className="mb-3">
                  <Form.Label>Chi phí dự án</Form.Label>
                  <Form.Control
                    required
                    type="number"
                    name="fee"
                    value={fee}
                    onChange={handleChangeOfferForm}
                    placeholder="Bạn muốn chi phí bao nhiêu"
                  />
                  <Form.Control.Feedback type="invalid">
                    Vui lòng chọn lĩnh vực tuyển dụng.
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Dự kiến hoàn thành</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    placeholder="Thời gian hoàn thành"
                    name="time"
                    value={time}
                    onChange={handleChangeOfferForm}
                  />
                  <Form.Control.Feedback type="invalid">
                    Vui lòng chọn lĩnh vực tuyển dụng.
                  </Form.Control.Feedback>
                </Form.Group>
              </Col>
              <Col lg="8">
                <h5>ĐỀ XUẤT THUYẾT PHỤC KHÁCH HÀNG*</h5>
                <Form.Group className="mb-3">
                  <Form.Label>
                    1.Bạn có những kinh nghiệm và kỹ năng nào phù hợp với dự án
                    này?*
                  </Form.Label>
                  <Form.Control
                    required
                    as="textarea"
                    rows={4}
                    placeholder="Bạn có những kinh nghiệm và kỹ năng nào phù hợp với dự án
                    này?"
                    name="experience"
                    value={experience}
                    onChange={handleChangeOfferForm}
                  />
                  <Form.Control.Feedback type="invalid">
                    Vui lòng chọn lĩnh vực tuyển dụng.
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group className="mb-3" required>
                  <Form.Label>
                    2.Bạn dự định thực hiện dự án này như thế nào?*
                  </Form.Label>
                  <Form.Control
                    required
                    as="textarea"
                    rows={4}
                    placeholder="Bạn dự định thực hiện dự án này như thế nào"
                    name="plan"
                    value={plan}
                    onChange={handleChangeOfferForm}
                  />
                  <Form.Control.Feedback type="invalid">
                    Vui lòng chọn lĩnh vực tuyển dụng.
                  </Form.Control.Feedback>
                </Form.Group>
                <h5>THÔNG TIN LIÊN HỆ CỦA BẠN</h5>
                <Form.Control
                  type="text"
                  name="phone"
                  value={user?.phone}
                  disabled
                  placeholder="Thời gian hoàn thành"
                />
                <Form.Control.Feedback type="invalid">
                  Vui lòng chọn lĩnh vực tuyển dụng.
                </Form.Control.Feedback>
                <div className="m-4 text-center">
                  <Button size="lg" type="submit">
                    {" "}
                    Gửi chào giá
                  </Button>
                </div>
              </Col>
            </Row>
          </Form>
        ) : (
          <span>
            Vui lòng
            <Link to={routesConfig.login}> đăng nhập </Link>
            để chào giá{" "}
          </span>
        )}
      </div>
      <div className="border d-flex justify-content-between p-2 my-3">
        <span>Chào giá: {offerData.length}</span>
        <span>
          Thấp nhất: 100.000 VNĐ | Trung bình: 762.188 VNĐ | Cao nhất: 2.000.000
          VNĐ
        </span>
        <span>Trung bình: 4 ngày</span>
      </div>
      {offerData.map((offer) => (
        <UserApply key={offer._id} offer={offer}></UserApply>
      ))}
    </Container>
  );
}

export default JobApply;

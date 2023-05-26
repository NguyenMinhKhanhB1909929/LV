import { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import classNames from "classnames/bind";

import { handlePostJob } from "~/service";
import {
  categoryList,
  locationList,
  methodPayList,
  patternList,
  placeList,
  serviceList,
  skillList,
} from "~/data/data";
import styles from "./PostJob.module.scss";
import { notification } from "antd";
import { useNavigate } from "react-router-dom";

var cx = classNames.bind(styles);

function PostJob() {
  const [api, contextHolder] = notification.useNotification();
  const [validated, setValidated] = useState(false);
  const [checkMoney, setCheckMoney] = useState(false);

  const openNotificationWithIcon = (type) => {
    setTimeout(() => {
      if (type == "success") {
        api[type]({
          message: "Đăng dự án thành công",
        });
      } else {
        api[type]({
          message: "Đăng dự án Thất bại",
        });
      }
    }, 1000);
  };
  const jobInfoList = {
    category: "",
    service: "",
    name: "",
    details: "",
    skill: [],
    deadline: "",
    pattern: "",
    place: "",
    location: "",
    methodPay: "",
    payFrom: "",
    payTo: "",
    isPrivate: false,
  };
  const [jobInfo, setJobInfo] = useState(jobInfoList);

  const [show, setShow] = useState(false);
  const [value, setValue] = useState("");

  const onInputChange = (event) => {
    const value = event.currentTarget.value;
    setValue(() => value);
  };

  const ItemList = (() => {
    if (!show) return [];
    return skillList
      .filter((v) => v.toLowerCase().includes(value.toLowerCase()))
      .map((v, i) => (
        <button
          onClick={() => {
            setValue("");
            setShow(false);
            setJobInfo({ ...jobInfo, skill: [...skill, v] });
          }}
          key={i}
        >
          {v}
        </button>
      ));
  })();

  const {
    category,
    service,
    name,
    details,
    skill,
    deadline,
    pattern,
    place,
    location,
    methodPay,
    payFrom,
    payTo,
    isPrivate,
  } = jobInfo;

  const handleChangeJobInfo = (e) => {
    setJobInfo({
      ...jobInfo,
      [e.target.name]: e.target.value,
      isPrivate: e.target.checked,
    });
  };

  const handleSubmitPostJob = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (Number(jobInfo.payFrom) > Number(jobInfo.payTo)) {
      setCheckMoney(true);
    } else {
      setCheckMoney(false);
    }
    if (
      form.checkValidity() !== false &&
      Number(jobInfo.payFrom) <= Number(jobInfo.payTo)
    ) {
      console.log(jobInfo.payFrom <= jobInfo.payTo);
      const result = await handlePostJob(jobInfo);
      if (result.success) {
        setJobInfo(jobInfoList);
        openNotificationWithIcon("success");
      }
    } else {
      openNotificationWithIcon("error");
    }

    setValidated(true);
  };

  return (
    <Container>
      <h1 className="text-center mt-5">Đăng tin</h1>
      {contextHolder}
      <Row className="mb-5">
        <Col lg="3"></Col>
        <Col lg="6">
          <Form onSubmit={handleSubmitPostJob} noValidate validated={validated}>
            <div>
              <h3 className="mt-5">Việc cần tuyển freelancer </h3>
              <Form.Group>
                <Form.Label>Chọn lĩnh vực cần tuyển</Form.Label>
                <Form.Select
                  required
                  defaultValue={""}
                  name="category"
                  onChange={handleChangeJobInfo}
                >
                  <option value="" disabled>
                    - Tên lĩnh vực -
                  </option>
                  {categoryList.map((category, i) => (
                    <option value={category} key={i}>
                      {category}
                    </option>
                  ))}
                </Form.Select>
                <Form.Control.Feedback type="invalid">
                  Vui lòng chọn lĩnh vực tuyển dụng.
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group>
                <Form.Label>
                  Chọn dịch vụ phù hợp với yêu cầu tuyển freelancer của bạn nhất
                </Form.Label>
                <Form.Select
                  required
                  defaultValue={""}
                  name="service"
                  onChange={handleChangeJobInfo}
                >
                  <option value="" disabled>
                    - Tên dịch vụ -
                  </option>
                  {serviceList.map((service, i) => (
                    <option value={service} key={i}>
                      {service}
                    </option>
                  ))}
                </Form.Select>
                <Form.Control.Feedback type="invalid">
                  Vui lòng chọn dịch vụ tuyển dụng.
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group>
                <Form.Label htmlFor="a">
                  Đặt tên cụ thể cho công việc cần tuyển
                </Form.Label>
                <Form.Control
                  type="text"
                  id="a"
                  placeholder="VD: Thiết kế web"
                  name="name"
                  value={name}
                  onChange={handleChangeJobInfo}
                  required
                />
                <Form.Control.Feedback type="invalid">
                  Vui lòng đặt tên công việc
                </Form.Control.Feedback>
              </Form.Group>
            </div>

            <div>
              <h3 className="mt-5">Thông tin đầy đủ về yêu cầu tuyển dụng</h3>
              <Form.Group className="mb-3">
                <Form.Label>
                  Nội dung chi tiết, và các đầu việc cần Freelancer thực hiện
                  (càng chi tiết, freelancer càng có đầy đủ thông tin để gửi báo
                  giá chính xác hơn).
                </Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  name="details"
                  value={details}
                  onChange={handleChangeJobInfo}
                  required
                />
                <Form.Control.Feedback type="invalid">
                  Vui lòng nhập thông tin chi tiết công việc.
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Kỹ năng yêu cầu freelancer phải có</Form.Label>
                <Form.Control
                  type="text"
                  rows={3}
                  value={value}
                  onChange={onInputChange}
                  onFocus={() => setShow(true)}
                  onBlur={() =>
                    setTimeout(() => {
                      setShow(false);
                    }, 150)
                  }
                  placeholder="VD: Photoshop, Tiếng Anh,..."
                />
                <div className={cx("list")}>{ItemList}</div>

                {skill.map((skill, i) => (
                  <div key={i} className={cx("skill")}>
                    {skill}
                  </div>
                ))}
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label>Hạn cuối nhận chào giá của freelancer</Form.Label>
                <Form.Control
                  required
                  type="date"
                  rows={3}
                  name="deadline"
                  value={deadline}
                  onChange={handleChangeJobInfo}
                />
                <Form.Control.Feedback type="invalid">
                  Vui lòng chọn thời hạn kết thúc nhận hồ sơ.
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label>Loại hình làm việc</Form.Label>
                <Form.Select
                  required
                  name="pattern"
                  defaultValue={""}
                  onChange={handleChangeJobInfo}
                >
                  <option value="" disabled>
                    - Loại hình việc làm -
                  </option>
                  {patternList.map((pattern, i) => (
                    <option value={pattern} key={i}>
                      {pattern}
                    </option>
                  ))}
                </Form.Select>
                <Form.Control.Feedback type="invalid">
                  Vui lòng chọn loại hình việc làm.
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Hình thức làm việc</Form.Label>
                <Form.Select
                  required
                  name="place"
                  defaultValue={""}
                  onChange={handleChangeJobInfo}
                >
                  <option value=""> - Hình thức việc làm -</option>
                  {placeList.map((place, i) => (
                    <option value={place} key={i}>
                      {place}
                    </option>
                  ))}
                </Form.Select>
                <Form.Control.Feedback type="invalid">
                  Vui lòng chọn hình thức việc làm.
                </Form.Control.Feedback>
              </Form.Group>
            </div>
            <div>
              <h3 className="mt-5">Yêu cầu khác với freelancer</h3>
              <Form.Group className="mb-3">
                <Form.Label>Cần tuyển freelancer làm việc tại</Form.Label>
                <Form.Select
                  required
                  defaultValue={""}
                  name="location"
                  onChange={handleChangeJobInfo}
                >
                  <option value="" disabled>
                    - Nơi cần thuê -
                  </option>
                  {locationList.map((location, i) => (
                    <option value={location} key={i}>
                      {location}
                    </option>
                  ))}
                </Form.Select>
                <Form.Control.Feedback type="invalid">
                  Vui lòng chọn nơi cần thuê.
                </Form.Control.Feedback>
              </Form.Group>
            </div>
            <div>
              <h3 className="mt-5">Ngân sách dự kiến chi cho công việc này</h3>
              <Form.Group className="mb-3">
                <Form.Label>Hình thức trả lương</Form.Label>
                <Form.Select
                  required
                  defaultValue={""}
                  name="methodPay"
                  onChange={handleChangeJobInfo}
                >
                  <option value="">- Hình thức trả lương -</option>
                  {methodPayList.map((methodPay, i) => (
                    <option value={methodPay} key={i}>
                      {" "}
                      {methodPay}
                    </option>
                  ))}
                </Form.Select>
                <Form.Control.Feedback type="invalid">
                  Vui lòng chọn hình thức trả lương.
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>
                  Số tiền tối đa tôi có thể trả trong khoảng
                </Form.Label>
                <Row>
                  <Col>
                    <Form.Control
                      required
                      placeholder="Từ"
                      name="payFrom"
                      value={payFrom}
                      onChange={handleChangeJobInfo}
                      type="number"
                    />
                    <Form.Control.Feedback type="invalid">
                      Vui lòng nhập mức lương.
                    </Form.Control.Feedback>
                  </Col>
                  <Col>
                    <Form.Control
                      required
                      placeholder="Đến"
                      name="payTo"
                      value={payTo}
                      onChange={handleChangeJobInfo}
                      type="number"
                    />
                    <Form.Control.Feedback type="invalid">
                      Vui lòng nhập mức lương.
                    </Form.Control.Feedback>
                  </Col>
                </Row>
                {checkMoney && (
                  <span style={{ color: "red" }}>
                    Mức lương nhập không hợp lệ
                  </span>
                )}
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>
                  Tùy chọn hiển thị cho công việc này (không bắt buộc)
                </Form.Label>
                <Form.Check
                  type="checkbox"
                  name="isPrivate"
                  onChange={handleChangeJobInfo}
                  label="Tôi muốn việc này được Hiển Thị Bí Mật - chỉ những người nào tôi gửi link việc này cho họ và tôi mời họ làm việc qua vLance.vn, thì mới xem được. (Số lượng hiển thị sẽ rất ít, vì chỉ những người được cho phép mới xem được)."
                />
              </Form.Group>
            </div>
            <div className="d-grid gap-2">
              <Button variant="primary" size="lg" type="submit">
                Đăng tin
              </Button>
            </div>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default PostJob;

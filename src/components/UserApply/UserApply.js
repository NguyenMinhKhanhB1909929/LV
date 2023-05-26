import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { Button, Col, Image, Row } from "react-bootstrap";
import { useState } from "react";

import { handleAssignJob } from "~/service";

function UserApply({ offer }) {
  const [assign, setAssign] = useState(false);
  const jobId = offer.job?._id;
  console.log(offer);

  const handleButtonAssign = async () => {
    try {
      const result = await handleAssignJob(jobId, {
        freelancer: offer.user._id,
      });
      setAssign(true);
    } catch (error) {
      console.log("LOI");
    }
  };
  return (
    <div className="p-3 border my-2">
      <Row>
        <Col lg="8">
          <p>Nội dung chào giá</p>
          <div>
            <p>Giới thiệu về kinh nghiệm kĩ năng:</p>
            <span>{offer.experience}</span>
          </div>
          <div>
            <p>Kế hoạch thực hiện công việc:</p>
            <span>{offer.plan}</span>
          </div>
        </Col>
        <Col lg="4">
          <Row>
            <Col lg="4">
              <div>
                <Image
                  src="https://img.thuthuattinhoc.vn/uploads/2019/01/13/hinh-anh-girl-xinh-dep-tu-nhien_104525368.jpg"
                  style={{ height: "120px", width: "120px" }}
                  className="me-4"
                ></Image>
              </div>
              <div className="d-flex justify-content-center mt-2">
                <FontAwesomeIcon icon={faStar} style={{ color: "yellow" }} />
                <FontAwesomeIcon icon={faStar} style={{ color: "yellow" }} />
                <FontAwesomeIcon icon={faStar} style={{ color: "yellow" }} />
                <FontAwesomeIcon icon={faStar} style={{ color: "yellow" }} />
                <FontAwesomeIcon icon={faStar} />
              </div>
            </Col>
            <Col>
              <div>
                <p>{offer.user?.email}</p>
                <div>
                  <span
                    className="me-5"
                    style={{ width: "100px", display: "inline-block" }}
                  >
                    Đến từ
                  </span>
                  <span>TP.Hồ Chí Minh</span>
                </div>
                <div>
                  <span
                    className="me-5"
                    style={{ width: "100px", display: "inline-block" }}
                  >
                    Việc đã làm
                  </span>
                  <span>Cần Thơ</span>
                </div>
                <div>
                  <span
                    className="me-5"
                    style={{ width: "100px", display: "inline-block" }}
                  >
                    Thu nhập
                  </span>
                  <span>{offer.fee}đ</span>
                </div>
                <div>
                  {assign ? (
                    <Button
                      style={{
                        border: "none",
                        backgroundColor: "rgb(45, 185, 100)",
                      }}
                    >
                      Đã Giao việc
                    </Button>
                  ) : (
                    <Button
                      onClick={handleButtonAssign}
                      style={{
                        border: "none",
                        backgroundColor: "rgb(45, 185, 100)",
                      }}
                    >
                      Giao việc
                    </Button>
                  )}
                </div>
              </div>
            </Col>
          </Row>
          <h3 className="d-block text-center mt-3">
            {offer.fee}đ - {offer.time}
          </h3>
        </Col>
      </Row>
    </div>
  );
}

export default UserApply;

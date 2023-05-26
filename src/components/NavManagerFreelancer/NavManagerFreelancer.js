import { ListGroup } from "react-bootstrap";
import { Link } from "react-router-dom";

import routesConfig from "~/config/routes";

import classNames from "classnames/bind";
import styles from "./NavManagerFreelancer.module.scss";

const cx = classNames.bind(styles);

function NavManagerFreelancer() {
  return (
    <ListGroup horizontal defaultActiveKey="1" className="mt-3">
      <ListGroup.Item
        style={{ width: "25%" }}
        action
        href="1"
        to={"/managerFreelancer"}
        as={Link}
      >
        <div className="d-flex align-items-center">
          <span className={cx("circleNumber", "me-2")}>1</span>
          <span>Việc đã lưu</span>
        </div>
      </ListGroup.Item>
      <ListGroup.Item
        action
        href="2"
        to={"/managerFreelancer/2"}
        as={Link}
        style={{ width: "25%" }}
      >
        <div className="d-flex align-items-center">
          <span className={cx("circleNumber", "me-2")}>2</span>
          <span>Gửi hồ sơ</span>
        </div>
      </ListGroup.Item>
      <ListGroup.Item
        action
        href="3"
        to={"/managerFreelancer/3"}
        as={Link}
        style={{ width: "25%" }}
      >
        <div className="d-flex align-items-center">
          <span className={cx("circleNumber", "me-2")}>3</span>
          <span>Nhận việc</span>
        </div>
      </ListGroup.Item>
      <ListGroup.Item
        action
        href="4"
        to={"/managerFreelancer/4"}
        as={Link}
        style={{ width: "25%" }}
      >
        <div className="d-flex align-items-center">
          <span className={cx("circleNumber", "me-2")}>4</span>
          <span>Xem Đánh giá</span>
        </div>
      </ListGroup.Item>
    </ListGroup>
  );
}

export default NavManagerFreelancer;

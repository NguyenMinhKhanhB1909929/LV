import { ListGroup } from "react-bootstrap";
import { Link } from "react-router-dom";

import routesConfig from "~/config/routes";

import classNames from "classnames/bind";
import styles from "./NavManagerClient.module.scss";

const cx = classNames.bind(styles);

function NavManagerClient() {
  return (
    <ListGroup horizontal defaultActiveKey="1" className="mt-3">
      <ListGroup.Item
        style={{ width: "25%" }}
        action
        href="1"
        to={"/managerClient"}
        as={Link}
      >
        <div className="d-flex align-items-center">
          <span className={cx("circleNumber", "me-2")}>1</span>
          <span>Đăng việc</span>
        </div>
      </ListGroup.Item>
      <ListGroup.Item
        action
        href="2"
        to={"/managerClient/2"}
        as={Link}
        style={{ width: "25%" }}
      >
        <div className="d-flex align-items-center">
          <span className={cx("circleNumber", "me-2")}>2</span>
          <span>Nhận hồ sơ</span>
        </div>
      </ListGroup.Item>
      <ListGroup.Item
        action
        href="3"
        to={routesConfig.assignJob}
        as={Link}
        style={{ width: "25%" }}
      >
        <div className="d-flex align-items-center">
          <span className={cx("circleNumber", "me-2")}>3</span>
          <span>Giao việc</span>
        </div>
      </ListGroup.Item>
      <ListGroup.Item
        action
        href="4"
        to={routesConfig.evaluate}
        as={Link}
        style={{ width: "25%" }}
      >
        <div className="d-flex align-items-center">
          <span className={cx("circleNumber", "me-2")}>4</span>
          <span>Đánh giá</span>
        </div>
      </ListGroup.Item>
    </ListGroup>
  );
}

export default NavManagerClient;

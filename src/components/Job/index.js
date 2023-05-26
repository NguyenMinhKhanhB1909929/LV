import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark } from "@fortawesome/free-regular-svg-icons";

import styles from "./Job.module.scss";
import { faUserTie } from "@fortawesome/free-solid-svg-icons";
import { Tooltip } from "antd";
import { timeDeadline } from "~/utils/helper";

var cx = classNames.bind(styles);

function Job({ jobInfo }) {
  let [save, setSave] = useState(false);

  const handleSaveJob = (e) => {
    setSave(!save);
  };
  const deadline = new Date(jobInfo.deadline);
  const now = new Date();
  const time = deadline - now;

  return (
    <Card className={cx("card", "text-center", "my-2", "text-dark")}>
      <Card.Body>
        <div className={cx("like")}>
          <FontAwesomeIcon icon={faBookmark} />
        </div>
        <Link to={`/job/${jobInfo._id}`} className={cx("name")}>
          <Card.Title>{jobInfo.name}</Card.Title>
        </Link>
        <Tooltip title="Mô tả công việc">
          <Card.Text className={cx("text-wrap")}>{jobInfo.details}</Card.Text>
        </Tooltip>

        <Tooltip title={`Dịch vụ: ${jobInfo.service}`}>
          <Button
            style={{ border: "none", background: "#2db964", color: "#fff" }}
          >
            {jobInfo.service}
          </Button>
        </Tooltip>
        {jobInfo.skill.map((sk, i) => (
          <Tooltip key={i} title={`Việc freelancer ${sk}`}>
            <Button
              className="mx-2 "
              size="sm"
              style={{ border: "none", background: "#eee", color: "#555" }}
            >
              {sk}
            </Button>
          </Tooltip>
        ))}
        <br />
        <div className="d-flex align-items-center justify-content-between">
          <Link
            to="/profile"
            style={{
              color: "#000",
              textDecoration: "none",
            }}
            className=" m-3"
          >
            <Tooltip title="Thông tin nhà tuyển dụng">
              <div className="d-flex align-items-center">
                <span className="me-1">
                  <FontAwesomeIcon icon={faUserTie} />
                </span>
                <span>Nhà tuyển dụng: {jobInfo.user.email}</span>
              </div>
            </Tooltip>
          </Link>
          <span>6 Chào giá</span>
        </div>
      </Card.Body>
      <Card.Footer className="text-muted">
        {jobInfo.place} | {jobInfo.category} | {jobInfo.payFrom} đ -{" "}
        {jobInfo.payTo} đ Hạn nhận hồ sơ: {timeDeadline(time)}
      </Card.Footer>
    </Card>
  );
}

export default Job;

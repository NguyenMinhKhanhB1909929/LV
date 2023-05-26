import { Pagination } from "antd";
import { useEffect, useState } from "react";
import { Button, Container, ListGroup, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import NavManagerClient from "~/components/NavManagerClient/NavManagerClient";

import routesConfig from "~/config/routes";
import { jobSelector } from "~/config/selectors";
import { handleGetMyJob, handleGetMyJobApplication } from "~/service";
import { getMyJobAppSuccess, getMyJobSuccess } from "~/store/actions/jobAction";
import { timeDeadline } from "~/utils/helper";

function ManagerClient2() {
  const dispatch = useDispatch();
  const myJobData = useSelector(jobSelector).myJobApp;

  const [current, setCurrent] = useState(1);

  const onChangePage = (page) => {
    console.log(page);
    setCurrent(page);
  };

  const fetchData = async () => {
    try {
      const result = await handleGetMyJobApplication();
      if (result.success) {
        dispatch(getMyJobAppSuccess(result.job));
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => fetchData, []);
  return (
    <Container>
      <NavManagerClient></NavManagerClient>
      <div className="border" style={{ height: "500px", width: "100%" }}>
        <Table striped bordered hover className="text-center">
          <thead>
            <tr>
              <th>Tên việc </th>
              <th>Số ứng viên </th>
              <th>Thời hạn</th>
              <th>Trạng thái</th>
              <th>Hành động</th>
            </tr>
          </thead>
          <tbody>
            {myJobData.map((myJob) => {
              const deadline = new Date(myJob.deadline);
              const now = new Date();
              const time = deadline - now;
              return (
                <tr key={myJob._id}>
                  <td>{myJob.name}</td>
                  <td>10</td>
                  <td>còn {timeDeadline(time)}</td>
                  <td>
                    {myJob.status == 0
                      ? "Đang nhận hồ sơ"
                      : myJob.status == 1
                      ? "Đang giao việc"
                      : "Đã hoàn thành"}
                  </td>
                  <td>
                    <Link to={`/job/${myJob._id}`}>
                      <Button
                        size="sm"
                        style={{
                          backgroundColor: "rgb(45, 185, 100)",
                          border: "none",
                        }}
                      >
                        Xem ứng viên
                      </Button>
                    </Link>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </div>
      <div className="d-flex justify-content-center my-5">
        <Pagination defaultCurrent={1} total={50} onChange={onChangePage} />
      </div>
    </Container>
  );
}

export default ManagerClient2;

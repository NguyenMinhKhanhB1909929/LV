import { useEffect, useState } from "react";
import { Button, Container, ListGroup, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { jobSelector } from "~/config/selectors";
import { handleGetMyJob } from "~/service";
import { getMyJobSuccess } from "~/store/actions/jobAction";
import routesConfig from "~/config/routes";
import NavManagerClient from "~/components/NavManagerClient";
import { Pagination } from "antd";

function ManagerClient() {
  const dispatch = useDispatch();
  const myJobData = useSelector(jobSelector).myJob;

  const [current, setCurrent] = useState(1);

  const onChangePage = (page) => {
    console.log(page);
    setCurrent(page);
  };

  const fetchData = async () => {
    try {
      const result = await handleGetMyJob();
      if (result.success) {
        dispatch(getMyJobSuccess(result.job));
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => fetchData, []);
  return (
    <Container>
      <NavManagerClient></NavManagerClient>
      <div className="border" style={{ height: "600px", width: "100%" }}>
        <Table striped bordered hover className="text-center">
          <thead>
            <tr>
              <th>Tên việc </th>
              <th>Loại việc</th>
              <th>Ngân sách </th>
              <th>Trạng thái</th>
              <th>Hành động</th>
            </tr>
          </thead>
          <tbody>
            {myJobData.map((job) => (
              <tr key={job._id}>
                <td>{job?.name} </td>
                <td>{job?.pattern}</td>
                <td>{`${job?.payFrom} đ - ${job?.payTo} đ`}</td>
                <td>
                  {job.status == 0
                    ? "Đang nhận hồ sơ"
                    : job.status == 1
                    ? "Đang giao việc"
                    : "Đã hoàn thành"}
                </td>
                <td>
                  <Button
                    size="sm"
                    className="me-3"
                    style={{
                      backgroundColor: "rgb(45, 185, 100)",
                      border: "none",
                    }}
                  >
                    Chỉnh sửa
                  </Button>

                  <Button
                    size="sm"
                    style={{ backgroundColor: "red", border: "none" }}
                  >
                    Xóa
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
      <div className="d-flex justify-content-center my-5">
        <Pagination defaultCurrent={1} total={50} onChange={onChangePage} />
      </div>
    </Container>
  );
}

export default ManagerClient;

import { Container, ListGroup, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fa1Square } from "@fortawesome/free-solid-svg-icons";
import NavManagerFreelancer from "~/components/NavManagerFreelancer/NavManagerFreelancer";
import { Pagination } from "antd";
import { useState } from "react";

function ManagerFreeLancer() {
  const [current, setCurrent] = useState(1);

  const onChangePage = (page) => {
    console.log(page);
    setCurrent(page);
  };
  return (
    <Container>
      <NavManagerFreelancer></NavManagerFreelancer>
      <div className="border" style={{ height: "600px", width: "100%" }}>
        <Table striped bordered hover className="text-center">
          <thead>
            <tr>
              <th>Tên việc </th>
              <th> Tổng hồ sơ</th>
              <th>Hạn nhận hồ sơ </th>
              <th>Trạng thái</th>
              <th>Hành động</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td> BIÊN TẬP VIÊN THỂ THAO Khách hàng: Ngọc Trâm M&Co</td>

              <td>0 </td>
              <td>Còn 28 ngày 12 giờ </td>
              <td>Đang nhận hồ sơ</td>
              <td>Gửi hồ sơ</td>
            </tr>
          </tbody>
        </Table>
      </div>
      <div className="d-flex justify-content-center my-5">
        <Pagination defaultCurrent={1} total={50} onChange={onChangePage} />
      </div>
    </Container>
  );
}

export default ManagerFreeLancer;

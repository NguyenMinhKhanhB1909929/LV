import { Container, ListGroup, Table } from "react-bootstrap";
import { Link } from "react-router-dom";

import { useEffect, useState } from "react";

import { handleGetMyOffer } from "~/service/offerService";
import { useDispatch, useSelector } from "react-redux";
import { getMyOffer } from "~/store/actions/offerAction";
import { offerSelector } from "~/config/selectors";
import NavManagerFreelancer from "~/components/NavManagerFreelancer/NavManagerFreelancer";
import { Pagination } from "antd";

function ManagerFreeLancer2() {
  const [current, setCurrent] = useState(1);

  const onChangePage = (page) => {
    console.log(page);
    setCurrent(page);
  };
  const myOffer = useSelector(offerSelector).myOffer;

  const dispatch = useDispatch();
  const fetchData = async () => {
    const result = await handleGetMyOffer();
    if (result.success) {
      dispatch(getMyOffer(result.offer));
    }
  };

  useEffect(() => fetchData, []);
  return (
    <Container>
      <NavManagerFreelancer></NavManagerFreelancer>
      <div
        className="border"
        style={{ height: "600px", width: "100%", overflow: "hidden" }}
      >
        <Table striped bordered hover className="text-center">
          <thead>
            <tr>
              <th>Tên việc </th>
              <th>Chi phí</th>
              <th>Hình thức</th>
              <th>Trạng thái</th>
              <th>Hành động</th>
            </tr>
          </thead>
          <tbody>
            {myOffer.map((offer, i) => (
              <tr key={i}>
                <td> {offer.job?.name}</td>
                <td>{offer.fee}đ</td>
                <td>{offer.job?.pattern}</td>
                <td>Đã nộp hồ sơ</td>
                <td>
                  <Link to={`/job/${offer.job?._id}`}>Xem chi tiết</Link>
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

export default ManagerFreeLancer2;

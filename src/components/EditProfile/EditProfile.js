import { useEffect, useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { authSelector } from "~/config/selectors";
import { locationList } from "~/data/data";
import { handleGetUser, handleUpdateUser } from "~/service";
import { userGetSuccess } from "~/store/actions";

function EditProfile() {
  const dispatch = useDispatch();
  const handleGetUserInfo = async () => {
    try {
      const result = await handleGetUser();
      if (result.success) {
        dispatch(userGetSuccess(result.user));
      }
    } catch (error) {}
  };

  useEffect(() => handleGetUserInfo, []);
  const auth = useSelector(authSelector);
  const user = auth.user;
  const [formChange, setFormChange] = useState({
    email: user.email || "",
    fullName: user.fullName || "",
    phone: user.phone || "",
    address: user.address || "",
    city: user.city || "",
    birth: user.birth || "",
  });

  const onChangeForm = (e) => {
    setFormChange({ ...formChange, [e.target.name]: e.target.value });
  };
  console.log(formChange);
  const onSubmitForm = async (e) => {
    e.preventDefault();
    console.log(formChange);
    const result = await handleUpdateUser(formChange);
    console.log(result);
  };
  // const fetchData = async () => {
  //   const result = await handleGetUser();
  //   if (result) {
  //     setFormChange({
  //       ...formChange,
  //       email: result.user?.email,
  //       fullName: result.user?.fullName,
  //     });
  //   }
  // };
  // console.log(formChange);
  // useEffect(() => {
  //   fetchData();
  // }, []);
  // if (!formChange) return <div>Loading...</div>;
  return (
    <Form onSubmit={onSubmitForm}>
      <Form.Group as={Row} className="my-4">
        <Form.Label htmlFor="a" column sm="2">
          Ảnh đại diện:
        </Form.Label>
        <Col sm="10">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSntUO2-Reaoe2CDt3ewzBkpUv7PhNSmMIlUTI6via&s"
            alt=""
            style={{ height: "120px", width: "120px", margin: "12px 0px" }}
          />
          <br />
          <input type="file" />
          <br />
          <div style={{ color: "#8c8181e0", margin: "6px 0" }}>
            <span>1. Kích thước không quá 1MB </span>
            <br />
            <span>2. Định dạng hỗ trợ: jpg, jpeg, png, gif</span>
          </div>
        </Col>
      </Form.Group>
      <Form.Group as={Row} className="my-4">
        <Form.Label htmlFor="a" column sm="2">
          Họ và tên:
        </Form.Label>
        <Col sm="10">
          <Form.Control
            type="text"
            id="a"
            name="fullName"
            value={formChange.fullName}
            onChange={onChangeForm}
          />
        </Col>
      </Form.Group>
      <Form.Group as={Row} className="my-4">
        <Form.Label htmlFor="b" column sm="2">
          Email:
        </Form.Label>
        <Col sm="10">
          <Form.Control
            type="text"
            id="b"
            name="email"
            value={formChange.email}
            disabled
          />
        </Col>
      </Form.Group>
      <Form.Group as={Row} className="my-4">
        <Form.Label htmlFor="c" column sm="2">
          Số điện thoại:
        </Form.Label>
        <Col sm="10">
          <Form.Control
            type="text"
            id="c"
            name="phone"
            value={formChange.phone}
            onChange={onChangeForm}
          />
        </Col>
      </Form.Group>
      <Form.Group as={Row} className="my-4">
        <Form.Label htmlFor="d" column sm="2">
          Thành phố:
        </Form.Label>
        <Col sm="10">
          <Form.Select
            defaultValue={formChange.city}
            // name="location"
            // onChange={handleChangeJobInfo}
            name="city"
            onChange={onChangeForm}
          >
            <option value="" disabled>
              - Chọn Thành phố -
            </option>
            {locationList.map((location, i) => (
              <option value={location} key={i}>
                {location}
              </option>
            ))}
          </Form.Select>
        </Col>
      </Form.Group>
      <Form.Group as={Row} className="my-4">
        <Form.Label htmlFor="e" column sm="2">
          Địa chỉ:
        </Form.Label>
        <Col sm="10">
          <Form.Control
            type="text"
            id="e"
            name="address"
            value={formChange.address}
            // onChange={handleChangeJobInfo}
            onChange={onChangeForm}
          />
        </Col>
      </Form.Group>
      <Form.Group as={Row} className="my-4">
        <Form.Label htmlFor="f" column sm="2">
          Ngày sinh:
        </Form.Label>
        <Col sm="10">
          <Form.Control
            type="text"
            id="f"
            name="birth"
            value={formChange.birth}
            onChange={onChangeForm}
          />
        </Col>
      </Form.Group>
      <div className="d-flex justify-content-center">
        <Button type="submit">Lưu thay đổi</Button>
      </div>
    </Form>
  );
}

export default EditProfile;

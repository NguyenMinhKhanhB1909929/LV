import { useEffect, useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { authSelector } from "~/config/selectors";
import { categoryList } from "~/data/data";
import { handleGetUser, handleUpdateUser } from "~/service";
import { userGetSuccess } from "~/store/actions";

function ProfileJob() {
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
    introduce: user.introduce || "",
    title: user.title || "",
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
  return (
    <Form onSubmit={onSubmitForm}>
      <Form.Group as={Row} className="my-4">
        <Form.Label htmlFor="a" column sm="2">
          Chức danh:
        </Form.Label>
        <Col sm="10">
          <Form.Control
            type="text"
            id="a"
            name="title"
            value={formChange.title}
            // onChange={handleChangeJobInfo}
            onChange={onChangeForm}
          />
        </Col>
      </Form.Group>
      <Form.Group as={Row} className="my-4">
        <Form.Label htmlFor="b" column sm="2">
          Giới thiệu bản thân:
        </Form.Label>
        <Col sm="10">
          <Form.Control
            as="textarea"
            rows={3}
            id="b"
            name="introduce"
            value={formChange.introduce}
            // onChange={handleChangeJobInfo}
            onChange={onChangeForm}
          />
        </Col>
      </Form.Group>

      <Form.Group as={Row} className="my-4">
        <Form.Label htmlFor="a" column sm="2">
          Lĩnh vực chuyên môn:
        </Form.Label>
        <Col sm="10">
          <Form.Select
            defaultValue={""}
            name="category"
            // onChange={handleChangeJobInfo}
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
        </Col>
      </Form.Group>
      <Form.Group as={Row} className="my-4">
        <Form.Label htmlFor="c" column sm="2">
          Trình độ:
        </Form.Label>
        <Col sm="10">
          <Form.Control
            type="text"
            id="c"
            name="name"
            // value={name}
            // onChange={handleChangeJobInfo}
          />
        </Col>
      </Form.Group>
      <Form.Group as={Row} className="my-4">
        <Form.Label htmlFor="a" column sm="2">
          Kỹ năng:
        </Form.Label>
        <Col sm="10">
          <Form.Control
            type="text"
            id="a"
            name="name"
            // value={name}
            // onChange={handleChangeJobInfo}
          />
        </Col>
      </Form.Group>
      <div className="d-flex justify-content-center">
        <Button type="submit">Lưu thay đổi</Button>
      </div>
    </Form>
  );
}

export default ProfileJob;

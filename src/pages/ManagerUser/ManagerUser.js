import { Tabs } from "antd";
import { Card, Col, Container, Row } from "react-bootstrap";
import ChangePassword from "~/components/ChangePassword/ChangePassword";
import EditProfile from "~/components/EditProfile/";
import ProfileJob from "~/components/ProfileJob/ProfileJob";

function ManagerUser() {
  return (
    <Container className="my-5">
      <Tabs
        defaultActiveKey="1"
        tabPosition="left"
        items={[
          {
            label: <div style={{ padding: "5px 50px" }}>Tài khoản</div>,
            key: "1",
            children: (
              <div style={{ padding: "0px 20px" }}>
                <Tabs
                  defaultActiveKey="1"
                  items={[
                    {
                      label: "Thông tin cá nhân",
                      key: "1",
                      children: <EditProfile></EditProfile>,
                    },
                    {
                      label: "Hồ sơ làm việc",
                      key: "2",
                      children: <ProfileJob></ProfileJob>,
                    },
                  ]}
                ></Tabs>
              </div>
            ),
          },
          {
            label: <div style={{ padding: "5px 50px" }}>Đổi mật khẩu</div>,
            key: "2",
            children: <ChangePassword></ChangePassword>,
          },
        ]}
      ></Tabs>
    </Container>
  );
}

export default ManagerUser;

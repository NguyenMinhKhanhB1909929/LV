import { NavDropdown, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell } from "@fortawesome/free-regular-svg-icons";

import routesConfig from "~/config/routes";
import { userGetSuccess, userLogout } from "~/store/actions";
import { useEffect, useState } from "react";
import { handleGetUser } from "~/service";
import { authSelector } from "~/config/selectors";

function LoggedIn() {
  const dispatch = useDispatch();
  const [isClick, setIsClick] = useState(true);
  const auth = useSelector(authSelector);
  const user = auth.user;

  const handleLogout = () => {
    dispatch(userLogout());
    localStorage.setItem("TOKEN", "");
  };

  const handleClickBell = () => {
    setIsClick(!isClick);
  };

  const handleGetUserInfo = async () => {
    try {
      const result = await handleGetUser();
      if (result.success) {
        dispatch(userGetSuccess(result.user));
        localStorage.setItem("TOKEN", auth.token);
      }
    } catch (error) {}
  };

  useEffect(() => handleGetUserInfo, []);

  return (
    <div className="d-flex  align-items-center">
      <FontAwesomeIcon
        icon={faBell}
        className="me-3 "
        role="button"
        size="lg"
        onClick={handleClickBell}
      />
      {isClick &&
        // <div>
        //   <h1>thong bao</h1>
        //   <div>noi dung thong bao</div>
        // </div>
        null}
      <Link to={routesConfig.profile}>
        <Image
          style={{ width: "35px", height: "35px" }}
          roundedCircle
          className="me-2"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSntUO2-Reaoe2CDt3ewzBkpUv7PhNSmMIlUTI6via&s"
          alt=""
        />
      </Link>
      <div>
        <NavDropdown title={user.email} id="collasible-nav-dropdown">
          <NavDropdown.Item to={routesConfig.profile} as={Link}>
            Hồ sơ cá nhân
          </NavDropdown.Item>
          <NavDropdown.Item to={routesConfig.managerUser} as={Link}>
            Chỉnh sửa hồ sơ
          </NavDropdown.Item>

          <NavDropdown.Item
            to={routesConfig.login}
            as={Link}
            onClick={handleLogout}
          >
            Đăng xuất
          </NavDropdown.Item>
        </NavDropdown>
        <span>0 xu</span>
      </div>
    </div>
  );
}

export default LoggedIn;

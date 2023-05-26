import actionTypes from "~/config/actionTypes";

export const userLoginSuccess = (accessToken) => ({
  type: actionTypes.USER_LOGIN_SUCCESS,
  payload: accessToken,
});

export const userLoginFail = () => ({
  type: actionTypes.USER_LOGIN_FAIL,
});

export const userLogout = () => ({
  type: actionTypes.USER_LOGOUT,
});

export const userGetAllSuccess = (userList) => ({
  type: actionTypes.USER_GET_ALL_SUCCESS,
  payload: userList,
});

export const userGetSuccess = (user) => ({
  type: actionTypes.USER_GET_SUCCESS,
  payload: user,
});

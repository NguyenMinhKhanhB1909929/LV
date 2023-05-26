import actionTypes from "~/config/actionTypes";

const initialState = {
  isLoggedIn: false,
  token: null,
  userList: [],
  user: {},
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.USER_LOGIN_SUCCESS:
      return {
        ...state,
        isLoggedIn: true,
        token: action.payload,
      };
    case actionTypes.USER_LOGIN_FAIL:
    case actionTypes.USER_LOGOUT:
      return {
        ...state,
        isLoggedIn: false,
        token: null,
      };

    case actionTypes.USER_GET_ALL_SUCCESS:
      return {
        ...state,
        userList: action.payload,
      };
    case actionTypes.USER_GET_SUCCESS:
      return {
        ...state,
        user: action.payload,
      };
    default:
      return state;
  }
};

export default authReducer;

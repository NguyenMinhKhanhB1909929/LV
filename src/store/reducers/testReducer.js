import actionTypes from "../../config/actionTypes";

const initialState = {
  dem: 0,
};

const testReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.TEST_TANG:
      return {
        ...state,
        dem: state.dem + action.payload,
      };
    case actionTypes.TEST_GIAM:
      return {
        ...state,

        dem: state.dem - action.payload,
      };
    default:
      return state;
  }
};

export default testReducer;

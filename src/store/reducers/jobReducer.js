import actionTypes from "../../config/actionTypes";

const initialState = {
  jobList: [],
  job: [""],
  myJob: [],
  myJobApp: [],
};

const jobReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_JOB_SUCCESS:
      return {
        ...state,
        jobList: action.payload,
      };
    case actionTypes.GET_JOB_BY_ID_SUCCESS:
      return {
        ...state,
        job: action.payload,
      };
    case actionTypes.GET_MY_JOB_SUCCESS:
      return {
        ...state,
        myJob: action.payload,
      };
    case actionTypes.GET_MY_JOB_APP_SUCCESS:
      return {
        ...state,
        myJobApp: action.payload,
      };

    default:
      return state;
  }
};

export default jobReducer;

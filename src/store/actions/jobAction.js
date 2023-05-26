import actionTypes from "../../config/actionTypes";

export const getJobSuccess = (jobList) => ({
  type: actionTypes.GET_JOB_SUCCESS,
  payload: jobList,
});

export const getJobFail = (number) => ({
  type: actionTypes.TEST_GIAM,
  payload: number,
});

export const getJobByIdSuccess = (job) => ({
  type: actionTypes.GET_JOB_BY_ID_SUCCESS,
  payload: job,
});

export const getMyJobSuccess = (myJob) => ({
  type: actionTypes.GET_MY_JOB_SUCCESS,
  payload: myJob,
});

export const getMyJobAppSuccess = (myJob) => ({
  type: actionTypes.GET_MY_JOB_APP_SUCCESS,
  payload: myJob,
});

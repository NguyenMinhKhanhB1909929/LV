import actionTypes from "../../config/actionTypes";

export const tang = (number) => ({
  type: actionTypes.TEST_TANG,
  payload: number,
});

export const giam = (number) => ({
  type: actionTypes.TEST_GIAM,
  payload: number,
});

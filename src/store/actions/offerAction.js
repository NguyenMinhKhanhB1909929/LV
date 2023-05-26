import actionTypes from "../../config/actionTypes";

export const getMyOffer = (myOffer) => ({
  type: actionTypes.GET_MY_OFFER_SUCCESS,
  payload: myOffer,
});

export const getOfferByJobSuccess = (offer) => ({
  type: actionTypes.GET_OFFER_BY_JOB_SUCCESS,
  payload: offer,
});

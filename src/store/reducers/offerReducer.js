import actionTypes from "../../config/actionTypes";

const initialState = {
  myOffer: [],
  offer: [],
};

const offerReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_MY_OFFER_SUCCESS:
      return {
        ...state,
        myOffer: action.payload,
      };
    case actionTypes.GET_OFFER_BY_JOB_SUCCESS:
      return {
        ...state,
        offer: action.payload,
      };

    default:
      return state;
  }
};

export default offerReducer;

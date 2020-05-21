import {
  GET_BUSINESSES,
  GET_BUSINESS,
  GET_REVIEWS,
  SET_LOADING,
  ERROR
} from "../types";

export default (state, action) => {
  switch (action.type) {
    case SET_LOADING:
      return {
        ...state,
        loading: true
      };
    case GET_BUSINESSES:
      return {
        ...state,
        businesses: action.payload,
        loading: false
      };
    case GET_BUSINESS:
      return {
        ...state,
        business: action.payload,
        loading: false
      };
    case GET_REVIEWS:
      return {
        ...state,
        reviews: action.payload
      };
    case ERROR:
      return {
        ...state,
        error: action.payload
      };
    default:
      return state;
  }
};

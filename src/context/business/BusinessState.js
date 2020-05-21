import React, { useReducer } from "react";
import queryString from "query-string";
import BusinessContext from "./businessContext";
import businessReducer from "./businessReducer";
import api from "./../../api";
import {
  GET_BUSINESSES,
  GET_BUSINESS,
  GET_REVIEWS,
  SET_LOADING,
  ERROR,
} from "../types";

const BusinessState = (props) => {
  const initialState = {
    businesses: [],
    business: "",
    reviews: [],
    loading: false,
    error: null,
  };

  const [state, dispatch] = useReducer(businessReducer, initialState);

  const setLoading = () => dispatch({ type: SET_LOADING });

  const getBusinesses = async ({ text, lat, long }) => {
    setLoading();
    const path = "businesses/search";
    const query = queryString.stringify({
      term: text,
      limit: 50,
      radius: 2000,
      //For Manual location
      //location: "Texas", //Uncomment this
       latitude: lat,  //comment this
       longitude: long //comment this
    });
    const url = `${path}?${query}`;

    setLoading();

    try {
      const result = await api(url);
      console.log("businesses", result.businesses);

      dispatch({
        type: GET_BUSINESSES,
        payload: result.businesses,
      });
    } catch (err) {
      console.log(err);

      dispatch({
        type: ERROR,
        payload: err,
      });
    }
  };

  const getBusiness = async (id) => {
    setLoading();

    const path = `businesses/${id}`;

    try {
      const result = await api(path);
      console.log(result);

      dispatch({
        type: GET_BUSINESS,
        payload: result,
      });
    } catch (err) {
      console.log(err);
      dispatch({
        type: ERROR,
        payload: err,
      });
    }
  };

  const getReviews = async (id) => {
    setLoading();

    const path = `businesses/${id}/reviews`;

    try {
      const result = await api(path);

      dispatch({
        type: GET_REVIEWS,
        payload: result.reviews,
      });
    } catch (err) {
      console.log(err);

      dispatch({
        type: ERROR,
        payload: err,
      });
    }
  };

  return (
    <BusinessContext.Provider
      value={{
        business: state.business,
        businesses: state.businesses,
        reviews: state.reviews,
        loading: state.loading,
        getReviews,
        getBusinesses,
        getBusiness,
      }}
    >
      {props.children}
    </BusinessContext.Provider>
  );
};

export default BusinessState;

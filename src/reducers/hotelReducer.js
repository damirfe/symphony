import * as actions from "../actions/hotelActions";
import { PENDING, LOADED, LOADING, ERROR } from "../constants/statusTypes";

export const initialState = {
  hotels: { status: PENDING, data: null },
  hotelDetails: { status: PENDING, data: null }
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actions.HOTEL_FETCH_START:
      return { ...state, hotels: { status: LOADING } };
    case actions.HOTEL_FETCH_SUCCESS:
      return { ...state, hotels: { status: LOADED, data: action.data } };
    case actions.HOTEL_FETCH_ERROR:
      return { ...state, hotels: { status: ERROR } };
    case actions.HOTEL_DETAILS_FETCH_START:
      return { ...state, hotelDetails: { status: LOADING } };
    case actions.HOTEL_DETAILS_FETCH_SUCCESS:
      return { ...state, hotelDetails: { status: LOADED, data: action.data } };
    case actions.HOTEL_DETAILS_FETCH_ERROR:
      return { ...state, hotelDetails: { status: ERROR } };
    default:
      return state;
  }
};

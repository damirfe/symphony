import { makeApiCall } from "../api/request";
import * as hotelsApi from "../api/hotelsApi";

export const HOTEL_FETCH_START = "HOTEL_FETCH_START";
export const HOTEL_FETCH_SUCCESS = "HOTEL_FETCH_SUCCESS";
export const HOTEL_FETCH_ERROR = "HOTEL_FETCH_ERROR";
export const HOTEL_DETAILS_FETCH_START = "HOTEL_DETAILS_FETCH_START";
export const HOTEL_DETAILS_FETCH_SUCCESS = "HOTEL_DETAILS_FETCH_SUCCESS";
export const HOTEL_DETAILS_FETCH_ERROR = "HOTEL_DETAILS_FETCH_ERROR";

export const fetchHotels = makeApiCall(
  hotelsApi.fetchHotels,
  HOTEL_FETCH_START,
  HOTEL_FETCH_SUCCESS,
  HOTEL_FETCH_ERROR
);

export const fetchHotelDetails = makeApiCall(
  hotelsApi.fetchHotelDetails,
  HOTEL_DETAILS_FETCH_START,
  HOTEL_DETAILS_FETCH_SUCCESS,
  HOTEL_DETAILS_FETCH_ERROR
);

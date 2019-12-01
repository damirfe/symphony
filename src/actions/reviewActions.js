import { makeApiCall } from "../api/request";
import * as reviewsApi from "../api/reviewsApi";

export const REVIEW_FETCH_START = "REVIEW_FETCH_START";
export const REVIEW_FETCH_SUCCESS = "REVIEW_FETCH_SUCCESS";
export const REVIEW_FETCH_ERROR = "REVIEW_FETCH_ERROR";

export const fetchReviews = makeApiCall(
  reviewsApi.fetchReviews,
  REVIEW_FETCH_START,
  REVIEW_FETCH_SUCCESS,
  REVIEW_FETCH_ERROR
);

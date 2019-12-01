import { makeApiCall } from "../api/request";
import * as favoritesApi from "../api/favoritesApi";

export const FAVORITES_FETCH_START = "FAVORITES_FETCH_START";
export const FAVORITES_FETCH_SUCCESS = "FAVORITES_FETCH_SUCCESS";
export const FAVORITES_FETCH_ERROR = "FAVORITES_FETCH_ERROR";
export const FAVORITES_POST_START = "FAVORITES_POST_START";
export const FAVORITES_POST_SUCCESS = "FAVORITES_POST_SUCCESS";
export const FAVORITES_POST_ERROR = "FAVORITES_POST_ERROR";

export const fetchFavorites = makeApiCall(
  favoritesApi.fetchFavorites,
  FAVORITES_FETCH_START,
  FAVORITES_FETCH_SUCCESS,
  FAVORITES_FETCH_ERROR
);

export const postFavorite = makeApiCall(
  favoritesApi.postFavorites,
  FAVORITES_POST_START,
  FAVORITES_POST_SUCCESS,
  FAVORITES_POST_ERROR
);

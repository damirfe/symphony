import { makeApiCall } from "../api/request";
import * as loginApi from "../api/loginApi";

export const SIGN_UP_START = "SIGN_UP_START";
export const SIGN_UP_SUCCESS = "SIGN_UP_SUCCESS";
export const SIGN_UP_ERROR = "SIGN_UP_ERROR";
export const SIGN_IN_START = "SIGN_IN_START";
export const SIGN_IN_SUCCESS = "SIGN_IN_SUCCESS";
export const SIGN_IN_ERROR = "SIGN_IN_ERROR";

export const signUp = makeApiCall(
  loginApi.signUp,
  SIGN_UP_START,
  SIGN_UP_SUCCESS,
  SIGN_UP_ERROR
);

export const signIn = makeApiCall(
  loginApi.signIn,
  SIGN_IN_START,
  SIGN_IN_SUCCESS,
  SIGN_IN_ERROR
);

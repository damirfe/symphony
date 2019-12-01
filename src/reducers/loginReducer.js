import * as actions from "../actions/loginActions";
import { PENDING, LOADED, LOADING, ERROR } from "../constants/statusTypes";

export const initialState = {
  signUp: { status: PENDING },
  signedIn: { status: PENDING, data: null }
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actions.SIGN_UP_START:
      return { ...state, signUp: { status: LOADING } };
    case actions.SIGN_UP_SUCCESS:
      return { ...state, signUp: { status: LOADED } };

    case actions.SIGN_UP_ERROR:
      return { ...state, signUp: { status: ERROR } };
    case actions.SIGN_IN_START:
      return { ...state, signedIn: { status: LOADING } };
    case actions.SIGN_IN_SUCCESS:
      return {
        ...state,
        signedIn: { status: LOADED, data: action.data }
      };
    case actions.SIGN_IN_ERROR:
      return { ...state, signedIn: { status: ERROR } };
    default:
      return state;
  }
};

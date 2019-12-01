import * as actions from "../actions/favoritesActions";
import { PENDING, LOADED, LOADING, ERROR } from "../constants/statusTypes";

export const initialState = {
  favorites: { status: PENDING, data: null }
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actions.FAVORITES_FETCH_START:
      return { ...state, favorites: { status: LOADING } };
    case actions.FAVORITES_FETCH_SUCCESS:
      return {
        ...state,
        favorites: {
          status: LOADED,
          data: action.data
        }
      };
    case actions.FAVORITES_FETCH_ERROR:
      return { ...state, favorites: { status: ERROR } };
    default:
      return state;
  }
};

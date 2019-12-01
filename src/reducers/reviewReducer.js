import * as actions from "../actions/reviewActions";
import { PENDING, LOADED, LOADING, ERROR } from "../constants/statusTypes";

export const initialState = {
  reviews: { status: PENDING, data: [], hotelId: null }
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actions.REVIEW_FETCH_START:
      return { ...state, reviews: { status: LOADING } };
    case actions.REVIEW_FETCH_SUCCESS:
      return {
        ...state,
        reviews: {
          status: LOADED,
          data: action.data,
          hotelId: action.hotelId
        }
      };
    case actions.REVIEW_FETCH_ERROR:
      return { ...state, reviews: { status: ERROR } };
    default:
      return state;
  }
};

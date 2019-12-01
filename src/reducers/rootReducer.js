import { combineReducers } from "redux";
import loginReducer from "./loginReducer";
import hotelReducer from "./hotelReducer";
import reviewReducer from "./reviewReducer";
import favoritesReducer from "./favoritesReducer";

export default combineReducers({
  loginReducer,
  hotelReducer,
  reviewReducer,
  favoritesReducer
});

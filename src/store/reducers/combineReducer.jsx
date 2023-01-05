import { combineReducers } from "redux";
import { FavouriteReducer } from "./favourite";
import moviesReducer from "./movies";


export default combineReducers({
  favourite: FavouriteReducer,
  movies : moviesReducer
});



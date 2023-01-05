import { GET_MOVIES_LIST } from "../actions/movies";

const INITIAL_STATE = {
    list : [],
    item : {}
};

export default function moviesReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case GET_MOVIES_LIST:
      return {
        ...state,
        list : action.payload
      }

    default:
      return state;
  }
}
// import { axiosInstance } from "../../network/axiosConfig";

// export const GET_MOVIES_LIST = "GET_MOVIES_LIST"


// export default getMoviesList = ()=> (dispatch) => {
//  return  axiosInstance
//       .get(`/movie/top_rated?language=en-US&page=4`, {})
//       .then((res) => dispatch({
//           type : GET_MOVIES_LIST,
//           payload:res.data
//       }))
//       .catch((err) => console.log(err));


  
// }
import axios from "axios";
export function getMoviesList() {
  return function(dispatch) {
    return axios.get("https://api.myjson.com/bins/19dtxc")
      .then(({ data }) => {
    //   dispatch(setMovies(data));
    });
  };
}



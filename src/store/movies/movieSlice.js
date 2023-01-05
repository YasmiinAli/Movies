import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const getMovies = createAsyncThunk(
  'movie/getMovies',
  async (_, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const res = await axios.get('https://api.themoviedb.org/3/movie/popular?api_key=a18ff34bd4a0d19529f3ade842225270');
      return res.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// export const selectMovie = createAsyncThunk(
//   'movie/selectMovie',
//   async (_, thunkAPI) => {
//     const { rejectWithValue } = thunkAPI;
//     try {
//       const res = await axios.get('https://api.myjson.com/bins/19dtxc', {
//         headers: {
//           'Content-type': 'application/json;charset=UTF-8',
//         },
//       });
//       return res.data;
//     } catch (error) {
//       return rejectWithValue(error.message);
//     }
//   }
// );

const initialState = {
  movies: [],
  isLoading: false,
  error: null,
  movieInfo: null,
};

export const movieSlice = createSlice({
  name: 'movies',
  initialState,
  
  extraReducers: {
    //getMovies
    [getMovies.pending]: (state, action) => {
      console.log(action);
      state.isLoading = true;
      state.error = null;
    },
    [getMovies.fulfilled]: (state, action) => {
      console.log(action);
      state.isLoading = false;
      state.movies = action.payload;
    },
    [getMovies.rejected]: (state, action) => {
      console.log(action);
      state.isLoading = false;
      state.error = action.payload;
    },

    //select movie
    // [selectMovie.pending]: (state, action) => {
    //   state.isLoading = true;
    //   state.error = null;
    // },
    // [selectMovie.fulfilled]: (state, action) => {
    //   state.isLoading = false;
    //   state.productInfo = action.payload;
    // },
    // [selectMovie.rejected]: (state, action) => {
    //   state.isLoading = false;
    //   state.error = action.payload;
    // },
  },
});

export default movieSlice.reducer;

import React, { useEffect, useState } from 'react'
import MovieCard from '../../components/MovieCard/MovieCard';
import { useDispatch, useSelector } from "react-redux";
import { getMovies } from './../../store/movies/movieSlice';

function Movies() {
    const dispatch = useDispatch();
    const  {movies, isLoading }  = useSelector((state) => state.movies);
    const [search, setSearch] = useState('');
  useEffect(()=>{
    dispatch(getMovies())
  },[])
  
  return (
<>
{
  isLoading ? 
  <div class="d-flex justify-content-center align-self-center">
  <div class="spinner-border" role="status">
    <span class="visually-hidden">Loading...</span>
  </div>
</div>
  : 
<>
        <div className='d-flex justify-content-between '>
        <div>
          <h2 >Movies</h2>
        </div>
        <div className="input-group w-25">
      <input type="search" className="form-control " onChange={(e) => setSearch(e.target.value) }
      placeholder="Search Movies..." aria-label="Search" aria-describedby="search-addon" />
</div>
    </div>
        <div className="row row-cols-1 row-cols-md-5 g-4 mt-3 ">
        {movies.results&&movies.results.filter((movie) => {
          return search.toLocaleLowerCase() ==='' ? movie : movie.original_title.toLocaleLowerCase().includes(search); 
        }).map((movie) => {
          return (
              <>
            <div className="col" key={movie.id}>
              <MovieCard movie={movie} />
            </div>
            </>
          );
        })}
      </div>

</>
}
      </>
  )
}

export default Movies;
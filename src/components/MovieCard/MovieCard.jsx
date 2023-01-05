import React from 'react'

function MovieCard({ movie }) {

  return (
<>

    <div   >
  <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title ">{movie.original_title}</h5>
    <p className="card-text ">{movie.vote_average}</p>
  </div>
</div>
</>

  )
}

export default MovieCard

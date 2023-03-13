import React from 'react';
import { Link } from 'react-router-dom';


const MovieList = (movie) => {
  console.log(movie.info);
  let img_path="https://image.tmdb.org/t/p/w500";
  return (
    <>
        <div className='movie'>
           <img src={img_path+movie.info.poster_path} className='DarkKnight'></img>
           <div className='movie-details'>
            <Link className='btn btn-primary' to={"/movie/"+ movie.tmdbID}>Movie Details</Link>
            <div className='box'>
              <h4 className='title'>{movie.info.title}</h4>
              <p className='rating'>{movie.info.vote_average}</p>
            </div>
             <div className='overview'>
              <h1>Overview</h1>
              {movie.info.overview}
             </div>
           </div>
        </div>
    </> 
  )
}

export default MovieList;

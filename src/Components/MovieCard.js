import React,{useEffect, useState} from 'react'
import MovieList from './MovieList';
let API_key="&api_key=acb7e2be30794a683e8782419efb0ff7";
let base_url="https://api.themoviedb.org/3";
let url= base_url+"/discover/movie?sort_by=popularity.desc"+API_key;

const MovieCard = () => {
  const [movieData,setData]=useState([]);
  const[url_set,setUrl]=useState(url);

  useEffect(()=>{
    fetch(url_set).then(res=>res.json()).then(data=>{
      // console.log(data.results);
      setData(data.results)
    });
  },[url_set])
  return (
    <>
    <div className='header'> 
     <nav>
      <ul>
        <li><a href="#">Popular</a></li>
        <li><a href="#">Theatre</a></li>
        <li><a href="#">Drama</a></li>
        <li><a href="#">Kids</a></li>
        <li><a href="#">Comedy</a></li>
      </ul>
     </nav>
      <form>
        <div className='search-btn'>
         <input type="text" placeholder="Enter movie name" className="inputText">
         </input>
         <button>< i class="fa-solid fa-magnifying-glass" /></button>
        </div>
      </form>
    </div>
    <div className='container'>
          {/* <MovieList/>
          <MovieList/>
          <MovieList/>
          <MovieList/>
          <MovieList/> */}
          {
            (movieData.length==0)?<p className='notfound'>Not found</p>: movieData.map((res,pos)=>{
              return(
                <MovieList info={res} key={pos} />
              )
            })
          }
    </div>
    </>
  )
}

export default MovieCard;
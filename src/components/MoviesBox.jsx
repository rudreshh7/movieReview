import React, { useState  , useEffect} from 'react'
import './MoviesBox.css'
const MoviesBox = () => {
    const [PoplularMovies , setPopularMovies] = useState([]);

    // now i will use useEffect

   useEffect(() => {
     
   fetch("https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1")
   .then(res => res.json())
   .then(data => setPopularMovies(data.results))
    
     }
   , [])

   const functionLoad =() =>{
    alert("Function work")
   }
   
  return (
    <div>
        <div className="movieContainer">
    {/* Map krte h idhar */}

            
            
            {PoplularMovies.map(movie => (
                <div>
          <img src={`https://image.tmdb.org/t/p/original${movie?movie.poster_path:""}`}  alt ={movie.original_title}/>
           <h6>{movie.original_title}</h6>
       

            
               
                {/* <p>{movie.overview} </p> */}
                <span>{movie.vote_average}</span>
            </div>
             ))}

             {/* Next Button */}
            <div className='moviefooter'>
                <button onClick={functionLoad}> Load More</button>

            </div>
        </div>
    </div>
  )
}

export default MoviesBox
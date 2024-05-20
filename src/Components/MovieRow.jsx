import axios from 'axios'
import React, { useEffect, useState } from 'react'
import MovieItems from './MovieItems';

function MovieRow({title,url}) {
  const [movies,setMovies] = useState([])

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.get(url);
        setMovies(response.data.results);
      } catch (error) {
        console.error('Error fetching movies:', error);
      }
    };

    fetchMovies();
  }, [url]);
  console.log(movies);
  return (
    <>
      <h1 className='capitalize font-nsans-bold md:text-xl p-4'>{title}</h1>
      <div className=' relative flex items-center'>
    <div id={`slider`}
     className='w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide'>
      {movies.map((movie)=>(
       <MovieItems key={movie.id} movie={movie}/>
      ))}
    </div>
      </div>
    </>
  )
}

export default MovieRow

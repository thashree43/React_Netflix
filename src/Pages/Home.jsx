import React from 'react'
import Hero from '../Components/Hero'
import MovieRow from '../Components/MovieRow'
import endpoints from '../Services/MovieServices'

function Home() {
  return (
   <>
   <Hero/>
   <MovieRow title='upcoming' url={endpoints.Upcoming}/>
   <MovieRow title='trending' url={endpoints.Trending}/>
   <MovieRow title='top rated' url={endpoints.TopRated}/>
   <MovieRow title='comedy' url={endpoints.Comedy}/>
   <MovieRow title='popular' url={endpoints.Popular}/>

   </>
  )
}

export default Home

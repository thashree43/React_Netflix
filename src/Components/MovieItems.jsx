import React, { useState } from 'react'
import { createimageurl } from '../Services/MovieServices'
import { FaHeart ,FaRegHeart} from "react-icons/fa";

function MovieItems({movie}) {
    const [like,setLike] = useState(false)
    const {title,backdrop_path,poster_path} = movie
  
  return (
    <div className='relative w-[165px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block 
    eounded-large overflow-hidden cursor-pointer m-2'>
     <img className='w-full h-40 object-cover object-top'
     src={createimageurl(backdrop_path ?? poster_path,"w500")}
     alt={title}
     />
     <div className='absolute top-0 left-0 w-full h-40 bg-black/80 opacity-0 hover:opacity-100'>
    <p className='whitespace-normal text-xs md:text-sm flex justify-center items-center h-full font-nsans-bold'>{movie.title}
    </p>
    <p>
        {like ? <FaHeart size={20} className='absolute top-2 left-2 text-grey-300' />
         :<FaRegHeart size={20} className='absolute top-2 left-2 text-grey-300' />}
    </p>
     </div>
    </div>
  )
}

export default MovieItems

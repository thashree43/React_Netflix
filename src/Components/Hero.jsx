import axios from 'axios';
import React, { useEffect, useState } from 'react';
import endpoints, { createimageurl } from '../Services/MovieServices';

function Hero() {
    const [movie, setMovie] = useState({});

    useEffect(() => {
        axios.get(endpoints.Popular).then((response) => {
            const movies = response.data.results;
            console.log(movies.length, "=the movies.length");
            const randomMovie = movies[Math.floor(Math.random() * movies.length)];
            console.log(randomMovie.title, "=the length of the movies");
            setMovie(randomMovie);
        }).catch(error => {
            console.error("Error fetching popular movies:", error);
        });
    }, []);

    const truncate = (str, length) => {
        if (!str) return "";
        return str.length > length ? str.slice(0, length) + '...' : str;
    }

    if (!movie) {
        return (
            <>
                <p>fetching movies...</p>
            </>
        );
    }

    const { title, backdrop_path, release_date, overview } = movie;

    return (
        <div className='w-full h-[550px] lg:h-[850px]'>
            <div className='w-full h-full'>
                <div className='absolute w-full h-[550px] lg:h-[850px] bg-gradient-to-r from-black' />
                <img className='w-full h-full object-cover object-top'
                    src={createimageurl(backdrop_path,"original")}
                    alt={title}
                />
                <div className="absolute w-full top-[10%] lg:top-[25%] p-4 md:p-8">
                    <h1 className='text-3xl md:text-6xl font-nsans-bold'>{title}</h1>
                    <div className='mt-8 mb-4'>
                        <button className='capitalize border bg-gray-300 text-black py-2 px-5 mr-4'>Play Now</button>
                        <button className='capitalize border bg-gray-300 py-2 px-5'>Watch Later</button>
                    </div>
                    <p className='text-gray-400 text-sm'>{release_date}</p>
                    <p className='w-full md:max-w-[70%] lg:maxd-w-[50%] xl:max-w-[35%] text-grey-200'>{truncate(overview, 150)}</p>
                </div>
            </div>
        </div>
    );
}

export default Hero;

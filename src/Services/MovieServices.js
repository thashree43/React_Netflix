const key = import.meta.env.VITE_TMDB_KEY;
console.log("the key may here", key);
const baseurl = "https://api.themoviedb.org/3";

const endpoints = {
    Popular: `${baseurl}/movie/popular?api_key=${key}`,
    TopRated: `${baseurl}/movie/top_rated?api_key=${key}`,
    Trending:`${baseurl}/movie/popular?api_key=${key}&language=en-US&page=2`,
    Comedy:`${baseurl}/search/movie?api_key=${key}&language=en-US&query=comedy&page=1&include_adult=false`,
    Upcoming: `${baseurl}/movie/upcoming?api_key=${key}`,
};

export function createimageurl(filename,size){
    return `https://image.tmdb.org/t/p/${size}/${filename}`
}
export default endpoints;

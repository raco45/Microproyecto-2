import axios from "axios";

export async function fetchPeliculas(){
    return axios.get("https://api.themoviedb.org/3/discover/movie?api_key=ff3558c0ab6a27119f7571689ca82b2a");
}

export async function fetchPelicula(movie_id){
    return axios.get(`https://api.themoviedb.org/3/movie/${movie_id}?api_key=ff3558c0ab6a27119f7571689ca82b2a`);
}


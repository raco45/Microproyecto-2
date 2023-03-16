import axios from "axios";

export async function fetchPeliculas(page){
    return axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=ff3558c0ab6a27119f7571689ca82b2a&page=${page}`);
}

export async function fetchPelicula(movie_id){
    return axios.get(`https://api.themoviedb.org/3/movie/${movie_id}?api_key=ff3558c0ab6a27119f7571689ca82b2a`).then(data => {console.log(data)});

}

export async function fetchUpcoming(){
    return axios.get("https://api.themoviedb.org/3/movie/upcoming?api_key=ff3558c0ab6a27119f7571689ca82b2a")
}

export async function fetchBuscar(nombre){
    return axios.get(`https://api.themoviedb.org/3/search/movie?api_key=ff3558c0ab6a27119f7571689ca82b2a&query=${nombre}`);
}
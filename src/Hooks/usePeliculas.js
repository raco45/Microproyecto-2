import {useState} from "react";
import { fetchPelicula, fetchPeliculas } from "../Utils/Movie-DB-API";

export function usePeliculas(){
    const [peliculas, setPeliculas]=useState([]);
    const [pelicula, setPelicula]= useState([]);

    const getPeliculas= async (page)=>{
        const {data}= await fetchPeliculas(page);
        setPeliculas(data.results);
    };
    const getPelicula= async (movie_id) =>{
         const {data}=await fetchPelicula(movie_id);
         setPelicula(data);
    }

    return{
        pelicula,
        peliculas,
        getPeliculas,
        getPelicula,
    }
}

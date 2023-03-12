import {useState} from "react";
import { fetchPelicula, fetchPeliculas } from "../Utils/Movie-DB-API";

export function usePeliculas(){
    const [peliculas, setPeliculas]=useState([]);
    const [pelicula, setPelicula]= useState([]);

    const getPeliculas= async (page)=>{
        const {data}= await fetchPeliculas(page);
        setPeliculas(data.results);
    };
    const getPelicula= async (movieId) =>{
         const {data}=await fetchPelicula(movieId);
         setPelicula(data);
    }

    return{
        pelicula,
        peliculas,
        getPeliculas,
        getPelicula,
    }
}

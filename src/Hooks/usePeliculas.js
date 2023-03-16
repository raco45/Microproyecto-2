import {useState} from "react";
import { fetchPelicula, fetchPeliculas, fetchUpcoming } from "../Utils/Movie-DB-API";

export function usePeliculas(){
    const [peliculas, setPeliculas]=useState([]);
    const [pelicula, setPelicula]= useState([]);
    const [estrenos, setEstrenos]=useState([]);

    const getPeliculas= async (page)=>{
        const {data}= await fetchPeliculas(page);
        setPeliculas(data.results);
    };
    const getPelicula= async (movieId) =>{
         const data=await fetchPelicula(movieId);
         setPelicula(data);
    };
    const getEstrenos= async () =>{
         const {data}=await fetchUpcoming();
         setEstrenos(data);
    };


    return{
        pelicula,
        peliculas,
        estrenos,
        getEstrenos,
        getPeliculas,
        getPelicula,
    }
}

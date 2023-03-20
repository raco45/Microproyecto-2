import {useState} from "react";
import { fetchBuscar, fetchPelicula, fetchPeliculas, fetchUpcoming } from "../Utils/Movie-DB-API";

export function usePeliculas(){
    const [peliculas, setPeliculas]=useState([]);
    const [pelicula, setPelicula]= useState({});
    const [estrenos, setEstrenos]=useState([]);
    const [peliculaBus, setPeliculaBus]=useState([]);
    const [page, setPage]=useState(1);
    const [genres, setGenres]=useState([]);

    const getPeliculas= async (page)=>{
        const {data}= await fetchPeliculas(page);
        setPeliculas(data.results);
    };
    const getPelicula= async (movieId) =>{
         const {data}=await fetchPelicula(movieId);
         setPelicula(data);
         console.log(data);
    };
    const getGenres= async (movieId)=>{
        const {data}=await fetchPelicula(movieId);
        setGenres(data.genres);
    };
    const getEstrenos= async () =>{
         const {data}=await fetchUpcoming();
         setEstrenos(data);
        };
    const getBuscar= async (nombre) =>{
         const {data}=await fetchBuscar(nombre);
         setPeliculaBus(data);
        };
         


    return{
        pelicula,
        peliculas,
        estrenos,
        genres,
        getGenres,
        peliculaBus,
        getBuscar,
        getEstrenos,
        getPeliculas,
        getPelicula,
    }
}

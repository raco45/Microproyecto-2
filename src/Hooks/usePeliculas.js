import {useState} from "react";
import { fetchPeliculas } from "../Utils/Movie-DB-API";

export function usePeliculas(){
    const [peliculas, setPeliculas]=useState([]);

    const getPeliculas= async ()=>{
        const {data}= await fetchPeliculas();
        setPeliculas(data.results);
    };
    

    return{
        peliculas,
        getPeliculas,
    }
}

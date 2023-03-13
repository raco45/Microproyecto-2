import React from 'react'
import { useEffect } from 'react';
import { useParams } from 'react-router';
import Compas from '../../Components/Compas/Compas';
import Genre from '../../Components/Generos/Genre';
import { usePeliculas } from '../../Hooks/usePeliculas';


export default function Detalle() {
  const {movieId}= useParams();
  const {pelicula, getPelicula}= usePeliculas();
  
  const {poster_path, vote_average,original_language ,title, budget, genres, production_companies, status, release_date, overview}= pelicula || {};
  useEffect( ()=>{
    if(movieId){
      getPelicula(movieId);
  
      
    }
  },[movieId]);
  
  return (
    

    <div className=" bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
      <div className="py-3 sm:max-w-xl sm:mx-auto">
        <div className="bg-white shadow-lg border-gray-100 max-h-80	 border sm:rounded-3xl p-8 flex space-x-8">
          <div className="h-48 overflow-visible w-1/2">
              <img className="rounded-3xl shadow-lg" src= {`https://image.tmdb.org/t/p/w154${poster_path}`} alt=""/> 
          </div>
          <div className="flex flex-col w-1/2 space-y-4">
            <div className="flex justify-between items-start">
              <h2 className="text-3xl font-bold">{title}</h2>
              <div className="bg-yellow-400 font-bold rounded-xl p-2">{vote_average}</div>
            </div>
            <div>
              <div className="text-sm text-gray-400"> Lenguaje: {original_language}</div>
              <div className="text-sm text-gray-400"> Presupuesto: {budget}</div>
             
              <div className="text-sm text-gray-400"> Status: {status}</div>
              <div className="text-lg text-gray-800">{release_date}</div>
            </div>
              <p className=" text-xs text-gray-400 max-h-40 overflow-y-hidden">{overview}</p>
          </div>
        </div>
      </div>
    </div>  

)
}




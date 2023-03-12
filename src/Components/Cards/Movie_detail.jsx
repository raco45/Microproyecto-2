import React from 'react'
import { Link } from "react-router-dom";
export default function Movie_detail({peliculas}){

return (
    <React.Fragment>
<div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
  <div className="py-3 sm:max-w-xl sm:mx-auto">
    <div className="bg-white shadow-lg border-gray-100 max-h-80	 border sm:rounded-3xl p-8 flex space-x-8">
      <div className="h-48 overflow-visible w-1/2">
          {/* <img className="rounded-3xl shadow-lg" src={peliculas.backdrop_path} alt=""/> */}
      </div>
      <div className="flex flex-col w-1/2 space-y-4">
        <div className="flex justify-between items-start">
          <h2 className="text-3xl font-bold">{peliculas.title}</h2>
          <div className="bg-yellow-400 font-bold rounded-xl p-2">{peliculas.vote_average}</div>
        </div>
        <div>
          <div className="text-sm text-gray-400"> Lenguaje: {peliculas.original_language}</div>
          <div className="text-sm text-gray-400"> Presupuesto: {peliculas.budget}</div>
          <div className="text-sm text-gray-400"> Presupuesto: {peliculas.budget}</div>
          <div className="text-sm text-gray-400"> Compania: {peliculas.budget}</div>
          <div className="text-sm text-gray-400"> Compania: {peliculas.genres_ids}</div>
          <div className="text-lg text-gray-800">{peliculas.release_date}</div>
        </div>
          <p className=" text-gray-400 max-h-40 overflow-y-hidden">{oeliculas.overview}</p>
        <div className="flex text-2xl font-bold text-a">$83.90</div>
      </div>
    </div>
  </div>
</div>
    
    </React.Fragment>
)
}

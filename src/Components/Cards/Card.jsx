import React from 'react'
import { Link } from "react-router-dom";
export default function Card({pelicula}){

  return (
    <React.Fragment>
  <div className="py-3 sm:max-w-xl md:mx-auto">
    <div className="shadow-lg border-gray-300 max-h-96 border sm:rounded-3xl p-6 flex space-x-2">
      <div className="h-48 overflow-visible w-1/2">
          <img className="rounded-3xl shadow-lg h-48 " src= {`https://image.tmdb.org/t/p/w154${pelicula.poster_path}`} alt=' '/>
      </div>
      <div className="flex flex-col w-1/2 space-y-4">
        <div className="flex justify-between items-start">
          <h2 className="text-lg font-bold">
          <Link
             to={`/inicio/peliculas/${pelicula.id}`}
            >
              {pelicula.title}
            </Link>
          </h2>

          <div className="bg-yellow-400 font-bold rounded-xl p-2">{pelicula.vote_average}</div>
        </div>
          <p className=" text-gray-400 max-h-40 overflow-y-hidden text-xs">{pelicula.overview}</p>
      </div>

    </div>
  </div>

    
    </React.Fragment>


  )
}
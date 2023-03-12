import React from 'react'
import { Link } from "react-router-dom";
import { DETALLE_URL } from "../../constants/urls";
export default function Card({pelicula}){

  return (
    <React.Fragment>
  <div className="py-3 sm:max-w-xl sm:mx-auto">
    <div className="shadow-lg border-gray-300 max-h-80 border sm:rounded-3xl p-8 flex space-x-2">
      <div className="h-48 overflow-visible w-1/2">
          <img className="rounded-3xl shadow-lg" src={pelicula.backdrop_path} alt=""/>
      </div>
      <div className="flex flex-col w-1/2 space-y-4">
        <div className="flex justify-between items-start">
          <h2 className="text-lg font-bold">{pelicula.title}
          <Link
              to='/peliculas/${pelicula.id}'
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
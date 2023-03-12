import React from 'react'
export default function Card({pelicula}){

return (
    <React.Fragment>
<div className="min-h-screen bg-gray-100 py-6 flex justify-around items-center grid sm:py-12">
  <div className="py-3 sm:max-w-xl sm:mx-auto">
    <div className="bg-white shadow-lg border-gray-100 max-h-80	 border sm:rounded-3xl p-8 flex space-x-2">
      <div className="h-48 overflow-visible w-1/2">
          <img className="rounded-3xl shadow-lg" src={pelicula.backdrop_path} alt=""/>
      </div>
      <div className="flex flex-col w-1/2 space-y-4">
        <div className="flex justify-between items-start">
          <h2 className="text-lg font-bold">{pelicula.title}</h2>
          <div className="bg-yellow-400 font-bold rounded-xl p-2">{pelicula.vote_average}</div>
        </div>
        <div>
          <div className="text-sm text-gray-800">{pelicula.release_date}</div>
        </div>
          <p className=" text-gray-400 max-h-40 overflow-y-hidden text-xs">{pelicula.overview}</p>
      </div>

    </div>
  </div>
  
</div>
    
    </React.Fragment>





  )
}

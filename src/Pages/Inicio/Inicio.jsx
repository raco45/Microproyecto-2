import { usePeliculas } from '../../Hooks/usePeliculas';
import { useEffect, useState } from 'react';
import React from 'react'
import Card from '../../Components/Cards/card';
export default function Inicio() {
  const {peliculas, getPeliculas}= usePeliculas();
  const {estrenos, getEstrenos}= usePeliculas();




  useEffect(()=>{
    getPeliculas(1);
    getEstrenos();
  },[]);

  console.log(estrenos);
 
  return (
    <React.Fragment>
      <a href="#" className=" mt-6 ml-6 flex items-center mb-6 text-2xl font-semibold text-blue-700 dark:text-blue-700">
          <img 
          className="w-8 h-8 mr-2" 
          src="src\assets\pngwing.com.png" 
          alt="logo"
          />
          Neiflis    
      </a>
      <div className='relative z-5 bg-white mb-2'>
        <h1 className='font-bold text-blue-800 text-4xl text-center mt-8 flex justify-center grid '> Bienvenido a tu app de películas </h1>
      </div>
      <img className='h-auto max-w-lg rounded-lg mx-auto' src="src\assets\beyond-the-universe-4.jpg" alt="" />
      <br></br>
      <div className='bg-blue-700 h-16'></div>
      <div className='h-8 grid grid-cols-2 gap-4 content-start'>
       {peliculas.map((pelicula) => (
          <div className=''>
            <Card pelicula={pelicula} />
          </div>  
            ))
          }

<button href="#" class="ml-96 hover:bg-blue-700 inline-flex items-center px-4 py-2 mr-3 text-sm font-medium border border-gray-300 rounded-lg ">
  <svg 
  aria-hidden="true" 
  class="w-5 h-5 mr-2" 
  fill="currentColor" 
  viewBox="0 0 20 20" 
  xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z" clip-rule="evenodd"></path></svg>
  Anterior
</button>
<button href="#" 

class="mr-96 hover:bg-blue-700 inline-flex items-center px-4 py-2 text-sm font-medium border 
border-gray-300 rounded-lg">
  Siguiente
  <svg 
  aria-hidden="true" 
  class="w-5 h-5 ml-2" 
  fill="currentColor" 
  viewBox="0 0 20 20" 
  xmlns="http://www.w3.org/2000/svg">
    <path 
    fill-rule="evenodd" 
    d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" 
    clip-rule="evenodd"></path></svg>
</button>

        </div>
  

    </React.Fragment>
    
    
    

  )
}
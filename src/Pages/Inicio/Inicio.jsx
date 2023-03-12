import { usePeliculas } from '../../Hooks/usePeliculas';
import { useEffect } from 'react';
import React from 'react'
import Card from '../../Components/Cards/card';

export default function Inicio() {
  const {peliculas, getPeliculas}= usePeliculas();
  let pagination = 1

  useEffect(()=>{
    getPeliculas(pagination);
  },[]);
  console.log(peliculas);
  return (

    <React.Fragment>

      <a href="#" className=" mt-6 ml-6 flex items-center mb-6 text-2xl font-semibold text-blue-700 dark:text-blue-700">
          <img 
          className="w-8 h-8 mr-2" 
          src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg" 
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
        </div>

        <div>
          


        </div>
  
    </React.Fragment>
    
    
    
    


  )
}

import { usePeliculas } from '../../Hooks/usePeliculas';
import { useEffect } from 'react';
import React from 'react'
import Card from '../../Components/Cards/card';

export default function Inicio() {
  const {peliculas, getPeliculas}= usePeliculas();

  useEffect(()=>{
    getPeliculas(2);
  },[]);
  console.log(peliculas);
  return (

    <React.Fragment>
      
      <div className=''>
        <img className='absolute z-0' src="src\assets\beyond-the-universe-4.jpg" alt="" />
        <div className='relative z-5 bg-white mb-2'>
        <h1 className='font-bold text-blue-800 text-4xl text-center mt-8 flex justify-center grid '> Bienvenido a tu app de peliculas </h1>
      </div>
      <div className=''>
       {peliculas.map((pelicula) => (
              <Card pelicula={pelicula} />
            ))
          }
        </div>
      </div>
    </React.Fragment>
    
    
    
    


  )
}

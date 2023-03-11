
import { useParams } from 'react-router'
import { usePeliculas } from '../../Hooks/usePeliculas'
import { useEffect } from 'react';


export default function Detalle() {

  const {movieId}= useParams();
  const {getPelicula, pelicula}= usePeliculas();
  
  useEffect(()=>{
    if(movieId){
      getPelicula(movieId);
    }
  },[]);
  return (
    <div></div>
    
  )
}

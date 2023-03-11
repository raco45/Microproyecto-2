import React from 'react'
import { usePeliculas } from '../../Hooks/usePeliculas'
import { useEffect } from 'react';
export default function Inicio() {
  const {peliculas, getPeliculas}= usePeliculas();

  useEffect(()=>{
    getPeliculas(2);
  },[]);
  console.log(peliculas);
  return (
    <div>Inicio!!1</div>
  )
}

import React from 'react'

export default function Inicio() {
  const {peliculas, getPeliculas}= usePeliculas();

  useEffect(()=>{
    getPeliculas();
  },[]);
  console.log(peliculas);
  return (
    <div>Inicio!!1</div>
  )
}

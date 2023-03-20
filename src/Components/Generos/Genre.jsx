import React from 'react'

function Genre({genero}) {
  return (
    <React.Fragment>

    <div className="text-sm text-gray-400"> 
      {genero.name}
    </div>
    </React.Fragment>
  )
}

export default Genre
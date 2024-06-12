import React from 'react'

export const CuartoComponente = () => {
 
  let nombre= "hOLA";
 
    return (
    <div> 

<button onClick={e =>{ 
        console.log("La edición actual es:", nombre)
    }}>Editar Tareas </button>
    
    
        <button onClick={e => {console.log("La infomación ya se guardó")}}>
           Guardar cambios
        </button>
    </div>
  )
}

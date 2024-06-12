import React, {useState} from 'react'

export const SegundoComponente = () => {
 
    let tareas =[
    "Lavar ropa",
    "Limpiar el baño",
    "Lavar trastes"
  ];  
  
    return (
    <div>

    <h2>Hogar: </h2>
 <ul>
    {
     tareas.map((tarea, indice)=> {
        return (
        <li key={indice}>
        {tarea}
        </li>
        );
    })
  }
 </ul>

  </div>
  );
};

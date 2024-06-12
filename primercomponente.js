import React, {useState} from 'react'

export const PrimerComponente = () => {
   //let nombre = "Elizabeth Agis";
   

    const[nombre, setNombre] = useState("Persona 1");
  
    let cursos =[
        "Tarea ADS",
        "Reporte Web",
        "Repaso Probabilidad"
    ];

    const cambiarNombre = (nuevoNombre) => {
        setNombre(nuevoNombre);
    }

  return (
    <div>
    <h1>Mis tareas</h1>
 

 
   <h2>Escuela: </h2>
    <ul>
       {
        cursos.map((curso,indice) =>{
           return(<li key={indice}>
            {curso}
           </li>)
        })
       }
    </ul>
  </div>
  )
}

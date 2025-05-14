
import React from 'react';


function ComponenteHijo({ prop1, prop2, prop3, onEnviarProp }) {
    // Función para evento CON propagación
    const handleClickPropagar = (e) => {
      alert("Evento en HIJO (se propagará al padre)");
    };
  
    // Función para evento SIN propagación
    const handleClickDetener = (e) => {
      e.stopPropagation();
      alert("Evento en HIJO (detenido, no llega al padre)");
    };

  return (
    <div>
      <p>{prop1}, {prop2}, {prop3}</p>
      <button onClick={() => onEnviarProp(prop1)}>Enviar prop al padre</button>

      <button onClick={handleClickPropagar}>Propagar evento</button>
      <button onClick={handleClickDetener}>Detener evento</button>
    </div>
  );
}

export default ComponenteHijo;
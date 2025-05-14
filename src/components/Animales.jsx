import React, { useState } from 'react';

function Animales() {
    const [animales, setAnimales] = useState(["perro", "gato", "pato"]);
  
    const agregarGanso = () => {
      setAnimales([...animales, "Ganso"]); // Copia el arreglo y añade
    };
}

export default Animales;
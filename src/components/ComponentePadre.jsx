import React from 'react';
import ComponenteHijo from './ComponenteHijo';

function ComponentePadre() {
    // Función para manejar el evento del padre
    const handleClickPadre = () => {
      alert("Evento recibido en PADRE (propagación exitosa)");
    };

  const handleProp = (prop) => {
    alert(`Padre recibió: ${prop}`);
  };

  return (
    <div onClick={handleClickPadre}>
      <h2>Padre (haz clic aquí para probar propagación)</h2>
      <ComponenteHijo 
        prop1="Valor1" 
        prop2="Valor2" 
        prop3="Valor3" 
        onEnviarProp={handleProp}
      />
    </div>
  );
}

export default ComponentePadre;
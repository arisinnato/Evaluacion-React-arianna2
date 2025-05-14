
import React, { useState } from 'react';

function Producto() {
  const [producto, setProducto] = useState({
    nombre: "Laptop",
    precio: 1200,
    detalles: { marca: "XYZ", modelo: "Pro 15" }
  });

  const actualizar = () => {
    setProducto(prev => ({
      ...prev,
      nombre: "Nuevo Nombre",
      detalles: { ...prev.detalles, marca: "ABC" }
    }));
  };

  return (
    <div>
      <p>Nombre: {producto.nombre}, Marca: {producto.detalles.marca}</p>
      <button onClick={actualizar}>Actualizar</button>
    </div>
  );
}

export default Producto;
import React, { useState } from 'react';

function ProductoModificado() {
    const [producto, setProducto] = useState({ /* objeto original */ });
  
    const actualizar = () => {
      const nuevoProducto = { ...producto };
      nuevoProducto.precio = 1500; 
      nuevoProducto.detalles.modelo = "Nuevo Modelo"; 
      setProducto(nuevoProducto);
      console.log("Actualizado:", nuevoProducto);
    };
}

export default ProductoModificado;
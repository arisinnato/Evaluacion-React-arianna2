
import { produce } from 'immer';
import React, { useState } from 'react';


function ProductoImmer() {
  const [producto, setProducto] = useState({ /* mismo objeto */ });

  const actualizar = () => {
    setProducto(produce(draft => {
      draft.nombre = "Nuevo Nombre";
      draft.detalles.marca = "ABC";
    }));
  };
}

export default ProductoImmer;
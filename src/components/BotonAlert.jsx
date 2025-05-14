
import React from 'react';

function BotonAlert({ texto }) {
  const handleClick = () => alert(texto);
  return <button onClick={handleClick}>{texto}</button>;
}

export default BotonAlert;
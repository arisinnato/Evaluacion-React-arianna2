import React, { useState, useRef, useEffect } from 'react';

function Contador() {
  const [count, setCount] = useState(0);
  const prevCountRef = useRef();

  useEffect(() => {
    prevCountRef.current = count;
  }, [count]);

  const incrementar = () => {
    setTimeout(() => {
      setCount(prev => prev + 1);
    }, 1000);
  };

  return (
    <div>
      <p>Actual: {count}</p>
      <p>Anterior: {prevCountRef.current}</p>
      <button onClick={incrementar}>+1 (Timeout)</button>
    </div>
  );
}
export default Contador;
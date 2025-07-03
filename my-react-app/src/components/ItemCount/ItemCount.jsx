import { useState } from 'react';

const ItemCount = ({ stock, initial = 1, onAdd }) => {
  const [count, setCount] = useState(initial);

  const add = () => {
    if (count < stock) setCount(prev => prev + 1);
  };

  const subtract = () => {
    if (count > 1) setCount(prev => prev - 1);
  };

  return (
    <div>
      <button onClick={subtract}>-</button>
      <span>{count}</span>
      <button onClick={add}>+</button>
      <button onClick={() => onAdd(count)}>Agregar al carrito</button>
    </div>
  );
};

export default ItemCount;
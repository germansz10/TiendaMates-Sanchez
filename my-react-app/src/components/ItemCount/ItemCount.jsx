import { useState } from 'react';

const ItemCount = () => {
  const [count, setCount] = useState(1);

  const add = () => setCount(prev => prev + 1);
  const subtract = () => count > 1 && setCount(prev => prev - 1);

  return (
    <div>
      <button onClick={subtract}>-</button>
      <span>{count}</span>
      <button onClick={add}>+</button>
    </div>
  );
};

export default ItemCount;

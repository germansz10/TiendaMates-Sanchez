// ItemDetail.jsx
import { useState, useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import ItemCount from '../ItemCount/ItemCount';

const ItemDetail = ({ product }) => {
  const [added, setAdded] = useState(false);
  const { addItem } = useContext(CartContext);

  const handleOnAdd = (quantity) => {
    addItem(product, quantity);
    setAdded(true);
  };

  return (
    <div>
      <h2>{product.title}</h2>
      <img src={product.image} alt={product.title} className="item-image" />
      <p>${product.price}</p>
      <p>categoria: {product.category}</p>

      {!added ? (
        <ItemCount stock={product.stock || 10} initial={1} onAdd={handleOnAdd} />
      ) : (
        <p>Producto agregado al carrito</p>
      )}
    </div>
  );
};

export default ItemDetail;

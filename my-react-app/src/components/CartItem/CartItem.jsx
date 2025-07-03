import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';

const CartItem = ({ item }) => {
  const { removeItem } = useContext(CartContext);

  return (
    <div style={{ borderBottom: '1px solid #ccc', marginBottom: '10px', paddingBottom: '10px' }}>
      <h4>{item.title}</h4>
      <img src={item.image} alt={item.title} style={{ width: '100px' }} />
      <p>Precio unitario: ${item.price.toLocaleString('es-AR')}</p>
      <p>Cantidad: {item.quantity}</p>
      <p>Subtotal: ${(item.price * item.quantity).toLocaleString('es-AR')}</p>
      <button onClick={() => removeItem(item.id)}>Eliminar</button>
    </div>
  );
};

export default CartItem;

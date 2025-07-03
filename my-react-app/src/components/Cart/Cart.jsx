import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import CartItem from '../CartItem/CartItem';
import { Link } from 'react-router-dom';

const Cart = () => {
  const { cart, cartTotal, clearCart } = useContext(CartContext);

  if (cart.length === 0) {
    return (
      <div>
        <h2>Tu carrito está vacío</h2>
        <Link to="/">Seguir comprando</Link>
      </div>
    );
  }

  return (
    <div>
      <h2>Carrito de Compras</h2>
      {cart.map(item => (
        <CartItem key={item.id} item={item} />
      ))}

      <h3>Total: ${cartTotal().toLocaleString('es-AR')}</h3>

      <button onClick={clearCart}>Vaciar carrito</button>

      <Link to="/checkout">
        <button>Finalizar compra</button>
      </Link>
    </div>
  );
};

export default Cart;

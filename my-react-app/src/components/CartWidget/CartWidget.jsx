import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';


const CartWidget = () => {
    const { cartQuantity } = useContext(CartContext);

  return (
    <div className="cart-widget">
      🛒 <span className="badge">{cartQuantity()}</span>
    </div>
    );
  };
  
  export default CartWidget;

  
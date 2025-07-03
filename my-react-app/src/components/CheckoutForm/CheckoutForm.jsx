import { useState, useContext } from 'react';
import { CartContext } from '../../context/CartContext';

const CheckoutForm = () => {
  const { cart, cartTotal, clearCart, generateOrder } = useContext(CartContext);

  const [buyer, setBuyer] = useState({
    name: '',
    email: '',
    phone: '',
    address: ''
  });

  const [orderId, setOrderId] = useState(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = e => {
    setBuyer({ ...buyer, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validar campos
    if (!buyer.name || !buyer.email || !buyer.phone || !buyer.address) {
      setError('Por favor completá todos los campos.');
      return;
    }

    setError('');
    setLoading(true);

    try {
      // Aquí se genera la orden en Firebase (función que deberías implementar)
      const id = await generateOrder({ buyer, items: cart, total: cartTotal() });
      setOrderId(id);
      clearCart();
    } catch (err) {
      setError('Error al generar la orden. Intentá de nuevo.');
    } finally {
      setLoading(false);
    }
  };

  if (orderId) {
    return (
      <div>
        <h2>¡Gracias por tu compra!</h2>
        <p>Tu número de orden es: <strong>{orderId}</strong></p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Checkout</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <input
        type="text"
        name="name"
        placeholder="Nombre completo"
        value={buyer.name}
        onChange={handleChange}
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={buyer.email}
        onChange={handleChange}
      />
      <input
        type="tel"
        name="phone"
        placeholder="Teléfono"
        value={buyer.phone}
        onChange={handleChange}
      />
      <input
        type="text"
        name="address"
        placeholder="Dirección"
        value={buyer.address}
        onChange={handleChange}
      />
      <button type="submit" disabled={loading}>
        {loading ? 'Procesando...' : 'Finalizar Compra'}
      </button>
    </form>
  );
};

export default CheckoutForm;


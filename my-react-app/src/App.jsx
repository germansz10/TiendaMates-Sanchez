import { Routes, Route } from 'react-router-dom';

import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar/NavBar';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { CartProvider } from './context/CartContext';
import Cart from './components/Cart/Cart';
import CheckoutForm from './components/CheckoutForm/CheckoutForm';



const App = () => {
  return (
    <>
    <CartProvider>
      <NavBar />
      <Routes>
        <Route path="/" element={<ItemListContainer greeting="¡Bienvenido a Tienda Mate!" />} />
        <Route path="/category/:categoryId" element={<ItemListContainer />} />
        <Route path="/item/:itemId" element={<ItemDetailContainer />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<CheckoutForm />} />
      
       
       
        {/* MENSAJES DE ERROR */}
        <Route path="/item/*" element={<h2>404 - Página no encontrada</h2>} />
        <Route path="/category/*" element={<h2>404 - Página no encontrada</h2>} />
        <Route path="*" element={<h2>404 - Página no encontrada</h2>} />
      </Routes>
    </CartProvider>
    </>
  );
};

export default App;

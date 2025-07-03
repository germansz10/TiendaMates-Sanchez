import React, { createContext, useState } from 'react';
import app from '../firebaseConfig';
import { getFirestore, collection, addDoc, serverTimestamp } from 'firebase/firestore';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const db = getFirestore(app);

  // Agrega producto al carrito o suma cantidad si ya existe
  const addItem = (product, quantity) => {
    setCart(prevCart => {
      const itemIndex = prevCart.findIndex(item => item.id === product.id);
      if (itemIndex !== -1) {
        const newCart = [...prevCart];
        newCart[itemIndex].quantity += quantity;
        return newCart;
      } else {
        return [...prevCart, { ...product, quantity }];
      }
    });
  };

  // Quita un producto del carrito por id
  const removeItem = (productId) => {
    setCart(prevCart => prevCart.filter(item => item.id !== productId));
  };

  // Limpia todo el carrito
  const clearCart = () => {
    setCart([]);
  };

  // Cantidad total de productos en el carrito
  const cartQuantity = () => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  };

  // Total a pagar
  const cartTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  // Generar orden en Firestore
  const generateOrder = async ({ buyer, items, total }) => {
    try {
      const ordersCollection = collection(db, 'orders');
      const order = {
        buyer,
        items,
        total,
        createdAt: serverTimestamp()
      };

      const docRef = await addDoc(ordersCollection, order);
      return docRef.id; // Retorna el ID de la orden generada
    } catch (error) {
      console.error("Error al generar la orden: ", error);
      throw error;
    }
  };

  return (
    <CartContext.Provider value={{
      cart,
      addItem,
      removeItem,
      clearCart,
      cartQuantity,
      cartTotal,
      generateOrder,  // <-- Agregamos esta función al context
    }}>
      {children}
    </CartContext.Provider>
  );
};

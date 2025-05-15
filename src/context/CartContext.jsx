import { createContext, useState, useContext } from 'react';

export const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  const addToCart = product => {
    setCart(prev => {
      // Verificar si el producto ya existe en el carrito
      const existingItem = prev.find(item => item.id === product.id);
      if (existingItem) {
        // Si existe, aumentar la cantidad (si tienes lógica de cantidad)
        return prev.map(item =>
          item.id === product.id ? { ...item, quantity: (item.quantity || 1) + 1 } : item
        );
      } else {
        // Si no existe, añadir el producto con cantidad 1
        return [...prev, { ...product, quantity: 1 }];
      }
    });
  };

  const removeFromCart = id => {
    setCart(prev => prev.filter(p => p.id !== id));
  };

  const clearCart = () => {
    setCart([]);
  };

  // Calcular el total basado en el precio y la cantidad
  const total = cart.reduce((acc, item) => acc + item.price * (item.quantity || 1), 0);

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart, total }}>
      {children}
    </CartContext.Provider>
  );
}

// Crear y exportar el hook useCart
export const useCart = () => {
  return useContext(CartContext);
};
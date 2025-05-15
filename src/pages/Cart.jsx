import { useCart } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const { cart, removeFromCart, clearCart, total } = useCart();
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <div>
      <button onClick={handleGoBack}>Regresar</button>
      <h2>Carrito de compras</h2>
      {cart.length === 0 ? (
        <p>Tu carrito está vacío</p>
      ) : (
        <>
          <ul>
            {cart.map(item => (
              <li key={item.id} className="flex items-center py-2 border-b">
                <img src={item.image} alt={item.name} className="w-16 h-16 object-cover mr-4" />
                <div>
                  <h3>{item.name}</h3>
                  <p>Cantidad: {item.quantity || 1}</p>
                  <p>Precio unitario: ${item.price}</p>
                  <p>Subtotal: ${item.price * (item.quantity || 1)}</p>
                  <button onClick={() => removeFromCart(item.id)} className="text-red-500">Eliminar</button>
                </div>
              </li>
            ))}
          </ul>
          <div className="mt-4">
            <h3 className="text-xl font-semibold">Total: ${total}</h3>
            <button onClick={clearCart} className="bg-red-500 text-white px-4 py-2 rounded mt-2">Vaciar carrito</button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
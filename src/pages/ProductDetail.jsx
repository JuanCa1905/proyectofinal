import { useParams } from 'react-router-dom';
import { useEffect, useState, useContext } from 'react';
import { getProducts } from '../services/productService';
import { useCart } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';

export default function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const { addToCart } = useCart();
  const navigate = useNavigate();

  useEffect(() => {
    getProducts().then(products => {
      const found = products.find(p => p.id === parseInt(id));
      setProduct(found);
    });
  }, [id]);

  const handleGoBack = () => {
    navigate(-1);
  };

  if (!product) return <p>Cargando...</p>;

  return (
    <div>
      <button onClick={handleGoBack}>Regresar</button>
      <h1>{product.name}</h1>
      <img src={product.image} className="w-60" alt={product.name} />
      <p>{product.description}</p>
      <p>Precio: ${product.price}</p>
      <button onClick={() => addToCart(product)}>Añadir al carrito</button>
    </div>
  );
}

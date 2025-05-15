import { Link } from 'react-router-dom';


export default function ProductCard({ product }) {
  return (
    <div className="border p-2 rounded shadow">
      <img src={product.image} alt={product.name} className="w-full h-40 object-cover" />
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <p><strong>${product.price}</strong></p>
      <Link to={`/product/${product.id}`}>
        <button className="bg-green-500 text-white px-4 py-2 mt-2">Ver más</button>
      </Link>
    </div>
  );
}

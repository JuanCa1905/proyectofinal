import { useEffect, useState } from 'react';
import ProductCard from '../components/ProductCard';
import { getProducts } from '../services/productService';
import Navbar from '../components/Navbar';

export default function Home() {
  const [products, setProducts] = useState([]);
  const [categoria, setCategoria] = useState('Todas');
  const [busqueda, setBusqueda] = useState('');

  const [categoriasUnicas, setCategoriasUnicas] = useState([]);

  // Obtener productos y categorías únicas al inicio
  useEffect(() => {
    getProducts().then(data => {
      setProducts(data);

      // Sacar las categorías únicas
      const cats = [...new Set(data.map(p => p.category))];
      setCategoriasUnicas(cats);
    });
  }, []);

  // Filtro de productos
  const productosFiltrados = products.filter(p => {
    const coincideCategoria = categoria === 'Todas' || p.category === categoria;
    const coincideNombre = p.name.toLowerCase().includes(busqueda.toLowerCase());
    return coincideCategoria && coincideNombre;
  });

  return (
    <div>
      <Navbar />

      <h1 className="text-2xl font-bold my-4 text-center">Tienda de Plantas</h1>

      {/* 🔍 Filtros */}
      <div className="flex justify-center gap-4 mb-4">
        <input
          type="text"
          placeholder="Buscar producto..."
          value={busqueda}
          onChange={(e) => setBusqueda(e.target.value)}
          className="border px-3 py-1 rounded"
        />

        <select
          value={categoria}
          onChange={(e) => setCategoria(e.target.value)}
          className="border px-3 py-1 rounded"
        >
          <option value="Todas">Todas las categorías</option>
          {categoriasUnicas.map((cat, idx) => (
            <option key={idx} value={cat}>{cat}</option>
          ))}
        </select>
      </div>

      {/* 🪴 Productos */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 px-4">
        {productosFiltrados.length > 0 ? (
          productosFiltrados.map(product => (
            <ProductCard key={product.id} product={product} />
          ))
        ) : (
          <p className="col-span-full text-center">No se encontraron productos.</p>
        )}
      </div>
    </div>
  );
}

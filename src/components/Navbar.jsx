import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

export default function Navbar() {
  const { usuario } = useContext(AuthContext);

  return (
    <nav className="flex gap-4 p-4 bg-green-200">
      <Link to="/">Inicio</Link>
      <Link to="/diagnostico">Diagnóstico</Link>
      <Link to="/carrito">🛒 Carrito</Link>

      {usuario
        ? <span>👤 {usuario.nombre}</span>
        : <Link to="/login">Iniciar sesión</Link>
      }
    </nav>
  );
}

import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [nombre, setNombre] = useState("");
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogin = () => {
    login(nombre);
    navigate("/"); // O redirige a /diagnostico si prefieres
  };

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <div>
      <button onClick={handleGoBack}>Regresar</button>
      <h2>Iniciar sesión</h2>
      <input
        type="text"
        placeholder="Tu nombre"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
      />
      <button onClick={handleLogin}>Entrar</button>
    </div>
  );
}
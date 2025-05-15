import { useState, useContext } from 'react';
import { diagnosticarEnfermedad } from '../services/diagnosticoService';
import { AuthContext } from '../context/AuthContext';
import { Navigate } from 'react-router-dom';

export default function Diagnostico() {
  const [imagen, setImagen] = useState(null);
  const [resultado, setResultado] = useState(null);
  const [cargando, setCargando] = useState(false);

  const { usuario } = useContext(AuthContext);

  if (!usuario) {
    return <Navigate to="/login" />;
  }

  const handleAnalyze = async () => {
    try {
      setCargando(true);
      const data = await diagnosticarEnfermedad(imagen);
      const enfermedad = data.health_assessment.diseases[0];

      setResultado({
        nombre: enfermedad.name,
        descripcion: enfermedad.disease_details.description,
        recomendaciones: enfermedad.disease_details.treatment,
      });
    } catch (error) {
      console.error(error);
    } finally {
      setCargando(false);
    }
  };

  return (
    <div>
      <h1>Diagnóstico de Enfermedades</h1>
      <input type="file" onChange={(e) => setImagen(e.target.files[0])} />
      <button onClick={handleAnalyze}>Analizar</button>
      {cargando && <p>Analizando...</p>}
      {resultado && (
        <div>
          <h2>{resultado.nombre}</h2>
          <p>{resultado.descripcion}</p>
          <p><strong>Tratamiento:</strong> {resultado.recomendaciones}</p>
        </div>
      )}
    </div>
  );
}

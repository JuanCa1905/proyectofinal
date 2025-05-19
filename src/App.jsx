import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Diagnostico from "./pages/Diagnostico";
import Login from "./pages/Login";
import ProductDetail from "./pages/ProductDetail";
import Cart from "./pages/Cart"; // Asegúrate de importar Cart
import { AuthProvider } from "./context/AuthContext";
import { CartProvider } from "./context/CartContext"
import "./styles/main.scss"

function App() {
  return (
    <AuthProvider>  
      <CartProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/diagnostico" element={<Diagnostico />} />
            <Route path="/login" element={<Login />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/carrito" element={<Cart />} /> {/* Asegúrate de tener esta ruta */}
          </Routes>
        </Router>
      </CartProvider>
    </AuthProvider>
  );
}

export default App;
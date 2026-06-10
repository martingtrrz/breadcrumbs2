import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function ClientLayout() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Implementación del componente con los estilos definidos en index.css */}
      <Navbar />

      {/* Contenedor dinámico para las páginas de la aplicación */}
      <main className="flex-1">
        <Outlet />
      </main>

      {/* Footer estructurado */}
      <Footer />
    </div>
  );
}
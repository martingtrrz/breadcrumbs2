import { Routes, Route } from 'react-router-dom'
import { useState } from 'react'

// Layouts
import ClientLayout from './components/ClientLayout'
import AdminLayout from './components/AdminLayout'

// Páginas del Cliente
import Home from './pages/Home'
import Galeria from './pages/Galeria'
import Paquetes from './pages/Paquetes'
import PaqueteDetalle from './pages/PaqueteDetalle'
import Testimonios from './pages/Testimonios'
import Contacto from './pages/Contacto'

// Páginas de Admin
import Dashboard from './pages/Dashboard'
import Eventos from './pages/Eventos'
import Configuracion from './pages/Configuracion'

// Componentes
import ReserveModal from './components/ReserveModal'

function App() {
  const [modal, setModal] = useState({ open: false, pkg: null })
  const openModal = (pkg) => setModal({ open: true, pkg })
  const closeModal = () => setModal({ open: false, pkg: null })

  return (
    <>
      <Routes>
        {/* Rutas Públicas (Envueltas en ClientLayout) */}
        <Route element={<ClientLayout />}>
          <Route path="/" element={<Home openModal={openModal} />} />
          <Route path="/galeria" element={<Galeria />} />
          <Route path="/paquetes" element={<Paquetes openModal={openModal} />} />
          <Route path="/paquetes/:slug" element={<PaqueteDetalle openModal={openModal} />} />
          <Route path="/testimonios" element={<Testimonios />} />
          <Route path="/contacto" element={<Contacto />} />
        </Route>

        {/* Rutas Privadas / Admin (Envueltas en AdminLayout) */}
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="eventos" element={<Eventos />} />
          <Route path="config" element={<Configuracion />} />
        </Route>
      </Routes>
      
      <ReserveModal modal={modal} onClose={closeModal} />
    </>
  )
}

export default App
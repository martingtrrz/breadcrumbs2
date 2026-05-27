import { Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ReserveModal from './components/ReserveModal'
import Home from './pages/Home'
import Galeria from './pages/Galeria'
import Paquetes from './pages/Paquetes'
import PaqueteDetalle from './pages/PaqueteDetalle'
import Testimonios from './pages/Testimonios'
import Contacto from './pages/Contacto'

function App() {
  const [modal, setModal] = useState({ open: false, pkg: null })

  const openModal = (pkg) => setModal({ open: true, pkg })
  const closeModal = () => setModal({ open: false, pkg: null })

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home openModal={openModal} />} />
        <Route path="/galeria" element={<Galeria />} />
        <Route path="/paquetes" element={<Paquetes openModal={openModal} />} />
        <Route path="/paquetes/:slug" element={<PaqueteDetalle openModal={openModal} />} />
        <Route path="/testimonios" element={<Testimonios />} />
        <Route path="/contacto" element={<Contacto />} />
      </Routes>
      <Footer />
      <ReserveModal modal={modal} onClose={closeModal} />
    </>
  )
}

export default App

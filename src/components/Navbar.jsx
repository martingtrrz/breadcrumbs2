import { useState, useEffect } from 'react'
import { NavLink, Link, useLocation } from 'react-router-dom'
import Logo from './Logo' 
const NAV_LINKS = [
  { to: '/', label: 'Inicio', end: true },
  { to: '/galeria', label: 'Galería' },
  { to: '/paquetes', label: 'Paquetes' },
  { to: '/testimonios', label: 'Testimonios' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()
  const isHome = location.pathname === '/'

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close menu on route change
  useEffect(() => { setMenuOpen(false) }, [location])

  const navClass = `navbar ${isHome && !scrolled ? 'transparent' : 'scrolled'}`

  return (
    <>
      <nav className={navClass} aria-label="Navegación principal">
        <Link to="/" className="nav-brand">
          Villa <em>Esmeralda</em>
          <span className="brand-dot" aria-hidden="true" />
        </Link>

        <ul className="nav-links" role="list">
          {NAV_LINKS.map(({ to, label, end }) => (
            <li key={to}>
              <NavLink
                to={to}
                end={end}
                className={({ isActive }) => isActive ? 'active' : ''}
              >
                {label}
              </NavLink>
            </li>
          ))}
          <li>
            <NavLink to="/contacto" className="nav-cta">
              Agenda ahora
            </NavLink>
          </li>
        </ul>

        <button
          className={`hamburger${menuOpen ? ' open' : ''}`}
          aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span /><span /><span />
        </button>
      </nav>

      <div className={`mobile-menu${menuOpen ? ' open' : ''}`} aria-hidden={!menuOpen}>
        {NAV_LINKS.map(({ to, label }) => (
          <Link key={to} to={to}>{label}</Link>
        ))}
        <Link to="/contacto" style={{ color: 'var(--gold)', fontWeight: 600 }}>
          Agenda ahora →
        </Link>
      </div>
    </>
  )
}

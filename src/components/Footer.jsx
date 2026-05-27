import { Link } from 'react-router-dom'

const FOOTER_LINKS = [
  { label: 'Inicio', to: '/' },
  { label: 'Galería', to: '/galeria' },
  { label: 'Paquetes', to: '/paquetes' },
  { label: 'Testimonios', to: '/testimonios' },
  { label: 'Contacto', to: '/contacto' },
]

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          {/* Brand */}
          <div>
            <div className="footer-brand-name">
              Villa <em>Esmeralda</em>
            </div>
            <p className="footer-brand-sub">
              El espacio de tus celebraciones más importantes. Elegancia y servicio desde 2010.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p className="footer-col-title">Navegación</p>
            <nav className="footer-links" aria-label="Links del footer">
              {FOOTER_LINKS.slice(0, 3).map(({ label, to }) => (
                <Link key={to} to={to}>{label}</Link>
              ))}
            </nav>
          </div>

          <div>
            <p className="footer-col-title">Servicios</p>
            <nav className="footer-links">
              {FOOTER_LINKS.slice(3).map(({ label, to }) => (
                <Link key={to} to={to}>{label}</Link>
              ))}
              <a href="#!">Catering gourmet</a>
              <a href="#!">Fotografía y video</a>
            </nav>
          </div>

          {/* Contact info */}
          <div>
            <p className="footer-col-title">Contacto</p>
            <div className="footer-links" style={{ color: 'rgba(255,255,255,.35)', fontSize: '.82rem', gap: '.9rem' }}>
              <span>📍 Av. de los Eventos 1200, CDMX</span>
              <span>📞 +52 (55) 1234-5678</span>
              <span>✉ eventos@villaesmeralda.mx</span>
              <span>🕐 Lun–Sáb 9:00–19:00 hrs</span>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-copy">
            © {new Date().getFullYear()} Villa Esmeralda. Todos los derechos reservados.
          </p>
          <nav className="footer-legal" aria-label="Legal">
            <a href="#!">Aviso de privacidad</a>
            <a href="#!">Términos y condiciones</a>
          </nav>
        </div>
      </div>
    </footer>
  )
}

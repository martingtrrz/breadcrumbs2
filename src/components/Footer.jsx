import { Link } from 'react-router-dom'

const FOOTER_LINKS = [
  { label: 'Inicio', to: '/' },
  { label: 'Galería', to: '/galeria' },
  { label: 'Paquetes', to: '/paquetes' },
  { label: 'Testimonios', to: '/testimonios' },
  { label: 'Contacto', to: '/contacto' },
]

const IconMapPin = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
)

const IconPhone = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
)

const IconMail = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
)

const IconClock = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
)

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div>
            <div className="footer-brand-name">
              Villa <em>Esmeralda</em>
            </div>
            <p className="footer-brand-sub">
              El espacio de tus celebraciones más importantes. Elegancia y servicio desde 2010.
            </p>
          </div>

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

          <div>
            <p className="footer-col-title">Contacto</p>
            <div className="footer-links" style={{ color: 'rgba(255,255,255,.35)', fontSize: '.82rem', gap: '.9rem' }}>
              <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><IconMapPin /> Av. de los Eventos 1200, CDMX</span>
              <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><IconPhone /> +52 (55) 1234-5678</span>
              <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><IconMail /> eventos@villaesmeralda.mx</span>
              <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><IconClock /> Lun–Sáb 9:00–19:00 hrs</span>
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
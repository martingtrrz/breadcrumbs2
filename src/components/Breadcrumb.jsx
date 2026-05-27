import { Link, useLocation, useParams } from 'react-router-dom'

const ROUTE_MAP = {
  '/':             null,           // Home — no breadcrumb bar
  '/galeria':      [{ label: 'Galería' }],
  '/paquetes':     [{ label: 'Paquetes' }],
  '/testimonios':  [{ label: 'Testimonios' }],
  '/contacto':     [{ label: 'Contacto' }],
}

function formatSlug(slug) {
  return slug
    .split('-')
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(' ')
}

export default function Breadcrumb() {
  const location = useLocation()
  const params = useParams()

  let crumbs = ROUTE_MAP[location.pathname]

  if (!crumbs && location.pathname.startsWith('/paquetes/')) {
    const slug = params.slug || ''
    crumbs = [
      { label: 'Paquetes', to: '/paquetes' },
      { label: formatSlug(slug) },
    ]
  }

  if (!crumbs) return null

  return (
    <div className="breadcrumb-bar" aria-label="Ruta de navegación">
      <div className="container">
        <nav className="breadcrumb" aria-label="breadcrumb">
          <Link to="/">Inicio</Link>

          {crumbs.map((crumb, i) => {
            const isLast = i === crumbs.length - 1
            return (
              <span key={i} style={{ display: 'flex', alignItems: 'center', gap: '.5rem' }}>
                <span className="breadcrumb-sep" aria-hidden="true">›</span>
                {isLast || !crumb.to ? (
                  <span
                    className="breadcrumb-current"
                    aria-current="page"
                  >
                    {crumb.label}
                  </span>
                ) : (
                  <Link to={crumb.to}>{crumb.label}</Link>
                )}
              </span>
            )
          })}
        </nav>
      </div>
    </div>
  )
}

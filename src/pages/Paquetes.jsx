import { Link } from 'react-router-dom'
import Breadcrumb from '../components/Breadcrumb'
import { useScrollReveal } from '../hooks/useScrollReveal'

export const PACKAGES = [
  {
    slug: 'basico',
    name: 'Básico',
    price: 12500,
    priceFormatted: '$12,500',
    desc: 'Perfecto para celebraciones íntimas y reuniones exclusivas.',
    image: 'https://images.unsplash.com/photo-1464344497347-6f4f7c3d2f28?auto=format&fit=crop&w=900&q=80',
    featured: false,
    features: [
      'Capacidad hasta 100 personas',
      'Mobiliario básico incluido',
      'Iluminación ambiental LED',
      'Entrada y seguridad',
      'Coordinador de evento',
      'Estacionamiento gratuito',
    ],
  },
  {
    slug: 'premium',
    name: 'Premium',
    price: 22500,
    priceFormatted: '$22,500',
    desc: 'Nuestra opción más popular para bodas, quinceañeras y eventos especiales.',
    image: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=900&q=80',
    featured: true,
    features: [
      'Capacidad hasta 200 personas',
      'Mobiliario premium y decoración',
      'Sala de DJ y tecnología',
      'Acceso a jardín y terraza',
      'Coctelería y barra de bebidas',
      'Fotografía básica incluida',
    ],
  },
  {
    slug: 'luxury',
    name: 'Luxury',
    price: 38500,
    priceFormatted: '$38,500',
    desc: 'La experiencia completa y sin límites para los eventos más memorables.',
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=900&q=80',
    featured: false,
    features: [
      'Capacidad hasta 350 personas',
      'Salón completo con todos los espacios',
      'Tecnología audiovisual 4K',
      'Catering gourmet internacional',
      'Fotografía y video profesional',
      'Coordinador VIP dedicado',
    ],
  },
]

export default function Paquetes({ openModal }) {
  const pageRef = useScrollReveal()

  return (
    <div ref={pageRef}>
      {/* Page Hero */}
      <div className="page-hero">
        <div className="container page-hero-content">
          <span className="tag">Paquetes y precios</span>
          <h1>Encuentra la opción perfecta</h1>
          <p>Diseñados para cada tipo de celebración, con todo lo que necesitas incluido</p>
        </div>
      </div>

      {/* Breadcrumb */}
      <Breadcrumb />

      {/* Packages */}
      <section className="packages-section" aria-label="Paquetes disponibles">
        <div className="container">
          <div className="pkg-head reveal">
            <span className="tag">Nuestros paquetes</span>
            <h2 className="section-title">Celebra a tu manera</h2>
            <span className="gold-line" style={{ margin: '1rem auto' }} />
            <p className="section-sub" style={{ margin: '0 auto' }}>
              Todos los precios son en pesos mexicanos (MXN) e incluyen IVA. Personalizamos cada paquete según tus necesidades.
            </p>
          </div>

          <div className="pkg-grid">
            {PACKAGES.map((pkg, i) => (
              <div
                key={pkg.slug}
                className={`pkg-card reveal${pkg.featured ? ' featured' : ''}`}
                style={{ transitionDelay: `${i * 0.1}s` }}
              >
                {pkg.featured && (
                  <span className="pkg-popular-badge">⭐ Más popular</span>
                )}

                <div>
                  <h2 className="pkg-name">{pkg.name}</h2>
                  <p className="pkg-desc">{pkg.desc}</p>

                  <div className="pkg-price">
                    <span className="pkg-price-currency">$</span>
                    {pkg.price.toLocaleString('es-MX')}
                    <span className="pkg-price-period"> MXN / evento</span>
                  </div>

                  <div className="pkg-divider" />

                  <ul className="pkg-features" aria-label={`Características del paquete ${pkg.name}`}>
                    {pkg.features.map((f) => (
                      <li key={f} className="pkg-feature">
                        <span className="pkg-check" aria-hidden="true">✓</span>
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '.75rem' }}>
                  <button
                    className="btn-reserve"
                    id={`btn-reservar-${pkg.slug}`}
                    onClick={() => openModal(pkg)}
                    aria-label={`Reservar paquete ${pkg.name} por ${pkg.priceFormatted} MXN`}
                  >
                    {pkg.featured ? 'Reservar ahora' : 'Reservar'}
                  </button>
                  <Link
                    to={`/paquetes/${pkg.slug}`}
                    style={{
                      textAlign: 'center',
                      fontSize: '.75rem',
                      color: pkg.featured ? 'rgba(255,255,255,.45)' : 'var(--muted)',
                      letterSpacing: '.06em',
                    }}
                  >
                    Ver detalles completos →
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Note */}
          <p
            className="reveal"
            style={{
              textAlign: 'center',
              color: 'var(--muted)',
              fontSize: '.82rem',
              marginTop: '3rem',
              lineHeight: 1.7,
            }}
          >
            ¿Necesitas algo a la medida? Contáctanos y diseñamos un paquete personalizado para tu evento.
            <br />
            <Link to="/contacto" style={{ color: 'var(--gold)', fontWeight: 600 }}>
              Hablar con un coordinador →
            </Link>
          </p>
        </div>
      </section>
    </div>
  )
}

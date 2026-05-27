import { useParams, Link, Navigate } from 'react-router-dom'
import Breadcrumb from '../components/Breadcrumb'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { PACKAGES } from './Paquetes'

const EXTRA_DETAILS = {
  basico: {
    ideal: 'Cumpleaños, reuniones familiares, eventos de empresa pequeños.',
    capacity: '100 personas',
    duration: 'Hasta 8 horas',
    extras: ['Atención personalizada', 'Mesa de honor incluida', 'Servicio de agua y café'],
    gallery: [
      'https://images.unsplash.com/photo-1464344497347-6f4f7c3d2f28?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1523416091380-8a21a3a1f0e8?auto=format&fit=crop&w=900&q=80',
    ],
  },
  premium: {
    ideal: 'Bodas, quinceañeras, eventos corporativos medianos.',
    capacity: '200 personas',
    duration: 'Hasta 10 horas',
    extras: ['DJ incluido', 'Barra libre de bebidas', 'Decoración floral básica', 'Fotógrafo 4 hrs'],
    gallery: [
      'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?auto=format&fit=crop&w=900&q=80',
    ],
  },
  luxury: {
    ideal: 'Bodas VIP, galas corporativas, lanzamientos exclusivos.',
    capacity: '350 personas',
    duration: 'Hasta 12 horas',
    extras: ['Coordinador VIP dedicado', 'Catering gourmet completo', 'Fotografía y video full day', 'Decoración premium personalizada'],
    gallery: [
      'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1560448204-e02be3b1d08b?auto=format&fit=crop&w=900&q=80',
    ],
  },
}

export default function PaqueteDetalle({ openModal }) {
  const { slug } = useParams()
  const pageRef = useScrollReveal()

  const pkg = PACKAGES.find((p) => p.slug === slug)
  const extra = EXTRA_DETAILS[slug]

  if (!pkg) return <Navigate to="/paquetes" replace />

  const others = PACKAGES.filter((p) => p.slug !== slug)

  return (
    <div ref={pageRef}>
      {/* Page Hero */}
      <div className="page-hero">
        <div className="container page-hero-content">
          <span className="tag">Paquete {pkg.name}</span>
          <h1>Paquete {pkg.name}</h1>
          <p>{pkg.desc}</p>
        </div>
      </div>

      {/* Breadcrumb — shows: Inicio › Paquetes › Básico */}
      <Breadcrumb />

      {/* Detail grid */}
      <section
        style={{ background: 'var(--offwhite)', padding: '0 0 5rem' }}
        aria-label={`Detalles del paquete ${pkg.name}`}
      >
        <div className="container">
          <div className="pkg-detail-grid">
            {/* Images */}
            <div className="reveal-l">
              <div className="pkg-detail-img">
                <img src={extra.gallery[0]} alt={`Paquete ${pkg.name}`} />
              </div>
              {extra.gallery[1] && (
                <div
                  className="pkg-detail-img reveal"
                  style={{ marginTop: '1rem', height: '240px', transitionDelay: '.15s' }}
                >
                  <img src={extra.gallery[1]} alt={`Detalle paquete ${pkg.name}`} loading="lazy" />
                </div>
              )}
            </div>

            {/* Info */}
            <div className="reveal-r">
              <span className="tag">Paquete {pkg.name}</span>
              <h2 className="section-title">{pkg.desc}</h2>
              <span className="gold-line" />

              {/* Quick facts */}
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr',
                  gap: '1rem',
                  marginBottom: '2rem',
                }}
              >
                {[
                  { label: 'Capacidad', value: extra.capacity },
                  { label: 'Duración', value: extra.duration },
                  { label: 'Ideal para', value: extra.ideal },
                ].map(({ label, value }) => (
                  <div
                    key={label}
                    style={{
                      background: 'var(--cream)',
                      border: '1px solid var(--border)',
                      borderRadius: 'var(--r)',
                      padding: '1rem 1.1rem',
                      gridColumn: label === 'Ideal para' ? '1 / -1' : 'auto',
                    }}
                  >
                    <p style={{ fontSize: '.67rem', letterSpacing: '.12em', textTransform: 'uppercase', color: 'var(--gold)', fontWeight: 600, marginBottom: '.3rem' }}>
                      {label}
                    </p>
                    <p style={{ fontSize: '.9rem', color: 'var(--navy)', fontWeight: 500 }}>{value}</p>
                  </div>
                ))}
              </div>

              {/* Includes */}
              <div className="pkg-detail-price-box">
                <p style={{ fontSize: '.68rem', letterSpacing: '.15em', textTransform: 'uppercase', color: 'rgba(255,255,255,.4)', marginBottom: '.5rem' }}>
                  Precio total del evento
                </p>
                <p className="pkg-detail-price-big">{pkg.priceFormatted}</p>
                <p style={{ fontSize: '.8rem', color: 'rgba(255,255,255,.35)', marginBottom: '1.5rem' }}>MXN • Incluye IVA</p>

                <p style={{ fontSize: '.75rem', letterSpacing: '.12em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '.85rem', fontWeight: 600 }}>
                  Incluye
                </p>
                <div className="pkg-detail-features">
                  {[...pkg.features, ...extra.extras].map((f) => (
                    <div key={f} className="pkg-detail-feature">
                      <span style={{ color: 'var(--gold)', fontSize: '.75rem' }}>✓</span>
                      {f}
                    </div>
                  ))}
                </div>

                <button
                  className="btn-submit"
                  onClick={() => openModal(pkg)}
                  id={`btn-reservar-detalle-${slug}`}
                >
                  Reservar paquete {pkg.name}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Other packages */}
      <section style={{ background: 'var(--cream)', padding: '4rem 0 5rem' }}>
        <div className="container">
          <div className="reveal" style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
            <span className="tag">También te puede interesar</span>
            <h2 className="section-title">Otros paquetes</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1.5rem', maxWidth: '780px', margin: '0 auto' }}>
            {others.map((p, i) => (
              <div key={p.slug} className={`pkg-card reveal${p.featured ? ' featured' : ''}`} style={{ transitionDelay: `${i * 0.1}s` }}>
                <h3 className="pkg-name">{p.name}</h3>
                <div className="pkg-price" style={{ fontSize: '1.8rem', margin: '.75rem 0' }}>
                  {p.priceFormatted}
                  <span className="pkg-price-period"> MXN</span>
                </div>
                <div style={{ display: 'flex', gap: '.75rem', flexDirection: 'column' }}>
                  <button className="btn-reserve" onClick={() => openModal(p)}>Reservar</button>
                  <Link to={`/paquetes/${p.slug}`} style={{ textAlign: 'center', fontSize: '.75rem', color: p.featured ? 'rgba(255,255,255,.4)' : 'var(--muted)' }}>
                    Ver detalles →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

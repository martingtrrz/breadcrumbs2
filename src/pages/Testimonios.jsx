import { useState } from 'react'
import Breadcrumb from '../components/Breadcrumb'
import { useScrollReveal } from '../hooks/useScrollReveal'

const TESTIMONIALS = [
  {
    initials: 'MC',
    name: 'María & Carlos',
    event: 'Boda · Paquete Luxury',
    stars: 5,
    quote:
      'La experiencia fue absolutamente perfecta. El equipo de Villa Esmeralda atendió cada detalle de nuestra boda con una dedicación que superó todas nuestras expectativas. Fue el día más especial de nuestras vidas.',
  },
  {
    initials: 'RL',
    name: 'Roberto López',
    event: 'Evento corporativo · Paquete Premium',
    stars: 5,
    quote:
      'Organizamos nuestro congreso anual y el soporte logístico fue excepcional. Las instalaciones son impresionantes y el catering estuvo delicioso. Definitivamente volveremos el próximo año.',
  },
  {
    initials: 'SF',
    name: 'Sofía Flores',
    event: 'Quinceañera · Paquete Premium',
    stars: 5,
    quote:
      'Mi quinceañera fue un sueño hecho realidad. La decoración, la iluminación y el ambiente creado por el equipo fue sencillamente mágico. Mis amigas aún hablan de esa noche.',
  },
  {
    initials: 'AG',
    name: 'Ana Gutiérrez',
    event: 'Aniversario corporativo · Paquete Básico',
    stars: 5,
    quote:
      'Celebramos el aniversario de nuestra empresa y fue todo un éxito. El salón tiene una elegancia natural que hace que cualquier evento se vea de lujo.',
  },
  {
    initials: 'JP',
    name: 'Jorge & Paola',
    event: 'Boda · Paquete Luxury',
    stars: 5,
    quote:
      'Desde la primera reunión de planificación hasta el último baile, todo fue perfecto. El coordinador VIP fue increíble y jamás nos dejó solos. ¡100% recomendado!',
  },
]

export default function Testimonios() {
  const pageRef = useScrollReveal()
  const [current, setCurrent] = useState(0)
  const visibleCount = 3
  const maxIndex = TESTIMONIALS.length - visibleCount

  const prev = () => setCurrent((c) => Math.max(0, c - 1))
  const next = () => setCurrent((c) => Math.min(maxIndex, c + 1))

  const offset = -(current * (100 / visibleCount))

  return (
    <div ref={pageRef}>
      {/* Page Hero */}
      <div className="page-hero">
        <div className="container page-hero-content">
          <span className="tag">Testimonios</span>
          <h1>Lo que dicen nuestros clientes</h1>
          <p>Historias reales de celebraciones perfectas en Villa Esmeralda</p>
        </div>
      </div>

      {/* Breadcrumb */}
      <Breadcrumb />

      {/* Testimonials */}
      <section className="testimonials-section" aria-label="Testimonios de clientes">
        <div className="container">
          <div className="test-head reveal">
            <span className="tag">Testimonios</span>
            <h2 className="section-title">Experiencias que hablan por sí solas</h2>
            <span className="gold-line" style={{ margin: '1rem auto' }} />
            <p className="section-sub" style={{ margin: '0 auto' }}>
              Más de 2,000 eventos realizados y miles de familias que confiaron en nosotros para sus momentos más especiales.
            </p>
          </div>

          {/* Carousel */}
          <div className="test-track-wrap reveal" role="region" aria-label="Carrusel de testimonios" aria-live="polite">
            <div
              className="test-track"
              style={{ transform: `translateX(${offset}%)` }}
            >
              {TESTIMONIALS.map(({ initials, name, event, stars, quote }) => (
                <div key={name} className="test-card">
                  <div className="test-stars" aria-label={`${stars} estrellas`}>
                    {'★'.repeat(stars)}
                  </div>
                  <p className="test-quote">"{quote}"</p>
                  <div className="test-author">
                    <div className="test-avatar" aria-hidden="true">{initials}</div>
                    <div>
                      <div className="test-name">{name}</div>
                      <div className="test-event">{event}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Controls */}
          <div className="test-controls">
            <button
              className="test-btn"
              onClick={prev}
              disabled={current === 0}
              aria-label="Testimonio anterior"
              style={{ opacity: current === 0 ? .4 : 1 }}
            >
              ←
            </button>

            <div className="test-dots" role="tablist" aria-label="Posición del carrusel">
              {Array.from({ length: maxIndex + 1 }).map((_, i) => (
                <button
                  key={i}
                  className={`test-dot${current === i ? ' active' : ''}`}
                  onClick={() => setCurrent(i)}
                  role="tab"
                  aria-selected={current === i}
                  aria-label={`Ir al testimonio ${i + 1}`}
                />
              ))}
            </div>

            <button
              className="test-btn"
              onClick={next}
              disabled={current === maxIndex}
              aria-label="Testimonio siguiente"
              style={{ opacity: current === maxIndex ? .4 : 1 }}
            >
              →
            </button>
          </div>

          {/* Stats strip */}
          <div
            className="reveal"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '1.5rem',
              marginTop: '4rem',
              background: 'var(--navy)',
              borderRadius: 'var(--r-xl)',
              padding: '2.5rem',
              border: '1px solid var(--border)',
            }}
          >
            {[
              { num: '2,000+', label: 'Eventos realizados' },
              { num: '98%', label: 'Clientes satisfechos' },
              { num: '4.9★', label: 'Calificación promedio' },
            ].map(({ num, label }) => (
              <div key={label} style={{ textAlign: 'center' }}>
                <div style={{ fontFamily: 'Playfair Display, serif', fontSize: '2.2rem', fontWeight: 700, color: 'var(--gold)' }}>
                  {num}
                </div>
                <div style={{ fontSize: '.72rem', letterSpacing: '.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,.4)', marginTop: '.4rem' }}>
                  {label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

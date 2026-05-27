import { useState, useEffect } from 'react'
import Breadcrumb from '../components/Breadcrumb'
import { useScrollReveal } from '../hooks/useScrollReveal'

const SPACES = [
  {
    id: 'salon-principal',
    src: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=1200&q=80',
    thumb: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=700&q=80',
    label: 'Salón principal',
    desc: 'Nuestro salón más emblemático, con capacidad para 350 invitados.',
    tall: true,
  },
  {
    id: 'terraza',
    src: 'https://images.unsplash.com/photo-1464344497347-6f4f7c3d2f28?auto=format&fit=crop&w=1200&q=80',
    thumb: 'https://images.unsplash.com/photo-1464344497347-6f4f7c3d2f28?auto=format&fit=crop&w=700&q=80',
    label: 'Terraza exterior',
    desc: 'Espacio al aire libre rodeado de vegetación y vistas panorámicas.',
  },
  {
    id: 'banquetes',
    src: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1200&q=80',
    thumb: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=700&q=80',
    label: 'Salón de banquetes',
    desc: 'Configuración perfecta para cenas y banquetes de gala.',
  },
  {
    id: 'jardin',
    src: 'https://images.unsplash.com/photo-1523416091380-8a21a3a1f0e8?auto=format&fit=crop&w=1200&q=80',
    thumb: 'https://images.unsplash.com/photo-1523416091380-8a21a3a1f0e8?auto=format&fit=crop&w=700&q=80',
    label: 'Jardín de noche',
    desc: 'Iluminación ambiental que transforma el jardín en un espacio mágico.',
    tall: true,
  },
  {
    id: 'lounge',
    src: 'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?auto=format&fit=crop&w=1200&q=80',
    thumb: 'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?auto=format&fit=crop&w=700&q=80',
    label: 'Lounge & bar',
    desc: 'Zona lounge con barra completa para cocteles y bebidas premium.',
  },
  {
    id: 'suite',
    src: 'https://images.unsplash.com/photo-1560448204-e02be3b1d08b?auto=format&fit=crop&w=1200&q=80',
    thumb: 'https://images.unsplash.com/photo-1560448204-e02be3b1d08b?auto=format&fit=crop&w=700&q=80',
    label: 'Suite nupcial',
    desc: 'Área privada para novios, con mobiliario exclusivo y decoración floral.',
  },
]

export default function Galeria() {
  const pageRef = useScrollReveal()
  const [lightbox, setLightbox] = useState(null) // { src, label }

  // Close lightbox on Escape
  useEffect(() => {
    const handler = (e) => { if (e.key === 'Escape') setLightbox(null) }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [])

  // Prevent body scroll when lightbox open
  useEffect(() => {
    document.body.style.overflow = lightbox ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [lightbox])

  return (
    <div ref={pageRef}>
      {/* Page Hero */}
      <div className="page-hero">
        <div className="container page-hero-content">
          <span className="tag">Nuestros espacios</span>
          <h1>Galería de Villa Esmeralda</h1>
          <p>Cada espacio diseñado para que tu celebración sea perfecta</p>
        </div>
      </div>

      {/* Breadcrumb */}
      <Breadcrumb />

      {/* Gallery Grid */}
      <section
        className="gallery-section"
        style={{ background: 'var(--navy)', padding: '4rem 0 6rem' }}
        aria-label="Galería de espacios"
      >
        <div className="container">
          <div className="gallery-page-grid">
            {SPACES.map(({ id, src, thumb, label, desc, tall }) => (
              <div
                key={id}
                className={`g-item reveal${tall ? ' g-item-tall' : ''}`}
                style={{ height: tall ? '540px' : '260px', cursor: 'zoom-in' }}
                onClick={() => setLightbox({ src, label })}
                role="button"
                tabIndex={0}
                aria-label={`Ampliar imagen: ${label}`}
                onKeyDown={(e) => e.key === 'Enter' && setLightbox({ src, label })}
              >
                <img src={thumb} alt={label} loading="lazy" />
                <div className="g-overlay">
                  <div>
                    <span className="g-overlay-text">{label}</span>
                    <p style={{ color: 'rgba(255,255,255,.65)', fontSize: '.8rem', marginTop: '.3rem' }}>
                      {desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="lightbox open"
          onClick={() => setLightbox(null)}
          role="dialog"
          aria-modal="true"
          aria-label={`Imagen ampliada: ${lightbox.label}`}
        >
          <button
            className="lightbox-close"
            onClick={() => setLightbox(null)}
            aria-label="Cerrar imagen"
          >
            ✕
          </button>
          <img
            src={lightbox.src}
            alt={lightbox.label}
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </div>
  )
}

import { useState, useEffect } from 'react'
import Breadcrumb from '../components/Breadcrumb'
import { useScrollReveal } from '../hooks/useScrollReveal'
import img1 from '../assets/img1.png'
import img2 from '../assets/img2.png'
import img3 from '../assets/img3.png'
import img4 from '../assets/img4.png'
import img5 from '../assets/img5.png'

const SPACES = [
  {
    id: 'salon-principal',
    src: img1,
    thumb: img1,
    label: 'Salón principal',
    desc: 'Nuestro salón más emblemático, con capacidad para 350 invitados.',
    tall: true,
  },
  {
    id: 'terraza',
    src: img2,
    thumb: img2,
    label: 'Terraza exterior',
    desc: 'Espacio al aire libre rodeado de vegetación y vistas panorámicas.',
  },
  {
    id: 'banquetes',
    src: img3,
    thumb: img3,
    label: 'Salón de banquetes',
    desc: 'Configuración perfecta para cenas y banquetes de gala.',
  },
  {
    id: 'jardin',
    src: img4,
    thumb: img4,
    label: 'Jardín de noche',
    desc: 'Iluminación ambiental que transforma el jardín en un espacio mágico.',
    tall: true,
  },
  {
    id: 'lounge',
    src: img5,
    thumb: img5,
    label: 'Lounge & bar',
    desc: 'Zona lounge con barra completa para cocteles y bebidas premium.',
  },
  {
    id: 'suite',
    src: img1,
    thumb: img1,
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

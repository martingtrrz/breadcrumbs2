import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useScrollReveal, useCounters } from '../hooks/useScrollReveal'

// Importación de imágenes locales
import img1 from '../assets/img1.png'
import img2 from '../assets/img2.png'
import img3 from '../assets/img3.png'
import img4 from '../assets/img4.png'
import img5 from '../assets/img5.png'

// Arreglo de características con iconos SVG nativos
const FEATURES = [
  { 
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" />
      </svg>
    ), 
    label: 'Diseño de interiores', 
    sub: 'Ambientación personalizada' 
  },
  { 
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 19.5V15m0 0l6-3v9m-6-6l-3 1.5m9-1.5l3 1.5M9 15V9.75m0 0a3 3 0 013-3h3a3 3 0 013 3v5.25" />
      </svg>
    ), 
    label: 'Equipo audiovisual', 
    sub: 'Sonido e iluminación 4K' 
  },
  { 
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
      </svg>
    ), 
    label: 'Jardín y terraza', 
    sub: 'Espacios al aire libre' 
  },
  { 
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
      </svg>
    ), 
    label: 'Catering gourmet', 
    sub: 'Cocina internacional' 
  }
]

const STATS = [
  { target: 350, suffix: '', label: 'Invitados máx.' },
  { target: 15, suffix: '+', label: 'Años de experiencia' },
  { target: 2000, suffix: '+', label: 'Eventos realizados' },
  { target: 98, suffix: '%', label: 'Clientes satisfechos' },
]

// Uso de las imágenes importadas dinámicamente
const GALLERY_PREVIEW = [
  { src: img1, label: 'Salón principal' },
  { src: img2, label: 'Terraza exterior' },
  { src: img3, label: 'Banquetes' },
  { src: img4, label: 'Lounge bar' },
  { src: img5, label: 'Jardín de noche' },
]

export default function Home({ openModal }) {
  const pageRef = useScrollReveal()
  useCounters()

  return (
    <div ref={pageRef}>
      {/* HERO */}
      <section className="hero" id="inicio" aria-label="Portada">
        <div className="hero-bg" />
        <div className="hero-noise" />
        <div className="hero-ring hero-ring-1" />
        <div className="hero-ring hero-ring-2" />
        <div className="hero-ring hero-ring-3" />
        <div className="hero-ring hero-ring-4" />
        <div className="hero-particles" />

        <div className="hero-content">
          <p className="hero-eyebrow">Villa Esmeralda — Desde 2010</p>
          <h1 className="hero-title">
            El lugar perfecto para tus <em>momentos</em> inolvidables
          </h1>
          <p className="hero-sub">
            Un espacio de lujo y distinción donde cada celebración se convierte en una experiencia única e irrepetible
          </p>
          <div className="hero-actions">
            <Link to="/paquetes" className="btn-gold">Ver paquetes</Link>
            <Link to="/galeria" className="btn-ghost">Explorar galería</Link>
          </div>
        </div>

        <div className="hero-stats" aria-label="Estadísticas">
          {STATS.map(({ target, suffix, label }) => (
            <div className="stat-item" key={label}>
              <div className="stat-num" data-target={target} data-suffix={suffix}>0</div>
              <div className="stat-label">{label}</div>
            </div>
          ))}
        </div>

        <div className="hero-scroll" aria-hidden="true">
          <div className="hero-scroll-line" />
          <span>Scroll</span>
        </div>
      </section>

      {/* ABOUT */}
      <section className="about-section" aria-label="Nosotros">
        <div className="container">
          <div className="about-grid">
            <div className="about-img-wrap reveal-l">
              <div className="about-img-main">
                <img
                  src={img1}
                  alt="Salón principal Villa Esmeralda"
                  loading="lazy"
                />
              </div>
              <div className="about-img-accent">
                <img
                  src={img2}
                  alt="Detalle decoración"
                  loading="lazy"
                />
              </div>
              <div className="about-badge">
                <div className="about-badge-num">15</div>
                <div className="about-badge-text">años de historia</div>
              </div>
            </div>

            <div className="reveal-r">
              <span className="tag">Nuestra historia</span>
              <h2 className="section-title">Un espacio con historia y distinción</h2>
              <span className="gold-line" />
              <p className="section-sub">
                Villa Esmeralda nace en 2010 con la visión de crear un espacio donde la elegancia clásica se encuentra con el servicio contemporáneo. Somos testigos de miles de momentos memorables.
              </p>
              <p className="section-sub" style={{ marginTop: '.75rem' }}>
                Con capacidad para hasta 350 invitados y un equipo de coordinadores especializados, transformamos tus sueños en experiencias reales.
              </p>
              <div className="about-features">
                {FEATURES.map(({ icon, label, sub }) => (
                  <div className="feat-item" key={label}>
                    <div className="feat-icon">{icon}</div>
                    <div>
                      <div className="feat-label">{label}</div>
                      <div className="feat-sub">{sub}</div>
                    </div>
                  </div>
                ))}
              </div>
              <div style={{ marginTop: '2.5rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <Link to="/galeria" className="btn-gold">Ver galería</Link>
                <Link to="/contacto" className="btn-outline">Contactarnos</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* GALLERY PREVIEW */}
      <section className="gallery-section" style={{ padding: '5rem 0' }} aria-label="Espacios">
        <div className="container">
          <div className="gallery-head reveal">
            <span className="tag">Nuestros espacios</span>
            <h2 className="section-title">Cada rincón, una experiencia</h2>
            <span className="gold-line" style={{ margin: '1rem auto' }} />
            <p className="section-sub" style={{ color: 'rgba(255,255,255,.5)', margin: '0 auto' }}>
              Descubre la elegancia de nuestros salones, jardines y terrazas
            </p>
          </div>
          <div className="gallery-grid reveal">
            {GALLERY_PREVIEW.map(({ src, label }) => (
              <Link to="/galeria" className="g-item" key={label} aria-label={label}>
                <img src={src} alt={label} loading="lazy" />
                <div className="g-overlay">
                  <span className="g-overlay-text">{label}</span>
                </div>
              </Link>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: '2.5rem' }}>
            <Link to="/galeria" className="btn-gold">Ver galería completa</Link>
          </div>
        </div>
      </section>

      {/* CTA STRIP */}
      <section style={{ padding: '5rem 0', background: 'var(--cream)', textAlign: 'center' }}>
        <div className="container reveal">
          <span className="tag">¿Listo para celebrar?</span>
          <h2 className="section-title" style={{ maxWidth: '560px', margin: '0 auto .75rem' }}>
            Comencemos a planear tu evento perfecto
          </h2>
          <span className="gold-line" style={{ margin: '1rem auto 1.5rem' }} />
          <p className="section-sub" style={{ margin: '0 auto 2.5rem' }}>
            Nuestros coordinadores están listos para ayudarte a crear la experiencia que siempre soñaste.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/paquetes" className="btn-gold">Ver paquetes y precios</Link>
            <Link to="/contacto" className="btn-outline">Hablar con un coordinador</Link>
          </div>
        </div>
      </section>
    </div>
  )
}
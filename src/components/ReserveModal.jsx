import { useState, useEffect, useRef } from 'react'

export default function ReserveModal({ modal, onClose }) {
  const [form, setForm] = useState({ nombre: '', telefono: '', fecha: '' })
  const [submitted, setSubmitted] = useState(false)
  const overlayRef = useRef(null)

  // Reset on open
  useEffect(() => {
    if (modal.open) {
      setForm({ nombre: '', telefono: '', fecha: '' })
      setSubmitted(false)
    }
  }, [modal.open])

  // Close on Escape key
  useEffect(() => {
    const handler = (e) => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [onClose])

  const handleOverlayClick = (e) => {
    if (e.target === overlayRef.current) onClose()
  }

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!form.nombre || !form.telefono) return
    setSubmitted(true)
    // Simulate API call
    setTimeout(() => { onClose() }, 3000)
  }

  if (!modal.open) return null
  const pkg = modal.pkg

  return (
    <div
      className="modal-overlay open"
      ref={overlayRef}
      onClick={handleOverlayClick}
      role="dialog"
      aria-modal="true"
      aria-label={`Reservar paquete ${pkg?.name}`}
    >
      <div className="modal-box">
        <button className="modal-close" onClick={onClose} aria-label="Cerrar modal">✕</button>

        {!submitted ? (
          <form onSubmit={handleSubmit} noValidate>
            <span className="tag">Reservar</span>
            <h2 className="modal-title">{pkg?.name}</h2>
            <p className="modal-price">{pkg?.priceFormatted} <span style={{ fontSize: '.85rem', color: 'rgba(255,255,255,.4)' }}>MXN / evento</span></p>
            <p className="modal-desc">
              Déjanos tu información y un coordinador te contactará en 24 horas para confirmar disponibilidad.
            </p>

            <div className="form-group">
              <label htmlFor="modal-nombre">Nombre completo *</label>
              <input
                type="text"
                id="modal-nombre"
                name="nombre"
                placeholder="Tu nombre completo"
                value={form.nombre}
                onChange={handleChange}
                required
                autoComplete="name"
              />
            </div>

            <div className="form-group">
              <label htmlFor="modal-tel">Teléfono *</label>
              <input
                type="tel"
                id="modal-tel"
                name="telefono"
                placeholder="+52 000 000 0000"
                value={form.telefono}
                onChange={handleChange}
                required
                autoComplete="tel"
              />
            </div>

            <div className="form-group">
              <label htmlFor="modal-fecha">Fecha estimada del evento</label>
              <input
                type="date"
                id="modal-fecha"
                name="fecha"
                value={form.fecha}
                onChange={handleChange}
                min={new Date().toISOString().split('T')[0]}
              />
            </div>

            <button type="submit" className="btn-submit">
              Confirmar solicitud
            </button>
          </form>
        ) : (
          <div className="form-success show">
            <div className="form-success-icon">✦</div>
            <h4>¡Solicitud enviada!</h4>
            <p>
              Hemos recibido tu solicitud para el paquete <strong style={{ color: 'var(--gold)' }}>{pkg?.name}</strong>.
              Un coordinador te contactará en las próximas 24 horas.
            </p>
          </div>
        )}
      </div>
    </div>
  )
}

import { useState } from 'react'
import Breadcrumb from '../components/Breadcrumb'
import { useScrollReveal } from '../hooks/useScrollReveal'

const INITIAL_FORM = {
  nombre: '',
  telefono: '',
  email: '',
  tipoEvento: '',
  fecha: '',
  mensaje: '',
}

const CONTACT_INFO = [
  { icon: '📍', label: 'Dirección', value: 'Av. de los Eventos 1200, Col. Centro, Ciudad de México' },
  { icon: '📞', label: 'Teléfono', value: '+52 (55) 1234-5678' },
  { icon: '✉', label: 'Correo electrónico', value: 'eventos@villaesmeralda.mx' },
  { icon: '🕐', label: 'Horario de atención', value: 'Lunes a Sábado, 9:00 — 19:00 hrs' },
]

export default function Contacto() {
  const pageRef = useScrollReveal()
  const [form, setForm] = useState(INITIAL_FORM)
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const validate = () => {
    const e = {}
    if (!form.nombre.trim())   e.nombre    = 'Ingresa tu nombre'
    if (!form.telefono.trim()) e.telefono  = 'Ingresa tu teléfono'
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      e.email = 'Ingresa un correo válido'
    if (!form.tipoEvento)      e.tipoEvento = 'Selecciona el tipo de evento'
    return e
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((f) => ({ ...f, [name]: value }))
    if (errors[name]) setErrors((er) => ({ ...er, [name]: '' }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length) { setErrors(errs); return }
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      setSubmitted(true)
    }, 1200)
  }

  return (
    <div ref={pageRef}>
      {/* Page Hero */}
      <div className="page-hero">
        <div className="container page-hero-content">
          <span className="tag">Contáctanos</span>
          <h1>Hagamos realidad tu evento</h1>
          <p>Cuéntanos sobre tu celebración y nuestros coordinadores te guiarán paso a paso</p>
        </div>
      </div>

      {/* Breadcrumb */}
      <Breadcrumb />

      {/* Contact section */}
      <section className="contact-section" aria-label="Contacto">
        <div className="contact-deco contact-deco-1" aria-hidden="true" />
        <div className="contact-deco contact-deco-2" aria-hidden="true" />

        <div className="container">
          <div className="contact-grid">
            {/* Info */}
            <div className="reveal-l">
              <span className="tag">Estamos para ti</span>
              <h2 className="section-title" style={{ color: '#fff' }}>
                Hablemos de tu evento
              </h2>
              <span className="gold-line" />
              <p className="section-sub" style={{ color: 'rgba(255,255,255,.5)' }}>
                Cuéntanos sobre tu celebración ideal y nuestro equipo de coordinadores te guiará para crear la experiencia perfecta, a la medida de tus sueños.
              </p>

              <div className="contact-details">
                {CONTACT_INFO.map(({ icon, label, value }) => (
                  <div key={label} className="cd-item">
                    <div className="cd-icon" aria-hidden="true">{icon}</div>
                    <div>
                      <div className="cd-label">{label}</div>
                      <div className="cd-value">{value}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Form */}
            <div className="contact-form-wrap reveal-r">
              {!submitted ? (
                <form onSubmit={handleSubmit} noValidate aria-label="Formulario de contacto">
                  <span className="tag" style={{ marginBottom: '.75rem' }}>Solicitud de evento</span>

                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="nombre">Nombre *</label>
                      <input
                        type="text"
                        id="nombre"
                        name="nombre"
                        placeholder="Tu nombre"
                        value={form.nombre}
                        onChange={handleChange}
                        className={errors.nombre ? 'input-error' : ''}
                        autoComplete="given-name"
                      />
                      {errors.nombre && <span className="form-error show" role="alert">{errors.nombre}</span>}
                    </div>
                    <div className="form-group">
                      <label htmlFor="telefono">Teléfono *</label>
                      <input
                        type="tel"
                        id="telefono"
                        name="telefono"
                        placeholder="+52 000 000 0000"
                        value={form.telefono}
                        onChange={handleChange}
                        className={errors.telefono ? 'input-error' : ''}
                        autoComplete="tel"
                      />
                      {errors.telefono && <span className="form-error show" role="alert">{errors.telefono}</span>}
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="email">Correo electrónico *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="tu@correo.com"
                      value={form.email}
                      onChange={handleChange}
                      className={errors.email ? 'input-error' : ''}
                      autoComplete="email"
                    />
                    {errors.email && <span className="form-error show" role="alert">{errors.email}</span>}
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="tipoEvento">Tipo de evento *</label>
                      <select
                        id="tipoEvento"
                        name="tipoEvento"
                        value={form.tipoEvento}
                        onChange={handleChange}
                        className={errors.tipoEvento ? 'input-error' : ''}
                      >
                        <option value="">Selecciona…</option>
                        <option>Boda</option>
                        <option>Quinceañera</option>
                        <option>Evento corporativo</option>
                        <option>Cumpleaños</option>
                        <option>Graduación</option>
                        <option>Otro</option>
                      </select>
                      {errors.tipoEvento && <span className="form-error show" role="alert">{errors.tipoEvento}</span>}
                    </div>
                    <div className="form-group">
                      <label htmlFor="fecha">Fecha estimada</label>
                      <input
                        type="date"
                        id="fecha"
                        name="fecha"
                        value={form.fecha}
                        onChange={handleChange}
                        min={new Date().toISOString().split('T')[0]}
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="mensaje">Mensaje</label>
                    <textarea
                      id="mensaje"
                      name="mensaje"
                      placeholder="Cuéntanos sobre tu evento, número estimado de invitados, paquete de interés…"
                      value={form.mensaje}
                      onChange={handleChange}
                    />
                  </div>

                  <button
                    type="submit"
                    className="btn-submit"
                    id="btn-enviar-contacto"
                    disabled={loading}
                    aria-busy={loading}
                  >
                    {loading ? 'Enviando…' : 'Enviar solicitud'}
                  </button>
                </form>
              ) : (
                <div className="form-success show" role="status" aria-live="polite">
                  <div className="form-success-icon">✦</div>
                  <h4>¡Gracias por contactarnos!</h4>
                  <p>
                    Hemos recibido tu solicitud. Un coordinador se pondrá en contacto contigo en las próximas 24 horas para comenzar a planificar tu evento perfecto.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'var(--cream, #fdfaf6)',
      fontFamily: "'DM Sans', sans-serif",
      textAlign: 'center',
      color: 'var(--navy, #0b1a32)'
    }}>
      <div style={{
        position: 'absolute',
        top: '2.5rem',
        fontFamily: "'Playfair Display', serif",
        fontSize: '1.35rem',
        fontWeight: '600'
      }}>
        Villa <em style={{ color: 'var(--gold, #c8a84b)', fontStyle: 'italic' }}>Esmeralda</em>
      </div>
      
      <div style={{
        fontFamily: "'Playfair Display', serif",
        fontSize: '8rem',
        fontWeight: '600',
        margin: '0',
        lineHeight: '1',
        color: 'var(--gold, #c8a84b)',
        textShadow: '0 10px 30px rgba(200, 168, 75, 0.15)'
      }}>
        404
      </div>
      <h1 style={{
        fontFamily: "'Playfair Display', serif",
        fontSize: '2rem',
        fontWeight: '600',
        margin: '1.5rem 0 1rem'
      }}>Página no encontrada</h1>
      <p style={{
        color: 'var(--muted, #7e8494)',
        maxWidth: '420px',
        margin: '0 auto 2.5rem',
        lineHeight: '1.6'
      }}>
        Lo sentimos, la ruta que intentas visitar no existe o ha sido movida.
      </p>
      
      <Link to="/" style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '0.6rem',
        backgroundColor: 'var(--navy, #0b1a32)',
        color: 'white',
        textDecoration: 'none',
        padding: '0.8rem 1.6rem',
        borderRadius: '0.5rem',
        fontWeight: '500'
      }}>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="m15 18-6-6 6-6"/>
        </svg>
        Volver al inicio
      </Link>
    </div>
  );
}
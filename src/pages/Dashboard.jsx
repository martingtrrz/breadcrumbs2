export default function Dashboard() {
  return (
    <div className="animate-fade-in">
      <div className="mb-8">
        <h1 className="text-2xl font-bold tracking-tight text-navy">Visión General</h1>
        <p className="text-muted text-sm mt-1">Resumen de la actividad en Villa Esmeralda.</p>
      </div>

      {/* Tarjetas de Métricas */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {[
          { label: 'Eventos Pendientes', value: '5', accent: true },
          { label: 'Solicitudes Nuevas', value: '12', accent: false },
          { label: 'Ingresos Estimados', value: '$48,200', accent: false },
        ].map((stat, idx) => (
          <div key={idx} className="relative bg-white p-6 rounded-xl border border-gray-200/60 shadow-sm flex flex-col justify-center">
            {stat.accent && (
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-gold to-gold-lt rounded-t-xl" />
            )}
            <span className="text-xs font-semibold uppercase tracking-wider text-muted mb-1">{stat.label}</span>
            <span className="text-3xl font-bold text-navy">{stat.value}</span>
          </div>
        ))}
      </div>

      {/* Sección de Actividad Reciente */}
      <div className="bg-white border border-gray-200/60 rounded-xl shadow-sm overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-200/60 flex justify-between items-center">
          <h3 className="font-semibold text-navy tracking-wide">Actividad Reciente</h3>
        </div>
        <div className="p-6 text-sm text-muted flex items-center justify-center h-32 bg-gray-50/50">
          <div className="flex flex-col items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
              <path d="M14 2v6h6" />
              <path d="M16 13H8" />
              <path d="M16 17H8" />
              <path d="M10 9H8" />
            </svg>
            <span>No hay actividad reciente para mostrar.</span>
          </div>
        </div>
      </div>
    </div>
  );
}
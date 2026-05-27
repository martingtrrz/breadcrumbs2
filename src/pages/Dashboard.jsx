export default function Dashboard() {
  return (
    <div>
      <h1 className="text-2xl font-bold tracking-tight text-navy mb-1">Dashboard</h1>
      <p className="text-muted text-sm">Bienvenido al panel de administración de Villa Esmeralda.</p>

      {/* Example stat cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-8">
        {[
          { label: 'Eventos este mes', value: '12', accent: true },
          { label: 'Reservaciones pendientes', value: '5', accent: false },
          { label: 'Ingresos del mes', value: '$48,200', accent: false },
        ].map(({ label, value, accent }) => (
          <div
            key={label}
            className="
              relative overflow-hidden
              rounded-xl border border-gray-200/60
              bg-white p-6
              shadow-[0_1px_3px_rgba(0,0,0,0.04)]
              transition-shadow duration-200
              hover:shadow-md
            "
          >
            {accent && (
              <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-gold to-gold-lt" />
            )}
            <p className="text-xs font-semibold uppercase tracking-wider text-muted mb-2">{label}</p>
            <p className="text-3xl font-extrabold tracking-tight text-navy">{value}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

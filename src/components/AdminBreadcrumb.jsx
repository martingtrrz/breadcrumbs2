import { Link, useLocation } from 'react-router-dom';

export default function AdminBreadcrumb() {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);

  // Mapeo de rutas a nombres legibles
  const routeNames = {
    admin: 'Dashboard',
    eventos: 'Eventos',
    config: 'Configuración',
  };

  return (
    <nav aria-label="Ruta de navegación" className="mb-6 flex items-center text-sm">
      {pathnames.map((value, index) => {
        const last = index === pathnames.length - 1;
        const to = `/${pathnames.slice(0, index + 1).join('/')}`;
        const label = routeNames[value] || value;

        return (
          <div key={to} className="flex items-center">
            {last ? (
              <span className="font-semibold text-navy tracking-wide">
                {label}
              </span>
            ) : (
              <>
                <Link
                  to={to}
                  className="text-muted hover:text-gold transition-colors duration-200 tracking-wide"
                >
                  {label}
                </Link>
                <span className="mx-2 text-muted/50">
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="m9 18 6-6-6-6"/>
                  </svg>
                </span>
              </>
            )}
          </div>
        );
      })}
    </nav>
  );
}
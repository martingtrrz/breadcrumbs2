import { NavLink } from 'react-router-dom';

/* ───────────────────────────────────────────────────
   Native SVG icons — NO emojis allowed
   ─────────────────────────────────────────────────── */
const IconDashboard = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-5 h-5"
  >
    <rect x="3" y="3" width="7" height="7" rx="1.5" />
    <rect x="14" y="3" width="7" height="7" rx="1.5" />
    <rect x="3" y="14" width="7" height="7" rx="1.5" />
    <rect x="14" y="14" width="7" height="7" rx="1.5" />
  </svg>
);

const IconEventos = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-5 h-5"
  >
    <rect x="3" y="4" width="18" height="18" rx="2" />
    <line x1="16" y1="2" x2="16" y2="6" />
    <line x1="8" y1="2" x2="8" y2="6" />
    <line x1="3" y1="10" x2="21" y2="10" />
    <circle cx="12" cy="16" r="1.5" />
  </svg>
);

const IconConfig = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-5 h-5"
  >
    <circle cx="12" cy="12" r="3" />
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09a1.65 1.65 0 0 0-1.08-1.51 1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09a1.65 1.65 0 0 0 1.51-1.08 1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9c.26.604.852.997 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
  </svg>
);

/* ───────────────────────────────────────────────────
   Menu items
   ─────────────────────────────────────────────────── */
const menuItems = [
  { to: '/admin',          label: 'Dashboard',     Icon: IconDashboard, end: true  },
  { to: '/admin/eventos',  label: 'Eventos',       Icon: IconEventos,   end: false },
  { to: '/admin/config',   label: 'Configuración', Icon: IconConfig,    end: false },
];

/* ───────────────────────────────────────────────────
   Sidebar component
   ─────────────────────────────────────────────────── */
export default function Sidebar() {
  return (
    <aside
      className="
        fixed inset-y-0 left-0 z-40
        flex flex-col
        w-64 h-screen
        bg-navy
        border-r border-border
        font-sans
      "
    >
      {/* ── Logo ──────────────────────────────────── */}
      <div className="flex items-center gap-2 px-7 pt-8 pb-6">
        {/* Decorative diamond */}
        <span className="flex items-center justify-center w-9 h-9 rounded-lg bg-gold/15 border border-border">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-4 h-4 text-gold"
          >
            <polygon points="12 2 22 12 12 22 2 12" />
          </svg>
        </span>
        <div className="leading-tight select-none">
          <span className="text-lg font-bold tracking-tight text-white">Villa </span>
          <span className="text-lg font-normal tracking-tight text-gold">Esmeralda</span>
        </div>
      </div>

      {/* ── Gold accent line ─────────────────────── */}
      <div className="mx-5 mb-6 h-px bg-gradient-to-r from-gold/40 via-gold/15 to-transparent" />

      {/* ── Menu label ───────────────────────────── */}
      <p className="px-7 mb-3 text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-muted">
        Menu
      </p>

      {/* ── Navigation links ─────────────────────── */}
      <nav className="flex-1 flex flex-col gap-1 px-4 overflow-y-auto">
        {menuItems.map(({ to, label, Icon, end }) => (
          <NavLink
            key={to}
            to={to}
            end={end}
            className={({ isActive }) =>
              [
                'group flex items-center gap-3 px-3 py-2.5 rounded-lg',
                'text-sm font-medium tracking-wide',
                'transition-all duration-200 ease-[cubic-bezier(.4,0,.2,1)]',
                isActive
                  ? 'bg-navy2 text-gold shadow-[inset_3px_0_0_0] shadow-gold'
                  : 'text-white/65 hover:bg-white/[0.04] hover:text-white',
              ].join(' ')
            }
          >
            <span
              className="
                flex items-center justify-center
                w-8 h-8 rounded-md
                transition-colors duration-200
                group-[.active]:bg-gold/15
              "
            >
              <Icon />
            </span>
            {label}
          </NavLink>
        ))}
      </nav>

      {/* ── Bottom section ────────────────────────── */}
      <div className="mt-auto px-5 pb-6">
        {/* Divider */}
        <div className="mb-4 h-px bg-white/[0.06]" />

        <div className="flex items-center gap-3">
          {/* Avatar placeholder with initials */}
          <span
            className="
              flex items-center justify-center
              w-9 h-9 rounded-lg
              bg-navy2 border border-border
              text-gold text-xs font-bold select-none
            "
          >
            VE
          </span>
          <div className="leading-tight">
            <p className="text-sm font-semibold text-white/90">Admin</p>
            <p className="text-[0.7rem] text-muted">Panel de gestión</p>
          </div>
        </div>
      </div>
    </aside>
  );
}

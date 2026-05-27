import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';

export default function AdminLayout() {
  return (
    <div className="flex h-screen bg-offwhite font-sans">
      {/* ── Sidebar (fixed, left) ────────────────── */}
      <Sidebar />

      {/* ── Main area (offset by sidebar width) ──── */}
      <div className="flex flex-col flex-1 ml-64 min-h-screen">
        {/* ── Top header ─────────────────────────── */}
        <header
          className="
            sticky top-0 z-30
            flex items-center justify-between
            h-16 px-8
            bg-white
            border-b border-gray-200/60
            shadow-[0_1px_3px_rgba(0,0,0,0.04)]
          "
        >
          {/* Left: page title area */}
          <div className="flex items-center gap-3">
            <h2 className="text-base font-semibold tracking-tight text-navy">
              Panel Administrativo
            </h2>
            <span className="hidden sm:inline-flex items-center px-2 py-0.5 rounded-full text-[0.65rem] font-semibold uppercase tracking-wider bg-gold/10 text-gold border border-gold/20">
              Villa Esmeralda
            </span>
          </div>

          {/* Right: quick actions */}
          <div className="flex items-center gap-4">
            {/* Notification bell */}
            <button
              type="button"
              className="
                relative flex items-center justify-center
                w-9 h-9 rounded-lg
                text-muted hover:text-navy hover:bg-gray-100
                transition-colors duration-200
              "
              aria-label="Notificaciones"
            >
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
                <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
                <path d="M13.73 21a2 2 0 0 1-3.46 0" />
              </svg>
              {/* Badge dot */}
              <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-gold ring-2 ring-white" />
            </button>

            {/* User avatar */}
            <div
              className="
                flex items-center justify-center
                w-9 h-9 rounded-lg
                bg-navy text-gold
                text-xs font-bold select-none
                border border-border
              "
            >
              A
            </div>
          </div>
        </header>

        {/* ── Content area (Outlet) ──────────────── */}
        <main className="flex-1 overflow-y-auto p-8">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

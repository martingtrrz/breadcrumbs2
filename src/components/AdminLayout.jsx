import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import AdminBreadcrumb from './AdminBreadcrumb'; // <-- Importar el breadcrumb

export default function AdminLayout() {
  return (
    <div className="flex h-screen bg-offwhite font-sans">
      <Sidebar />

      <div className="flex flex-col flex-1 ml-64 min-h-screen">
        <header className="sticky top-0 z-30 flex items-center justify-between h-16 px-8 bg-white border-b border-gray-200/60 shadow-[0_1px_3px_rgba(0,0,0,0.04)]">
          <div className="flex items-center gap-3">
            <h2 className="text-base font-semibold tracking-tight text-navy">
              Panel Administrativo
            </h2>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center justify-center w-9 h-9 rounded-lg bg-navy text-gold text-xs font-bold select-none border border-border">
              A
            </div>
          </div>
        </header>

        {/* ── Área de contenido principal ── */}
        <main className="flex-1 overflow-y-auto p-8">
          {/* Breadcrumbs renderizados dinámicamente */}
          <AdminBreadcrumb />
          
          <Outlet />
        </main>
      </div>
    </div>
  );
}
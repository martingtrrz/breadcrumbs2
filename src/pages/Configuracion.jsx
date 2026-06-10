export default function Configuracion() {
  return (
    <div className="animate-fade-in pb-10">
      <div className="mb-8">
        <h1 className="text-2xl font-bold tracking-tight text-navy">Configuración</h1>
        <p className="text-muted text-sm mt-1">Administra los ajustes generales y la información de tu negocio.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Columna Izquierda: Ajustes Generales */}
        <div className="lg:col-span-2 space-y-6">
          
          {/* Tarjeta: Información del Negocio */}
          <section className="bg-white border border-gray-200/60 rounded-xl shadow-sm overflow-hidden">
            <div className="px-6 py-4 border-b border-gray-200/60">
              <h2 className="font-semibold text-navy tracking-wide">Información del Negocio</h2>
              <p className="text-xs text-muted mt-1">Actualiza los datos públicos que verán tus clientes.</p>
            </div>
            <div className="p-6 space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-muted uppercase tracking-wider mb-1">Nombre Comercial</label>
                  <input 
                    type="text" 
                    defaultValue="Villa Esmeralda" 
                    className="w-full bg-gray-50/50 border border-gray-200 rounded-lg px-4 py-2 text-sm text-navy focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-muted uppercase tracking-wider mb-1">Teléfono de Contacto</label>
                  <input 
                    type="tel" 
                    defaultValue="+52 (55) 1234-5678" 
                    className="w-full bg-gray-50/50 border border-gray-200 rounded-lg px-4 py-2 text-sm text-navy focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-colors"
                  />
                </div>
              </div>
              <div>
                <label className="block text-xs font-semibold text-muted uppercase tracking-wider mb-1">Correo Electrónico</label>
                <input 
                  type="email" 
                  defaultValue="eventos@villaesmeralda.mx" 
                  className="w-full bg-gray-50/50 border border-gray-200 rounded-lg px-4 py-2 text-sm text-navy focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-colors"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-muted uppercase tracking-wider mb-1">Dirección</label>
                <textarea 
                  rows="2"
                  defaultValue="Av. de los Eventos 1200, Col. Centro, Ciudad de México" 
                  className="w-full bg-gray-50/50 border border-gray-200 rounded-lg px-4 py-2 text-sm text-navy focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-colors resize-none"
                ></textarea>
              </div>
            </div>
          </section>

          {/* Tarjeta: Enlaces a Redes */}
          <section className="bg-white border border-gray-200/60 rounded-xl shadow-sm overflow-hidden">
            <div className="px-6 py-4 border-b border-gray-200/60">
              <h2 className="font-semibold text-navy tracking-wide">Redes Sociales</h2>
              <p className="text-xs text-muted mt-1">Conecta tus perfiles sociales.</p>
            </div>
            <div className="p-6 space-y-4">
              <div className="flex items-center gap-3">
                <span className="text-muted">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
                </span>
                <input type="text" placeholder="Enlace de Instagram" defaultValue="instagram.com/villaesmeralda" className="flex-1 bg-gray-50/50 border border-gray-200 rounded-lg px-4 py-2 text-sm text-navy focus:outline-none focus:border-gold transition-colors" />
              </div>
              <div className="flex items-center gap-3">
                <span className="text-muted">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
                </span>
                <input type="text" placeholder="Enlace de Facebook" defaultValue="facebook.com/villaesmeralda" className="flex-1 bg-gray-50/50 border border-gray-200 rounded-lg px-4 py-2 text-sm text-navy focus:outline-none focus:border-gold transition-colors" />
              </div>
            </div>
          </section>

          <div className="flex justify-end">
            <button className="bg-navy text-white px-6 py-2 rounded-lg text-sm font-medium tracking-wide hover:bg-navy2 transition-colors flex items-center gap-2 shadow-sm">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"/><polyline points="17 21 17 13 7 13 7 21"/><polyline points="7 3 7 8 15 8"/></svg>
              Guardar Cambios
            </button>
          </div>
        </div>

        {/* Columna Derecha: Preferencias del Sistema */}
        <div className="space-y-6">
          <section className="bg-white border border-gray-200/60 rounded-xl shadow-sm overflow-hidden">
            <div className="px-6 py-4 border-b border-gray-200/60">
              <h2 className="font-semibold text-navy tracking-wide">Preferencias</h2>
            </div>
            <div className="p-6 space-y-5">
              
              {/* Toggle Notificaciones */}
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-navy">Notificaciones Email</p>
                  <p className="text-xs text-muted mt-0.5">Avisar al recibir reservas</p>
                </div>
                <button className="relative inline-flex h-5 w-9 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent bg-gold transition-colors duration-200 ease-in-out focus:outline-none">
                  <span className="translate-x-4 inline-block h-4 w-4 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out"></span>
                </button>
              </div>

              <hr className="border-gray-100" />

              {/* Selector de Moneda */}
              <div>
                <label className="block text-xs font-semibold text-muted uppercase tracking-wider mb-2">Moneda Principal</label>
                <select className="w-full bg-gray-50/50 border border-gray-200 rounded-lg px-4 py-2 text-sm text-navy focus:outline-none focus:border-gold transition-colors cursor-pointer">
                  <option value="MXN">Peso Mexicano (MXN)</option>
                  <option value="USD">Dólar (USD)</option>
                </select>
              </div>

            </div>
          </section>
        </div>

      </div>
    </div>
  );
}
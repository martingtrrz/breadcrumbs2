export const db = {
  paquetes: [
    {
      id: 1,
      slug: 'basico',
      nombre: 'Básico',
      precio: 12500,
      descripcion: 'Perfecto para celebraciones íntimas y reuniones exclusivas.',
      destacado: false,
      caracteristicas: [
        'Capacidad hasta 100 personas',
        'Mobiliario básico incluido',
        'Iluminación ambiental LED'
      ]
    },
    {
      id: 2,
      slug: 'premium',
      nombre: 'Premium',
      precio: 22500,
      descripcion: 'Nuestra opción más popular para bodas y quinceañeras.',
      destacado: true,
      caracteristicas: [
        'Capacidad hasta 200 personas',
        'Mobiliario premium y decoración',
        'Sala de DJ y tecnología'
      ]
    }
  ],
  detallesExtra: {
    basico: { ideal: 'Cumpleaños', duracion: 'Hasta 8 horas' },
    premium: { ideal: 'Bodas', duracion: 'Hasta 10 horas' }
  }
};
export default function Logo({ className = "w-8 h-8 text-gold" }) {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 100 100" 
      className={className} 
      fill="none"
    >
      {/* Contorno de diamante elegante */}
      <path 
        d="M50 5L95 50L50 95L5 50L50 5Z" 
        stroke="currentColor" 
        strokeWidth="3" 
        strokeLinejoin="round" 
      />
      {/* Letra V */}
      <path 
        d="M35 35L50 65L65 35" 
        stroke="currentColor" 
        strokeWidth="4" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      {/* Detalle interno (Esmeralda) */}
      <circle cx="50" cy="22" r="4" fill="currentColor" />
    </svg>
  );
}
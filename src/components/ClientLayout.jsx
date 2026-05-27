import { useState, useEffect, useCallback } from "react";
import { Link, Outlet } from "react-router-dom";

const NAV_LINKS = [
  { label: "Inicio", to: "/#inicio" },
  { label: "Nosotros", to: "/#intro" },
  { label: "Galeria", to: "/#galeria" },
  { label: "Paquetes", to: "/#paquetes" },
  { label: "Testimonios", to: "/#testimonios" },
];

const FOOTER_LINKS = [
  { label: "Inicio", to: "/#inicio" },
  { label: "Nosotros", to: "/#intro" },
  { label: "Galeria", to: "/#galeria" },
  { label: "Paquetes", to: "/#paquetes" },
  { label: "Contacto", to: "/#contacto" },
];

export default function ClientLayout() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleScroll = useCallback(() => {
    setScrolled(window.scrollY > 60);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <div className="font-sans min-h-screen flex flex-col">
      {/* ── Navbar ── */}
      <nav
        className={`fixed top-0 left-0 w-full h-[68px] z-50 flex items-center justify-between px-10 transition-all duration-300 ${
          scrolled
            ? "bg-navy/97 backdrop-blur-sm shadow-lg"
            : "bg-transparent"
        }`}
      >
        {/* Brand */}
        <Link to="/" className="flex items-center gap-0 select-none">
          <span className="text-xl font-bold tracking-tight text-white">
            Villa
          </span>
          <span className="text-xl font-normal tracking-tight text-gold ml-1">
            Esmeralda
          </span>
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-7">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="relative text-xs uppercase tracking-[0.12em] font-semibold text-white/75 hover:text-white transition-colors duration-200 after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-full after:h-[2px] after:bg-gold after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-200 after:origin-left"
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="/#contacto"
            className="bg-gold text-dark px-5 py-2 rounded-md text-xs font-bold uppercase tracking-wider hover:bg-gold-lt transition-colors duration-200"
          >
            Agenda ahora
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          type="button"
          aria-label={menuOpen ? "Cerrar menu" : "Abrir menu"}
          onClick={() => setMenuOpen((prev) => !prev)}
          className="md:hidden flex flex-col justify-center items-center w-8 h-8 gap-[5px] group cursor-pointer"
        >
          <span
            className={`block w-6 h-[2px] bg-white rounded-full transition-all duration-300 origin-center ${
              menuOpen ? "rotate-45 translate-y-[7px]" : ""
            }`}
          />
          <span
            className={`block w-6 h-[2px] bg-white rounded-full transition-all duration-300 ${
              menuOpen ? "opacity-0 scale-x-0" : ""
            }`}
          />
          <span
            className={`block w-6 h-[2px] bg-white rounded-full transition-all duration-300 origin-center ${
              menuOpen ? "-rotate-45 -translate-y-[7px]" : ""
            }`}
          />
        </button>
      </nav>

      {/* ── Mobile menu panel ── */}
      <div
        className={`fixed top-[68px] left-0 w-full bg-navy/98 z-40 flex flex-col gap-6 p-10 transition-all duration-300 md:hidden ${
          menuOpen
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 -translate-y-4 pointer-events-none"
        }`}
      >
        {NAV_LINKS.map((link) => (
          <Link
            key={link.to}
            to={link.to}
            onClick={() => setMenuOpen(false)}
            className="text-xs uppercase tracking-[0.12em] font-semibold text-white/75 hover:text-white transition-colors duration-200"
          >
            {link.label}
          </Link>
        ))}
        <Link
          to="/#contacto"
          onClick={() => setMenuOpen(false)}
          className="bg-gold text-dark px-5 py-2 rounded-md text-xs font-bold uppercase tracking-wider hover:bg-gold-lt transition-colors duration-200 text-center"
        >
          Agenda ahora
        </Link>
      </div>

      {/* ── Page content ── */}
      <main className="flex-1">
        <Outlet />
      </main>

      {/* ── Footer ── */}
      <footer className="bg-dark py-16 px-10">
        <div className="max-w-[1180px] mx-auto flex justify-between items-center flex-wrap gap-8">
          {/* Left — brand */}
          <div className="flex flex-col gap-1">
            <span className="text-xl font-extrabold text-white">
              Villa Esmeralda
            </span>
            <span className="text-xs text-white/40">
              El espacio de tus celebraciones
            </span>
          </div>

          {/* Center — nav */}
          <div className="flex items-center gap-6 flex-wrap">
            {FOOTER_LINKS.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="text-xs font-bold uppercase tracking-widest text-white/50 hover:text-gold transition-colors duration-200"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Right — copyright */}
          <span className="text-xs text-white/40">
            &copy; 2026 Villa Esmeralda. Todos los derechos reservados.
          </span>
        </div>

        {/* Divider */}
        <div className="h-px bg-white/[0.08] max-w-[1180px] mx-auto mt-12" />
      </footer>
    </div>
  );
}

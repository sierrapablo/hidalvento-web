import { useState } from 'react';
import { NavLink } from '../../atoms/NavLink/NavLink';
import { navbarStyles } from './navbarStyles';

import logo from '../../../assets/images/logo_blue.png';
import MenuIcon from '@mui/icons-material/Menu';

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className={navbarStyles()}>
      {/* Contenedor izquierdo: Logo */}
      <div className="flex items-center gap-2">
        <NavLink to="/">
          <img src={logo} alt="HidalVento" className="h-10 w-auto" />
        </NavLink>
      </div>

      {/* Botón menú (visible en móviles) */}
      <button
        className="md:hidden text-hv-blue ml-auto"
        onClick={() => setIsMenuOpen(prev => !prev)}
        aria-label="Toggle menu"
      >
        <MenuIcon fontSize="large" />
      </button>

      {/* Enlaces normales (desktop) */}
      <div className="hidden md:flex gap-2 ml-auto items-center">
        <NavLink to="/" label="Inicio" />
        {/* <NavLink to="/sobre-nosotros" label="Sobre Nosotros" /> */}
        <NavLink to="/servicios" label="Servicios" />
        <NavLink to="/galeria" label="Galería" />
        <NavLink to="/contacto" label="Contacto" />
      </div>

      {/* Menú móvil (solo visible cuando se abre) */}
      {isMenuOpen && (
        <div className="absolute top-14 left-0 w-full bg-white shadow-md flex flex-col items-start gap-3 px-4 py-6 md:hidden z-40">
          <NavLink to="/" label="Inicio" />
          <NavLink to="/sobre-nosotros" label="Sobre Nosotros" />
          <NavLink to="/servicios" label="Servicios" />
          <NavLink to="/galeria" label="Galería" />
          <NavLink to="/contacto" label="Contacto" />
        </div>
      )}
    </nav>
  );
};


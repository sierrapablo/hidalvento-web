import { NavLink } from '../../atoms/NavLink/NavLink';
import { navbarStyles } from './navbarStyles';

export const Navbar = () => {
  return (
    <nav className={navbarStyles()}>
      <NavLink to="/" label="Inicio" />
      {/*
      <NavLink to="/sobre-nosotros" label="Sobre Nosotros" />
      <NavLink to="/servicios" label="Servicios" />
      */}
      <NavLink to="/galeria" label="Galería" />
      {/*
      <NavLink to="/contacto" label="Contacto" />
      */}
    </nav>
  );
};

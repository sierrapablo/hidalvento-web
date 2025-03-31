import { NavLink } from '../atoms/NavLink';

export const Navbar = () => {
  return (
    <nav className="bg-hv-blue p-4 flex justify-end">
      <NavLink to="/" label="Inicio" />
      <NavLink to="/sobre-nosotros" label="Sobre Nosotros" />
      <NavLink to="/servicios" label="Servicios" />
      <NavLink to="/galeria" label="Galería" />
      <NavLink to="/contacto" label="Contacto" />
    </nav>
  );
};

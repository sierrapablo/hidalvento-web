import { NavLink } from '../atoms/NavLink';
import { tv } from 'tailwind-variants';

const navbar = tv({
  base: "bg-white border-b-4 border-b-blue-100 p-2 w-full top-0 z-50 sticky"
});

export const Navbar = () => {
  return (
    <nav className={navbar()}>
      <NavLink to="/" label="Inicio" />
      <NavLink to="/sobre-nosotros" label="Sobre Nosotros" />
      <NavLink to="/servicios" label="Servicios" />
      <NavLink to="/galeria" label="Galería" />
      <NavLink to="/contacto" label="Contacto" />
    </nav>
  );
};

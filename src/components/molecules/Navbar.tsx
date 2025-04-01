import { NavLink } from '../atoms/NavLink';
import { tv } from 'tailwind-variants';

const navbar = tv({
  base: "border-b border-b-blue-100 p-2 flex justify-end"
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

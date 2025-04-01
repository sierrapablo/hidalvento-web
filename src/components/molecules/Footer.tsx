import { Facebook, X, Instagram, LinkedIn } from '@mui/icons-material';
import { SocialIcon } from '../atoms/SocialIcon';
import { tv } from 'tailwind-variants';
import { Link } from 'react-router-dom';

const footer = tv({
  base: "bg-hv-blue px-80 py-10 absolute bottom-0 w-screen"
});

const footercontainer = tv({
  base: "grid grid-cols-4 justify-items-center"
});

const columncontainer = tv({
  base: "flex flex-col"
});

const icon = tv({
  base: ""
});

const label = tv({
  base: "text-sm text-gray-300 hover:text-white transition wrap"
});

const title = tv({
  base: "font-bold text-white mb-2"
});

const logocontainer = tv({
  base: ""
});

const socialscontainer = tv({
  base: "flex space-x-4 mt-4"
});

export const Footer = () => {
  return (
    <footer className={footer()}>
      <div className={footercontainer()}>

        {/* Logo y Redes Sociales */}
        <div className={columncontainer()}>
          <div className={logocontainer()}>
            <img src="" alt="HidalVento" className={icon()} />
          </div>
          <div className={socialscontainer()}>
            <SocialIcon Icon={Facebook} href="https://facebook.com" />
            <SocialIcon Icon={X} href="https://twitter.com" />
            <SocialIcon Icon={Instagram} href="https://instagram.com" />
            <SocialIcon Icon={LinkedIn} href="https://linkedin.com" />
          </div>
        </div>

        {/* Tarjeta de contacto */}
        <div className={columncontainer()}>
          <a className={title()}>Contacto</a>
          <a href="" className={label()}>
            Pl. Julio Verne 2, Esc. B, 7<br />
            46017 Valencia, España
          </a>
          <a href="" className={label()}>+34 666 08 98 52</a>
          <a href="" className={label()}>hola@hidalvento.es</a>
          <Link to="/contacto" className={label()}>Contacto</Link>
        </div>

        {/* Links principales */}
        <div className={columncontainer()}>
          <a className={title()}>Cómo podemos ayudarte</a>
          <Link to="/" className={label()}>Inicio</Link>
          <Link to="/sobre-nosotros" className={label()}>Sobre nosotros</Link>
          <Link to="/servicios" className={label()}>Servicios</Link>
          <Link to="/galeria" className={label()}>Galería</Link>
        </div>

        {/* Links a servicios */}
        <div className={columncontainer()}>
          <a className={title()}>Servicios</a>
          <a href="" className={label()}>Reformas</a>
          <a href="" className={label()}>Fontanería</a>
          <a href="" className={label()}>Electricidad</a>
          <a href="" className={label()}>Pintura</a>
          <a href="" className={label()}>Ventanas</a>
          <a href="" className={label()}>Suelo</a>
          <a href="" className={label()}>Ducha</a>
        </div>

      </div>
    </footer >
  );
};

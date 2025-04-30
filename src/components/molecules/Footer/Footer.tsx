import { Facebook, X, Instagram, LinkedIn } from '@mui/icons-material';
import { SocialIcon } from '../../atoms/SocialIcon/SocialIcon';
import { Link } from 'react-router-dom';
import { footerStyles, footerContainerStyles, columnContainerStyles, logoContainerStyles, iconStyles, socialsContainerStyles, labelStyles, titleStyles } from './footerStyles';

export const Footer = () => {
  return (
    <footer className={footerStyles()}>
      <div className={footerContainerStyles()}>

        {/* Logo y Redes Sociales */}
        <div className={columnContainerStyles()}>
          <div className={logoContainerStyles()}>
            <img src="" alt="HidalVento" className={iconStyles()} />
          </div>
          <div className={socialsContainerStyles()}>
            <SocialIcon Icon={Facebook} href="https://facebook.com" />
            <SocialIcon Icon={X} href="https://twitter.com" />
            <SocialIcon Icon={Instagram} href="https://instagram.com" />
            <SocialIcon Icon={LinkedIn} href="https://linkedin.com" />
          </div>
        </div>

        {/* Tarjeta de contacto */}
        <div className={columnContainerStyles()}>
          <a className={titleStyles()}>Contacto</a>
          <a href="" className={labelStyles()}>
            Pl. Julio Verne 2, Esc. B, 7<br />
            46017 Valencia, España
          </a>
          <a href="" className={labelStyles()}>+34 641 68 91 30</a>
          <a href="" className={labelStyles()}>comercial@reformashidalvento.es</a>
          <Link to="/contacto" className={labelStyles()}>Contacto</Link>
        </div>

        {/* Links principales */}
        <div className={columnContainerStyles()}>
          <a className={titleStyles()}>Cómo podemos ayudarte</a>
          <Link to="/" className={labelStyles()}>Inicio</Link>
          <Link to="/sobre-nosotros" className={labelStyles()}>Sobre nosotros</Link>
          <Link to="/servicios" className={labelStyles()}>Servicios</Link>
          <Link to="/galeria" className={labelStyles()}>Galería</Link>
        </div>

        {/* Links a servicios */}
        <div className={columnContainerStyles()}>
          <a className={titleStyles()}>Servicios</a>
          <a href="" className={labelStyles()}>Reformas</a>
          <a href="" className={labelStyles()}>Fontanería</a>
          <a href="" className={labelStyles()}>Electricidad</a>
          <a href="" className={labelStyles()}>Pintura</a>
          <a href="" className={labelStyles()}>Ventanas</a>
          <a href="" className={labelStyles()}>Suelo</a>
          <a href="" className={labelStyles()}>Ducha</a>
        </div>

      </div>
    </footer >
  );
};

import { Facebook, X, Instagram, LinkedIn } from '@mui/icons-material';
import { SocialIcon } from '../../atoms/SocialIcon/SocialIcon';
import { Link } from 'react-router-dom';
import { footerContainerStyles, columnContainerStyles, logoContainerStyles, iconStyles, socialsContainerStyles, labelStyles, titleStyles } from './footerStyles';
import mainLogo from '../../../assets/images/logo_white.png';

interface FooterProps {
  className?: string;
};

export const Footer: React.FC<FooterProps> = ({className}) => {

  const mapsUrl = encodeURI(
    'https://www.google.com/maps/search/?api=1&query=Pl. Julio Verne 2, Esc. B, 7, 46017 Valencia, España'
  );

  return (
    <footer className={`bg-hv-blue lg:px-40 py-10 w-full ${className}`} style={{ height: 'calc(100dvh - 56px)' }}>
      <div className={footerContainerStyles()}>

        {/* Logo y Redes Sociales */}
        <div className={columnContainerStyles()}>
          <div className={logoContainerStyles()}>
            <img src={mainLogo} alt="HidalVento" className={iconStyles()} />
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
          <a href={mapsUrl} target='_blank' rel='noopener noreferrer' className={labelStyles()}>
            Pl. Julio Verne 2, Esc. B, 7<br />
            46017 Valencia, España
          </a>
          <Link to="/contacto" className={labelStyles()}>+34 641 68 91 30</Link>
          <Link to="/contacto" className={labelStyles()}>comercial@reformashidalvento.com</Link>
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

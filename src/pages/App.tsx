import { useEffect, useState, useRef } from 'react';
import { Navbar } from '../components/molecules/Navbar/Navbar';
import { Footer } from '../components/molecules/Footer/Footer';
import { Link } from 'react-router-dom';
import heroImg from '../assets/images/DSC03729-Mejorado-NR.avif'
import mainLogo from '../assets/images/logo_white.png';
import mainLogoBlue from '../assets/images/logo_blue.png';

import '../styles/fonts.css';

const messages = [
  'Durante años, hemos convertido simples inmuebles en hogares en los que ahora, nuestros clientes disfrutan de aquello que antes solo imaginaban.',
  'Una buena reforma integral es un proceso que empieza por escuchar a nuestro cliente y presentarle soluciones a medida, asesorarle en la elección de materiales de primera calidad y brindarle un abanico de profesionales que cubrirán todas sus necesidades.',
  'Cuando el último detalle está acabado, nuestro trabajo continúa estando a su disposición para cualquier pequeña reparación.',
];

export const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [showCurtain, setShowCurtain] = useState(true);

  useEffect(() => {
    const loadImage = new Promise<void>((resolve) => {
      const img = new Image();
      img.src = heroImg;
      img.onload = () => resolve();
    });

    const waitMinimumTime = new Promise<void>((resolve) => {
      setTimeout(resolve, 1000); // Tiempo mínimo de trigger
    });

    Promise.all([loadImage, waitMinimumTime]).then(() => {
      setIsLoading(false); // dispara animación del telón
      setTimeout(() => {
        setShowCurtain(false); // quita el telón del DOM después de animar
      }, 1000); // tiempo de animación
    });
  }, []);

  const [current, setCurrent] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false); // Empieza fade-out

      setTimeout(() => {
        setCurrent((prev) => (prev + 1) % messages.length);
        setIsVisible(true); // Empieza fade-in
      }, 1000); // Tiempo de fade-out antes de cambiar el mensaje

    }, 10000);

    return () => clearInterval(interval);
  }, []);

  const [showFooter, setShowFooter] = useState(false);
  const scrollTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);
  // const touchStartY = useRef<number | null>(null);

  const showFooterTemporarily = (show: boolean) => {
    setShowFooter(show);

    if (scrollTimeout.current) clearTimeout(scrollTimeout.current);

    scrollTimeout.current = setTimeout(() => {
      setShowFooter(false);
    }, 10000);
  };

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      if (e.deltaY > 10) {
        showFooterTemporarily(false);
      } else if (e.deltaY < -10) {
        showFooterTemporarily(true);
      }
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowUp') {
        showFooterTemporarily(true);
      } else if (e.key === 'ArrowDown') {
        showFooterTemporarily(false);
      }
    };

    // useEffect para desplegar el footer con toques en pantallas táctiles

    /*
    const handleTouchStart = (e: TouchEvent) => {
      touchStartY.current = e.touches[0].clientY;
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (touchStartY.current === null) return;

      const touchEndY = e.touches[0].clientY;
      const deltaY = touchStartY.current - touchEndY;

      if (deltaY > 100) {
        // Desliza hacia arriba
        showFooterTemporarily(true); // Hacia arriba muestra el footer
      } else if (deltaY < -10) {
        // Desliza hacia abajo
        showFooterTemporarily(false); // Hacia abajo oculta el footer
      }
    };
    */

    window.addEventListener('wheel', handleWheel);
    window.addEventListener('keydown', handleKeyDown);
    // window.addEventListener('touchstart', handleTouchStart);
    // window.addEventListener('touchmove', handleTouchMove);

    return () => {
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('keydown', handleKeyDown);
      // window.removeEventListener('touchstart', handleTouchStart);
      // window.removeEventListener('touchmove', handleTouchMove);
      if (scrollTimeout.current) clearTimeout(scrollTimeout.current);
    };
  }, []);

  return (
    <>
      <div className="relative w-full h-dvh overflow-hidden">
        {/* <Navbar /> */}
        {/* Telón blanco animado */}
        {showCurtain && (
          <div
            className={`flex justify-center items-center fixed top-0 left-0 w-full h-full bg-white z-50 transition-transform duration-1000 ease-in-out ${isLoading ? 'translate-y-0' : 'translate-y-full'}`}
          >
            <img
              src={mainLogoBlue}
              className="w-full"
            />
          </div>
        )}
        <img
          src={heroImg}
          alt="HidalVento"
          className="w-full object-cover h-dvh"
          // style={{ height: 'calc(100dvh - 56px)' }}}
        />

        {/* Capa de oscurecimiento */}
        <div className="absolute top-0 left-0 w-full h-dvh bg-black/60 z-10" /> // h-[calc(100dvh-56px)] top-[56px]

        <div className="absolute top-0 left-0 w-full h-dvh z-20 flex flex-col items-center justify-center text-center px-4">

          {/* Contenedor del bloque entero centrado */}
          <div className="max-w-3xl">
            {/* Título fijo */}
            <img
              src={mainLogo}
              alt="Logo Hidalvento"
              className="mx-auto mb-2 w-200"
            />
            {/* Subtítulo fijo */}
            <h2 className="text-white text-base italic drop-shadow-md mb-20 h-20" style={{ fontFamily: 'Jakarta Plus', fontWeight: 700 }}>
              Construimos lo que llevas años imaginando.
            </h2>

            {/* Mensaje rotativo con altura fija para evitar mover el botón */}
            <div className="mt-40 mb-40 h-20 flex items-center justify-center">
              <p
                className={`text-white text-2xl transition-opacity duration-500 ease-in-out ${isVisible ? 'opacity-100' : 'opacity-0'}`}
                style={{ fontFamily: 'Jakarta Plus', fontWeight: 700 }}
              >
                {messages[current]}
              </p>
            </div>

            {/* Botón "Descubre más" */}
            <Link
              to="/sobre-nosotros"
              className="inline-block px-6 py-3 bg-hv-blue text-white rounded-md shadow-lg hover:bg-hv-light-blue hover:text-hv-blue transition duration-500 ease-in-out text-center"
              style={{ fontFamily: 'Jakarta Plus', fontWeight: 700 }}
            >
              Descubre más
            </Link>
          </div>

        </div>
        {/* <Footer className={`fixed bottom-0 left-0 w-full transition-transform duration-700 z-30 ${showFooter ? 'translate-y-0' : 'translate-y-full'}`} /> */}
      </div>
    </>
  );
};

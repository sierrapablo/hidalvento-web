import { useEffect, useState } from 'react';
import { Navbar } from '../components/molecules/Navbar/Navbar';
import { Link } from 'react-router-dom';
import heroImg from '../assets/images/DSC03735-Mejorado-NR.avif'
import mainLogo from '../assets/images/logo_white.png';

const messages = [
  'Durante años, hemos convertido simples inmuebles en hogares en los que ahora, nuestros clientes disfrutan de aquello que antes solo imaginaban.',
  'Una buena reforma integral es un proceso que empieza por escuchar a nuestro cliente y presentarle soluciones a medida, asesorarle en la elección de materiales de primera calidad y brindarle un abanico de profesionales que cubrirán todas sus necesidades.',
  'Pero cuando el último detalle está acabado, nuestro trabajo continúa estando a su disposición para cualquier pequeña reparación.',
];

export const App = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % messages.length);
    }, 7500);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="relative w-full h-dvh animate-fadein">
        <Navbar />

        <img
          src={heroImg}
          alt="HidalVento"
          className="w-full object-cover"
          style={{ height: 'calc(100dvh - 56px)' }}
        />

        {/* Capa de oscurecimiento */}
        <div className="absolute top-[56px] left-0 w-full h-[calc(100dvh-56px)] bg-black/50 z-10" />

        <div className="absolute top-[56px] left-0 w-full h-[calc(100dvh-56px)] z-20 flex flex-col items-center justify-center text-center px-4">

          {/* Contenedor del bloque entero centrado */}
          <div className="max-w-3xl">
            {/* Título fijo */}
            <img
              src={mainLogo}
              alt="Logo Hidalvento"
              className="mx-auto mb-2 w-100"
            />
            {/* Subtítulo fijo */}
            <h2 className="text-white text-base italic drop-shadow-md mb-20">
              Construimos lo que llevas años imaginando.
            </h2>

            {/* Mensaje rotativo con altura fija para evitar mover el botón */}
            <div className="mt-40 mb-40 h-20 flex items-center justify-center">
              <p className="text-white text-2xl animate-fadein">
                {messages[current]}
              </p>
            </div>

            {/* Botón "Descubre más" */}
            <Link
              to="/sobre-nosotros"
              className="inline-block px-6 py-3 bg-blue-600 text-white rounded-md shadow-lg hover:bg-blue-700 transition text-center"
            >
              Descubre más
            </Link>
          </div>

        </div>

      </div>
    </>
  );
};

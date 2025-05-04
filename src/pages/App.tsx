import { Navbar } from '../components/molecules/Navbar/Navbar';
import { Footer } from '../components/molecules/Footer/Footer';
import { HeroSection } from '../components/templates/HeroSection/HeroSection';
import './App.css';

import heroImg from '../assets/images/DSC03735-Mejorado-NR.avif'


export const App = () => {
  return (
    <>
      <Navbar />
      <HeroSection
        subtitle={{
          text: "Tu reforma comienza aquí",
          variant: "secondary"
        }}
        image={heroImg}
      />
      <section className='aboutContainer py-20' id='about'>
        <div className='aboutContent'>
          <p className='aboutHeader'>Quiénes Somos</p>
          <p className='aboutDescription'>
            Durante años, hemos convertido simples inmuebles en hogares a los que ahora, nuestros clientes disfrutan de aquello que antes solo imaginaba,.
          </p>
          <p className='aboutDescription'>
            Una buena reforma integral es un proceso que empieza por escuchar a nuestro cliente y presentarle soluciones a medida, asesorarle en la elección de materiales de primera calidad y brindarle un abanico de profesionales que cubrirán todas sus necesidades.
          </p>
          <p className='aboutDescription'>
            Pero cuando el último detalle está acabado, nuestro trabajo continúa estando a su disposición para cualquier pequeña reparación.
          </p>
        </div>
      </section>
      <Footer />
    </>
  );
};

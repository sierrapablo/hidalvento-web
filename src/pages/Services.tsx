import { Navbar } from '../components/molecules/Navbar/Navbar';
import { Footer } from '../components/molecules/Footer/Footer';
import { HeroSection } from '../components/templates/HeroSection/HeroSection';
import { ImageTextSection } from '../components/molecules/ImageTextSection/ImageTextSection';
import { SectionWrapper } from '../components/templates/SectionWrapper/SectionWrapper';
import CTAContact from '../components/templates/CTAContact/CTAContact';

import heroImg from '../assets/images/DSC03729-Mejorado-NR.avif'

import reformasImg from '../assets/images/reformas_integrales.jpg';
import ventanasImg from '../assets/images/cambio_ventanas.jpg';
import suelosAfterImg from '../assets/images/cambio_suelo_despues.jpeg';
import puertasImg from '../assets/images/cambio_puertas.jpg';
import paredesImg from '../assets/images/alisado_paredes.jpg';
import fontaneriaImg from '../assets/images/fontaneria.jpg';
import electricidadImg from '../assets/images/electricidad.jpg';
import pinturaImg from '../assets/images/pintura.jpg';
import duchaImg from '../assets/images/cabio_plato_ducha.jpg';


export const Services = () => {
  return (
    <>
      <Navbar />
      <SectionWrapper index={1}>
        <HeroSection subtitle={{ text: "Nuestros servicios", variant: "secondary" }} image={heroImg} />
      </SectionWrapper>

      <SectionWrapper index={2}>
        <ImageTextSection
          title="Reformas integrales"
          image={reformasImg}
          bgColor='white'
          text={`Desde pequeñas reparaciones como cambiar un grifo hasta reformar tu vivienda íntegramente, Reformas Hidalvento te garantiza un resultado duradero, estéticamente impecable y ajustado a plazos y presupuesto.\n\nNo importa el tamaño del proyecto, contamos con los mejores profesionales para que cualquier arreglo en el hogar quede a tu medida.`}
        />
      </SectionWrapper>

      <SectionWrapper index={3}>
        <ImageTextSection
          title="Cambio de ventanas"
          image={ventanasImg}
          bgColor='blue'
          text={`Si buscas mejorar la eficiencia energética de tu hogar, te ofrecemos el servicio de cambio de ventanas. Instalamos ventanas de alta calidad que ayudan a reducir el consumo de energía, mejorar el aislamiento térmico y reducir el ruido exterior, proporcionando confort y ahorro en tus facturas de energía.`}
        />
      </SectionWrapper>

      <SectionWrapper index={4}>
        <ImageTextSection
          title="Cambio de suelo"
          image={suelosAfterImg}
          bgColor='white'
          text={`Un nuevo suelo puede ser un lavado completamente radical que renueve tu hogar.\n\nOfrecemos una amplia gama de opciones, desde suelos demadera, laminados, hasta cerámicos. Nuestro equipo se encarga de la instalación profesional para que disfrutes de un acabado perfecto y duradero.`}
        />
      </SectionWrapper>

      <SectionWrapper index={5}>
        <ImageTextSection
          title="Cambio de puertas"
          image={puertasImg}
          bgColor='blue'
          text={`Renueva las puertas de tu hogar con nuestras opciones modernas y funcionales. Instalamos puertas interiores y exteriores que se adaptan a cualquier estilo y necesidad. Te garantizamos durabilidad y un acabado perfecto.`}
        />
      </SectionWrapper>

      <SectionWrapper index={6}>
        <ImageTextSection
          title="Alisado de paredes"
          image={paredesImg}
          bgColor='white'
          text={`Moderniza tus paredes y elimina el anticuado gotelé.\n\nTe ofrecemos un acabado liso y uniforme que dará a tus paredes una apariencia moderna y elegante.`}
        />
      </SectionWrapper>

      <SectionWrapper index={7}>
        <ImageTextSection
          title="Fontanería"
          image={fontaneriaImg}
          bgColor='blue'
          text={`Realizamos trabajos completos de fontanería en tu hogar, incluyendo la instalación y reparación de desagües, tuberías, grifos, sanitarios, y más. Nuestro equipo de fontaneros profesionales se encarga de asegurar un funcionamiento eficiente y sin problemas en tu hogar.`}
        />
      </SectionWrapper>

      <SectionWrapper index={8}>
        <ImageTextSection
          title="Electricidad"
          image={electricidadImg}
          bgColor='white'
          text={`Somos expertos en instalaciones y reparaciones eléctricas. Realizamos todo tipo de trabajos
eléctricos, desde la instalación de nuevos sistemas hasta la reparación de averías. Garantizamos un servicio seguro y eficiente para que disfrutes de un hogar bien iluminado y funcional.`}
        />
      </SectionWrapper>

      <SectionWrapper index={9}>
        <ImageTextSection
          title="Pintura"
          image={pinturaImg}
          bgColor='blue'
          text={`Transforma tu hogar con un nuevo color. Ofrecemos un servicio de pintura profesional que garantiza un acabado uniforme y duradero. Ya sea que necesites pintar una habitación o toda la casa, nuestro equipo te asesorará en la elección de colores y acabados.`}
        />
      </SectionWrapper>

      <SectionWrapper index={10}>
        <ImageTextSection
          title="Cambio de bañera por plato de ducha"
          image={duchaImg}
          bgColor='white'
          text={`Moderniza tu baño con el cambio de bañera por plato de ducha. Este servicio no solo mejora la
estética de tu baño, sino que también es una opción más práctica y accesible. Te garantizamos una instalación rápida y sin complicaciones.`}
        />
      </SectionWrapper>

      <SectionWrapper index={20}>
        <CTAContact />
      </SectionWrapper>

      <SectionWrapper index={100}>
        <Footer />
      </SectionWrapper>

    </>
  );
};

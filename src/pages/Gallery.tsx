import { Navbar } from '../components/molecules/Navbar';
import { Footer } from '../components/molecules/Footer';
import { HeroSection } from '../components/templates/HeroSection';

export const Gallery = () => {
  return (
    <>
      <Navbar />
      <HeroSection subtitle={{ text: "Nuestro trabajo en imágenes", variant: "secondary" }} />
      <Footer />
    </>
  );
};

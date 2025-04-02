import { Navbar } from '../components/molecules/Navbar';
import { Footer } from '../components/molecules/Footer';
import { HeroSection } from '../components/templates/HeroSection';

export const Services = () => {
  return (
    <>
      <Navbar />
      <HeroSection subtitle={{ text: "Nuestros servicios", variant: "primary" }} />
      <Footer />
    </>
  );
};

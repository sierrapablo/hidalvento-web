import { Navbar } from '../components/molecules/Navbar/Navbar';
import { Footer } from '../components/molecules/Footer/Footer';
import { HeroSection } from '../components/templates/HeroSection/HeroSection';

export const Services = () => {
  return (
    <>
      <Navbar />
      <HeroSection subtitle={{ text: "Nuestros servicios", variant: "primary" }} />
      <Footer />
    </>
  );
};

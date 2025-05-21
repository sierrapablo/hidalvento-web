import { Navbar } from '../components/molecules/Navbar/Navbar';
import { Footer } from '../components/molecules/Footer/Footer';
import { HeroSection } from '../components/templates/HeroSection/HeroSection';

export const About = () => {
  return (
    <>
      <Navbar />
      <HeroSection subtitle={{ text: "Sobre Nosotros", variant: "secondary"}} />
      <Footer />
    </>
  );
};

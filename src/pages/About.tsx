import { Navbar } from '../components/molecules/Navbar';
import { Footer } from '../components/molecules/Footer';
import { HeroSection } from '../components/templates/HeroSection';

export const About = () => {
  return (
    <>
      <Navbar />
      <HeroSection subtitle={{ text: "Pasión por los pequeños detalles" }} />
      <Footer />
    </>
  );
};

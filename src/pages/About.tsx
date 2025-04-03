import { Navbar } from '../components/molecules/Navbar/Navbar';
import { Footer } from '../components/molecules/Footer/Footer';
import { HeroSection } from '../components/templates/HeroSection/HeroSection';

export const About = () => {
  return (
    <>
      <Navbar />
      <HeroSection subtitle={{ text: "Pasión por los pequeños detalles" }} />
      <Footer />
    </>
  );
};

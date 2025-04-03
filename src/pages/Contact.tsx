import { Navbar } from '../components/molecules/Navbar/Navbar';
import { Footer } from '../components/molecules/Footer/Footer';
import { HeroSection } from '../components/templates/HeroSection/HeroSection';

export const Contact = () => {
  return (
    <>
      <Navbar />
      <HeroSection subtitle={{ text: "Tu idea realidad", variant: "primary" }} />
      <Footer />
    </>
  );
};

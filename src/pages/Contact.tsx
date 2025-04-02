import { Navbar } from '../components/molecules/Navbar';
import { Footer } from '../components/molecules/Footer';
import { HeroSection } from '../components/templates/HeroSection';

export const Contact = () => {
  return (
    <>
      <Navbar />
      <HeroSection subtitle={{ text: "Tu idea realidad", variant: "primary" }} />
      <Footer />
    </>
  );
};

import { Navbar } from '../components/molecules/Navbar/Navbar';
import { Footer } from '../components/molecules/Footer/Footer';
import { HeroSection } from '../components/templates/HeroSection/HeroSection';

export const App = () => {
  return (
    <>
      <Navbar />
      <HeroSection
        subtitle={{
          text: "Tu reforma comienza aquí",
          variant: "secondary"
        }}
      />
      <Footer />
    </>
  );
};

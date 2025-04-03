import { Navbar } from '../components/molecules/Navbar/Navbar';
import { Footer } from '../components/molecules/Footer/Footer';
import { tv } from 'tailwind-variants';
import { HeroSection } from '../components/templates/HeroSection/HeroSection';

const appcontainer = tv({
  base: "flex flex-col min-h-screen grow"
});

export const App = () => {
  return (
    <div className={appcontainer()}>
      <Navbar />
      <HeroSection subtitle={{ text: "Tu reforma comienza aquí", variant: "secondary" }} />
      <Footer />
    </div>
  );
};

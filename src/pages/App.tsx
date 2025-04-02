import { Navbar } from '../components/molecules/Navbar';
import { Footer } from '../components/molecules/Footer';
import { tv } from 'tailwind-variants';
import { HeroSection } from '../components/templates/HeroSection';

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

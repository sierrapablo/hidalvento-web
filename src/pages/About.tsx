import { Navbar } from '../components/molecules/Navbar/Navbar';
import { Footer } from '../components/molecules/Footer/Footer';
import { HeroSection } from '../components/templates/HeroSection/HeroSection';
import CTAContact from '../components/templates/CTAContact/CTAContact';
import heroImg from '../assets/images/DSC03729-Mejorado-NR.avif'

export const About = () => {
  return (
    <div className='animate-fadein'>
      <Navbar />
      <HeroSection subtitle={{ text: "Sobre Nosotros", variant: "secondary" }} image={heroImg}/>
      <CTAContact />
      <Footer />
    </div>
  );
};

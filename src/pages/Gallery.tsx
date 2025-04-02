import { Navbar } from '../components/molecules/Navbar';
import { Footer } from '../components/molecules/Footer';
import { HeroSection } from '../components/templates/HeroSection';
import { ImageGrid } from '../components/templates/ImageGrid';

export const Gallery = () => {

  /* Imágenes de ejemplo desde Lorem Picsum */
  const images = Array.from({ length: 9 }, (_, i) => ({
    src: `https://picsum.photos/300/300?random=${i + 1}`,
    alt: `Imagen aleatoria ${i + 1}`
  }));

  return (
    <>
      <Navbar />
      <HeroSection subtitle={{ text: "Nuestro trabajo en imágenes", variant: "secondary" }} />
      <ImageGrid images={images} />
      <Footer />
    </>
  );
};

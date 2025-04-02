import { Navbar } from '../components/molecules/Navbar';
import { Footer } from '../components/molecules/Footer';
import { HeroSection } from '../components/templates/HeroSection';
import { ImageGrid } from '../components/templates/ImageGrid';

import img1 from '../assets/images/DSC03685-Mejorado-NR.avif';
import img2 from '../assets/images/DSC03698-Mejorado-NR.avif';
import img3 from '../assets/images/DSC03702-Mejorado-NR.avif';
import img4 from '../assets/images/DSC03703-Mejorado-NR.avif'
import img5 from '../assets/images/DSC03712-Mejorado-NR.avif';
import img6 from '../assets/images/DSC03715-Mejorado-NR.avif';
import img7 from '../assets/images/DSC03718-Mejorado-NR.avif';
import img8 from '../assets/images/DSC03720-Mejorado-NR.avif';
import img9 from '../assets/images/DSC03722-Mejorado-NR.avif';

import heroImg from '../assets/images/DSC03735-Mejorado-NR.avif'

export const Gallery = () => {

  /* Imágenes importadas */
  const images = [
    {src: img1, alt: "Imagen 1"},
    {src: img2, alt: "Imagen 2"},
    {src: img3, alt: "Imagen 3"},
    {src: img4, alt: "Imagen 4"},
    {src: img5, alt: "Imagen 5"},
    {src: img6, alt: "Imagen 6"},
    {src: img7, alt: "Imagen 7"},
    {src: img8, alt: "Imagen 8"},
    {src: img9, alt: "Imagen 9"}
  ];

  return (
    <>
      <Navbar />
      <HeroSection subtitle={{ text: "Nuestro trabajo en imágenes", variant: "secondary"}} image={heroImg} />
      <ImageGrid images={images} />
      <Footer />
    </>
  );
};

import { Navbar } from '../components/molecules/Navbar';
import { Footer } from '../components/molecules/Footer';
import { HeroSection } from '../components/templates/HeroSection';
import { ImageGrid } from '../components/templates/ImageGrid';
import { useState } from 'react';
import { tv } from 'tailwind-variants';

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

const focusedImgContainer = tv({
  base: "fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4 cursor-zoom-out"
});

const focusedImgStyles = tv({
  base: "max-h-[90vh] max-w-full rounded-lg object-contain cursor-auto"
});

export const Gallery = () => {

  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  /* Imágenes importadas */
  const images = [
    { src: img1, alt: "Imagen 1" },
    { src: img2, alt: "Imagen 2" },
    { src: img3, alt: "Imagen 3" },
    { src: img4, alt: "Imagen 4" },
    { src: img5, alt: "Imagen 5" },
    { src: img6, alt: "Imagen 6" },
    { src: img7, alt: "Imagen 7" },
    { src: img8, alt: "Imagen 8" },
    { src: img9, alt: "Imagen 9" }
  ];

  return (
    <>
      <Navbar />
      <HeroSection subtitle={{ text: "Nuestro trabajo en imágenes", variant: "secondary" }} image={heroImg} />
      <ImageGrid
        images={images}
        onImageClick={(imgSrc) => setSelectedImage(imgSrc)}
      />
      {selectedImage && (
        <div
          className={focusedImgContainer()}
          onClick={() => setSelectedImage(null)}
        >
          <img
            src={selectedImage}
            alt="Zoom"
            className={focusedImgStyles()}
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
      <Footer />
    </>
  );
};

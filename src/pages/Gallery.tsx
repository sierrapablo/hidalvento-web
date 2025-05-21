import { Navbar } from '../components/molecules/Navbar/Navbar';
import { Footer } from '../components/molecules/Footer/Footer';
import { HeroSection } from '../components/templates/HeroSection/HeroSection';
import { ImageGrid } from '../components/templates/ImageGrid/ImageGrid';
import { useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { focusedImgContainer, focusedImgContent, focusedImgStyles, viewButtonStyles } from '../styles/galleryStyles';
import mainLogo from '../assets/images/logo_white.png';

import img1 from '../assets/images/DSC03685-Mejorado-NR.avif';
import img2 from '../assets/images/DSC03698-Mejorado-NR.avif';
import img3 from '../assets/images/DSC03702-Mejorado-NR.avif';
import img4 from '../assets/images/DSC03703-Mejorado-NR.avif';
import img5 from '../assets/images/DSC03712-Mejorado-NR.avif';
import img6 from '../assets/images/DSC03715-Mejorado-NR.avif';
import img7 from '../assets/images/DSC03718-Mejorado-NR.avif';
import img8 from '../assets/images/DSC03720-Mejorado-NR.avif';
import img9 from '../assets/images/DSC03722-Mejorado-NR.avif';

import heroImg from '../assets/images/DSC03735-Mejorado-NR.avif'

export const Gallery = () => {

  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const [fadeState, setFadeState] = useState<"in" | "out">("in");

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

  const handleImageClick = (imgSrc: string) => {
    setFadeState("out");
    setSelectedImage(imgSrc);
    setTimeout(() => {
      setFadeState("in");
    }, 0);
  };

  const handleClose = () => {
    setFadeState("out");
    setTimeout(() => {
      setSelectedImage(null);
      setFadeState("in");
    }, 700);
  };

  const handleRight = () => {
    if (!selectedImage) return;
    const currentIndex = images.findIndex((img) => img.src === selectedImage);
    const nextIndex = (currentIndex + 1) % images.length;
    setSelectedImage(images[nextIndex].src);
  };

  const handleLeft = () => {
    if (!selectedImage) return;
    const currentIndex = images.findIndex((img) => img.src === selectedImage);
    const prevIndex = (currentIndex - 1 + images.length) % images.length;
    setSelectedImage(images[prevIndex].src);
  };

  return (
    <div className='animate-fadein'>
      <Navbar />
      <HeroSection subtitle={{ text: "Nuestro trabajo en imágenes", variant: "secondary" }} image={heroImg} />
      <ImageGrid
        images={images}
        onImageClick={handleImageClick}
      />
      {selectedImage && (
        <div
          className={focusedImgContainer({ fade: fadeState })}
          onClick={handleClose}
        >
          <button
            onClick={(e) => {
              e.stopPropagation();
              handleClose();
            }}
            className={viewButtonStyles({ type: "close" })}
          >
            <CloseIcon fontSize="large" />
          </button>
          <div className={focusedImgContent()}>
            <button
              onClick={(e) => {
                e.stopPropagation();
                handleLeft();
              }}
              className={viewButtonStyles({ type: "left" })}
            >
              <ArrowBackIosNewIcon fontSize="large" />
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                handleRight();
              }}
              className={viewButtonStyles({ type: "right" })}
            >
              <ArrowForwardIosIcon fontSize="large" />
            </button>
            <img
              src={selectedImage}
              alt="Zoom"
              className={focusedImgStyles()}
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}
      <Footer />
    </div>
  );
};

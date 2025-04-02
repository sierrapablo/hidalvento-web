import { tv } from 'tailwind-variants';
import { Image } from '../atoms/Image';

interface ImageGridProps {
  images: { src: string; alt: string; }[];
  onImageClick: (src: string) => void;
};

const imageGridStyles = tv({
  base: "grid grid-cols-3 gap-1 px-4 py-10"
});

const imageContainerStyles = tv({
  base: "relative w-full h-48 lg:h-96 overflow-hidden rounded-sm shadow-md cursor-pointer transition-transform duration-300 hover:scale-105"
});

export const ImageGrid: React.FC<ImageGridProps> = ({ images, onImageClick }) => {
  return (
    <div className={imageGridStyles()}>
      {images.map((image, index) => (
        <div
          key={index}
          className={imageContainerStyles()}
          onClick={() => onImageClick(image.src)}
          role="button"
          tabIndex={0}
        >
          <Image src={image.src} alt={image.alt} />
        </div>
      ))}
    </div>
  );
};

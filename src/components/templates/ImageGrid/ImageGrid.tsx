import { Image } from '../../atoms/Image/Image';
import { imageGridStyles, imageContainerStyles } from './imageGridStyles';

interface ImageGridProps {
  images: { src: string; alt: string; }[];
  onImageClick: (src: string) => void;
};

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

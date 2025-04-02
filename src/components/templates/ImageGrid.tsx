import { tv } from 'tailwind-variants';
import { Image } from '../atoms/Image';

interface ImageGridProps {
  images: { src: string; alt: string; }[];
};

const imageGridStyles = tv({
  base: "grid grid-cols-3 gap-1 px-4 py-10"
});

const imageContainerStyles = tv({
  base: "relative w-full h-48 lg:h-96 overflow-hidden rounded-sm shadow-md"
});

export const ImageGrid: React.FC<ImageGridProps> = ({ images }) => {
  return (
    <div className={imageGridStyles()}>
      {images.map((image, index) => (
        <div key={index} className={imageContainerStyles()}>
          <Image src={image.src} alt={image.alt} />
        </div>
      ))}
    </div>
  );
};

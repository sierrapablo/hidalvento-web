import { imageStyles } from './imageStyles';

interface ImageProps {
  src: string;
  alt: string;
}

export const Image: React.FC<ImageProps> = ({ src, alt }) => {
  return (
    <img src={src} alt={alt} className={imageStyles()} />
  );
};

import { tv } from 'tailwind-variants';

interface ImageProps {
  src: string;
  alt: string;
}

const imageStyles = tv({
  base: "w-full h-full object-cover"
});

export const Image: React.FC<ImageProps> = ({ src, alt }) => {
  return (
    <img src={src} alt={alt} className={imageStyles()} />
  );
};

import { tv } from 'tailwind-variants';
import { Subtitle, SubtitleProps } from '../atoms/Subtitle';

export interface HeroContentProps {
  subtitle: SubtitleProps;
  image?: string;
}

const heroContentStyles = tv({
  base: "flex flex-col items-center text-center p-6"
});

const titleStyles = tv({
  base: "text-4xl font-bold"
});

const imageStyles = tv({
  base: "mt-4 w-full max-w-md rounded-lg"
});

export const HeroContent = ({ image, subtitle }: HeroContentProps) => {
  return(
    <div className={heroContentStyles()}>
      <h1 className={titleStyles()}>HidalVento</h1>
      <Subtitle {...subtitle} />
      <img src={image} alt="HidalVento" className={imageStyles()} />
    </div>
  );
};

import { tv } from 'tailwind-variants';
import { Subtitle, SubtitleProps } from '../atoms/Subtitle/Subtitle';


export interface HeroContentProps {
  subtitle: SubtitleProps;
  image?: string;
}

const heroContentStyles = tv({
  base: "relative flex flex-col items-center justify-center text-center p-6 h-[500px] w-full overflow-hidden"
});

const titleStyles = tv({
  base: "text-4xl font-bold text-white relative z-10"
});

const imageStyles = tv({
  base: "absolute inset-o w-full h-full object-cover"
});

const overlayStyles = tv({
  base: "absolute inset-0 bg-black/50"
});

export const HeroContent = ({ image, subtitle }: HeroContentProps) => {
  return (
    <div className={heroContentStyles()}>
      {image && <img src={image} alt="HidalVento" className={imageStyles()} />}
      <div className={overlayStyles()} />
      <h1 className={titleStyles()}>HidalVento</h1>
      <Subtitle {...subtitle} />
    </div>
  );
};

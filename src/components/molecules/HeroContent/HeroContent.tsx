import { Subtitle, SubtitleProps } from '../../atoms/Subtitle/Subtitle';
import { heroContentStyles, imageStyles, overlayStyles, titleStyles } from './heroContentStyles';

export interface HeroContentProps {
  subtitle: SubtitleProps;
  image?: string;
}

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

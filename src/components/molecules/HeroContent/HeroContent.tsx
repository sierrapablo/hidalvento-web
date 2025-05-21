import { Subtitle, SubtitleProps } from '../../atoms/Subtitle/Subtitle';
import { heroContentStyles, imageStyles, overlayStyles, titleStyles } from './heroContentStyles';
import mainLogo from '../../../assets/images/logo_white.png';

export interface HeroContentProps {
  subtitle: SubtitleProps;
  image?: string;
}

export const HeroContent = ({ image, subtitle }: HeroContentProps) => {
  return (
    <div className={heroContentStyles()}>
      {image && <img src={image} alt="HidalVento" className={imageStyles()} />}
      <div className={overlayStyles()} />
      <img src={mainLogo} className={titleStyles()} />
      <Subtitle {...subtitle} />
    </div>
  );
};

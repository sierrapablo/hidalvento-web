import { HeroContent, HeroContentProps } from '../../molecules/HeroContent/HeroContent';
import { heroSectionStyles } from './heroSectionStyles';

export const HeroSection = ({ subtitle, image }: HeroContentProps) => {
  return (
    <section className={heroSectionStyles()}>
      <HeroContent subtitle={subtitle} image={image} />
    </section>
  );
};

import { tv } from 'tailwind-variants';
import { HeroContent, HeroContentProps } from '../molecules/HeroContent';


const heroSectionStyles = tv({
  base: "bg-gray-100"
});

export const HeroSection = ({ subtitle, image }: HeroContentProps) => {
  return (
    <section className={heroSectionStyles()}>
      <HeroContent subtitle={subtitle} image={image} />
      </section>
  );
};

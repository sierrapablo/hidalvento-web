import { tv } from 'tailwind-variants';

export interface SubtitleProps {
  text: string;
  variant?: "primary" | "secondary";
};

const subtitleStyles = tv({
  base: "text-lg relative z-10",
  variants: {
    variant: {
      primary: "text-blue-500 font-semibold",
      secondary: "text-white italic"
    }
  }
});

export const Subtitle = ({ text, variant = "primary" }: SubtitleProps) => {
  return (
    <p className={subtitleStyles({ variant })}>{text}</p>
  );
};

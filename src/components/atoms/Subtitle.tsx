import { tv } from 'tailwind-variants';

interface SubtitleProps {
  text: string;
  variant?: "primary" | "secondary";
};

const subtitleStyles = tv({
  base: "text-lg",
  variants: {
    variant: {
      primary: "text-blue-500 font-semibold",
      secondary: "text-gray-500 italic"
    }
  }
});

export const Subtitle = ({ text, variant = "primary" }: SubtitleProps) => {
  return (
    <p className={subtitleStyles({ variant })}>{text}</p>
  );
};

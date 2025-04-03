import { subtitleStyles } from './subtitleStyles';

export interface SubtitleProps {
  text: string;
  variant?: "primary" | "secondary";
};

export const Subtitle = ({ text, variant = "primary" }: SubtitleProps) => {
  return (
    <p className={subtitleStyles({ variant })}>{text}</p>
  );
};

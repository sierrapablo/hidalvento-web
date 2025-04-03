import { tv } from 'tailwind-variants';

export const subtitleStyles = tv({
  base: "text-lg relative z-10",
  variants: {
    variant: {
      primary: "text-blue-500 font-semibold",
      secondary: "text-white italic"
    }
  }
});

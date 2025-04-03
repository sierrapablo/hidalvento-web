import { tv } from 'tailwind-variants';

export const imageGridStyles = tv({
  base: "grid grid-cols-3 gap-1 px-4 py-10"
});

export const imageContainerStyles = tv({
  base: "relative w-full h-48 lg:h-96 overflow-hidden rounded-sm shadow-md cursor-pointer transition-transform duration-300 hover:scale-105"
});

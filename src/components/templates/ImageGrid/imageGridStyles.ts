import { tv } from 'tailwind-variants';

export const imageGridStyles = tv({
  base: "grid grid-cols-3 px-4 py-10"
});

export const imageContainerStyles = tv({
  base: "relative w-full h-48 lg:h-96 overflow-hidden rounded-sm cursor-pointer transition-ease-in-out duration-500 border-2 border-white hover:border-hv-blue"
});

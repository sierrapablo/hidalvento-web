import { tv } from 'tailwind-variants';

export const heroContentStyles = tv({
  base: "relative flex flex-col items-center justify-center text-center p-6 h-[500px] w-full overflow-hidden"
});

export const titleStyles = tv({
  base: "text-4xl font-bold text-white relative z-10"
});

export const imageStyles = tv({
  base: "absolute inset-o w-full h-full object-cover"
});

export const overlayStyles = tv({
  base: "absolute inset-0 bg-black/50"
});

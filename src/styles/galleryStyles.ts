import { tv } from 'tailwind-variants';

export const focusedImgContainer = tv({
  base: "fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4 cursor-zoom-out transition-opacity duration-700",
  variants: {
    fade: {
      in: "opacity-100",
      out: "opacity-0"
    }
  },
  defaultVariants: {
    fade: "in"
  }
});

export const focusedImgStyles = tv({
  base: "max-h-[90vh] max-w-full rounded-sm object-contain cursor-auto"
});

export const viewButtonStyles = tv({
  base: "absolute top-4 right-4 text-white hover:text-gray-300 focus:outline-none"
});

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

export const focusedImgContent = tv({
  base: "relative flex items-center"
});

export const focusedImgStyles = tv({
  base: "max-h-[90vh] max-w-full rounded-sm object-contain cursor-auto"
});

export const viewButtonStyles = tv({
  base: "absolute text-white hover:text-hv-blue focus:outline-none ease-in-out transition duration-500",
  variants: {
    type: {
      close: "top-4 right-4",
      left: "left-0 top-1/2 -translate-y-1/2 hover:bg-black/50 px-2 h-full",
      right: "right-0 top-1/2 -translate-y-1/2 hover:bg-black/50 px-2 h-full"
    }
  },
  defaultVariants: {
    type: "close"
  }
});

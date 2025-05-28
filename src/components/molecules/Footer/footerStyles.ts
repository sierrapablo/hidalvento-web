import { tv } from 'tailwind-variants';

export const footerStyles = tv({
  base: "bg-hv-blue lg:px-40 py-16 w-full"
});

export const footerContainerStyles = tv({
  base: "grid md:grid-cols-4 md:justify-items-center gap-4 mt-12"
});

export const columnContainerStyles = tv({
  base: "flex flex-col m-4"
});

export const iconStyles = tv({
  base: "lg:w-80 md:w-50 w-30"
});

export const labelStyles = tv({
  base: "text-sm text-gray-300 hover:text-white transition wrap"
});

export const titleStyles = tv({
  base: "font-bold text-white mb-2"
});

export const logoContainerStyles = tv({
  base: ""
});

export const socialsContainerStyles = tv({
  base: "flex md:space-x-4 md:mt-4"
});

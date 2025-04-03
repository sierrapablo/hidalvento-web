import { tv } from 'tailwind-variants';

export const navLinkStyles = tv({
  base: "mx-1 px-2 py-1 rounded-sm transition duration-500 ease-in-out",
  variants: {
    active: {
      true: "bg-blue-100 text-hv-blue font-semibold",
      false: "text-neutral-700 hover:bg-hv-light-blue hover:text-hv-blue"
    }
  }
});

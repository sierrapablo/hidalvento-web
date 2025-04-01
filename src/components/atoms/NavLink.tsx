import { Link, useLocation } from 'react-router-dom';
import { tv } from 'tailwind-variants';

interface NavLinkProps {
  to: string;
  label: string;
}

const navlink = tv({
  base: "mx-1 px-2 py-1 rounded-sm transition duration-500 ease-in-out",
  variants: {
    active: {
      true: "bg-blue-100 text-hv-blue font-semibold",
      false: "text-neutral-700 hover:bg-hv-light-blue hover:text-hv-blue"
    }
  }
});

export const NavLink: React.FC<NavLinkProps> = ({ to, label }) => {
  const location = useLocation();
  const isActive = location.pathname === to;

  return (
    <Link to={to} className={navlink({ active: isActive })}>
      {label}
    </Link>
  );
};

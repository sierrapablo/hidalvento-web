import { Link, useLocation } from 'react-router-dom';
import { navLinkStyles } from './navLinkStyles';

interface NavLinkProps {
  to: string;
  label: string;
}

export const NavLink: React.FC<NavLinkProps> = ({ to, label }) => {
  const location = useLocation();
  const isActive = location.pathname === to;

  return (
    <Link to={to} className={navLinkStyles({ active: isActive })}>
      {label}
    </Link>
  );
};

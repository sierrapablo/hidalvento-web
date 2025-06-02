import { Link, useLocation } from 'react-router-dom';
import { ReactNode } from 'react';
import { navLinkStyles } from './navLinkStyles';

interface NavLinkProps {
  to: string;
  label?: string;
  children?: ReactNode;
}

export const NavLink: React.FC<NavLinkProps> = ({ to, label, children }) => {
  const location = useLocation();
  const isActive = location.pathname === to;

  const className = children ?  navLinkStyles({ active: isActive }) : navLinkStyles({ active: isActive });

  return (
    <Link to={to} className={className}>
      {children ?? label}
    </Link>
  );
};

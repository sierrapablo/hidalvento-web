import { Link } from 'react-router-dom';

interface NavLinkProps {
  to: string;
  label: string;
  className?: string;
}

export const NavLink: React.FC<NavLinkProps> = ({ to, label, className = "mx-5" }) => {
  return (
    <Link to={to} className={className}>
      {label}
    </Link>
  );
};

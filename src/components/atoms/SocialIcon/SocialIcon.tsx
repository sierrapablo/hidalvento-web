import { socialIconStyles } from './socialIconStyles';

interface SocialIconProps {
  Icon: React.ElementType;
  href: string;
}

export const SocialIcon: React.FC<SocialIconProps> = ({ Icon, href }) => {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={socialIconStyles()}>
      <Icon>{Icon}</Icon>
    </a>
  );
};

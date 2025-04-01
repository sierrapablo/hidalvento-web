import { tv } from "tailwind-variants";

interface SocialIconProps {
  Icon: React.ElementType;
  href: string;
}

const socialicon = tv({
  base: "text-gray-300 hover:text-white transition"
});

export const SocialIcon: React.FC<SocialIconProps> = ({ Icon, href }) => {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={socialicon()}>
      <Icon>{Icon}</Icon>
    </a>
  );
};

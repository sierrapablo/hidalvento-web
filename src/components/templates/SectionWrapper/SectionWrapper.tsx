interface SectionWrapperProps {
  children: React.ReactNode;
  index: number;
}

export const SectionWrapper = ({ children, index }: SectionWrapperProps) => {
  return (
    <div
      className={`h-dvh sticky top-[56px] z-[${index}]`}
    >
      {children}
    </div>
  );
};

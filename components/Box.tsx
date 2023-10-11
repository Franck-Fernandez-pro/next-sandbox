import { twMerge } from 'tailwind-merge';

const Box: React.FC<{
  children: React.ReactNode;
  className?: string;
}> = ({ children, className }) => (
  <div className={twMerge(`h-fit w-full rounded-lg bg-neutral-900`, className)}>
    {children}
  </div>
);

export default Box;

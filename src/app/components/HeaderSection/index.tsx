import clsx from 'clsx';
import Link from 'next/link';

export const HeaderSection = ({
  className,
  title,
  hasUnderline = true,
  link,
  children,
}: {
  className?: string;
  hasUnderline?: boolean;
  title: string;
  link: string;
  children?: React.ReactNode;
}) => {
  return (
    <div className={clsx('section-header', className, !hasUnderline && '!border-none')}>
      <Link href={link} className="section-heading uppercase">
        {title}
      </Link>

      {children}
    </div>
  );
};

import React from 'react';
import Link from 'next/link';

const LinkBtn = (props: { children: React.ReactNode; href: string; variant?: 'default' | 'yellow' | 'pink' }) => {
  const { children, href, variant = 'default' } = props;

  const baseStyles = 'px-6  sm:px-12 2xl:px-16 py-3 sm:py-4 text-xl md:text-2xl  font-bold  hover:animate-shake duration-300 shadow-custom';
  const variantStyles = {
    default: 'bg-ownPurple-400 hover:bg-ownPurple-600 text-fontLight',
    yellow: 'bg-ownYellow-400 hover:bg-ownYellow-600 text-fontDark',
    pink: 'bg-ownPink-400 hover:bg-ownPink-600 text-fontDark',
  };

  const combinedStyles = `${baseStyles} ${variantStyles[variant]}`;

  return (
    <Link href={href} className={combinedStyles}>
      {children}
    </Link>
  );
};

export default LinkBtn;
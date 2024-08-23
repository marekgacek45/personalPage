import React from 'react';
import Link from 'next/link';

const LinkBtn = (props: { children: React.ReactNode; href: string; variant?: 'default' | 'secondary' | 'third' }) => {
  const { children, href, variant = 'default' } = props;

  const baseStyles = 'px-12 2xl:px-16 py-4 text-lg xs:text-xl md:text-2xl font-action font-bold hover:animate-shake duration-300 shadow-custom';
  const variantStyles = {
    default: 'bg-ownPurple-400 hover:bg-ownPurple-600 text-fontLight',
    secondary: 'bg-ownYellow-400 hover:bg-ownYellow-600',
    third: 'bg-ownTurquise-400 hover:bg-ownTurquise-600',
  };

  const combinedStyles = `${baseStyles} ${variantStyles[variant]}`;

  return (
    <Link href={href} className={combinedStyles}>
      {children}
    </Link>
  );
};

export default LinkBtn;
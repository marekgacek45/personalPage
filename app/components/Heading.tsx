import React from 'react';

interface HeadingProps {
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  className?: string;
  children: React.ReactNode;
}

const Heading = ({ level = 2, children, className }: HeadingProps) => {
  const Tag = `h${level}` as keyof JSX.IntrinsicElements;

  return (
    <Tag className={`text-4xl sm:text-6xl uppercase font-heading ${className}`}>
      {children}
    </Tag>
  );
}

export default Heading;

import React from 'react';

type TextProps = {
  children: React.ReactNode;
  className?: string;
};

export const SiteTitle = ({ children, className = '' }: TextProps) => (
  <h1 className={`text-2xl font-bold text-gray-800 ${className}`}>
    {children}
  </h1>
);



import React from 'react';

/**
 * Basic, themeable Button component.
 * Props:
 * - variant: 'solid' | 'outline' | 'ghost'
 * - size: 'sm' | 'md' | 'lg'
 */
export default function Button({ children, variant = 'solid', size = 'md', ...rest }) {
  const base = 'inline-flex items-center justify-center rounded-md font-medium transition';
  const sizes = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg'
  };
  const variants = {
    solid: 'bg-sky-600 text-white hover:bg-sky-700',
    outline: 'border border-sky-600 text-sky-600 hover:bg-sky-50',
    ghost: 'bg-transparent text-sky-600 hover:bg-sky-50'
  };
  return (
    <button className={[base, sizes[size], variants[variant]].join(' ')} {...rest}>
      {children}
    </button>
  );
}

import React from 'react';

export default function Card({ children, className='' }) {
  return (
    <div className={['rounded-2xl p-4 shadow-sm bg-white', className].join(' ')}>
      {children}
    </div>
  );
}
